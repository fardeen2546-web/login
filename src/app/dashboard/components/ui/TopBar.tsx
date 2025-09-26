"use client";
import Image from "next/image";
import { Bell, ChevronDown, Lock } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

export default function Topbar() {
  return (
    <header className="w-full border-b bg-white flex items-center justify-between px-6 py-8">
      {/* Left: Logo */}
      <div className="flex items-center">
        <Image
          src="/acplus-logo.png"
          alt="ACPlus Logo"
          width={170}
          height={40}
          priority
        />
      </div>

      {/* Middle: John Doe pill (closer to left) */}
<div className="flex items-center bg-gray-50 rounded-full px-2 h-12 shadow-sm border-6 border-green-300">
  <div className="relative mr-2">
    <Avatar className="h-20 w-20">
      <AvatarImage src="https://i.pravatar.cc/150?img=12" alt="John Doe" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
    <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-green-500 ring-2 ring-white"></span>
  </div>
  <span className="text-sm font-semibold">John Doe</span>
  <ChevronDown className="h-4 w-4 ml-1 text-gray-500" />
</div>


      {/* Right: Facility selector + Notifications + Hi, David */}
      <div className="flex items-center gap-6">
        {/* Facility selector */}
        <div className="flex items-center text-sm text-gray-700">
          <Lock className="h-4 w-4 mr-1" />
          <span className="mr-1">Select Facility</span>
          <span className="font-medium">Dental Care Unit</span>
          <ChevronDown className="h-4 w-4 ml-1" />
        </div>

        {/* Notification bell */}
        <div className="relative">
          <Bell className="h-5 w-5 text-gray-700" />
          <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500"></span>
        </div>

        {/* Hi, David */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Hi, David</span>
          <div className="flex items-center">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-gray-300 text-gray-700 font-semibold">
                DA
              </AvatarFallback>
            </Avatar>
            <ChevronDown className="h-4 w-4 ml-1 text-gray-500" />
          </div>
        </div>
      </div>
    </header>
  );
}


