import type { Metadata } from 'next'
import Menu from '../components/Menu'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pagina 1',
  description: 'Esta pagina de prueba',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-page text-default-text' >
      <body className={inter.className}>
        <Menu/>
        <div>
        {children}
        </div>
        
      </body>
    </html>
  )
}
