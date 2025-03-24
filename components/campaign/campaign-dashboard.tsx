import { DateRangePicker } from "@/components/date-range-picker"
import { CampaignSelector } from "@/components/campaign-selector"
import { DonutChart } from "@/components/donut-chart"
import { MetricsDisplay } from "@/components/metrics-display"
import { CampaignTable } from "@/components/campaign-table"
import { MoreHorizontal, Play } from "lucide-react"

export function CampaignDashboard() {
  const inviteData = [
    { name: "Invited", value: 40, color: "#6366F1" },
    { name: "Accepted", value: 25, color: "#4F46E5" },
    { name: "Replied", value: 20, color: "#4338CA" },
    { name: "Messaged", value: 15, color: "#3730A3" },
  ]

  const leadData = [
    { name: "Invited", value: 45, color: "#6366F1" },
    { name: "Accepted", value: 30, color: "#4F46E5" },
    { name: "Replied", value: 25, color: "#4338CA" },
  ]

  const metrics = [
    { label: "Total Lead", value: 0, total: 5 },
    { label: "Invited", value: 0, total: 5 },
    { label: "Accepted", value: 0, total: 5 },
    { label: "Replied", value: 0, total: 5 },
  ]

  const tableData = [
    {
      name: "Payment from Bonnie Green",
      designation: "Dry Stocker",
      company: "Louis Vuitton",
      email: "example@leadsyno.co",
      location: "Kent, Utah",
      lastAction: "Connection request",
    },
    {
      name: "Payment refund to #00910",
      designation: "Cashier",
      company: "MasterCard",
      email: "example@leadsyno.co",
      location: "Landing, Illinois",
      lastAction: "Connection request",
    },
    {
      name: "Payment failed from #087651",
      designation: "Dry Stocker",
      company: "Starbucks",
      email: "example@leadsyno.co",
      location: "Coppell, Virginia",
      lastAction: "Connection request",
    },
    {
      name: "Payment from Lana Byrd",
      designation: "Cashier",
      company: "eBay",
      email: "example@leadsyno.co",
      location: "Portland, Illinois",
      lastAction: "Connection request",
    },
    {
      name: "Payment from Jesse Leos",
      designation: "Cashier",
      company: "Apple",
      email: "example@leadsyno.co",
      location: "Pasadena, Oklahoma",
      lastAction: "Connection request",
    },
    {
      name: "Payment from THEMSBERG LLC",
      designation: "Frozen Stocker",
      company: "Louis Vuitton",
      email: "example@leadsyno.co",
      location: "Stockton",
      lastAction: "Connection request",
    },
  ]

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 bg-blue-100 rounded flex items-center justify-center">
            <span className="text-blue-600 text-xs">📊</span>
          </div>
          <div>
            <h1 className="text-sm font-medium">Growth Connection</h1>
            <p className="text-xs text-gray-500">Created in August 2018</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Paused</span>
          <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium">
            <Play className="h-4 w-4" />
            Start Campaign
          </button>
          <button className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100">
            <MoreHorizontal className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-2 p-6 border rounded-lg bg-white shadow-sm">
          <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
            <DateRangePicker />
            <CampaignSelector />
          </div>

          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-xl font-semibold">Connection Statistics</h2>
            <div className="h-6 w-6 rounded-full overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-l1DPy2FoaixUQYsvLWXFCieQKWI1Ey.png"
                alt="User"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <p className="text-sm text-gray-500 mb-6">These companies have purchased in the last 12 months.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DonutChart data={inviteData} centerText="66.4k" centerSubtext="Total Invite" />
            <DonutChart data={leadData} centerText="66.4k" centerSubtext="Total Lead" />
          </div>
        </div>

        <div className="p-6 border rounded-lg bg-white shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-l1DPy2FoaixUQYsvLWXFCieQKWI1Ey.png"
                  alt="User"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">This Week</span>
              <span className="text-gray-400">▼</span>
            </div>
          </div>

          <MetricsDisplay metrics={metrics} />
        </div>
      </div>

      <CampaignTable data={tableData} />
    </div>
  )
}

