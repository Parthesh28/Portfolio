'use '
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import ThemeToggle from '../components/ThemeToggle'
import Footer from '../components/Footer'
import ActiveSectionContextProvider from '../context/active-section-context'
import { ThemeProvider } from 'next-themes'
import Starfield from '../components/Starfield'
const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Parthesh | Portfolio',
  description: 'Web Developer from India',
}

export default function RootLayout({ children }) {



  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} flex flex-col min-h-screen`}>

        
          <ThemeProvider defaultTheme='system' attribute="class">
            <ActiveSectionContextProvider>
              <Navbar />
              <div className='-z-50'>
                <Starfield />
              </div>
              <main>{children}</main>
              <Footer />
              <ThemeToggle />
            </ActiveSectionContextProvider>
          </ThemeProvider>
      </body>
    </html>
  )
}