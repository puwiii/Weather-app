import DataContainer from './DataContainer'

function CurrentWeather({CurrentWeatherData, OneCallWeatherData}) {
    
    const URL = 'http://openweathermap.org/img/wn/'

    return (
        <div className="p-4 bg-white bg-opacity-50 text-center max-w-sm flex flex-col flex-1">
            <div className="p-4 pt-0">
                <div className="leading-10">
                    <h1 className="text-4xl font-bold">{CurrentWeatherData.name}</h1>
                    <span>{CurrentWeatherData.sys.country}</span>
                </div>
                <div className="flex justify-center items-center">
                    <div>
                        <img src={URL+CurrentWeatherData.weather[0].icon+'@2x.png'} alt="" srcSet="" className="filter drop-shadow-lg w-32"/>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold">{Math.round(CurrentWeatherData.main.temp)}°C</h2>
                        <h3>ST {Math.round(CurrentWeatherData.main.feels_like)}°C</h3>
                    </div>
                </div>
            </div>
            
            
            <div className="flex justify-between items-center -mt-4">
                <DataContainer image="minTemp" title="Min" data={OneCallWeatherData.daily[0].temp.min} units="°C" color="bg-white bg-opacity-50" round="true"/>
                <DataContainer image="maxTemp" title="Max" data={OneCallWeatherData.daily[0].temp.max} units="°C" color="bg-white bg-opacity-50" round="true"/>
            </div>
            <DataContainer image="precipitation" title="Precipitaciones" data={OneCallWeatherData.daily[0].pop*100} units="%" color="bg-transparent"/>
            <DataContainer image="humedity" title="Humedad" data={OneCallWeatherData.daily[0].humidity} units="%" color="bg-transparent"/>
            <DataContainer image="wind" title="Vientos" data={CurrentWeatherData.wind.speed} sufix={CurrentWeatherData.wind.deg+"° "} units="m/s" color="bg-transparent"/>
           
            <div className="flex justify-between items-center">
                <DataContainer image="clouds" title="Nubosidad" data={CurrentWeatherData.clouds.all} units="%" color="bg-white bg-opacity-50"/>
                <DataContainer image="uv" title="indice UV" data={OneCallWeatherData.current.uvi} units="" color="bg-white bg-opacity-50"/>
            </div>
        </div>
    )
}

export default CurrentWeather
