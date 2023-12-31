
import './globals.css'
import Navber from '@/component/Navber'
import { Providers } from '@/component/Redux/Provider'
// import Sideber from './Sile'
import Sideber from '@/component/Sile'



// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Navber></Navber>
        <Providers>
        <Sideber></Sideber>
        {children}
        </Providers>
        </body>
    </html>
  )
}