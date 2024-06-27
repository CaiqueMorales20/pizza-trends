import { useQuery } from '@tanstack/react-query'
import { Search, X } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { getOrders } from '@/api/get-orders'
import { Pagination } from '@/components/pagination'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { OrdersTable } from './orders-table'

export function Orders() {
  const [searchParams, setSearchParams] = useSearchParams()

  const pageIndex = z.coerce
    .number()
    .transform((page) => page - 1)
    .parse(searchParams.get('page') ?? '1')

  const { data: result } = useQuery({
    queryKey: ['orders', pageIndex],
    queryFn: () => getOrders({ pageIndex }),
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
        <form className="flex items-center gap-2">
          <span className="text-sm font-semibold">Filtros:</span>
          <Input placeholder="ID do pedido" className="h-8 w-[200px]" />

          <Input placeholder="Nome do cliente" className="h-8 w-[320px]" />

          <Select defaultValue="all">
            <SelectTrigger className="h-8 w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos status</SelectItem>
              <SelectItem value="pending">Pendente</SelectItem>
              <SelectItem value="canceled">Cancelado</SelectItem>
              <SelectItem value="processing">Em preparo</SelectItem>
              <SelectItem value="delivering">Em entrega</SelectItem>
              <SelectItem value="delivered">Entregue</SelectItem>
            </SelectContent>
          </Select>

          <Button
            type="submit"
            variant={'secondary'}
            size={'sm'}
            className="h-8"
          >
            <Search className="mr-2 h-4 w-4" /> Filtrar resutlados
          </Button>

          <Button variant={'outline'} size={'sm'} className="h-8">
            <X className="mr-2 h-4 w-4" /> Remover filtros
          </Button>
        </form>

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
