import { Card } from "@/components/ui/card";

export default function ClinicalPage() {
  return (
    <Card className="min-h-[72vh] rounded-sm bg-white shadow-sm">
      <div className="px-4 sm:px-6 py-4 sm:py-6">
        <h1 className="text-xl sm:text-2xl font-semibold text-foreground">
          Hi, Welcome clinical docs 👋
        </h1>
      </div>
    </Card>
  );
}
