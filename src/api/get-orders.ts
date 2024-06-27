import { api } from '@/lib/api'

interface GetOrdersQuery {
  pageIndex: number
}

export interface GetOrdersResponse {
  orders: {
    orderId: string
    createdAt: Date | null
    status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
    customerName: string
    total: number
  }[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export async function getOrders({ pageIndex }: GetOrdersQuery) {
  const response = await api.get<GetOrdersResponse>('orders', {
    params: {
      pageIndex,
    },
  })

  return response.data
}