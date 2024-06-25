import { ArrowRight, Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function OrdersTable() {
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
        {Array.from({ length: 10 }).map((_, i) => (
          <TableRow key={i}>
            <TableCell>
              <Button variant={'outline'} size={'sm'}>
                <Search className="h-3 w-3" />
                <span className="sr-only">Detalhes do pedido</span>
              </Button>
            </TableCell>
            <TableCell className="font-mono text-xs font-medium">
              821e78f7asdhdf128h
            </TableCell>
            <TableCell className="text-muted-foreground">
              há 15 minutos
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-slate-400" />
                <span className="font-medium text-muted-foreground">
                  Pendente
                </span>
              </div>
            </TableCell>
            <TableCell className="font-medium">Caique Morales</TableCell>
            <TableCell className="font-medium">R$ 149,00</TableCell>
            <TableCell>
              <Button variant={'outline'} size={'sm'}>
                <ArrowRight className="mr-2 h-3 w-3" />
                Aprovar
              </Button>
            </TableCell>
            <TableCell>
              <Button variant={'ghost'} size={'sm'}>
                <X className="mr-2 h-3 w-3" />
                Cancelar
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
