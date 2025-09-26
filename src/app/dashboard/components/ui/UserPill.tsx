import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export default function UserPill() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            "group inline-flex items-center gap-3 rounded-full border border-[color:var(--pill-border)]",
            "bg-[color:var(--pill-bg)] px-3.5 py-1.5 shadow-[0_1px_0_rgba(0,0,0,0.03)_inset]",
          )}
        >
          <span className="relative">
            <Avatar className="h-7 w-7 ring-2 ring-[color:var(--brand-green-ring)] ring-offset-2 ring-offset-[color:var(--pill-bg)]">
              <AvatarImage src="/professional-headshot.png" alt="John Doe" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            {/* small status tick */}
            <span className="absolute -right-0.5 -bottom-0.5 h-3 w-3 rounded-full border border-white bg-[color:var(--brand-green-2)]" />
          </span>
          <span className="text-sm font-semibold text-foreground">John Doe</span>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}