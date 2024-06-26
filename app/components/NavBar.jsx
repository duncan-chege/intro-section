import * as React from "react";

import Image from "next/image"
import Logo from "../../public/images/logo.svg"

export default function NavBar(){
return (
  <>
    <Image src={Logo} alt="" />
  </>
)
}