import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Bell, ChevronDown, Lock } from "lucide-react";

export default function FacilitySelector() {
  return (
    <div className="flex items-center gap-4 pr-4">
      <Button
        variant="ghost"
        className="h-8 px-2 text-sm text-muted-foreground hover:bg-transparent hover:text-foreground"
      >
        <Lock className="mr-2 h-4 w-4 text-muted-foreground" />
        <span className="mr-2">Select Facility</span>
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-2 py-0.5 text-foreground">
          Dental Care Unit
          <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
        </span>
      </Button>
      <div className="relative">
        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
          <Bell className="h-4 w-4" />
        </Button>
        <span className="absolute right-1 top-1 inline-block h-2 w-2 rounded-full bg-[color:var(--brand-green-2)]" />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Hi,</span>
        <span className="text-sm font-semibold text-foreground">David</span>
        <Avatar className="h-8 w-8">
          <AvatarFallback className="bg-muted text-foreground">DA</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}