import { ArrowRight, Search, X } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function Orders() {
  return (
    <>
      <Helmet title="Pedidos" />
      <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
      <div className="space-y-8">
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
        </div>

        <Pagination pageIndex={0} perPage={10} totalCount={105} />
      </div>
    </>
  )
}
