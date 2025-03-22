import './globals.css'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Navbar from '../components/Navbar'
import ThemeToggle from '../components/ThemeToggle'
import Footer from '../components/Footer'
import ActiveSectionContextProvider from '../context/active-section-context'
import { ThemeProvider } from '../context/theme-provider'
import Starfield from '../components/Starfield'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
})

export const metadata = {
  title: 'Parthesh Purohit',
  description: 'Full Stack Web Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${jakarta.variable}`}>
      <body className={`flex flex-col min-h-screen font-sans bg-white dark:bg-zinc-900`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ActiveSectionContextProvider>
            <Navbar />
            <div className='-z-50'>
              <Starfield />
            </div>
            <main className="flex-grow">{children}</main>
            <Footer />
            <ThemeToggle />
          </ActiveSectionContextProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}