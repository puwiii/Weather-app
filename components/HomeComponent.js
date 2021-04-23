import CurrentWeather from './CurrentWeather'
//const oneCall = await fetch(`https://api.openweathermap.org/data/2.5/${requests.fetchOneCall.url(request.coord.lat,request.coord.lon)}`).then(response=>response.json())
function HomeComponent({CurrentWeatherData, OneCallWeatherData}) {

    return (
        <div>
            <CurrentWeather CurrentWeatherData={CurrentWeatherData}/>
        </div>
    )
}

export default HomeComponent
