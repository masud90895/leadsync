interface Metric {
  label: string
  value: number
  total: number
}

interface MetricsDisplayProps {
  metrics: Metric[]
}

export function MetricsDisplay({ metrics }: MetricsDisplayProps) {
  return (
    <div className="space-y-4">
      {metrics.map((metric, index) => (
        <div key={index} className="space-y-1">
          <div className="flex justify-between items-center">
            <span className="font-medium">{metric.label}</span>
            <span className="text-sm text-gray-500">
              {metric.value}/{metric.total}
            </span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-indigo-600 rounded-full"
              style={{ width: `${(metric.value / metric.total) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

