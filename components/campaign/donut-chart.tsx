"use client"

import { useEffect, useRef } from "react"

interface ChartData {
  name: string
  value: number
  color: string
}

interface DonutChartProps {
  data: ChartData[]
  centerText: string
  centerSubtext: string
}

export function DonutChart({ data, centerText, centerSubtext }: DonutChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Calculate total value
    const total = data.reduce((sum, item) => sum + item.value, 0)

    // Draw donut chart
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = Math.min(centerX, centerY) * 0.8
    const innerRadius = radius * 0.6

    let startAngle = -Math.PI / 2

    data.forEach((item) => {
      const sliceAngle = (item.value / total) * 2 * Math.PI

      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle)
      ctx.arc(centerX, centerY, innerRadius, startAngle + sliceAngle, startAngle, true)
      ctx.closePath()

      ctx.fillStyle = item.color
      ctx.fill()

      startAngle += sliceAngle
    })

    // Draw center text
    ctx.textAlign = "center"
    ctx.fillStyle = "#000"
    ctx.font = "bold 20px Arial"
    ctx.fillText(centerText, centerX, centerY)

    ctx.font = "12px Arial"
    ctx.fillStyle = "#666"
    ctx.fillText(centerSubtext, centerX, centerY + 20)
  }, [data, centerText, centerSubtext])

  return (
    <div className="relative">
      <canvas ref={canvasRef} width={200} height={200} className="mx-auto" />
      <div className="mt-4 flex justify-center gap-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
            <span className="text-xs">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

