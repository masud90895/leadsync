import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { ReactNode } from "react"

interface StatisticsCardProps {
  title: string
  description?: string
  icon?: ReactNode
  children: ReactNode
}

export function StatisticsCard({ title, description, icon, children }: StatisticsCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">
          <div className="flex items-center gap-2">
            {title}
            {icon}
          </div>
        </CardTitle>
      </CardHeader>
      {description && <p className="px-6 text-sm text-gray-500">{description}</p>}
      <CardContent>{children}</CardContent>
    </Card>
  )
}

