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
  onPageChange: (pageIndex: number) => Promise<void> | void
}

export function Pagination({
  pageIndex,
  perPage,
  totalCount,
  onPageChange,
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
        <Button
          disabled={pageIndex === 0}
          onClick={() => onPageChange(0)}
          variant={'outline'}
          size={'sm'}
        >
          <ChevronsLeft className="h-4 w-4" />
          <span className="sr-only">Primeira página</span>
        </Button>
        <Button
          disabled={pageIndex === 0}
          onClick={() => onPageChange(pageIndex - 1)}
          variant={'outline'}
          size={'sm'}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Página anterior</span>
        </Button>
        <Button
          disabled={pageIndex === totalCount / perPage - 1}
          onClick={() => onPageChange(pageIndex + 1)}
          variant={'outline'}
          size={'sm'}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Próxima página</span>
        </Button>
        <Button
          disabled={pageIndex === pages - 1}
          onClick={() => onPageChange(pages - 1)}
          variant={'outline'}
          size={'sm'}
        >
          <ChevronsRight className="h-4 w-4" />
          <span className="sr-only">Ultima página</span>
        </Button>
      </div>
    </div>
  )
}
