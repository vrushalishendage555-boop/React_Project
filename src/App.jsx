import { BrowserRouter, Route,Routes } from "react-router-dom"
import Navigation from "./Navigation"
import Home from "./Home"
import Shop from "./Shop"
import About from "./About"
import Contact from "./Contact"



function App() {
 

  return (
    <>
    

    <BrowserRouter>
    <Navigation/>

    <Routes>

<Route path="/"  element={<Home/>}/>

<Route path="/Shop"  element={<Shop/>}/>

<Route path="/About"  element={<About/>}/>

<Route path="/Contact"  element={<Contact/>}/>


    </Routes>
    
    
    </BrowserRouter>
    </>
  )
}

export default App;
