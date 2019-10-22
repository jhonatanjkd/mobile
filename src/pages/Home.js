import React from 'react'
import '../components/styles/Home.scss'

import Navbar from '../components/Navbar'
import Slider from '../components/slider'
class Home extends React.Component{
    render(){

        let links = [
            { label : 'Home', link : '#home'}
        ]
           
          return (
                
                <div className = "home" >
                    {/*  <Navbar links={links} /> */}
                    <h1 className="font-semibold text-2xl text-center py-2">Admisión Parque Xcaret</h1>
                    <Slider/>
                </div>
          )
            
    }
}

export default Home