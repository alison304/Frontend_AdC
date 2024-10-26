import './App.css'
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Routes/Home"

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='*' element={<h2>Error 404</h2>}/>
        </Routes>
        <Footer/>
      </div>      
    </>
  )
}

export default App
