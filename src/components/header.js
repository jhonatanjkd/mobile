import React, {Component} from 'react'
import './styles/Header.scss'

class Header extends Component{
      render(){
            return(
                  <header className="flex">
                      <div className="logotipoHeader w-1/2 px-3">
                           { <img src={'https://www.xcaret.com/img/xcaret_logo_es.svg'} alt="xcaret" /> }
                      </div>
                       <div className="menuHeader w-1/2 flex justify-between text-center items-center">
                           <a><i className="fas fa-user"></i></a>
                           <a><i className="fas fa-phone"></i></a>
                           <a><i className="fas fa-shopping-cart"></i></a>
                           <a><i className="fas fa-globe"></i></a>
                       </div>
                  </header>
            )
      }
}
export default Header