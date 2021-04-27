import CurrentWeather from './CurrentWeather'
import DailyWeatherDetails from './DailyWeatherDetails'

function HomeComponent({CurrentWeatherData, OneCallWeatherData}) {

    return (
        <main>
            
            <div className="flex flex-col max-w-100">
                <CurrentWeather CurrentWeatherData={CurrentWeatherData} OneCallWeatherData={OneCallWeatherData}/>
                <DailyWeatherDetails OneCallWeatherData={OneCallWeatherData}/>
            </div>
            
        </main>
    )
}

export default HomeComponent
