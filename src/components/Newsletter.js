import React, {Component} from 'react'


class NewsLetter extends Component{
      render(){
            return(
                  <div className="newsletter mx-4 mt-4">
                        <div className="shadow p-2 mb-2">
                              <div className="text-center">
                                     <i className="fas fa-envelope-open text-6xl font-bold mx-auto"></i>
                                     
                              </div>
                              <p className="mb-2 font-semibold">Recibe promociones y noticias de Xcaret para disfrutar en tus próximas vacaciones.</p>
                              <div className="rounded-full mb-4 p-2 flex items-center justify-center bg-black w-full text-white">SUSCRIBIRME</div>
                        </div>
                  </div>
                
            )
      }
}
export default NewsLetter