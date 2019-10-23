import React, {Component} from 'react'
import './styles/Footer.scss'
import Logotipos from '../components/logotipos'
import ListaLinks from '../components/ListaLinks'
import { parques } from '../todos.json';
import { destinos } from '../todos.json';
import { sitios } from '../todos.json';
import { comprar } from '../todos.json';
import { sobre } from '../todos.json';
import { otros } from '../todos.json';

class Footer extends Component{
      constructor() {
            super();
            this.state = {
                  parques,
                  destinos,
                  sitios,
                  comprar,
                  sobre,
                  otros        
            }
        }
      render(){
            
            return(
                  <footer className="footer p-2 mt-4">
                       <Logotipos logos={parques}/>
                       <ListaLinks listado={destinos} listName="Destinos"/>
                       <ListaLinks listado={sitios} listName="Sitios Xcaret"/>
                       <ListaLinks listado={comprar} listName="Comprar"/>
                       <ListaLinks listado={sobre} listName="Sobre Xcaret"/>
                       <ListaLinks listado={otros} listName="Otros"/>
                       <div className="custumer">
                              <h2>Custumer service/ Salas:</h2>
                              <p>Monday to Friday from 7:00 AM / Saturday and Sunday from 7:00 AM to 10:00 PM. lOCAL Time.</p>
                              <b>Toll free number within Méxco</b>
                              <div>
                                    <a><span>Cancún</span> 998-883-3143</a>
                                    <a></a>
                              </div>
                              <b>Toll free number within Méxco</b>
                              <div>
                                    <a></a>
                                    <a></a>
                              </div>
                       </div>
                  </footer>
                
            )
      }
}
export default Footer