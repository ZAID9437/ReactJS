import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import NotFound from './Pages/NotFound'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Kids from './Pages/Kids'
import Courses from './Pages/Courses'
import Coursedetails from './Pages/Coursedetails'
import Navbar2 from './Components/Navbar2'


const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar/>
      <Navbar2 />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/courses' element={<Courses/>} />
          <Route path='/courses/:courseId' element={<Coursedetails/>} />
          <Route path='/product' element={<Product/>} >
            <Route path='men' element={<Men/>} />
            <Route path='women' element={<Women/>} />
            <Route path='kid' element={<Kids/>} />
          </Route>
          
          <Route path='*' element={<NotFound/>} />
        </Routes>
      <Footer/>
    </div>
  )
}

export default App
