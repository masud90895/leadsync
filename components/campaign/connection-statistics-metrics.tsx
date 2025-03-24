import React from "react";

type Props = {
  leadChartRef: React.RefObject<HTMLCanvasElement>;
  leadData: { name: string; value: number; color: string }[];
};

const ConnectionStatisticsMetrics = ({ leadChartRef, leadData }: Props) => {
  return (
    <div className="col-span-1 lg:col-span-7 p-2 md:p-6 border border-gray-100 rounded-lg bg-white shadow-sm">
      <div className="flex md:flex-row flex-col md:items-center gap-4 justify-between mb-6">
        <div>
          <p className="text-lg md:text-2xl font-bold">Connection Statistics</p>
          <p className="text-base">
            this company have purchase in the last 12 months,
          </p>
        </div>

        <button className="flex items-center gap-4 rounded-lg border border-gray-200 px-4 py-2 text-gray-500 text-sm w-max">
          This Week
          {/* arrow down */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-400"
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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <canvas
            ref={leadChartRef}
            width={292.67}
            height={292.67}
            className="mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 gap-1 p-3">
          {leadData.map((item) => (
            <div key={item.name} className="py-2 flex justify-between">
              <div className="flex items-center gap-[25px]">
                <p
                  className={`w-[15px] h-[15px] rounded-[2px] border border-gray-100`}
                  style={{ backgroundColor: item.color }}
                />
                <p className="text-lg">{item.name}</p>
              </div>
              <p className="text-lg">
                <span className="text-gray-900">{item.value / 10}/</span>
                <span className="text-gray-500">5</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConnectionStatisticsMetrics;
