import React, {Component} from 'react'
import './styles/Navbar.scss'

class Navbar extends Component{
      render(){

            console.log(this.props.links)
            return(
                  <nav  className="flex justify-between text-center pt-4 px-2 sticky bottom-0">
                        <div className="text-center w-1/6">
                              <a className="text-white text-xs sm:text-lg font-bold mb-2" href="">
                                    <i className="fas fa-home"></i>
                              </a>
                              <p className="mt-2 text-white text-xs">Inicio</p>
                        </div>
                       <div className="text-center w-1/6">
                               <a className="text-white text-xs sm:text-lg font-bold mb-2" href="">
                                    <i className="fas fa-heart"></i>
                              </a>
                              <p className="mt-2 text-white text-xs">Parques</p>
                       </div>
                        <div className="text-center w-1/6">
                              <a className="text-white text-xs sm:text-lg font-bold mb-2" href="">
                                    <i className="fas fa-map"></i>
                              </a>
                              <p className="mt-2 text-white text-xs">Tours</p>
                        </div>
                        <div className="text-center w-1/6">
                              <a className="text-white text-xs sm:text-lg font-bold mb-2" href="">
                                    <i className="fas fa-star"></i>
                              </a>
                              <p className="mt-2 text-white text-xs">Actividades</p>
                        </div>
                        <div className="text-center w-1/6">
                              <a className="text-white text-xs sm:text-lg font-bold mb-2" href="">
                                    <i className="fas fa-hotel"></i>
                              </a>
                              <p className="mt-2 text-white text-xs">Hospedaje</p>
                        </div>
                        <div className="text-center w-1/6">
                              <a className="text-white text-xs sm:text-lg font-bold mb-2" href="">
                                    <i className="fas fa-hand-holding-usd"></i>
                              </a>
                              <p className="mt-2 text-white text-xs">Ahorra</p>
                        </div>
                        
                  </nav>
            )
      }
}
export default Navbar