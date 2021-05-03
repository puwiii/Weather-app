import Image from 'next/image'
import logotipo from "../public/imgs/logo_v2.svg";
import heroImage from "../public/imgs/home_hero.svg"
import clouds1 from "../public/imgs/clouds_home_1.svg"
import clouds2 from "../public/imgs/clouds_home_2.svg"
import clouds3 from "../public/imgs/clouds_home_3.svg"
import world from "../public/imgs/world.svg"
import clock from "../public/imgs/clock.svg"
import schedule from "../public/imgs/schedule.svg"
import Searcher from './Searcher';

function Welcome() {


    return (
        <main className="bg-primary bg-gradient-to-r from-primary  to-blue-400 text-colorText">
            <div className="container">
                {/* logo */}
                <div className="mb-6">
                    <Image 
                        src={logotipo}
                        height={100}
                        width={250}
                    />
                </div>
            </div>

            <div className="hero">
                <div className="container">
                    <div className="grid grid-flow-row auto-rows-fr md:grid-cols-2 gap-x-20">
                        <div>
                            <h1 className="text-3xl font-bold leading-normal lg:text-6xl">Que el clima no te agarre nunca desprevenido</h1>
                            <p className="py-6 text-lg font-medium text-white lg:text-2xl">Climapp es una aplicacion que te ayuda a conocer el estado del clima en la ciudad que quieras</p>
                            <p className="py-6 text-lg font-medium text-white lg:text-2xl">Es Facil, Rapido e Intuitivo</p>
                            <Searcher/>
                        </div>
                        <div className="relative">
                            <Image 
                                src={heroImage}
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    </div>
                </div>

                {/* clouds */}
                <div className="relative clouds h-16 sm:h-44 lg:h-64 xl:h-80">
                <div className="absolute top-0 left-0 w-full h-full">
                        <div className="absolute bottom-0 w-full">
                            <Image 
                                src={clouds3}
                                width={2880}
                                height={336}
                                layout="responsive"
                                objectFit="contain"
                            />
                        </div>
                        
                    </div>
                    <div className="absolute top-0 w-full h-full">
                        <div className="absolute bottom-0 w-full">
                            <Image 
                                src={clouds2}
                                width={2880}
                                height={226}
                                layout="responsive"
                                objectFit="contain"
                            />
                        </div>
                        
                    </div>
                    <div className="absolute top-0 w-full h-full">
                        <div className="absolute bottom-0 w-full">
                            <Image 
                                src={clouds1}
                                width={2880}
                                height={145}
                                layout="responsive"
                                objectFit="contain"
                            />
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="features bg-white py-10">
                <div className="container grid-row-3 lg:grid grid-cols-3 lg:gap-x-5">
                    <div className="py-12 flex flex-col justify-start items-center">
                        <div className="relative">
                            <Image
                                src={world}
                                height={200}
                                width={220}
                                layout="fixed"
                                objectFit="contain"
                            />
                        </div>
                        <h2 className="relative text-6xl font-bold py-4 -left-4">
                            +<span className="text-6xl md:text-8xl">Info</span>
                        </h2>
                        <p className="text-center text-xl font-medium w-2/3">
                            Informacion completa del clima actual en todo el mundo
                        </p>
                    </div>
                    <div className="py-12 flex flex-col justify-start items-center">
                        <div className="relative">
                            <Image
                                src={clock}
                                height={200}
                                width={220}
                                layout="fixed"
                                objectFit="contain"
                            />
                        </div>
                        <h2 className="relative text-6xl font-bold py-4 -left-4">
                            +<span className="text-6xl md:text-8xl">48</span>hs
                        </h2>
                        <p className="text-center text-xl font-medium w-2/3">
                            Informacion detallada de las proximas 48hs
                        </p>
                    </div>
                    <div className="py-12 flex flex-col justify-start items-center">
                        <div className="relative">
                            <Image
                                src={schedule}
                                height={200}
                                width={220}
                                layout="fixed"
                                objectFit="contain"
                            />
                        </div>
                        <h2 className="relative text-6xl font-bold py-4 -left-4">
                            +<span className="text-6xl md:text-8xl">8</span>dias
                        </h2>
                        <p className="text-center text-xl font-medium w-2/3">
                            Pronosticos disponibles de los proximos 8 dias
                        </p>
                    </div>
                </div>
            </div>
   
        </main>
    )
}

export default Welcome
