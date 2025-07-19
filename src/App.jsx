import About from "./Components/About";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar"

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <NavBar/>
      <Header/>
      <About/>
    </div>
  )
}

export default App
