import React from 'react'
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { LucideIcon} from 'lucide-react'


interface DahsboardCardProps {
  title: string;
  count: string;
  icon: React.ReactElement<LucideIcon>;
}


function DashboardCard({title, count, icon}: DahsboardCardProps) {
  return (
    <Card className="bg-slate-100 dark:bg-slate-800 p-4 pb-0 flex-grow shrink basis-0 max-w-[210px]">

  <CardContent>
    <h3 className="text-3xl text-center mb-4 font-bold text-slate-500 dark:text-slate-200">{title}</h3>
    <div className="flex flex-col gap-2 justify-center items-center">
      {/* <Newspaper className="text-slate-500" size={72} /> */}
      {icon}
      <div className="text-3xl font-semibold text-slate-500 dark:text-slate-200">
        {count}
      </div>
    </div>
  </CardContent>

</Card>
  )
}

export default DashboardCard