import { Rubik } from '@next/font/google'

const rubik = Rubik({subsets: ['latin']})
 
export default function Layout({ children }:  any) {
  return (
   <main className={rubik.className}>
     {children}
   </main>
  )
}