import CurrentWeather from './CurrentWeather'
import DailyWeatherDetails from './DailyWeatherDetails'

function HomeComponent({CurrentWeatherData, OneCallWeatherData}) {

    return (
        <main>
            <div className="container flex flex-col lg:flex-row">
                <CurrentWeather CurrentWeatherData={CurrentWeatherData} OneCallWeatherData={OneCallWeatherData}/>
                <DailyWeatherDetails OneCallWeatherData={OneCallWeatherData}/>
            </div>
        </main>
    )
}

export default HomeComponent
