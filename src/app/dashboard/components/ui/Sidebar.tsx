"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  BarChart3,
  Users,
  FileText,
  Calendar,
  PhoneCall,
  CreditCard,
  Settings,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const menuItems = [
  { icon: BarChart3, label: "Dashboard", href: "/dashboard" },
  { icon: Users, label: "Patients", href: "/dashboard/patients" },
  { icon: "connect", label: "Quick Connect", href: "/dashboard/quick-connect" },
  { icon: FileText, label: "Clinical Docs", href: "/dashboard/clinical-docs" },
  { icon: Calendar, label: "Appointments", href: "/dashboard/appointments" },
  { icon: PhoneCall, label: "Call History", href: "/dashboard/call-history" },
  { icon: CreditCard, label: "Reporting", href: "/dashboard/reporting" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "relative flex flex-col bg-white transition-all duration-300 h-full shrink-0",
        isExpanded
          ? "w-[220px] sm:w-[240px] md:w-[260px] lg:w-[280px]"
          : "w-16 sm:w-20"
      )}
    >
      {/* Toggle button */}
      <button
        aria-label={isExpanded ? "Collapse sidebar" : "Expand sidebar"}
        onClick={() => setIsExpanded((s) => !s)}
        className="absolute -right-4 -top-4 z-30 h-9 w-9 md:h-11 md:w-11 rounded-full bg-white flex items-center justify-center hover:bg-gray-50 focus:outline-none"
      >
        {isExpanded ? (
          <ArrowLeft className="h-5 w-5 text-gray-500" />
        ) : (
          <ArrowRight className="h-5 w-5 text-gray-500" />
        )}
      </button>

      {/* Spacer */}
      <div className="h-4 md:h-6" />

      {/* Menu items */}
      <nav className="flex-1 mt-2 md:mt-4 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.label} href={item.href}>
              <div
                className={cn(
                  "flex items-center cursor-pointer px-3 py-2 md:px-4 md:py-3 mx-2 md:mx-3 my-1 md:my-2 transition-colors text-sm md:text-base rounded-md",
                  isActive
                    ? "bg-gradient-to-r from-[#5BB200] to-[#7CC500] text-white font-semibold"
                    : "text-[#6E6F72] hover:bg-gray-100"
                )}
              >
                {item.icon === "connect" ? (
                  <Image
                    src="/connect.png"
                    alt="Quick Connect"
                    width={22}
                    height={22}
                    className="md:w-[30px] md:h-[30px] animate-spin-slow"
                  />
                ) : (
                  (() => {
                    const Icon = item.icon as React.ElementType;
                    return (
                      <Icon className="h-5 w-5 md:h-6 md:w-6 flex-shrink-0" />
                    );
                  })()
                )}
                {isExpanded && (
                  <span className="ml-3 md:ml-4 whitespace-nowrap text-[13px] md:text-[15px]">
                    {item.label}
                  </span>
                )}
              </div>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
