import React from 'react'
import '../components/styles/Home.scss'
import Carousel from '../components/Carousel'
import TabsInfo from '../components/Tabs'
import Newsletter from '../components/Newsletter'
import DownloadApp from '../components/DownloadApp'

import { carousel } from '../todos.json';
import { tabsFrom } from '../todos.json';
import { tabsDetalles } from '../todos.json';
class Home extends React.Component{
    constructor() {
        super();
        this.state = {
            carousel,
            tabsFrom,
            tabsDetalles          
        }
    }
    render(){         
        return (                
                <div className = "home" >                     
                    <h1 className="font-semibold text-base sm:text-lg md:text-xl text-center py-2">Admisión Parque Xcaret</h1> 
                    <Carousel carousel={carousel}/>
                    <TabsInfo tabs={tabsFrom} tabType="tabformularios"/>
                    <TabsInfo tabs={tabsDetalles} tabType="tabdetalles"/>
                    <section className="cards px-8 mt-4">
                        <p className="text-center text-xl mb-2">Hasta 12 <b>meses</b> sin intereses</p> 
                        <div className="flex sm:justify-between justify-between mt-4 mb-4">
                            <img src="https://www.xcaret.com/img/bancos/american.png" className=" mx-1" alt=""/>
                            <img src="https://www.xcaret.com/img/bancos/visa.png" className=" mx-1" alt=""/>
                            <img src="https://www.xcaret.com/img/bancos/mastercard.png" className=" mx-1" alt=""/>
                            <img src="https://www.xcaret.com/img/bancos/discover.png" className=" mx-1" alt=""/>
                            <img src="https://www.xcaret.com/img/bancos/diners.png" className=" mx-1" alt=""/>
                            <img src="https://www.xcaret.com/img/bancos/paypal.png" className=" mx-1" alt=""/>
                         
                        </div>
                        <p>Con los principales bancos y tarjetas emitidas en México.</p>
                        <p>*No aplica Paylpal <a href="/#" className="font-bold">Más opciones <i className="fas fa-angle-double-right"></i></a></p>                       
                    </section>
                    <Newsletter/>
                    <DownloadApp/>
                </div>
        )
            
    }
}

export default Home