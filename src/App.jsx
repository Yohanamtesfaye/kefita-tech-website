import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./Components/NavBar"
import Home from "./Pages/Home"
import AboutUs from "./Pages/AboutUs"
import Blog from "./Pages/Blog"
import BlogDescriptiom from "./Pages/BlogDescriptiom"
import Footer from "./Components/Footer"
import ContactUs from "./Pages/ContactUs"

function App() {

  return (
    <>
      <div className="bg-[#2358A8] ">
        <BrowserRouter>
        <NavBar />
          <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/blog' element = {<Blog/>}/>
          <Route path='contactus' element ={<ContactUs/>} />
          <Route path='/blogdescription:/id' element = {<BlogDescriptiom/>}/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
