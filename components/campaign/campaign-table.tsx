"use client";

import { useState, useEffect, useRef } from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";

export function CampaignTable() {
  const [leadsDropdownOpen, setLeadsDropdownOpen] = useState(false);
  const [selectedLeadType, setSelectedLeadType] = useState("All Leads");
  const [filterCampaignOpen, setFilterCampaignOpen] = useState(false);
  const [selectedFilterCampaign, setSelectedFilterCampaign] =
    useState("All Campaigns");

  const tableData = [
    {
      name: "Payment from ",
      subject: "Bonnie Green",
      designation: "Dry Stocker",
      company: "Louis Vuitton",
      email: "example@leadsyno.co",
      location: "Kent, Utah",
      lastAction: "Connection request",
    },
    {
      name: "Payment refund to ",
      subject: "#00910",
      designation: "Cashier",
      company: "MasterCard",
      email: "example@leadsyno.co",
      location: "Landing, Illinois",
      lastAction: "Connection request",
    },
    {
      name: "Payment failed from ",
      subject: "#087651",
      designation: "Dry Stocker",
      company: "Starbucks",
      email: "example@leadsyno.co",
      location: "Coppell, Virginia",
      lastAction: "Connection request",
    },
    {
      name: "Payment from ",
      subject: "Lana Byrd",
      designation: "Cashier",
      company: "eBay",
      email: "example@leadsyno.co",
      location: "Portland, Illinois",
      lastAction: "Connection request",
    },
    {
      name: "Payment from ",
      subject: "Jesse Leos",
      designation: "Cashier",
      company: "Apple",
      email: "example@leadsyno.co",
      location: "Pasadena, Oklahoma",
      lastAction: "Connection request",
    },
    {
      name: "Payment from ",
      subject: "THEMSBERG LLC",
      designation: "Frozen Stocker",
      company: "Louis Vuitton",
      email: "example@leadsyno.co",
      location: "Stockton",
      lastAction: "Connection request",
    },
  ];

  const tableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        tableRef.current &&
        !tableRef.current.contains(event.target as Node)
      ) {
        setLeadsDropdownOpen(false);
        setFilterCampaignOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="space-y-4" ref={tableRef}>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-[26px] gap-4">
        <div className=" gap-4">
          <div className="relative ">
            <button
              onClick={() => setLeadsDropdownOpen(!leadsDropdownOpen)}
              className="flex items-center justify-between w-full px-4 py-2 border border-gray-200 rounded-md text-sm bg-gray-50 hover:bg-gray-50"
            >
              <span className="text-gray-600">{selectedLeadType}</span>
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

            {leadsDropdownOpen && (
              <div className="absolute z-10 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                <ul className="py-1">
                  {/* Invited, Accepted, Replied, Messaged, Liked, Endorsed and Withdraw */}
                  {[
                    "All Leads",
                    "Invited",
                    "Accepted",
                    "Replied",
                    "Messaged",
                    "Liked",
                    "Endorsed",
                    "Withdraw",
                  ].map((type, index) => (
                    <li key={index}>
                      <button
                        onClick={() => {
                          setSelectedLeadType(type);
                          setLeadsDropdownOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        {type}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* search start */}
        <div className="relative flex-grow ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="pl-8 w-full border border-gray-200 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* search end */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative md:col-span-3">
            <button
              onClick={() => setFilterCampaignOpen(!filterCampaignOpen)}
              className="flex items-center justify-between w-full px-4 py-2 border border-gray-200 rounded-md text-sm bg-gray-50 hover:bg-gray-50"
            >
              <span className="text-gray-600">{selectedFilterCampaign}</span>
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

            {filterCampaignOpen && (
              <div className="absolute z-10 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
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
                          setSelectedFilterCampaign(campaign);
                          setFilterCampaignOpen(false);
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

          <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm bg-indigo-700 hover:bg-indigo-900 text-white col-span-1   ">
            <span>Export</span>
            <FaCloudDownloadAlt size={16} />
          </button>
        </div>
      </div>

      {/* table start */}

      <div className="border border-gray-200 rounded-lg overflow-x-auto bg-white">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                NAME
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                DESIGNATION
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                COMPANY
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                EMAIL
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                LOCATION
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                LAST ACTION
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tableData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {row.name}{" "}
                  <span className="text-black font-semibold">
                    {row.subject}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {row.designation}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {row.company}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {row.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {row.location}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {row.lastAction}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
