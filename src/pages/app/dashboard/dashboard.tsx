import { DayOrdersAmountCard } from './day-orders-amount-card'
import { MonthCancelledOrdersAmountCard } from './month-cancelled-orders-amount-card'
import { MonthOrdersAmountCard } from './month-orders-amount-card'
import { MonthRevonueCard } from './month-revonue-card'
import { PopularProductsChart } from './popular-products-chart'
import { RevenueChart } from './revenue-chart'

export function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid gap-6 md:grid-cols-4">
        <MonthRevonueCard />
        <MonthOrdersAmountCard />
        <DayOrdersAmountCard />
        <MonthCancelledOrdersAmountCard />
      </div>
      <div className="grid gap-6 md:grid-cols-9">
        <RevenueChart />
        <PopularProductsChart />
      </div>
    </div>
  )
}
