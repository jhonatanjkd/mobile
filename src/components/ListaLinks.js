import React from 'react'


function ListaLinks(props) {
console.log(props)

   const listados = props.listado;
   const listadoNombre = props.listName;

  const list = listados.map((lista) => 
       <li  key={lista.id} className="">
             <a href={lista.url} target="_blank" className="block text-white p-1 hover:underline">
                 {lista.nombre}
             </a>            
      </li>
     
  ) 
    return(
      <section className="listaLinks mb-4">
            <div className="">
                 <p className="text-white border-solid border-white border-b-2 font-bold">{listadoNombre}</p>
                 <ul>                       
                       {list}
                 </ul>
             </div>
      </section>
    
  
    )    
  }

export default ListaLinks