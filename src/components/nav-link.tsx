import { Link, LinkProps, useLocation } from 'react-router-dom'

export function NavLink(props: LinkProps) {
  const { pathname } = useLocation()

  return (
    <Link
      data-current={pathname === props.to}
      className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground data-[current=true]:text-foreground"
      {...props}
    />
  )
}
