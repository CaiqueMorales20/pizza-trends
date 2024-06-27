interface OrderStatus {
  status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
}

enum STATUS_TEXT {
  'pending' = 'Pendente',
  'canceled' = 'Cancelado',
  'processing' = 'Em preparo',
  'delivering' = 'Em entrega',
  'delivered' = 'Entregue',
}

enum STATUS_COLORS {
  'pending' = 'bg-slate-400',
  'canceled' = 'bg-rose-500',
  'processing' = 'bg-amber-500',
  'delivering' = 'bg-amber-400',
  'delivered' = 'bg-emerald-500',
}

export function OrderStatus({ status }: OrderStatus) {
  return (
    <div className="flex items-center gap-2">
      <span className={`h-2 w-2 rounded-full ${STATUS_COLORS[status]}`} />
      <span className="font-medium text-muted-foreground">
        {STATUS_TEXT[status]}
      </span>
    </div>
  )
}
