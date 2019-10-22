import React from 'react'
import '../components/styles/Home.scss'
/* import Navbar from '../components/Navbar' */
import Carousel from '../components/Carousel'
import TabsInfo from '../components/Tabs'

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
                </div>
        )
            
    }
}

export default Home