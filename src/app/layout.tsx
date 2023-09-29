import './globals.css'
import Nav from "@/components/nav";
import Footer from "@/components/foot";
import Favicon from "/public/favicon.ico";


export const metadata = {
  
  title: 'Wei Hong',
  description: 'A Personal Landing Page',
  icons: [{ rel: 'icon', url: Favicon.src }],
  
}

export default function RootLayout({children}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <main>
          <Nav/>
          <div className=' mx-6 md:mx-16 lg:mx-32 xl:mx-64 '>
            {children}
          </div>
          <Footer/>
        </main>
      </body>
    </html>
  )
}
