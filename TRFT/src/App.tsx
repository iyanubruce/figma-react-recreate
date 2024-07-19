import './App.css'
import Navbar from './assets/Navbar'
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom'
import Order from './assets/Order'
import Contact from './assets/Contact'
import About from './assets/About'
import OrderPlaced from './assets/OrderPlaced'
import Home from './assets/home'
export default function App() {
  return (
    <div className='bg-purple-500'>
        <Router>
    <Navbar />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Order' element={<Order />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Orderplaced' element={<OrderPlaced />} />       
      </Routes>
    </Router>
    </div>
    
    
  )
}