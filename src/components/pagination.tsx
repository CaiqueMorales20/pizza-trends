import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'

import { Button } from './ui/button'

interface PaginationProps {
  pageIndex: number
  perPage: number
  totalCount: number
}

export function Pagination({
  pageIndex,
  perPage,
  totalCount,
}: PaginationProps) {
  const pages = Math.ceil(totalCount / perPage) || 1
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">
        Total de {totalCount} items(s)
      </span>
      <div className="flex items-center gap-2">
        <div className="text-sm font-medium">
          Página {pageIndex + 1} de {pages}
        </div>
        <Button variant={'outline'} size={'sm'}>
          <ChevronsLeft className="h-4 w-4" />
          <span className="sr-only">Primeira página</span>
        </Button>
        <Button variant={'outline'} size={'sm'}>
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Página anterior</span>
        </Button>
        <Button variant={'outline'} size={'sm'}>
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Próxima página</span>
        </Button>
        <Button variant={'outline'} size={'sm'}>
          <ChevronsRight className="h-4 w-4" />
          <span className="sr-only">Ultima página</span>
        </Button>
      </div>
    </div>
  )
}
