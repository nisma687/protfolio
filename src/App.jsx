

import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'

function App() {

  return (
    <div className='mx-auto max-w-6xl'>
      <Navbar />
    <Outlet />
     <Footer />
    </div>
  )
}

export default App
