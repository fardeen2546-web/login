
export default function Brand() {
  return (
    <div className="flex items-center gap-2 pl-4">
      {/* Simple clover-like mark */}
      <div className="grid grid-cols-2 gap-0.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--brand-green-1)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--brand-green-2)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--brand-green-2)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.78_0.05_170)]" />
      </div>
      <div className="leading-tight">
        <div className="font-semibold tracking-tight text-foreground">ACPlus</div>
        <div className="text-xs text-muted-foreground -mt-0.5">Interconnected Care Solutions</div>
      </div>
    </div>
  )
}