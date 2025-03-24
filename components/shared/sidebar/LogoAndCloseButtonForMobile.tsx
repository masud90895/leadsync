import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";

type Props = {
  onClose: () => void;
};

const LogoAndCloseButtonForMobile = ({ onClose }: Props) => {
  return (
    <div className="p-5 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <div className="h-[35px] w-[35px]">
          <Image
            src={logo}
            alt="logo"
            width={35}
            height={35}
            className="object-contain"
          />
        </div>
        <span className="font-semibold text-[30px] text-gray-800">
          Leadsync
        </span>
      </Link>

      {/* Close button - only visible on mobile */}
      {onClose && (
        <button
          className="text-gray-500 hover:text-gray-700 md:hidden"
          onClick={onClose}
          aria-label="Close menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default LogoAndCloseButtonForMobile;
