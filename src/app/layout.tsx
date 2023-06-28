import Navbar from '@/Component/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

import Footer from '@/Component/footer/Footer'
import { ThemeProvider } from '@/Component/themeContext/ThemeContext'
import AuthProvider from '@/Component/authProvider/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Chintan',
  description: 'This is description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className='container'>
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
