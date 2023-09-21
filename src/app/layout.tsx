import './globals.css'
import Nav from "@/components/nav";
import Footer from "@/components/foot";


export const metadata = {
  title: 'Wei Hong',
  description: 'A Personal Landing Page',
}

export default function RootLayout({children}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" class="scroll-smooth">
      <body>
        <main>
          <Nav/>
          <div className='mx-16 md:mx-32 lg:mx-64'>
            {children}
          </div>
          <Footer/>
        </main>
      </body>
    </html>
  )
}
