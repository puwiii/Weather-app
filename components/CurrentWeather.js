function CurrentWeather({CurrentWeatherData}) {
    
    const URL = 'http://openweathermap.org/img/w/'

    return (
        <div>
            <div>
                <h1>{CurrentWeatherData?.name}</h1>
                <span>{CurrentWeatherData?.sys.country}</span>
            </div>
            <div>
                <img src={URL+CurrentWeatherData?.weather[0].icon+'.png'} alt="" srcset=""/>
                <div>
                    <h2>{Math.floor(CurrentWeatherData.main.temp)}°C</h2>
                    <h3>ST {Math.floor(CurrentWeatherData.main.feels_like)}°C</h3>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather
