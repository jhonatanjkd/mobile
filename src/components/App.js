import React from 'react'
import Header from '../components/header'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar' 
import {HashRouter, Route} from 'react-router-dom'
import Home from '../pages/Home'



function App(){


  return (
    
    <HashRouter>
      <Header />
      <Route path="/" component={Home} />
      <Footer />
      <Navbar />
    </HashRouter>
  )
}

export default App