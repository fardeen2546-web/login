"use client";

import Image from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Bell } from "lucide-react";

export default function Topbar() {
  return (
    <div className="flex items-center justify-between bg-white px-4 h-20 md:h-24 w-full overflow-hidden">
      {/* Left Logo */}
      <div className="flex-shrink-0">
        <Image
          src="/acplus-logo.png"
          alt="ACPlus Logo"
          width={160}
          height={36}
          priority
          className="w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] h-auto"
        />
      </div>

      {/* Center User */}
      <div className="flex flex-1 justify-center min-w-0">
        <div className="flex items-center bg-[#F5FAED] rounded-full px-3 py-1 shadow-sm max-w-full">
          {/* Avatar with green border + dot */}
          <div className="relative flex-shrink-0">
            <div className="h-10 w-10 md:h-12 md:w-12 rounded-full border-2 border-green-500 p-[2px]">
              <Avatar className="h-full w-full">
                <AvatarImage src="https://i.pravatar.cc/150?img=12" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 md:h-3 md:w-3 bg-green-500 border-2 border-white rounded-full"></span>
          </div>

          {/* Name */}
          <span className="ml-2 text-[#434343] font-medium text-sm md:text-base truncate max-w-[120px] sm:max-w-[160px] md:max-w-none">
            John Doe
          </span>

          {/* Arrow */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1 h-4 w-4 text-[#434343] flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
        <div className="hidden sm:flex items-center gap-2 text-[#6E6F72] text-sm md:text-md truncate max-w-[280px]">
          <span className="flex items-center">
            <span className="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2 12c0-5.523 4.477-10 10-10 1.884 0 3.645.52 5.16 1.42M15 15l4.35 4.35c.78.78.78 2.05 0 2.83-.78.78-2.05.78-2.83 0L12 18"
                />
              </svg>
            </span>
            Select Facility
          </span>
          <span className="text-[#434343]">Dental Care Unit</span>
        </div>

        <Bell className="h-5 w-5 text-gray-500 flex-shrink-0" />

        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-[#434343] text-xs md:text-sm">Hi, David</span>
          <div className="h-7 w-7 md:h-8 md:w-8 rounded-full bg-gray-200 flex items-center justify-center font-medium text-[#434343]">
            DA
          </div>
        </div>
      </div>
    </div>
  );
}
