import DataContainer from './DataContainer'
import Clock from 'react-live-clock';
import Image from 'next/image'

function CurrentWeather({CurrentWeatherData, OneCallWeatherData}) {
    
    const URL = 'http://openweathermap.org/img/wn/'

    return (
        <div className="p-4 py-10 text-center h-full flex flex-col flex-1 rounded-lg md:rounded-none lg:flex-row lg:items-center justify-center">
            <div className="p-4 pt-0 flex-1">
                <div className="text-center justify-between items-center m-auto">
                    <h2 className="pb-10 text-2xl font-bold tracking-wider lg:text-4xl">
                        <Clock format={'HH:mm:ss:'} ticking={true} timezone={OneCallWeatherData.timezone}/>
                    </h2>
                </div>
                <div className="leading-10">
                    <h1 className="text-2xl font-bold md:text-4xl lg:text-6xl">{CurrentWeatherData.name}</h1>
                    <span>{CurrentWeatherData.sys.country}</span>
                </div>
                <div className="w-full max-w-lg m-auto flex flex-wrap justify-evenly items-center">
                    <div className="flex-1 flex items-center justify-center relative">
                        <Image
                            src={URL+CurrentWeatherData.weather[0].icon+'@2x.png'}
                            alt=""
                            width="125"
                            height="125"
                            layout="fixed"
                            objectFit="contain"
                            quality={40}
                        />
                        <span className="text-xs font-medium absolute bottom-2 md:text-base md:relative md:bottom-0">{CurrentWeatherData.weather[0].description}</span>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold md:text-6xl">{Math.round(CurrentWeatherData.main.temp)}°C</h2>
                        <h3>ST {Math.round(CurrentWeatherData.main.feels_like)}°C</h3>
                    </div>
                    
                </div>
            </div>
            
            <div className="flex flex-1 flex-col w-full m-auto">
                <div className="flex flex-1 justify-between items-center -mt-4">
                    <DataContainer image="minTemp" title="Min" data={OneCallWeatherData.daily[0].temp.min} units="°C" color="bg-white bg-opacity-50" round="true"/>
                    <DataContainer image="maxTemp" title="Max" data={OneCallWeatherData.daily[0].temp.max} units="°C" color="bg-white bg-opacity-50" round="true"/>
                </div>
                <DataContainer image="precipitation" title="Precipitaciones" data={OneCallWeatherData.daily[0].pop*100} units="%" color="bg-transparent"/>       
                <DataContainer image="humedity" title="Humedad" data={OneCallWeatherData.daily[0].humidity} units="%" color="bg-transparent"/>
                <DataContainer image="clouds" title="Nubosidad" data={CurrentWeatherData.clouds.all} units="%"/>
                <DataContainer image="wind" title="Vientos" data={(CurrentWeatherData.wind.speed*3.6).toFixed(2)} sufix={CurrentWeatherData.wind.deg+"° "} units="k/h" color="bg-transparent"/>       
                <DataContainer image="uv" title="indice UV" data={OneCallWeatherData.current.uvi} units="" color="bg-white bg-opacity-50"/>
            </div>
            
        </div>
    )
}

export default CurrentWeather
