import { forwardLogoHorizontalColor } from "../../assets/images"
import Image from "next/image"

export default function Footer(){
    return(
        <div>
            <Image src={forwardLogoHorizontalColor} className="w-[250px]" alt="A logo of the Forward brand" />
        </div>
    )
}