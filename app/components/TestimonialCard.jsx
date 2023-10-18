import Image from "next/image";
import { iconClarityQuote } from "../assets/images";

export default function TestimonialCard( {testimonialData} ) {
  return (
    <div key={testimonialData.id} className="flex flex-col">
      <div className="w-[360px] p-10">
        <Image alt="icon Quote" src={iconClarityQuote} className="w-10" />
        <p className="mt-5">
            {testimonialData.description}
        </p>
      </div>
      <div className="p-10">
        <Image
        alt={testimonialData.alt}
        src={testimonialData.image}
        className="w-16 h-16 max-w-full rounded-full flex items-center justify-center object-cover aspect-square"
        />
        <h3>{testimonialData.name}</h3>
        <p>{testimonialData.title}</p>
      </div>
    </div>
  );
}
