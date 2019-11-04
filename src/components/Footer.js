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
                              <h2 className = "text-white font-bold border-solid border-white border-b-2 mb-6" > Custumer service / Salas: </h2>
                              <p className="text-white mb-6">Monday to Friday from 7:00 AM / Saturday and Sunday from 7:00 AM to 10:00 PM. lOCAL Time.</p>
                              <b className="text-white mb-3 block">Toll free number within Méxco</b>
                              <div className="flex justify-between mb-3">
                                    <div className="w-1/2 pr-2">
                                          <a className = "text-white block   text-center item-tel rounded-lg py-3 cursor-pointer"  href="/#"> <span className = "block" > Cancún: </span> 998-883-3143</a>
                                    </div>
                                     < div className = "w-1/2 pl-2" >
                                          <a className = "text-white block  text-center item-tel rounded-lg py-3 cursor-pointer"  href="/#"> <span className = "block" > Playa del Carmen: </span> 984-206-0038</a>
                                    </div>
                                    
                                    
                              </div>
                              <b className="text-white mb-3 block">Toll free number within Méxco</b>
                              <div className="flex justify-between mb-3 flex-wrap">
                                    <div className="w-1/2 pr-2 mb-3">
                                           <a className="text-white block  text-center item-tel rounded-lg py-3 cursor-pointer"  href="/#"><span className="block">USA-CAN:</span> 1-855-326-0682</a>
                                    </div>
                                    <div className="w-1/2 pl-2 mb-3">
                                          <a className="text-white block  text-center item-tel rounded-lg py-3 cursor-pointer"  href="/#"><span className="block">Brazil:</span> 0-800-892-3371</a>
                                    </div>
                                   <div className="w-1/2 pr-2 mb-3">
                                          <a className="text-white block  text-center item-tel rounded-lg py-3 cursor-pointer"  href="/#"><span className="block">Argentina:</span> 0-800-892-3371</a>
                                    </div>
                                    <div className="w-1/2 pl-2 mb-3">
                                          <a className="text-white block  text-center item-tel rounded-lg py-3 cursor-pointer"  href="/#"><span className="block">Colombia:</span> 01-800-952-0705</a>
                                    </div>
                                    <div className="w-1/2 pr-2 mb-3">
                                          <a className="text-white block   text-center item-tel rounded-lg py-3 cursor-pointer"  href="/#"><span className="block">Spain:</span> 900-965-224</a>
                                    </div>
                                    <div className="w-1/2 pl-2 mb-3">
                                          <a className="text-white block  text-center item-tel rounded-lg py-3 cursor-pointer"  href="/#"><span className="block">Chile:</span> 0-800-835-016</a>                      
                                    </div>     
                              </div>
                              <img src="https://www.xcaret.com/img/reconocimientos_es.svg" className="w-full mb-4" alt=""/>
                              <div className="redes flex justify-around mb-4">
                                    <a className="text-white text-3xl cursor-pointer hover:text-blue-700"  href="/#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="text-white text-3xl cursor-pointer hover:text-blue-400"  href="/#"><i className="fab fa-twitter"></i></a>
                                    <a className="text-white text-3xl cursor-pointer hover:text-pink-800"  href="/#"><i className="fab fa-instagram"></i></a>
                                    <a className="text-white text-3xl cursor-pointer hover:text-red-600"  href="/#"><i className="fab fa-youtube"></i></a>
                              </div>
                        </div>
                        <p className="text-white mb-2">Xcaret - México, Chetumal - Puerto Juárez Federal Highway, Km. 282, Rancho Xcaret, Playa del Carmen, Quintana Roo México. CP 77710.</p>
                        <p className="text-white mb-2">Teléfono Cancún: 998-883-3143 www.xcaret.com/en/ Open Monday to Sunday from 8:30 a.m. to 10:30 p.m.</p>
                        <p className="text-white mb-2">Copyright 2019 Experiencias Xcaret Parques, S.A.P.I. de C.V</p>
                  </footer>
                
            )
      }
}
export default Footer