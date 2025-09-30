import { Card } from "@/components/ui/card";

export default function DashboardHome() {
  return (
    <Card className="min-h-[72vh] rounded-xs bg-white shadow-xs">
      <div className="px-4 sm:px-6 py-4 sm:py-6">
        <h1 className="text-xl sm:text-2xl font-semibold text-foreground">
          Hi, Welcome back 👋
        </h1>
      </div>
    </Card>
  );
}



