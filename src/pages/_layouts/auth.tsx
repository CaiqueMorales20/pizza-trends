import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div>
      <header>Auth</header>

      <div>
        <Outlet />
      </div>
    </div>
  )
}
