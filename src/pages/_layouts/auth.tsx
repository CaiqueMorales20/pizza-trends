import { Pizza } from 'lucide-react'
import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className="grid h-screen grid-cols-2">
      <div className="flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10">
        <header className="flex items-center gap-3 text-lg text-muted-foreground">
          <Pizza className="h-5 w-5" />
          <span className="font-semibold">Pizza Trends</span>
        </header>
        <footer className="text-sm text-muted-foreground">
          Painel do parceiro &copy; Pizza Trends - {new Date().getFullYear()}
        </footer>
      </div>

      <div className="relative flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
