import Image from "next/image"
import Logo from "../../public/images/logo.svg"

export default function NavBar(){
return (
<nav className="">
    <Image src={Logo} alt="" />
    <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
        Gotha!
    </button>
</nav>
)
}