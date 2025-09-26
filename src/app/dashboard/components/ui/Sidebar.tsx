// import { cn } from "@/lib/utils"
// import { Activity, Building2, ListChecks, Phone, Settings, Star, Users } from "lucide-react"

// const sidebarItems = [
//   { icon: Activity, active: true, label: "Dashboard" },
//   { icon: Users, active: false, label: "Patients" },
//   { icon: Star, active: false, label: "Care" },
//   { icon: ListChecks, active: false, label: "Tasks" },
//   { icon: Phone, active: false, label: "Calls" },
//   { icon: Building2, active: false, label: "Billing" },
//   { icon: Settings, active: false, label: "Settings" },
// ]

// export default function Sidebar() {
//   return (
//     <aside className="sticky left-0 top-16 z-10 h-[calc(100vh-4rem)] w-14 border-r bg-[color:var(--sidebar-plate)]">
//       <div className="flex h-full flex-col items-center gap-3 py-4">
//         {sidebarItems.map(({ icon: Icon, active, label }, i) => (
//           <button
//             key={i}
//             aria-label={label}
//             className={cn(
//               "relative flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground transition",
//               active ? "active-gradient text-foreground shadow-sm" : "hover:bg-muted/60 hover:text-foreground",
//             )}
//           >
//             <Icon className="h-5 w-5" />
//             {active && <span className="sr-only">Current: {label}</span>}
//           </button>
//         ))}
//       </div>
//     </aside>
//   )
// }

"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import { BarChart3, Users, Sparkles, ListChecks, Phone, Landmark, Settings } from "lucide-react"
import { cn } from "@/lib/utils"

type Item = {
  key: string
  label: string
  href: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const ITEMS: Item[] = [
  { key: "dashboard", label: "Dashboard", href: "#", icon: BarChart3 },
  { key: "network", label: "Network", href: "#", icon: Sparkles },
  { key: "care", label: "Care", href: "#", icon: Users },
  { key: "tasks", label: "Tasks", href: "#", icon: ListChecks },
  { key: "calls", label: "Calls", href: "#", icon: Phone },
  { key: "billing", label: "Billing", href: "#", icon: Landmark },
  { key: "settings", label: "Settings", href: "#", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()
  const [active, setActive] = React.useState<string>("dashboard")

  // allow keyboard 1-7 to move active selection quickly
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key >= "1" && e.key <= String(ITEMS.length)) {
        const idx = Number(e.key) - 1
        setActive(ITEMS[idx].key)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <TooltipProvider>
      <aside
        aria-label="Primary"
        className="sticky top-0 h-[calc(100dvh)] w-16 shrink-0 border-r bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80"
      >
        <div className="flex h-full flex-col items-center justify-between py-3">
          {/* Top group */}
          <nav className="flex flex-col items-center gap-2">
            {ITEMS.map((item) => {
              const Icon = item.icon
              const isActive = active === item.key
              return (
                <Tooltip key={item.key}>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label={item.label}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "relative h-10 w-10 rounded-lg text-muted-foreground hover:text-foreground",
                        isActive &&
                          "text-foreground sidebar-active before:absolute before:inset-0 before:rounded-lg before:bg-[var(--sidebar-active)] before:shadow-[0_1px_0_rgba(0,0,0,0.06)_inset] before:z-[-1]",
                      )}
                      onClick={() => setActive(item.key)}
                      asChild
                    >
                      <Link href={item.href}>
                        <Icon className="h-5 w-5" strokeWidth={1.8} />
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="text-xs">
                    {item.label}
                  </TooltipContent>
                </Tooltip>
              )
            })}
          </nav>

          {/* Bottom badge (round "N") */}
          <div className="mb-1">
            <div
              aria-label="Nav badge"
              className="grid h-9 w-9 place-items-center rounded-full border bg-white shadow-sm text-xs font-medium text-muted-foreground"
            >
              N
            </div>
          </div>
        </div>
      </aside>
    </TooltipProvider>
  )
}
