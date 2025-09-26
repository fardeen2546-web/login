import { Card } from "@/components/ui/card"
import TopBar from "./components/ui/TopBar"
import {Sidebar} from "./components/ui/Sidebar"

export default function Page() {
  return (
    <div className="flex min-h-dvh flex-col">
      <TopBar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4 bg-gray-100">
          <Card className="min-h-[72vh] rounded-sm bg-white shadow-[0_1px_0_rgba(0,0,0,0.03)]">
            <div className="px-6 py-6">
              <h1 className="text-xl font-semibold text-foreground">{"Hi, Welcome back 👋"}</h1>
            </div>
          </Card>
        </main>
      </div>
    </div>
  )}

