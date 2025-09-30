"use client";

import  ImageSlider  from "@/components/ui/ImageSlider";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen w-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
      <ImageSlider sliderImages={["/BG.webp", "/BG2.webp", "/BG3.webp"]} />
      <div className="relative flex flex-col justify-center px-5 sm:px-10 md:px-16 lg:px-20 py-8 sm:py-10 md:py-12">
        <AnimatePresence mode="wait" initial={false}>
          <div key={pathname}>{children}</div>
        </AnimatePresence>
        <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 -ml-4 sm:-ml-6">
          <a
            href="https://acplus.com/"
            className="text-xs sm:text-sm text-[#599400] hover:underline flex items-center gap-2"
          >
            ← Back to Clinician Login
          </a>
        </div>
      </div>
    </div>
  );
}
