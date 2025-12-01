import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Tours from './pages/Tours'
import TourDetails from './pages/TourDetails'
import Booking from './pages/Booking'
import About from './pages/About'
import Contact from './pages/Contact'


export default function App(){
return (
<Router>
<Navbar />
<div style={{paddingTop:70}} />
<Routes>
<Route path='/' element={<Home/>} />
<Route path='/tours' element={<Tours/>} />
<Route path='/tours/:id' element={<TourDetails/>} />
<Route path='/booking' element={<Booking/>} />
<Route path='/about' element={<About/>} />
<Route path='/contact' element={<Contact/>} />
</Routes>
<Footer />
</Router>
)
}