import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './styles/Tabs.scss'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';


function TabsInfo(props){
      console.log(props);
      const tabsTodos = props.tabs;
      const tabsType = props.tabType;
      console.log(tabsType);

   
      const title = tabsTodos.map((x, i) =>{
            return(
                  <Tab  key={x.id}>{x.title}</Tab>
            )
      });

      
      
      let content
      if(tabsType === "tabformularios"){
             content = tabsTodos.map((x, i) =>{
                  return(
                         <TabPanel key={x.id}>   
                              <div className="w-full px-8">
                                    <form className="formularioTab bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                        <h2 className="text-center text-gray-700 text-2xl font-bold mb-8">{x.meses} <i className="fas fa-question-circle"></i></h2>
                                        
                                        <div className="flex  justify-between">
                                          <div className="w-1/2 pr-2">
                                               <small className="text-base block text-center text-gray-700">Adultos:</small>
                                               <b className="text-base block text-center font-normal text-gray-700">{x.priceAdulto}</b>
                                               <div className="relative mb-2">
                                                      <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                            <option>Adultos (12+ Años)</option>
                                                            <option>1</option>
                                                            <option>2</option>
                                                      </select>
                                               </div>
                                         </div>
                                         <div className="w-1/2 pl-2">
                                               <small className="text-base block text-center text-gray-700">Niños:</small>
                                               <b className="text-base block text-center font-normal text-gray-700">{x.priceNino}</b>
                                               <div className="relative mb-2">
                                                      <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                            <option>Niños (5-11 años)</option>
                                                            <option>1</option>
                                                            <option>2</option>
                                                      </select>
                                               </div>

                                          </div>
                                        </div>
                                         <DayPickerInput onDayChange={day => console.log(day)} /> 
                                         <div className="services">
                                               <div className="itemsServices flex justify-between  mb-2">
                                                      <div className="text-xs sm:text-sm md:text-xl text-center text-gray-700 border-solid border-2 border-gray-700 rounded-full py-2 p-2 sm:px-4 w-5/6 mr-2 cursor-pointer hover:bg-gray-300">Agregar <i className="fas fa-bus"></i> transportación</div>
                                                      <div className="text-xs sm:text-sm md:text-xl text-center text-gray-700 border-solid border-2 border-gray-700 rounded-full py-2 p-2 sm:px-4 w-1/6 cursor-pointer hover:bg-gray-300">info</div>
                                               </div>
                                               <div className="itemsServices flex  justify-between  mb-2">
                                                      <div className="text-xs sm:text-sm md:text-xl text-center text-gray-700 border-solid border-2 border-gray-700 rounded-full py-2 p-2 sm:px-4 w-5/6 mr-2 cursor-pointer hover:bg-gray-300">Agregar <i className="fas fa-utensils"></i> alimentos y bebidas</div>
                                                      <div className="text-xs sm:text-sm md:text-xl text-center text-gray-700 border-solid border-2 border-gray-700 rounded-full py-2 p-2 sm:px-4 w-1/6 cursor-pointer hover:bg-gray-300">info</div>
                                               </div>
                                               <div className="itemsServices flex justify-between  mb-2">
                                                      <div className="text-xs sm:text-sm md:text-xl text-center text-gray-700 border-solid border-2 border-gray-700 rounded-full py-2 p-2 sm:px-4 w-5/6 mr-2 cursor-pointer hover:bg-gray-300">Agregar <i className="fas fa-camera"></i>  Fotopass</div>
                                                      <div className="text-xs sm:text-sm md:text-xl text-center text-gray-700 border-solid border-2 border-gray-700 rounded-full py-2 p-2 sm:px-4 w-1/6 cursor-pointer hover:bg-gray-300">info</div>
                                               </div>                                                                                                                                                
                                         </div>
                                         <div className="font-bold text-center text-2xl">TOTAL: $93.49 USD</div>
                                         <p className="text-center">*Precios sujestos a cambio sin previo aviso. Aplican restriciones</p>
                                         <div className="botonesComprar flex justify-between mb-2">
                                                <div className="text-xs sm:text-sm  text-center rounded-full py-2 p-2 sm:px-4 bg-red-400 w-1/2 mr-2 text-white flex items-center justify-center cursor-pointer font-semibold hover:bg-red-500">AGREGAR AL CARRITO</div>
                                                <div className="text-xs sm:text-sm  text-center rounded-full py-2 p-2 sm:px-4 bg-red-600 w-1/2 ml-2 text-white flex items-center justify-center cursor-pointer font-semibold hover:bg-red-700">PAGAR</div>
                                         </div>
                                         <div className="text-center text-gray-700 border-solid border-2 border-gray-700 rounded-full py-2 p-2 sm:px-4  cursor-pointer hover:bg-gray-300">Ver descuentos y beneficios</div>
                                    </form>
                              </div>
                        </TabPanel>
                  )
            });
      }else if(tabsType === "tabdetalles"){
            content = tabsTodos.map((x, i) =>{
                  return(
                        <TabPanel key={x.id}>   
                              <div className="w-full px-8">
                                    <p className="text-gray-700 mb-2 mt-2">{x.detalle}</p>
                                    <b className="text-gray-700 mb-2 block">{x.text}</b>
                                    <div className="imagesDetalles flex justify-between">
                                          <img src={x.img} className="w-2/5"/>
                                          <img src={x.img} className="w-2/5"/>
                                    </div>
                              </div>
                        </TabPanel>
                  )
            });
      }
  
      const displayTabs = (
            <Tabs defaultIndex={1} onSelect={index => console.log(index)}>
                  <TabList>
                        {title}
                  </TabList>
                  {content}
            </Tabs>
      )
     return(                      
            <div className="TabsInfo">
                  {displayTabs}
                  
            </div>                          
      )
}
export default TabsInfo