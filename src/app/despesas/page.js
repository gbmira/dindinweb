import Image from 'next/image'
import NavBar from '@/components/NavBar'

export default function Despesas() {
  return (
    <>
    <NavBar active={"despesas"}/>

    <main>
      <h1 className='text-center'>Despesas</h1>
    </main>

    </>
   )
}
