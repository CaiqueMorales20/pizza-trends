import './globals.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from './components/theme/theme-provider'
import { Toaster } from './components/ui/sonner'
import { router } from './router'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizzatrends-theme">
        <Helmet titleTemplate="%s | Pizza Trends" />
        <RouterProvider router={router} />
        <Toaster />
      </ThemeProvider>
    </HelmetProvider>
  )
}
