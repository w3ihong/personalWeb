import './globals.css'
import Nav from "@/components/nav"
import Footer from "@/components/foot"
import Favicon from "/public/favicon.ico"
import { Righteous } from 'next/font/google'
import { Barlow_Semi_Condensed } from 'next/font/google'
import { Noto_Sans_SC } from 'next/font/google'

const righteous = Righteous({
  weight: '400',
  subsets:['latin'],
  variable: '--font-righteous'
})

const barlow = Barlow_Semi_Condensed({
  weight: ['200','400'],
  subsets: ['latin'],
  variable: '--font-barlow'
})

const chinese = Noto_Sans_SC({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-SC'
})

export const metadata = {
  
  title: 'Wei Hong',
  description: 'A Personal Landing Page',
  icons: [{ rel: 'icon', url: Favicon.src }],
  
}

export default function RootLayout({children}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${barlow.variable} ${righteous.variable} ${chinese.variable}`}>
      <body>
        <Nav/>
        <div className='overflow-x-hidden'>
          <div className=' mx-6 md:mx-16 lg:mx-32 xl:mx-64 '>
            {children}
          </div>
          <Footer/>
        </div>
      </body>
    </html>
  )
}
