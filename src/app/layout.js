
import './globals.css'
import Navber from './component/Navber'
import { Providers } from './component/Redux/Provider'
import Sideber from './component/Sile'
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='relative' >
      <Providers>
        <div>
        <Navber ></Navber>
        </div>
        <div className='flex '>
        <Sideber className=''></Sideber>
        {children}
        </div>
        </Providers>
        </body>
    </html>
  )
}
