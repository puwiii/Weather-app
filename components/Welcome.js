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
            <div className="absolute top-0 left-0 transform translate-x-0 w-full h-1/2 z-index-0 opacity-90 filter brightness-70 grid grid-cols-1 place-items-center 
                md:h-full md:w-1/2
            ">
                <Image
                    src={logotipo}
                    layout="fixed"
                    width={250}
                    height={250}
                    quality={50}
                    className="filter drop-shadow-md"
                />
            </div>
            <div className="relative container w-full h-full grid grid-rows-2 gap-x-0 items-center justify-center z-index-50 md:grid-cols-2 md:grid-rows-1">
               
               <div>

               </div>
                <div className="pb-8 flex grid grid-rows-2 gap-y-8">

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
                
                
            </div>
        </div>
    )
}

export default Welcome
