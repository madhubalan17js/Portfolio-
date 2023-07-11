import React from "react"
import "./footer.css"
import { BsLinkedin } from "react-icons/bs"
import { FaGithub } from "react-icons/fa"
import { GrInstagram } from "react-icons/gr"
import { ImWhatsapp } from "react-icons/im"
import { TfiEmail } from "react-icons/tfi"

const Footer = () => {
  return (
    <footer>
      <a className="footer__logo" href="#!">
        MADHU
      </a>
      <ul className="permalinks">
        <li>
          <a href="#!">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="experience">Experience</a>
        </li>
        <li>
          <a href="#service">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonals">Testimonals</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
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
      <div className="footer__copy">
        <small>&copy;Madhu Balan, All right reserved</small>
      </div>
    </footer>
  )
}

export default Footer
