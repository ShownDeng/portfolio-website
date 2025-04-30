"use client"

import { notFound } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Trash2, ArrowLeft } from "lucide-react"
import { useCurveData } from "@/lib/curve-data-context"
import Link from "next/link"
import { ScrollArea } from "@/components/ui/scroll-area"

// 数据输入表格组件
interface DataInputTableProps {
  points: any[]
  onChange: (points: any[]) => void
  onAddPoint: () => void
}

function DataInputTable({ points, onChange, onAddPoint }: DataInputTableProps) {
  const handlePointChange = (id: string, field: "x" | "y", value: string) => {
    const numValue = Number.parseFloat(value)
    if (isNaN(numValue)) return

    // 如果修改的是序号(x)，需要确保序号不重复
    if (field === "x") {
      // 检查是否有重复的序号
      const isDuplicate = points.some(point => point.id !== id && point.x === numValue)
      if (isDuplicate) {
        alert("序号不能重复，请输入其他值")
        return
      }
    }

    const newPoints = points.map((point) => {
      if (point.id === id) {
        return { ...point, [field]: numValue }
      }
      return point
    })

    // 按序号排序，确保曲线图正确显示
    const sortedPoints = [...newPoints].sort((a, b) => a.x - b.x)
    onChange(sortedPoints)
  }

  const handleDeletePoint = (id: string) => {
    const newPoints = points.filter((point) => point.id !== id)
    onChange(newPoints)
  }

  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">序号</TableHead>
            <TableHead className="w-[100px]">花费时间 (小时)</TableHead>
            <TableHead className="w-[80px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {points.map((point) => (
            <TableRow key={point.id}>
              <TableCell className="w-[100px]">
                <Input
                  type="number"
                  value={point.x}
                  onChange={(e) => handlePointChange(point.id, "x", e.target.value)}
                  className="w-full"
                  title="请输入不重复的序号值"
                  min="0"
                  step="1"
                />
              </TableCell>
              <TableCell className="w-[100px]">
                <Input
                  type="number"
                  value={point.y}
                  onChange={(e) => handlePointChange(point.id, "y", e.target.value)}
                  className="w-full"
                  min="0"
                  step="0.1"
                />
              </TableCell>
              <TableCell className="w-[80px]">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDeletePoint(point.id)}
                  disabled={points.length <= 1}
                  title="删除数据点"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="space-y-2">
        <Button onClick={onAddPoint} className="w-full">
          添加数据点
        </Button>
        <p className="text-xs text-gray-400 text-center">提示：序号值可以自由修改，但不能重复。添加新数据点后，可以修改其序号位置。</p>
      </div>
    </div>
  )
}

export function CurveEditClient({ params }: { params: { type: string } }) {
  const { type } = params
  const { data, updateCurve1, updateCurve2, addPointToCurve1, addPointToCurve2 } = useCurveData()

  // 确定当前编辑的是哪条曲线
  if (type !== "curve1" && type !== "curve2") {
    return notFound()
  }

  const isCurve1 = type === "curve1"
  const curveData = isCurve1 ? data.curve1 : data.curve2
  const updateCurve = isCurve1 ? updateCurve1 : updateCurve2
  const addPoint = isCurve1 ? addPointToCurve1 : addPointToCurve2
  const curveTitle = isCurve1 ? "个人花费时间" : "正常花费时间"
  const curveColor = isCurve1 ? "orange" : "blue"

  return (
    <div className="container mx-auto py-8 max-w-4xl">
      <div className="mb-6">
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-gray-100 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          返回曲线图
        </Link>
      </div>

      <Card className={`bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-${curveColor}-500/10 relative h-[80vh]`}>
        <CardHeader>
          <CardTitle className="text-xl font-mono text-gray-100">{curveTitle}数据</CardTitle>
          <CardDescription className="text-gray-400">编辑{curveTitle}数据点</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[calc(80vh-8rem)]">
          <DataInputTable
            points={curveData}
            onChange={updateCurve}
            onAddPoint={addPoint}
          />
         </ScrollArea>
        </CardContent>
      </Card>
    </div>
  )
}