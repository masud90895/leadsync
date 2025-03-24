export function CampaignSelector() {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm">Select Campaign</span>
      <button className="flex items-center gap-2 px-3 py-1 border rounded-md text-sm bg-white hover:bg-gray-50 h-8">
        <div className="h-5 w-5 rounded-full overflow-hidden">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-l1DPy2FoaixUQYsvLWXFCieQKWI1Ey.png"
            alt="User"
            className="h-full w-full object-cover"
          />
        </div>
        <span>All Campaigns</span>
      </button>
    </div>
  )
}

