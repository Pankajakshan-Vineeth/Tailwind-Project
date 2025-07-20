import About from "./Components/About";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar"
import Projects from "./Components/Projects";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <NavBar/>
      <Header/>
      <About/>
      <Projects/>
    </div>
  )
}

export default App
