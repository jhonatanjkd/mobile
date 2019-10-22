import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


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
                              <div> {x.title}</div>
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