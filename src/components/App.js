import React from 'react'
import Header from '../components/header'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from '../pages/Home'

function App(){
  return (
    
    <BrowserRouter>
      < Header / >
      <Route path="/" component={Home} />
    </BrowserRouter>
  )
}

export default App