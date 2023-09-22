import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-end justify-between p-5">
      <div className='flex'>
        <div className='flex gap-5'>
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Login</Link>
          <Link href="/">Sign Up</Link>
        </div>
        <div> 
          <Image />
        </div>
      </div>

    </main>
  )
}
