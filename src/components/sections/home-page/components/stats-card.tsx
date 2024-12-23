interface StatsCardProps {
    icon: React.ReactNode
    value: string
    label: string
  }
  
  export function StatsCard({ icon, value, label }: StatsCardProps) {
    return (
      <div className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
          {icon}
        </div>
        <div>
          <div className="text-2xl font-bold">{value}</div>
          <div className="text-sm text-muted-foreground">{label}</div>
        </div>
      </div>
    )
  }
  
  