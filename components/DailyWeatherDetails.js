import react from 'react'
import {convertTimestamp} from '../utils/timestampConverter'
import Clock from 'react-live-clock';
import DataContainer from './DataContainer'

function DailyWeatherDetails({OneCallWeatherData}) {

    const URL = 'http://openweathermap.org/img/wn/'

    //console.log("offset>>>"+oneCallWeatherData?.timezone_offset)
    return (
        <div className="p-4 bg-white bg-opacity-50 flex flex-1 flex-col ml-2">

            
            
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="pr-2 text-6xl font-bold tracking-wider">
                        <Clock format={'HH:mm:ss'} ticking={true} timezone={OneCallWeatherData.timezone}/>
                        <span className="text-right font-light text-3xl">hs</span>
                    </h2>
                </div>
                <div className="flex flex-1 ">
                    <DataContainer image="sunrise" title="Amanecer" data={convertTimestamp(OneCallWeatherData.current.sunrise, "sp-ES", OneCallWeatherData.timezone_offset).compacthour} units="hs" color="bg-white bg-opacity-50"/>
                    <DataContainer image="sunset" title="Ocaso" data={convertTimestamp(OneCallWeatherData.current.sunset, "sp-ES", OneCallWeatherData.timezone_offset).compacthour} units="hs" color="bg-white bg-opacity-50"/>
                </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4">
                <DataContainer image="morning" title="Mañana" data={OneCallWeatherData.daily[0].temp.morn} units="°C" color="bg-white bg-opacity-50" sufix={"ST "+Math.round(OneCallWeatherData.daily[0].feels_like.morn)+"°C"} round={true}/>
                <DataContainer image="noon" title="Mediodia" data={OneCallWeatherData.daily[0].temp.day} units="°C" color="bg-white bg-opacity-50" sufix={"ST "+Math.round(OneCallWeatherData.daily[0].feels_like.day)+"°C"} round={true}/>
                <DataContainer image="evening" title="Tarde" data={OneCallWeatherData.daily[0].temp.eve} units="°C" color="bg-white bg-opacity-50" sufix={"ST "+Math.round(OneCallWeatherData.daily[0].feels_like.eve)+"°C"} round={true}/>
                <DataContainer image="night" title="Noche" data={OneCallWeatherData.daily[0].temp.night} units="°C" color="bg-white bg-opacity-50" sufix={"ST "+Math.round(OneCallWeatherData.daily[0].feels_like.night)+"°C"} round={true}/>
            </div>
            
        </div>
    )
}

export default DailyWeatherDetails
