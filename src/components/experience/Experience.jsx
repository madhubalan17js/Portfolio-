import React from "react"
import "./experience.css"
import { FrontEnd, BackEnd } from "../../Data"
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Developer</h3>
          <div className="experience__content">
            {FrontEnd.map((item, index) => (
              <article className="experience__details" key={index}>
                {item.patch}
                <div>
                  <h4>{item.Program}</h4>
                  <small className="text-light">{item.Level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Developer</h3>
          <div className="experience__content">
            {BackEnd.map((item, index) => (
              <article className="experience__details" key={index}>
                {item.patch}
                <div>
                  <h4>{item.Program}</h4>
                  <small className="text-light">{item.Level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
