import React, { useRef } from "react"
import "./contact.css"
import { MdOutlineEmail } from "react-icons/md"
import { BiSolidMessageRoundedDetail } from "react-icons/bi"
import { BsWhatsapp } from "react-icons/bs"
import emailjs from "emailjs-com"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    console.log(e)

    emailjs
      .sendForm(
        "service_ekb686f",
        "template_lk8vgb7",
        form.current,
        "bDUqIBlN9p7zV3A3y"
      )
      .then(
        (result) => {
          console.log(result.text)
          e.target.reset()
          toast.success("Submitted Thank you!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          })
        },
        (error) => {
          // console.log(error.text)
          toast.error(error.text, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          })
        }
      )
  }
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__icon" />
            <h4>Email</h4>
            <h5>madhubalan1247@gmail.com</h5>
            <a
              href="mailto:madhubalan1247@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BiSolidMessageRoundedDetail className="contact__icon" />
            <h4>LinkedIn Messenger</h4>
            <h5>Madhu Balan T</h5>
            <a
              href="www.linkedin.com/in/madhu-balan-js"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__icon" />
            <h4>WhatsApp</h4>
            <h5>+91 ##### #####</h5>
            <a
              href={`https://web.whatsapp.com/send?phone=${7397068019}&text=${encodeURIComponent(
                "Hi Madhu Balan....have a great day"
              )}&app_absent=0,`}
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows={7}
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  )
}

export default Contact
