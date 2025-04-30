"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { Point, CurveData } from "@/components/skill-growth-chart"

// 默认数据
const defaultCurveData: CurveData = {
  curve1: [
    { id: "c1-1", x: 1, y: 10 },
    { id: "c1-2", x: 2, y: 8 },
    { id: "c1-3", x: 3, y: 12 },
    { id: "c1-4", x: 4, y: 6 },
    { id: "c1-5", x: 5, y: 5 },
  ],
  curve2: [
    { id: "c2-1", x: 1, y: 15 },
    { id: "c2-2", x: 2, y: 12 },
    { id: "c2-3", x: 3, y: 15 },
    { id: "c2-4", x: 4, y: 10 },
    { id: "c2-5", x: 5, y: 8 },
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