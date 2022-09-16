import React from 'react'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import Experience from './components/experience/experience'
import Services from './components/services/services'
import Testimonials from './components/testimonials/testimonials'
import Portfolio from './components/portfolio/portfolio'
import About from './components/about/about'
const App = () => {
  return (<>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer/>
    </>
  )
}

export default App