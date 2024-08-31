import React from 'react'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Search from './Components/Search/Search'
import Footer from './Components/Footer/Footer'
import Support from './Components/Support/Support'
import Subscribe from './Components/Subscribers/Subscribe'
import Travellers from './Components/Travellers/Travellers'
import Info from './Components/Info/Info'
import Lounge from './Components/Lounge/Lounge'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Search/>
      <Support/>
      <Lounge/>
      <Info/>
      <Travellers/>
      <Subscribe/>  
      <Footer/>
    </div>
  )
}

export default App