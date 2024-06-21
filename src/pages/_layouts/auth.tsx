import { Pizza } from 'lucide-react'
import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className="grid h-screen grid-cols-2">
      <div className="border-foreground/5 bg-muted flex h-full flex-col justify-between border-r p-10">
        <header className="text-muted-foreground flex items-center gap-3 text-lg">
          <Pizza className="h-5 w-5" />
          <span className="font-semibold">Pizza Trends</span>
        </header>
        <footer className="text-muted-foreground text-sm">
          Painel do parceiro &copy; Pizza Trends - {new Date().getFullYear()}
        </footer>
      </div>

      <div className="flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
