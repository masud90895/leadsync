import React from "react";

type Props = {
  dateRangeOpen: boolean;
  setDateRangeOpen: (dateRangeOpen: boolean) => void;
  campaignDropdownOpen: boolean;
  setCampaignDropdownOpen: (campaignDropdownOpen: boolean) => void;
  inviteChartRef: React.RefObject<HTMLCanvasElement>;
  inviteData: { name: string; value: number; color: string }[];
};

const ConnectionStatisticsDateSection = ({
  dateRangeOpen,
  setDateRangeOpen,
  campaignDropdownOpen,
  setCampaignDropdownOpen,
  inviteChartRef,
  inviteData,
}: Props) => {
  return (
    <div className="col-span-1 lg:col-span-5 p-2 md:p-6 border border-gray-100 rounded-lg bg-white shadow-sm">
      <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
        <div
          onClick={() => setDateRangeOpen(!dateRangeOpen)}
          className="flex items-center gap-2 text-base cursor-pointer"
        >
          <span className="text-base text-blue-700">Start Date - End Date</span>
          <div className="relative">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                  className="text-blue-700"
                />
              </svg>
            </button>

            {dateRangeOpen && (
              <div className="absolute z-10 mt-1 w-48 bg-white border border-gray-100 rounded-md shadow-lg">
                <ul className="py-1">
                  {[
                    "Last 7 days",
                    "Last 30 days",
                    "This month",
                    "Last month",
                    "Custom range",
                  ].map((range, index) => (
                    <li key={index}>
                      <button
                        onClick={() => {
                          setDateRangeOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        {range}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div
          onClick={() => setCampaignDropdownOpen(!campaignDropdownOpen)}
          className="flex items-center gap-2 cursor-pointer"
        >
          <span className="text-base ">Select Campaign</span>
          <div className="relative">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {campaignDropdownOpen && (
              <div className="absolute z-10 mt-1 w-48 bg-white border border-gray-100 rounded-md shadow-lg">
                <ul className="py-1">
                  {[
                    "All Campaigns",
                    "Growth Campaign",
                    "Sales Campaign",
                    "Marketing Campaign",
                  ].map((campaign, index) => (
                    <li key={index}>
                      <button
                        onClick={() => {
                          setCampaignDropdownOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        {campaign}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="relative">
        <canvas
          ref={inviteChartRef}
          width={292.67}
          height={292.67}
          className="mx-auto"
        />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2  text-xs">
            {inviteData.map((item) => (
              <div key={item.name} className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-indigo-300" />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectionStatisticsDateSection;
