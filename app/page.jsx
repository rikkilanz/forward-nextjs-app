import Image from 'next/image'
import heroImage from '../assets/hero-banner.jpg'
import blocks from '../assets/clarity-blocks.svg'
import faq from '../assets/clarity-faq.svg'
import feedback from '../assets/clarity-feedback.svg'
import Link from 'next/link'

export default function Home() {
  return (

    <main className="flex min-h-screen flex-col p-5">

      {/* NAV BAR */}
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
      {/* END NAV BAR */}

      {/* HERO SECTION */}
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

      {/* HERO IMAGE */}
      <div className='flex flex-row'>

        <div>
          <Image
            width={700}
            height={700}
            src={heroImage}
          />
        </div>

      </div>
      {/* END HERO IMAGE */}

    </div>
    {/* END HERO SECTION */}

    {/* GET STARTED SECTION */}

      <div className='p-10 text-5xl font-bold'>
        <h1>Get Started With Forward</h1>
      </div>

      <div className='flex items-center justify-center p-10'>

        <div className='p-10 flex flex-col justify-center items-center'>
          <Image className="pb-4" src={blocks}/>
          <h2>Browse our list of local expert mentors within your community and receive guidance</h2>
        </div>

        <div className='p-10 flex flex-col justify-center items-center'>
          <div className=''>
            <Image className="pb-4" src={faq} />
          </div>
          <div className=''>
            <h2 className=''>Don't know where to start? Take our survey to get matched with local mentors to help kickstart your journey!</h2>
          </div>
        </div>

        <div className='p-10 flex flex-col justify-center items-center'>
          <Image className="pb-4" src={feedback}/>
          <h2>Post your best work on our project showcase to get feedback and connect with fellow peers and mentors</h2>
        </div>
        
      </div>
      {/* END GET STARTED SECTION */}

    </main>
  )       
}
 