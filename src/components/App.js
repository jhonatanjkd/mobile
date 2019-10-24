import React from 'react'
import Header from '../components/header'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar' 
import {BrowserRouter, Route} from 'react-router-dom'
import Home from '../pages/Home'



function App(){


  return (
    
    <BrowserRouter>
      <Header />
      <Route path="/" component={Home} />
      <Footer />
      <Navbar />
    </BrowserRouter>
  )
}

export default App