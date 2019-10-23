import React from 'react'
import './styles/logotipos.scss'

function Logotipos(props) {
console.log(props)

  const logos = props.logos;

  const listLogos = logos.map((logos) => 
       <div  key={logos.id} className="item-logos sm:w-1/4 w-1/3 p-3">
             <a href={logos.link} target="_blank">
                  <img src={logos.logo}  className=""/>
             </a>            
      </div>
   
  )
    return(
      <section className="logotiposall">
            <div className="listaLogos flex justify-center flex-wrap items-center">
                 {listLogos}
             </div>
      </section>
    
  
    )    
  }

export default Logotipos