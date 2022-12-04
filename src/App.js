import logo from './logo.svg';
import './App.css';
import './AppHover.css'
import Banner from './components/Banner';
import Portfolio from './components/Portfolio';
import Nav from './components/Nav';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Fade from "react-reveal"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return <>
  <Nav/>
  

  <Fade bottom>
  
  <Router>
  
    <Routes>
    
      <Route path='/' element={<Banner/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
  </Router>
      <About />
      <Skills/>
      <Portfolio/>
      <Contact/>
    </Fade>
  </>
}

export default App;
