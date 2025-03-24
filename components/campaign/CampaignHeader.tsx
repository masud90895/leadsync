import { FaChartLine } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

const CampaignHeader = () => {
  return (
    <div className="mb-6 border border-gray-200 rounded-[15px] p-4">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
            <FaChartLine size={20} />
          </div>
          <div>
            <h2 className="text-sm font-semibold">Growth Connection</h2>
            <p className="text-xs text-gray-500">Create in August 2018</p>
          </div>
        </div>
        <div className="flex items-center gap-[25px]">
          <span className="px-3 py-2 bg-yellow-100 text-yellow-800 text-xs rounded-md">
            Paused
          </span>
          <button className="flex items-center gap-2 bg-indigo-700 hover:bg-indigo-900 text-white px-3 py-2 rounded-full text-sm font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
            Start Campaign
          </button>
          <button className="bg-indigo-100 text-indigo-700 p-2 rounded-full">
            <BsThreeDotsVertical />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampaignHeader;
