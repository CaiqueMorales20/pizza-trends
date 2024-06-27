import { GetOrdersResponse } from '@/api/get-orders'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { OrderRow } from './orders-row'

export function OrdersTable({ orders }: GetOrdersResponse) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[60px]"></TableHead>
          <TableHead>Identificador</TableHead>
          <TableHead>Realizado há</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Cliente</TableHead>
          <TableHead>Total do pedido</TableHead>
          <TableHead className="w-[164px]"></TableHead>
          <TableHead className="w-[132px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <OrderRow key={order.orderId} order={order} />
        ))}
      </TableBody>
    </Table>
  )
}
