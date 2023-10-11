import Image from "next/image"
import heroImage from "../assets/hero-banner.jpg"
import blocks from "../assets/clarity-blocks.svg"
import faq from "../assets/clarity-faq.svg"
import feedback from "../assets/clarity-feedback.svg"
import quote from "../assets/clarity-quote.svg"
import Link from "next/link"
import { forwardHeroBanner } from "./assets/images"
import { prefix } from "@/public/prefix"

export default function Home() {
  return (

    <main className="flex min-h-screen flex-col p-5">

      {/* NAV BAR */}
      <div className="flex flex-col items-end">
        <div className="flex gap-5">
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
    <div className="flex justify-around pt-10">

      <div className="flex flex-col justify-center">

        <div className="flex items-center">
          <div className="flex flex-col justify-center">
            <h1 className="text-6xl font-bold">Dedicated Mentors to<br/>keep you moving <br/>Forward.</h1>
            <p className="pt-4">Built by mentees, for mentors & peers. Forward helps local tech industry<br/>professionals and new comers build communities and connections with<br/>each other 
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-4 pt-4">
          <Link className="text-white bg-green-500 p-3 text-[13px] flex items-center" href="/">Get Started</Link>
          <Link className="text-green-500 bg-white p-3 border-2 border-green-500 text-[13px] flex items-center " href="/">Learn More</Link>
        </div>

      </div>

      {/* HERO IMAGE */}
      <div className="flex flex-row">

        <div>
          <Image
            width={700}
            height={700}
            src={forwardHeroBanner}
          />
        </div>

      </div>
      {/* END HERO IMAGE */}

    </div>
    {/* END HERO SECTION */}

    {/* START GET STARTED SECTION */}
      <div className="p-10 text-4xl font-bold">
        <h1>Get Started With Forward</h1>
      </div>

      <div className="flex items-center justify-center p-10">

        <div className="p-10 flex flex-col justify-center items-center">
          <Image className="pb-4" src={blocks}/>
          <h2>Browse our list of local expert mentors within your community and receive guidance</h2>
        </div>

        <div className="p-10 flex flex-col justify-center items-center">
          <div className="">
            <Image className="pb-4" src={faq} />
          </div>
          <div className="">
            <h2 className="">Dont know where to start? Take our survey to get matched with local mentors to help kickstart your journey!</h2>
          </div>
        </div>

        <div className="p-10 flex flex-col justify-center items-center">
          <Image className="pb-4" src={feedback}/>
          <h2>Post your best work on our project showcase to get feedback and connect with fellow peers and mentors</h2>
        </div>
        
      </div>
      {/* END GET STARTED SECTION */}


      {/* START TESTIMONIAL SECTION */}
      <div className="p-10 text-4xl font-bold">
        <h1>Here's what our users have to say about us</h1>
      </div>
      
      {/* START TESTIMONIAL CARDS */}
      <div className="flex flex-row items-center justify-center">
        {/* START TESTIMONIAL CARD 1 */}
        <div className="flex flex-col">
          <div className="w-[360px] p-10">
            <Image 
              src={quote}
              className="w-10"
            />
            <p className="mt-5">I love f mentoring because it feels amazing to see my mentees succeed. I was thrilled to be able to mentor a young coder through this mentorship program. It was an incredibly rewarding experience to be able to share my knowledge and expertise with someone who was just starting out in the field.</p>
          </div>
          <div className="p-10">
            <Image />
            <h3>Rachel Garcia</h3>
            <p>Mentor</p>
          </div>
        </div>
        {/* END TESTIMONIAL CARD 1 */}

        {/* START TESTIMONIAL CARD 2 */}
        <div className="flex flex-col">
          <div className="w-[364px] p-10">
            <Image 
              src={quote}
              className="w-10"
            />
            <p className="mt-5">I love mentoring because it feels amazing to see my mentees succeed. I was thrilled to be able to mentor a young coder through this mentorship program. It was an incredibly rewarding experience to be able to share my knowledge and expertise with someone who was just starting out in the field.</p>
          </div>
          <div className="p-10">
            <Image />
            <h3>Benjamin Moreno</h3>
            <p>Mentor</p>
          </div>
        </div>
        {/* END TESTIMONIAL CARD 2 */}

        {/* START TESTIMONIAL CARD 3 */}
        <div className="flex flex-col">
          <div className="w-[364px] p-10">
            <Image 
              src={quote}
              className="w-10"
            />
            <p className="mt-5">I love mentoring because it feels amazing to see my mentees succeed. I was thrilled to be able to mentor a young coder through this mentorship program. It was an incredibly rewarding experience to be able to share my knowledge and expertise with someone who was just starting out in the field.</p>
          </div>
          <div className="p-10">
            <Image />
            <h3>Elijah Kingston</h3>
            <p>Mentor</p>
          </div>
        </div>
        {/* END TESTIMONIAL CARD 3 */}

      </div>
      {/* END TESTIMONIAL SECTION */}


    </main>
  )       
}
 