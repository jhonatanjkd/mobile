import React, {Component} from 'react'
import './styles/Navbar.scss'

class Navbar extends Component{
      render(){

            console.log(this.props.links)
            return(
                  <nav>
                        <a href="">
                              Task
                        </a>
                  </nav>
            )
      }
}
export default Navbar