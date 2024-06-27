import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { getOrders } from '@/api/get-orders'
import { Pagination } from '@/components/pagination'

import { OrderForm } from './order-form'
import { OrdersTable } from './orders-table'

export function Orders() {
  const [searchParams, setSearchParams] = useSearchParams()

  const orderId = Number(searchParams.get('orderId'))
  const customerName = searchParams.get('customerName')
  const status = searchParams.get('status')

  const pageIndex = z.coerce
    .number()
    .transform((page) => page - 1)
    .parse(searchParams.get('page') ?? '1')

  const { data: result } = useQuery({
    queryKey: ['orders', pageIndex, orderId, customerName, status],
    queryFn: () =>
      getOrders({
        pageIndex,
        orderId,
        customerName,
        status: status === 'all' ? null : status,
      }),
  })

  function handlePaginate(pageIndex: number) {
    setSearchParams((state) => {
      state.set('page', (pageIndex + 1).toString())

      return state
    })
  }

  return (
    <>
      <Helmet title="Pedidos" />
      <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
      <div className="space-y-6">
        <OrderForm />

        <div className="rounded-md border">
          {result && <OrdersTable orders={result.orders} meta={result.meta} />}
        </div>

        {result && (
          <Pagination
            pageIndex={result?.meta.pageIndex}
            perPage={result?.meta.perPage}
            totalCount={result?.meta.totalCount}
            onPageChange={handlePaginate}
          />
        )}
      </div>
    </>
  )
}
