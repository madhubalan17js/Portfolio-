import React from "react"
import "./service.css"
import { GiSupersonicBullet } from "react-icons/gi"
const Service = () => {
  return (
    <section id="service">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container service__container">
        <article className="service__content">
          <div className="service__header">
            <h3>React Library</h3>
          </div>
          <ul className="service__list">
            <li>
              <GiSupersonicBullet className="service__list-icon" />
              <p>React-Hooks</p>
            </li>
            <li>
              <GiSupersonicBullet className="service__list-icon" />
              <p>React-reactstrap</p>
            </li>
            <li>
              <GiSupersonicBullet className="service__list-icon" />
              <p>React-redux/toolkit</p>
            </li>
            <li>
              <GiSupersonicBullet className="service__list-icon" />
              <p>React-router</p>
            </li>
            <li>
              <GiSupersonicBullet className="service__list-icon" />
              <p>React-Table</p>
            </li>
            <li>
              <GiSupersonicBullet className="service__list-icon" />
              <p>React-Icon</p>
            </li>
          </ul>
        </article>
        <article className="service__content">
          <div className="service__header">
            <h3>React Library</h3>
          </div>
          <ul className="service__list">
            <li>
              <GiSupersonicBullet className="service__list-icon" />
              <p>Formik</p>
            </li>
            <li>
              <GiSupersonicBullet className="service__list-icon" />
              <p>Swiper</p>
            </li>
            <li>
              <GiSupersonicBullet className="service__list-icon" />
              <p>Chart js</p>
            </li>
            <li>
              <GiSupersonicBullet className="service__list-icon" />
              <p>Moment js </p>
            </li>
            <li>
              <GiSupersonicBullet className="service__list-icon" />
              <p>countdown js</p>
            </li>
          </ul>
        </article>
        <article className="service__content">
          <div className="service__header">
            <h3>Tools & VCS</h3>
          </div>
          <ul className="service__list">
            <li>
              <GiSupersonicBullet className="service__list-icon" />
              <p>Git</p>
            </li>
            <li>
              <GiSupersonicBullet className="service__list-icon" />
              <p>GitHub</p>
            </li>
            <li>
              <GiSupersonicBullet className="service__list-icon" />
              <p>VisualStudio Code</p>
            </li>
            <li>
              <GiSupersonicBullet className="service__list-icon" />
              <p>Netlify Deploy</p>
            </li>
          </ul>
        </article>
        {/* React Library End */}
      </div>
    </section>
  )
}

export default Service
