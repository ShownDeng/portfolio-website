"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader } from "@/components/ui/loader"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { FadeIn } from "@/components/ui/motion"
import { useCurveData } from "@/lib/curve-data-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { useState } from "react"; // Import useRouter
import { ScrollArea } from "@/components/ui/scroll-area" // 导入 ScrollArea

// 定义数据点类型
export type Point = {
  id: string
  x: number // 序号
  y: number // 时间（小时）
}

// 定义曲线数据类型
export type CurveData = {
  curve1: Point[] // 个人花费时间
  curve2: Point[] // 正常花费时间
}

// 曲线图组件
interface CurveChartProps {
  data: CurveData
}

function CurveChart({ data }: CurveChartProps) {
  const { updateCurve1, updateCurve2, addPointToCurve1, addPointToCurve2 } = useCurveData()
  const [selectedCurve, setSelectedCurve] = useState<"curve1" | "curve2" | null>(null)
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  // 合并两条曲线的数据，以便在同一个图表上显示
  const combinedData = Array.from(new Set([...data.curve1.map((p) => p.x), ...data.curve2.map((p) => p.x)]))
    .sort((a, b) => a - b)
    .map((x) => {
      const point1 = data.curve1.find((p) => p.x === x)
      const point2 = data.curve2.find((p) => p.x === x)
      return {
        x,
        curve1: point1 ? point1.y : null,
        curve2: point2 ? point2.y : null,
      }
    })

  return (
    <div className="flex justify-center w-full">
      <ChartContainer
        config={{
          curve1: {
            label: "Personal Time Spent",
            color: "#f5a623", // 琥珀色/橙色
          },
          curve2: {
            label: "Normal Time Spent",
            color: "#3498db", // 蓝色，用于区分
          },
        }}
        className="h-[400px] w-full max-w-3xl"
      >
        <LineChart
          data={combinedData}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          style={{ background: "#121212" }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis
            dataKey="x"
            label={{ value: "Number", position: "insideBottomRight", offset: -10, fill: "#fff" }}
            stroke="#666"
            tick={{ fill: "#fff" }}
          />
          <YAxis
            label={{ value: "Time(min)", angle: -90, position: "insideLeft", fill: "#fff" }}
            stroke="#666"
            tick={{ fill: "#fff" }}
            domain={[0, 'auto']}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line
            type="monotone"
            dataKey="curve1"
            stroke="#f5a623"
            strokeWidth={3}
            activeDot={{ r: 8, fill: "#f5a623", stroke: "#fff", strokeWidth: 2 }}
            connectNulls
            dot={{ stroke: "#f5a623", strokeWidth: 2, r: 4, fill: "#121212" }}
            style={{ cursor: "pointer" }}
            onDoubleClick={() => {
              setSelectedCurve("curve1")
              setIsSheetOpen(true)
            }}
          />
          <Line
            type="monotone"
            dataKey="curve2"
            stroke="#3498db"
            strokeWidth={3}
            activeDot={{ r: 8, fill: "#3498db", stroke: "#fff", strokeWidth: 2 }}
            connectNulls
            dot={{ stroke: "#3498db", strokeWidth: 2, r: 4, fill: "#121212" }}
            style={{ cursor: "pointer" }}
            onDoubleClick={() => {
              setSelectedCurve("curve2")
              setIsSheetOpen(true)
            }}
          />
        </LineChart>
      </ChartContainer>

      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent className="bg-black/90 border-l border-white/10 flex flex-col h-full">
          <SheetHeader className="space-y-2 pb-4 border-b border-white/10 flex-shrink-0">
            <SheetTitle className="text-xl font-mono text-gray-100">
              编辑{selectedCurve === "curve1" ? "个人" : "正常"}花费时间
            </SheetTitle>
            <SheetDescription className="text-gray-400">
              编辑数据点
            </SheetDescription>
          </SheetHeader>
          <div className="flex-grow overflow-hidden py-6 flex flex-col gap-6">
            <div className="flex justify-end space-x-2 flex-shrink-0">
              <Button
                onClick={() => {
                  if (selectedCurve === "curve1") {
                    addPointToCurve1();
                  } else if (selectedCurve === "curve2") {
                    addPointToCurve2();
                  }
                }}
                className="bg-purple-600/90 hover:bg-purple-700/90 transition-colors duration-200 rounded-full"
              >
                Add Point
              </Button>
            </div>
            <ScrollArea className="flex-grow h-0"> {/* 使用 ScrollArea 包裹列表并设置高度 */}
              <div className="space-y-4 pr-4"> {/* 添加内边距防止滚动条遮挡 */}
                {selectedCurve && data[selectedCurve].map((point, index) => (
                  <div key={point.id} className="grid grid-cols-3 items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200">
                    <div className="text-sm font-medium text-gray-300">序号 {point.x}</div>
                    <input
                      type="number"
                      value={point.y}
                      onChange={(e) => {
                        const newValue = parseFloat(e.target.value);
                        if (isNaN(newValue)) return; // 确保是数字
                        const newPoints = [...data[selectedCurve]];
                        newPoints[index] = { ...newPoints[index], y: newValue }; // 更新点
                        if (selectedCurve === "curve1") {
                          updateCurve1(newPoints);
                        } else if (selectedCurve === "curve2") {
                          updateCurve2(newPoints);
                        }
                      }}
                      className="bg-black/50 border border-white/10 rounded-md p-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200"
                    />
                    <Button
                      onClick={() => {
                        const newPoints = data[selectedCurve].filter((_, i) => i !== index);
                        if (selectedCurve === "curve1") {
                          updateCurve1(newPoints);
                        } else if (selectedCurve === "curve2") {
                          updateCurve2(newPoints);
                        }
                      }}
                      variant="destructive"
                      size="sm"
                      className="bg-red-600/90 hover:bg-red-700/90 transition-colors duration-200 rounded-full"
                    >
                      Delete
                    </Button>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

// 主交互式曲线图组件
export default function SkillGrowthChart() {
  const { data } = useCurveData()

  // 计算统计数据
  const personalTime = data.curve1.reduce((sum, point) => sum + point.y, 0)
  const normalTime = data.curve2.reduce((sum, point) => sum + point.y, 0)
  const efficiencyRate = normalTime > 0 
    ? ((normalTime - personalTime) / normalTime * 100).toFixed(1) 
    : "0"

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 rounded-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-xl font-mono text-gray-100">Learning efficiency Curve</CardTitle>
            <div className="hover:scale-x-105 transition-all duration-300 *:transition-all *:duration-300 flex justify-center text-2xl items-center gap-2 p-2 rounded-full">
              <button className="before:hidden hover:before:flex before:justify-center before:items-center before:h-6 before:text-sm before:px-2 before:content-['Think'] before:bg-black/80 before:backdrop-blur-sm before:text-white before:absolute before:-top-8 before:rounded-lg before:shadow-lg before:shadow-black/20 hover:-translate-y-5 cursor-pointer hover:scale-125 bg-black/20 dark:bg-[#191818] rounded-full p-2 px-3 transition-all duration-300">🧠</button>
              <button className="before:hidden hover:before:flex before:justify-center before:items-center before:h-6 before:text-sm before:px-2 before:content-['Confused'] before:bg-black/80 before:backdrop-blur-sm before:text-white before:absolute before:-top-8 before:rounded-lg before:shadow-lg before:shadow-black/20 hover:-translate-y-5 cursor-pointer hover:scale-125 bg-black/20 dark:bg-[#191818] rounded-full p-2 px-3 transition-all duration-300">🤯</button>
              <button className="before:hidden hover:before:flex before:justify-center before:items-center before:h-6 before:text-sm before:px-2 before:content-['Happy'] before:bg-black/80 before:backdrop-blur-sm before:text-white before:absolute before:-top-8 before:rounded-lg before:shadow-lg before:shadow-black/20 hover:-translate-y-5 cursor-pointer hover:scale-125 bg-black/20 dark:bg-[#191818] rounded-full p-2 px-3 transition-all duration-300">🥳</button>
              <button className="before:hidden hover:before:flex before:justify-center before:items-center before:h-6 before:text-sm before:px-2 before:content-['Crazy'] before:bg-black/80 before:backdrop-blur-sm before:text-white before:absolute before:-top-8 before:rounded-lg before:shadow-lg before:shadow-black/20 hover:-translate-y-5 cursor-pointer hover:scale-125 bg-black/20 dark:bg-[#191818] rounded-full p-2 px-3 transition-all duration-300">🤪</button>
              <button className="before:hidden hover:before:flex before:justify-center before:items-center before:h-6 before:text-sm before:px-2 before:content-['Think'] before:bg-black/80 before:backdrop-blur-sm before:text-white before:absolute before:-top-8 before:rounded-lg before:shadow-lg before:shadow-black/20 hover:-translate-y-5 cursor-pointer hover:scale-125 bg-black/20 dark:bg-[#191818] rounded-full p-2 px-3 transition-all duration-300">🤔</button>
              <button className="before:hidden hover:before:flex before:justify-center before:items-center before:h-6 before:text-sm before:px-2 before:content-['Brain'] before:bg-black/80 before:backdrop-blur-sm before:text-white before:absolute before:-top-8 before:rounded-lg before:shadow-lg before:shadow-black/20 hover:-translate-y-5 cursor-pointer hover:scale-125 bg-black/20 dark:bg-[#191818] rounded-full p-2 px-3 transition-all duration-300">🧠</button>
            </div>
            {/*<CardDescription className="text-2xl text-gray-400">🧠🤯🤯🥳🤪🤔🧠</CardDescription>*/}
          </CardHeader>
          <CardContent>
            <CurveChart data={data} />
            <div className="mt-4 text-center text-sm text-gray-400">
              {/* Removed the text about clicking the curve */}
              <div className="flex justify-center space-x-4 mt-2">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-orange-500 mr-2"></div>
                  <span className="text-xs">Personal Time Spending</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                  <span className="text-xs">Normal Time Spending</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-xl font-mono text-gray-100">Efficency analysis</CardTitle>
            <CardDescription className="text-gray-400">TIME Data analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/50 p-4 rounded-lg">
                  <p className="text-sm text-gray-400 whitespace-nowrap">Personal Time Spending</p>
                  <p className="text-2xl font-bold text-gray-100">{personalTime} mins</p>
                </div>
                <div className="bg-black/50 p-4 rounded-lg">
                  <p className="text-sm text-gray-400">Normal Time Spending</p>
                  <p className="text-2xl font-bold text-gray-100">{normalTime} mins</p>
                </div>
              </div>
              <div className="bg-black/50 p-4 rounded-lg">
                <p className="text-sm text-gray-400">Efficiency Improvement</p>
                <p className="text-2xl font-bold text-gray-100">{efficiencyRate}%</p>
              </div>
              <div className="bg-black/50 p-4 rounded-lg text-center">
                <div className="flex justify-center items-center">
                  <Loader className="scale-75" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}