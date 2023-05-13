import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/navbar'
import RegisterModal from './components/models/RegisterModal'
import ToasterProvider from './providers/ToasterProvider'
const fontNunito = Nunito({
  subsets: ['latin']
})

export const metadata = {
  title: 'AirBnB',
  description: 'Clone of AIRBnB from scratch',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fontNunito.className}>
        {/* CLIENT COMPONENTS */}
        <ToasterProvider />
        <RegisterModal />
        <Navbar />
          {children}
      </body>
    </html>
  )
}
