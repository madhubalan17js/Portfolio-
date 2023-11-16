import React from "react"
import "./portfolio.css"

import { PortfolioData } from "../../Data"
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {PortfolioData.map((item, ind) => (
          <article className="portfolio__items" key={ind}>
            <div className="porfolio__item-image">
              <img src={item.img} alt="project" style={{objectFit:"cover",height:"100%"}}/>
            </div>
            <h3>{item.title}</h3>
            <p>{item.para}</p>
            <div className="portfolio__link">
              {item?.githublink && (
                <a
                  className="btn"
                  target="_blank"
                  href={item.githublink !== "" ? item.githublink : "#!"}
                  rel="noreferrer"
                >
                  Github
                </a>
              )}
              {item?.livedemo && (
                <a
                  href={item.livedemo !== "" ? item.livedemo : "#!"}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
