import './globals.css'
import type { Metadata } from 'next';
import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'Travel',
  description: 'Travel UI/UX App for camping',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <Navbar/>
        <main className='relative over'>
        {children}
        </main>
      
        <Footer/>
      </body>
    </html>
  )
}
