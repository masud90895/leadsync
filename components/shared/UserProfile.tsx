import Image from "next/image";
import React from "react";
import Avator from "@/assets/avator.jpeg";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { MdSupport } from "react-icons/md";

type Props = {
  setProfileDropdownOpen: (open: boolean) => void;
  profileDropdownOpen: boolean;
};

const UserProfile = ({
  setProfileDropdownOpen,
  profileDropdownOpen,
}: Props) => {
  return (
    <div>
      {/* support button */}
      <div className="p-4  border-gray-100 flex items-center gap-4 ">
        <MdSupport size={20} className="text-gray-400" />

        {/* support  */}

        <p className="text-[16px] text-gray-700 font-semibold">Support</p>
      </div>

      <div className="p-4 border-t border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
            <Image
              src={Avator}
              alt="User"
              className="h-full w-full rounded-full object-cover"
              width={32}
              height={32}
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">Dev</p>
            <p className="text-sm text-gray-600">dev@leadsync.ai</p>
          </div>
        </div>
        <div className="relative">
          <button
            onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
            className="text-gray-600 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100"
            aria-label="User menu"
          >
            <RiLogoutBoxRLine />
          </button>

          {profileDropdownOpen && (
            <div className="absolute z-10 right-0 bottom-full mb-2 w-48 bg-white border rounded-md shadow-lg border-gray-100">
              <ul className="py-1">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Your Profile
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Billing
                  </a>
                </li>
                <li>
                  <hr className="my-1 border-gray-200" />
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
