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
                  <Tab key={x.id}>{x.title}</Tab>
            )
      });

      
      
      let content
      if(tabsType === "tabformularios"){
             content = tabsTodos.map((x, i) =>{
                  return(
                         <TabPanel key={x.id}>   
                              <div className="w-full px-8">
                                    <form className="formularioTab bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                        <h2 className="text-center text-gray-700 text-2xl font-bold mb-8">HASTA 12 MESES SIN <br></br> INTRESES <i className="fas fa-question-circle"></i></h2>
                                        
                                        <div className="flex  -mx-3">
                                          <div className="md:w-1/2 px-3">
                                               <small className="text-base block text-center">Adultos:</small>
                                               <b className="text-base block text-center font-normal">$93.49 USD</b>
                                               <div className="relative mb-2">
                                                      <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                                            <option>Adultos (12+ Años)</option>
                                                            <option>1</option>
                                                            <option>2</option>
                                                      </select>
                                               </div>
                                         </div>
                                         <div className="md:w-1/2 px-3">
                                               <small className="text-base block text-center">Adultos:</small>
                                               <b className="text-base block text-center font-normal">$46.75 USD</b>
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
                                    </form>
                              </div>
                        </TabPanel>
                  )
            });
      }else if(tabsType === "tabdetalles"){
            content = tabsTodos.map((x, i) =>{
                  return(
                        <TabPanel key={x.id}>   
                              <div>pruebas</div>
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