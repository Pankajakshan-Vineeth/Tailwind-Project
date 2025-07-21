import About from "./Components/About";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar"
import Projects from "./Components/Projects";
import Testimonials from "./Components/Testimonials";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <NavBar/>
      <Header/>
      <About/>
      <Projects/>
      <Testimonials/>
      <Contact/>
    </div>
  )
}

export default App
