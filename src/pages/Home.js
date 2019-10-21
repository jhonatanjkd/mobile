import React from 'react'
import '../components/styles/Home.scss'

import Navbar from '../components/Navbar'

class Home extends React.Component{
    render(){

        let links = [
            { label : 'Home', link : '#home'}
        ]
           
        

          return (
                
                <div className="bg-red-600 home">
                     <Navbar
                        links={links}
                     />
                        <p className="text-white">home <i className="fas fa-address-book"></i></p>  
                    
                       
                </div>
          )
            
    }
}

export default Home