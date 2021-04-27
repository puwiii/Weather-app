import Image from 'next/image'
import logotipo from "../imgs/logo.svg";
import Searcher from './Searcher';
import sky from '../imgs/prueba.jpg'

function Welcome() {
    return (
        <div className="absolute top-0 left-0 z-0 w-screen h-screen 
        bg-gradient-to-r 
        from-yellow-100 to-pink-200 
        
        ">
            <div className="container">
                <div className="relative w-full max-w-md h-60 m-auto">
                    <Image
                        src={logotipo}
                        layout="fill"
                        objectFit="contain"
                        quality={50}
                        className="filter drop-shadow-md"
                    />
                </div>
                <div className="md:w-1/2 m-auto">
                    <div className="text-xl text-center md:text-2xl ">
                        <p className="font-medium text-gray-900">
                        <h1 className="font-bold inline mr-2">Climapp</h1>
                            te ayuda a conocer el estado del clima en la ciudad que quieras
                        </p>
                        <p className="text-4xl text-center md:text-4xl font-bold text-gray-900 py-8 tracking-tight">
                        Es facil, rapido e intuitivo
                        </p>
                    </div> 
                    <div>
                        {/* <p className="mb-4 text-center text-lg text-gray-700 font-regular">Empecemos buscando el clima en tu ciudad</p> */}
                        <Searcher/>
                    </div>
                </div>
            </div>
            {/* <div className="container w-full h-full flex flex-col gap-x-20 items-center justify-center z-index-50 md:grid md:grid-cols-2 md:grid-rows-1">
               
               <div className="relative w-1/2 h-min m-auto">
                    <Image
                        src={logotipo}
                        layout="fill"
                        objectFit="contain"
                        quality={50}
                        className="filter drop-shadow-md"
                    />
               </div>
                <div className="pb-8 grid grid-rows-2 gap-y-8 flex-1">

                    <div className="text-xl text-center md:text-3xl">
                        
                        <p className="font-medium text-gray-700">
                        <h1 className="text-3xl font-bold inline mr-2">Climapp</h1>
                            te ayuda a conocer el estado del clima en la ciudad que quieras. Es facil, rapido e intuitivo
                        </p>
                    </div> 
                    <div>
                        <p className="mb-4 text-center text-lg text-gray-700 font-regular">Empecemos buscando el clima en tu ciudad</p>
                        <Searcher/>
                    </div>
                    
                </div>
                
                
            </div> */}
        </div>
    )
}

export default Welcome
