import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div>
      <header>Header</header>

      <div>
        <Outlet />
      </div>
    </div>
  )
}
