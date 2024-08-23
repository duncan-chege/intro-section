import Image from "next/image"
import Audiophile from "../../public/images/client-audiophile.svg"
import Databiz from "../../public/images/client-databiz.svg"
import Maker from "../../public/images/client-maker.svg"
import Meet from "../../public/images/client-meet.svg"
import HeroImage from "../../public/images/image-hero-desktop.png"

export default function Intro({isMobileMenuOpen}){
    return(
        <div className={`flex flex-row sm:flex-nowrap flex-wrap-reverse lg:mx-36 sm:mx-8 gap-6 ${isMobileMenuOpen ? "bg-almost-black/50" : ""}`}>
            <div className="sm:basis-1/2 sm:mx-0 mx-4">
                <h1 className="mt-4 sm:mt-28 w-full sm:w-2/3 sm:text-left text-center text-4xl sm:text-6xl font-bold">Make remote work</h1>
                <p className="mt-8 w-full sm:w-3/5 sm:text-left text-center text-medium-gray">Get your team in sync, no matter your location. Streamline processes, create team rituals and watch productivity soar</p>
                <a href="#" className="block w-max py-3 px-6 mx-auto sm:mx-0 my-10 border-2 font-medium rounded-xl bg-almost-black text-almost-white hover:border-almost-black hover:bg-almost-white hover:text-almost-black">Learn More</a>
                <div className="flex flex-row justify-between my-10 gap-x-4">
                    <Image src={Audiophile} className="flex-grow basis-0 min-w-0 sm:max-w-fit max-w-full object-contain" alt="Audiophile" />
                    <Image src={Databiz} className="flex-grow basis-0 min-w-0 sm:max-w-fit max-w-full object-contain" alt="Databiz" />
                    <Image src={Maker} className="flex-grow basis-0 min-w-0 sm:max-w-fit max-w-full object-contain" alt="Maker" />
                    <Image src={Meet} className="flex-grow basis-0 min-w-0 sm:max-w-fit max-w-full object-contain" alt="Meet" />
                </div>
            </div>
            <div className="sm:basis-1/2">
                <Image src={HeroImage} className="lg:h-4/6 sm:h-full object-contain w-full" alt="" />
            </div>
        </div>
    )
}