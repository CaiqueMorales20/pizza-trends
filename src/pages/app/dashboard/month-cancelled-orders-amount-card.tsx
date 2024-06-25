import { DollarSign } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthCancelledOrdersAmountCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row justify-between pb-2">
        <CardTitle>Cancelamentos (mês)</CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <span className="text-2xl font-bold tracking-tight">12</span>
        <p className="text-xs text-muted-foreground">
          <span className="text-rose-500 dark:text-rose-400">-2%</span> em
          relação ao mês passado
        </p>
      </CardContent>
    </Card>
  )
}
