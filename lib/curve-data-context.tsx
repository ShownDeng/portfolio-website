"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { Point, CurveData } from "@/components/skill-growth-chart"

// 默认数据
const defaultCurveData: CurveData = {
  curve1: [
      { "id": "c2-1", "x": 1, "y": 33 },
      { "id": "c2-2", "x": 2, "y": 60 },
      { "id": "c2-3", "x": 3, "y": 60 },
      { "id": "c2-4", "x": 4, "y": 79 },
      { "id": "c2-5", "x": 5, "y": 120 },
      { "id": "c2-6", "x": 6, "y": 59 },
      { "id": "c2-7", "x": 7, "y": 50 },
      { "id": "c2-8", "x": 8, "y": 50 },
      { "id": "c2-9", "x": 9, "y": 60 },
      { "id": "c2-10", "x": 10, "y": 59 },
      { "id": "c2-11", "x": 11, "y": 50 },
      { "id": "c2-12", "x": 12, "y": 80 },
      { "id": "c2-13", "x": 13, "y": 65 },
      { "id": "c2-14", "x": 14, "y": 53 },
      { "id": "c2-15", "x": 15, "y": 50 },
      { "id": "c2-16", "x": 16, "y": 60 },
      { "id": "c2-17", "x": 17, "y": 60 },
      { "id": "c2-18", "x": 18, "y": 65 },
      { "id": "c2-19", "x": 19, "y": 18 },
      { "id": "c2-20", "x": 20, "y": 30 },
      { "id": "c2-21", "x": 21, "y": 67 },
      { "id": "c2-22", "x": 22, "y": 80 },
      { "id": "c2-23", "x": 23, "y": 50 },
      { "id": "c2-24", "x": 24, "y": 100 },
      { "id": "c2-25", "x": 25, "y": 70 },
      { "id": "c2-26", "x": 26, "y": 80 },
      { "id": "c2-27", "x": 27, "y": 77 },
      { "id": "c2-28", "x": 28, "y": 102 },
      { "id": "c2-29", "x": 29, "y": 80 },
      { "id": "c2-30", "x": 30, "y": 47 },
      { "id": "c2-31", "x": 31, "y": 67 },
      { "id": "c2-32", "x": 32, "y": 73 },
      { "id": "c2-33", "x": 33, "y": 60 },
      { "id": "c2-34", "x": 34, "y": 30 },
      {"id":"c2-35","x":35,"y":46},
      {"id":"c2-36","x":36,"y":73},
      {"id":"c2-37","x":37,"y":63},
      {"id":"c2-38","x":38,"y":67},
      {"id":"c2-39","x":39,"y":53},
      {"id":"c2-40","x":40,"y":55},
      {"id":"c2-41","x":41,"y":47},
      {"id":"c2-42","x":42,"y":50},
      {"id":"c2-43","x":43,"y":14},
      {"id":"c2-44","x":44,"y":30},
      {"id":"c2-45","x":45,"y":70},
      {"id":"c2-46","x":46,"y":53},
      {"id":"c2-47","x":47,"y":50},
      {"id":"c2-48","x":48,"y":50},
      {"id":"c2-49","x":49,"y":13},
      {"id":"c2-50","x":50,"y":43},
      {"id":"c2-51","x":51,"y":24},
      {"id":"c2-52","x":52,"y":70},
      {"id":"c2-53","x":53,"y":70},
      {"id":"c2-54","x":54,"y":27},
      {"id":"c2-55","x":55,"y":45},
      {"id":"c2-56","x":56,"y":40},
      {"id":"c2-57","x":57,"y":16},
      {"id":"c2-58","x":58,"y":50},
      {"id":"c2-59","x":59,"y":18},
      {"id":"c2-60","x":60,"y":52},
      {"id":"c2-61","x":61,"y":61},
      {"id":"c2-62","x":62,"y":77},
      {"id":"c2-63","x":63,"y":40},
      {"id":"c2-64","x":64,"y":32},
      {"id":"c2-65","x":65,"y":41},
      {"id":"c2-66","x":66,"y":32},
      {"id":"c2-67","x":67,"y":12},
      {"id":"c2-68","x":68,"y":12},
      {"id":"c2-69","x":69,"y":100},
      {"id":"c2-70","x":70,"y":118},
      {"id":"c2-71","x":71,"y":85},
      {"id":"c2-72","x":72,"y":87},
      {"id":"c2-73","x":73,"y":109},
      {"id":"c2-74","x":74,"y":15},
      {"id":"c2-75","x":75,"y":31},
      {"id":"c2-76","x":76,"y":12},
      {"id":"c2-77","x":77,"y":30},
      {"id":"c2-78","x":78,"y":41},
      {"id":"c2-79","x":79,"y":50},
      {"id":"c2-80","x":80,"y":38},
      {"id":"c2-81","x":81,"y":36},
  ],
  curve2: [
      { "id": "c2-1", "x": 1, "y": 80 },
      { "id": "c2-2", "x": 2, "y": 80 },
      { "id": "c2-3", "x": 3, "y": 80 },
      { "id": "c2-4", "x": 4, "y": 80 },
      { "id": "c2-5", "x": 5, "y": 80 },
      { "id": "c2-6", "x": 6, "y": 80 },
      { "id": "c2-7", "x": 7, "y": 80 },
      { "id": "c2-8", "x": 8, "y": 80 },
      { "id": "c2-9", "x": 9, "y": 80 },
      { "id": "c2-10", "x": 10, "y": 80 },
      { "id": "c2-11", "x": 11, "y": 80 },
      { "id": "c2-12", "x": 12, "y": 80 },
      { "id": "c2-13", "x": 13, "y": 80 },
      { "id": "c2-14", "x": 14, "y": 80 },
      { "id": "c2-15", "x": 15, "y": 80 },
      { "id": "c2-16", "x": 16, "y": 80 },
      { "id": "c2-17", "x": 17, "y": 80 },
      { "id": "c2-18", "x": 18, "y": 80 },
      { "id": "c2-19", "x": 19, "y": 40 },
      { "id": "c2-20", "x": 20, "y": 80 },
      { "id": "c2-21", "x": 21, "y": 80 },
      { "id": "c2-22", "x": 22, "y": 80 },
      { "id": "c2-23", "x": 23, "y": 80 },
      { "id": "c2-24", "x": 24, "y": 120 },
      { "id": "c2-25", "x": 25, "y": 80 },
      { "id": "c2-26", "x": 26, "y": 80 },
      { "id": "c2-27", "x": 27, "y": 80 },
      { "id": "c2-28", "x": 28, "y": 80 },
      { "id": "c2-29", "x": 29, "y": 80 },
      { "id": "c2-30", "x": 30, "y": 80 },
      { "id": "c2-31", "x": 31, "y": 80 },
      { "id": "c2-32", "x": 32, "y": 80 },
      { "id": "c2-33", "x": 33, "y": 80 },
      { "id": "c2-34", "x": 34, "y": 80 },
      { "id": "c2-35", "x": 35, "y": 80 },
      { "id": "c2-36", "x": 36, "y": 80 },
      { "id": "c2-37", "x": 37, "y": 80 },
      { "id": "c2-38", "x": 38, "y": 80 },
      { "id": "c2-39", "x": 39, "y": 80 },
      { "id": "c2-40", "x": 40, "y": 80 },
      { "id": "c2-41", "x": 41, "y": 80 },
      { "id": "c2-42", "x": 42, "y": 80 },
      { "id": "c2-43", "x": 43, "y": 80 },
      { "id": "c2-44", "x": 44, "y": 40 },
      { "id": "c2-45", "x": 45, "y": 80 },
      { "id": "c2-46", "x": 46, "y": 65 },
      { "id": "c2-47", "x": 47, "y": 80 },
      { "id": "c2-48", "x": 48, "y": 80 },
      { "id": "c2-49", "x": 49, "y": 80 },
      { "id": "c2-50", "x": 50, "y": 80 },
      { "id": "c2-51", "x": 51, "y": 80 },
      { "id": "c2-52", "x": 52, "y": 80 },
      { "id": "c2-53", "x": 53, "y": 80 },
      { "id": "c2-54", "x": 54, "y": 80 },
      { "id": "c2-55", "x": 55, "y": 80 },
      { "id": "c2-56", "x": 56, "y": 80 },
      { "id": "c2-57", "x": 57, "y": 80 },
      { "id": "c2-58", "x": 58, "y": 80 },
      { "id": "c2-59", "x": 59, "y": 80 },
      { "id": "c2-60", "x": 60, "y": 80 },
      { "id": "c2-61", "x": 61, "y": 80 },
      { "id": "c2-62", "x": 62, "y": 80 },
      { "id": "c2-63", "x": 63, "y": 80 },
      { "id": "c2-64", "x": 64, "y": 80 },
      { "id": "c2-65", "x": 65, "y": 80 },
      { "id": "c2-66", "x": 66, "y": 80 },
      { "id": "c2-67", "x": 67, "y": 80 },
      { "id": "c2-68", "x": 68, "y": 80 },
      { "id": "c2-69", "x": 69, "y": 80 },
      { "id": "c2-70", "x": 70, "y": 160 },
      { "id": "c2-71", "x": 71, "y": 160 },
      { "id": "c2-72", "x": 72, "y": 240 },
      { "id": "c2-73", "x": 73, "y": 160 },
      { "id": "c2-74", "x": 74, "y": 80 },
      { "id": "c2-75", "x": 75, "y": 80 },
      { "id": "c2-76", "x": 76, "y": 80 },
      { "id": "c2-77", "x": 77, "y": 80 },
      { "id": "c2-78", "x": 78, "y": 80 },
      { "id": "c2-79", "x": 79, "y": 80 },
      { "id": "c2-80", "x": 80, "y": 80 },
      { "id": "c2-81", "x": 81, "y": 80 },
  ],
}

type CurveDataContextType = {
  data: CurveData
  updateCurve1: (points: Point[]) => void
  updateCurve2: (points: Point[]) => void
  addPointToCurve1: () => void
  addPointToCurve2: () => void
}

const CurveDataContext = createContext<CurveDataContextType | undefined>(undefined)

export function CurveDataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<CurveData>(defaultCurveData)

  useEffect(() => {
    const savedData = localStorage.getItem('curveData')
    if (savedData) {
      setData(JSON.parse(savedData))
    }
  }, [])

  const updateCurve1 = (points: Point[]) => {
    setData((prev) => {
      // 确保点按序号排序
      const sortedPoints = [...points].sort((a, b) => a.x - b.x)
      const newData = { ...prev, curve1: sortedPoints }
      localStorage.setItem('curveData', JSON.stringify(newData))
      return newData
    })
  }

  const updateCurve2 = (points: Point[]) => {
    setData((prev) => {
      // 确保点按序号排序
      const sortedPoints = [...points].sort((a, b) => a.x - b.x)
      const newData = { ...prev, curve2: sortedPoints }
      localStorage.setItem('curveData', JSON.stringify(newData))
      return newData
    })
  }

  const addPointToCurve1 = () => {
    const newId = `c1-${Date.now()}`
    // 找到当前最大的序号值，新点的序号为最大值+1
    const maxX = data.curve1.length > 0 ? Math.max(...data.curve1.map(point => point.x)) + 1 : 1
    
    // 创建一个新的数据点，用户可以自由修改序号
    const newPoint = { id: newId, x: maxX, y: 0 }
    
    setData((prev) => {
      const newData = {
        ...prev,
        curve1: [...prev.curve1, newPoint],
      }
      localStorage.setItem('curveData', JSON.stringify(newData))
      return newData
    })
  }

  const addPointToCurve2 = () => {
    const newId = `c2-${Date.now()}`
    // 找到当前最大的序号值，新点的序号为最大值+1
    const maxX = data.curve2.length > 0 ? Math.max(...data.curve2.map(point => point.x)) + 1 : 1
    
    // 创建一个新的数据点，用户可以自由修改序号
    const newPoint = { id: newId, x: maxX, y: 0 }
    
    setData((prev) => {
      const newData = {
        ...prev,
        curve2: [...prev.curve2, newPoint],
      }
      localStorage.setItem('curveData', JSON.stringify(newData))
      return newData
    })
  }

  return (
    <CurveDataContext.Provider
      value={{
        data,
        updateCurve1,
        updateCurve2,
        addPointToCurve1,
        addPointToCurve2,
      }}
    >
      {children}
    </CurveDataContext.Provider>
  )
}

export function useCurveData() {
  const context = useContext(CurveDataContext)
  if (context === undefined) {
    throw new Error("useCurveData must be used within a CurveDataProvider")
  }
  return context
}