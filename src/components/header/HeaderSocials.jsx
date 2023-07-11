import React from "react"
import { BsLinkedin } from "react-icons/bs"
import { FaGithub } from "react-icons/fa"
import { GrInstagram } from "react-icons/gr"
import { ImWhatsapp } from "react-icons/im"
import { TfiEmail } from "react-icons/tfi"

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/madhu-balan-js/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="#!" target="_blank">
        <FaGithub />
      </a>
      <a href="#!" target="_blank">
        <GrInstagram />
      </a>
      <a href="#!" target="_blank">
        <ImWhatsapp />
      </a>
      <a href="#!" target="_blank">
        <TfiEmail />
      </a>
    </div>
  )
}

export default HeaderSocials
