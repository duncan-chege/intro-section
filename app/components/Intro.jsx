import Image from "next/image"
import Audiophile from "../../public/images/client-audiophile.svg"
import Databiz from "../../public/images/client-databiz.svg"
import Maker from "../../public/images/client-maker.svg"
import Meet from "../../public/images/client-meet.svg"
import HeroImage from "../../public/images/image-hero-desktop.png"

export default function Intro(){
    return(
        <div className="flex flex-row lg:mx-36 md:mx-8 gap-6">
            <div className="basis-1/2">
                <h1 className="mt-28 text-6xl font-bold">Make<br/> remote work</h1>
                <p className="mt-8 text-medium-gray md:w-3/5">Get your team in sync, no matter your location. Streamline processes, create team rituals and watch productivity soar</p>
                <a href="#" className="py-3 px-6 my-10 border-2 hover:border-almost-black hover:bg-almost-white hover:text-almost-black font-medium rounded-xl inline-block bg-almost-black text-almost-white">Learn More</a>
            <div className="flex flex-row justify-between my-10">
                <Image src={Audiophile} className="object-contain" alt="" />
                <Image src={Databiz} className="object-contain" alt="" />
                <Image src={Maker} className="object-contain" alt="" />
                <Image src={Meet} className="object-contain" alt="" />
            </div>
            </div>
            <div className="basis-1/2">
                <Image src={HeroImage} className="object-contain lg:h-4/6 md:h-full" alt="" />
            </div>
        </div>
    )
}