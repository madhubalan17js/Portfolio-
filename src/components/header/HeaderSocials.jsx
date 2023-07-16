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
      <a
        href="https://github.com/madhubalan17js"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://instagram.com/madhu__balan?igshid=ZDc4ODBmNjlmNQ=="
        target="_blank"
        rel="noreferrer"
      >
        <GrInstagram />
      </a>
      <a
        href={`https://web.whatsapp.com/send?phone=${7397068019}&text=${encodeURIComponent(
          "Hi Madhu Balan....have a great day"
        )}&app_absent=0,`}
        target="_blank"
        rel="noreferrer"
      >
        <ImWhatsapp />
      </a>
      <a
        href="mailto:madhubalan1247@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TfiEmail />
      </a>
    </div>
  )
}

export default HeaderSocials
