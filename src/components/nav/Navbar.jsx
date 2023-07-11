import React, { useState } from "react"
import "./navbar.css"
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai"
import { BiBook } from "react-icons/bi"
import { RiServiceLine } from "react-icons/ri"
import { BiMessageSquareDetail } from "react-icons/bi"

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#header")

  // if (!window.location.reload) {
  //   window.location.reload("#header")
  // }
  // // window.location.reload("#header")
  return (
    <nav>
      <a
        href="#header"
        rel="noreferrer"
        className={activeNav === "#header" ? "active" : ""}
        onClick={() => setActiveNav("#header")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        rel="noreferrer"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        rel="noreferrer"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#service"
        rel="noreferrer"
        onClick={() => setActiveNav("#service")}
        className={activeNav === "#service" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        rel="noreferrer"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  )
}

export default Navbar
