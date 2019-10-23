import React, {Component} from 'react'


class DownloadApp extends Component{
      render(){
            return(
                  <div className="downloadApp mx-4 mt-4">
                     <div className="shadow p-2 mb-2 flex">
                        <div className="w-1/5 p-2 text-center">
                              <i className="fas fa-mobile-alt text-6xl font-bold"></i>
                        </div>
                        <div className="w-4/5 p-2">
                              <p className="mb-2">Descarga gratis nuestra app y disfruta de una experiencia única en tu visita</p>
                              <div className="flex items-center bg-gray-900 mb-2 rounded-sm">
                                    <div className="w-1/5 p-2">
                                           <i className="fab fa-google-play text-4xl font-bold text-white"></i>
                                    </div>
                                    <div className="w-4/5 p-2">
                                          <p className="text-white">Disponible en </p>
                                          <b className="text-white">Google Play</b>
                                    </div>
                              </div>
                              <div className="flex items-center bg-gray-900 mb-2 rounded-sm">
                                    <div className="w-1/5 p-2">
                                          <i className="fab fa-apple text-4xl font-bold text-white"></i>
                                    </div>
                                    <div className="w-4/5 p-2 text-white">
                                          <p>Consiguelo en el </p>
                                          <b>App Store</b>
                                    </div>
                              </div>
                        </div>
                     </div>
                  </div>
                
            )
      }
}
export default DownloadApp