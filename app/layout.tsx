import './globals.css'
import { Nunito } from 'next/font/google'

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
      <body className={fontNunito.className}>{children}</body>
    </html>
  )
}
