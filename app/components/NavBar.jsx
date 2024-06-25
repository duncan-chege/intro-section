import Image from "next/image"
import Logo from "../../public/images/logo.svg"

export default function NavBar(){
    return (
        <nav className="">
            <Image src={Logo} alt="" />
        </nav>
    )
}