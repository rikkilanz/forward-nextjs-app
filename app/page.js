import Image from 'next/image'
import { forwardHeroBanner } from './assets/images'
import Link from 'next/link'
import { prefix } from '@/public/prefix'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-5">
      <div className='flex flex-col items-end'>
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

    <div className='flex justify-around pt-10'>

      <div className='flex flex-col justify-center'>

        <div className='flex items-center'>
          <div className='flex flex-col justify-center'>
            <h1 className='text-6xl font-bold'>Dedicated Mentors to<br/>keep you moving <br/>Forward.</h1>
            <p className='pt-4'>Built by mentees, for mentors & peers. Forward helps local tech industry<br/>professionals and new comers build communities and connections with<br/>each other 
            </p>
          </div>
        </div>

        <div className='flex flex-row gap-4 pt-4'>
          <Link className='text-white bg-green-500 p-3 text-[13px] flex items-center' href="/">Get Started</Link>
          <Link className='text-green-500 bg-white p-3 border-2 border-green-500 text-[13px] flex items-center ' href="/">Learn More</Link>
        </div>

      </div>

      <div className='flex flex-row'>

        <div>
          <Image
            width={700}
            height={700}
            src={forwardHeroBanner}
          />
        </div>

      </div>

    </div>
      
    </main>
  )       
}
 