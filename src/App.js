import "./App.css"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Experience from "./components/experience/Experience"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Navbar from "./components/nav/Navbar"
import Portfolio from "./components/portfolio/Portfolio"
import Service from "./components/service/Service"
// import Testimonial from "./components/testimonial/Testimonial"

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Service />
      <Portfolio />
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
    </>
  )
}

export default App
