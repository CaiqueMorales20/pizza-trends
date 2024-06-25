import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const data = [
  { date: '10/12', revenue: 200 },
  { date: '12/12', revenue: 100 },
  { date: '14/12', revenue: 500 },
  { date: '15/12', revenue: 400 },
  { date: '17/12', revenue: 400 },
  { date: '22/12', revenue: 700 },
]

export function RevenueChart() {
  return (
    <Card className="md:col-span-6">
      <CardHeader className="pb-8">
        <div className="spacy-y-1">
          <CardTitle>Receita do período</CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width={'100%'} height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <XAxis
              dataKey={'date'}
              tickLine={false}
              axisLine={false}
              dy={20}
              height={40}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
            />

            <CartesianGrid vertical={false} className="stroke-muted" />

            <Line
              type={'linear'}
              strokeWidth={2}
              dataKey={'revenue'}
              stroke={colors.rose[500]}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
