'use client'

import React from 'react'
import { Montserrat } from 'next/font/google'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import customTheme from "@/utils/theme"

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '700'],
})

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = React.useState(createTheme())

  React.useEffect(() => {
    setTheme(createTheme({
      ...customTheme,
      typography: {
        ...customTheme.typography,
        fontFamily: montserrat.style.fontFamily,
      },
    }))
  }, [])

  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}

