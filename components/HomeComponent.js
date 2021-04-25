import CurrentWeather from './CurrentWeather'
import DailyWeatherDetails from './DailyWeatherDetails'

function HomeComponent({CurrentWeatherData, OneCallWeatherData}) {

    return (
        <main>
            <div className="container">
                <div className="flex flex-col max-w-100 lg:flex-row">
                    <CurrentWeather CurrentWeatherData={CurrentWeatherData} OneCallWeatherData={OneCallWeatherData}/>
                    <DailyWeatherDetails OneCallWeatherData={OneCallWeatherData}/>
                </div>
            </div>
        </main>
    )
}

export default HomeComponent
