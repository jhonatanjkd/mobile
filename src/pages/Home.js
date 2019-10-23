import React from 'react'
import '../components/styles/Home.scss'
/* import Navbar from '../components/Navbar' */
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
        let links = [
            { label : 'Home', link : '#home'}
        ]           
        return (                
                <div className = "home" >
                    {/*  <Navbar links={links} /> */}
                    {      <h1 className="font-semibold text-2xl text-center py-2">Admisión Parque Xcaret</h1> }
                    <Carousel carousel={carousel}/>
                    <TabsInfo tabs={tabsFrom} tabType="tabformularios"/>
                    <TabsInfo tabs={tabsDetalles} tabType="tabdetalles"/>
                    <section className="cards px-8 mt-4">
                        <p className="text-center text-xl mb-2">Hasta 12 <b>meses</b> sin intereses</p> 
                        <div className="flex sm:justify-between   justify-center">
                            <img src="https://via.placeholder.com/40X32" className="w-1/6 mx-1"/>
                            <img src="https://via.placeholder.com/40X32" className="w-1/6 mx-1"/>
                            <img src="https://via.placeholder.com/40X32" className="w-1/6 mx-1"/>
                            <img src="https://via.placeholder.com/40X32" className="w-1/6 mx-1"/>
                            <img src="https://via.placeholder.com/40X32" className="w-1/6 mx-1"/>
                            <img src="https://via.placeholder.com/40X32" className="w-1/6 mx-1"/>
                            <img src="https://via.placeholder.com/40X32" className="w-1/6 mx-1"/>
                        </div>
                        <p>Con los principales bancos y tarjetas emitidas en México.</p>
                        <p>*No aplica Paylpal <a href="#" className="font-bold">Más opciones <i className="fas fa-angle-double-right"></i></a></p>                       
                    </section>
                    <Newsletter/>
                    <DownloadApp/>
                </div>
        )
            
    }
}

export default Home