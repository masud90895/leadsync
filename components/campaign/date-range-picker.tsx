import { Calendar } from "lucide-react"

export function DateRangePicker() {
  return (
    <div className="flex items-center gap-2 text-sm">
      <span>Start Date - End Date</span>
      <button className="flex items-center gap-2 px-3 py-1 border rounded-md text-sm bg-white hover:bg-gray-50 h-8">
        <Calendar className="h-4 w-4" />
        Select Range
      </button>
    </div>
  )
}

