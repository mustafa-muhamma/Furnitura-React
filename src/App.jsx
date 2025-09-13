
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CardDesc from './components/CardDesc'
import Checkout from './components/Navbar/Checkout'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='products/:id' element={<CardDesc />} />
          <Route path='/cart' element={<Checkout />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<h1>404</h1>} />

        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
