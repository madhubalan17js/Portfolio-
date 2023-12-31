import React from "react"
import "./about.css"
import about_me from "../../assets/Blackframe.jpg"
import { FaAward } from "react-icons/fa"
import { FiUser } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"
const About = () => {
  return (
    <section id="about">
      <h5 className="text-light">Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <img src={about_me} alt="About" className="about__me-image" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ years of Working </small>
            </article>

            <article className="about__card">
              <FiUser className="about__icon" />
              <h5>Client</h5>
              <small>Form Texas (USA)</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>
                <a href="https://satamilsangam.org/" target="_blank" without rel="noreferrer" className="text-white">
                  Click Here
                </a>
              </small>
            </article>
          </div>
          <div>
            <p>
              As a frontend developer with experience in React, I have a strong
              proficiency in building interactive and responsive user
              interfaces. I specialize in developing reusable components,
              implementing state management, and ensuring optimal performance.
            </p>
          </div>
          <a href="#!" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
