import {useState} from 'react'
import {convertTimestamp} from '../utils/timestampConverter'
import Clock from 'react-live-clock';
import DataContainer from './DataContainer'

function DailyWeatherDetails({OneCallWeatherData}) {

    const URL = 'http://openweathermap.org/img/wn/'

    const [hourlyDetails, setHourlyDetails] = useState(false)
    const [dailyDetails, setDailyDetails] = useState(false)

    function toogleHourlyBox(){
        if(hourlyDetails){
            setHourlyDetails(false)
        }
        else{
            setHourlyDetails(true)
        }
    }
    
    function toogleDailyBox(){
        if(dailyDetails){
            setDailyDetails(false)
        }
        else{
            setDailyDetails(true)
        }
    }

    //console.log("offset>>>"+oneCallWeatherData?.timezone_offset)
    return (
        <div className="p-4 bg-white bg-opacity-50 flex-1 ml-2 w-100 max-w-full">

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

            <div className={"p-1 flex flex-wrap overflow-y-hidden max-h-56 mt-12"+ (hourlyDetails ? " max-h-full":"")}>
                {OneCallWeatherData.hourly.map((hourInfo)=>(
                    <div className="bg-black bg-opacity-5 rounded-sm p-1 m-1 w-max-44 flex-1">
                        <h3 className="font-medium text-2xl text-center">
                            <span className="block font-light text-sm">{convertTimestamp(hourInfo.dt, "sp-ES", OneCallWeatherData.timezone_offset).compactdayname}</span>
                            {convertTimestamp(hourInfo.dt, "sp-ES", OneCallWeatherData.timezone_offset).hour}hs                      
                        </h3>
                        <DataContainer image={URL+hourInfo.weather[0].icon+'@2x.png'} title={hourInfo.weather[0].description} data={hourInfo.temp} units="°C" sufix={"ST "+Math.round(hourInfo.feels_like)+"°C"} round={true}/>
                        <div className="flex justify-between">
                            <DataContainer image="precipitation" data={hourInfo.pop} units="%" isCompact="true"/>
                            <DataContainer image="humedity" data={hourInfo.humidity} units="%" isCompact="true"/>
                            <DataContainer image="clouds" data={hourInfo.clouds} units="%" isCompact="true"/>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center flex justify-center">
                <button onClick={()=>toogleHourlyBox()} className="text-lg text-white font-bold px-3 py-1 mt-2 rounded-2xl bg-blue-500 focus:outline-none focus:ring-4 focus:border-blue-300" >{hourlyDetails ? "Mostrar Menos ▲" : "Mostrar Mas ▼"}</button>
            </div>
            
            <div className={"py-4 flex flex-wrap overflow-y-hidden max-h-56 mt-12"+ (dailyDetails ? " max-h-full":"")}>
                {OneCallWeatherData.daily.map((dailyInfo)=>(
                    <div className="bg-black bg-opacity-5 rounded-sm p-1 m-1 w-max-44 flex-1">
                        <h3 className="font-medium text-2xl text-center">
                            {convertTimestamp(dailyInfo.dt, "sp-ES", OneCallWeatherData.timezone_offset).compactdate}                      
                        </h3>
                        <DataContainer image={URL+dailyInfo.weather[0].icon+'@2x.png'} title={dailyInfo.weather[0].description} data={dailyInfo.temp.day} units="°C" sufix="en el dia" round={true}/>
                        <div className="flex justify-between">
                            <DataContainer image="morning" data={dailyInfo.temp.morn} units="°C" isCompact="true" round={true}/>
                            <DataContainer image="noon" data={dailyInfo.temp.day} units="°C" isCompact="true" round={true}/>
                            <DataContainer image="evening" data={dailyInfo.temp.eve} units="°C" isCompact="true" round={true}/>
                            <DataContainer image="night" data={dailyInfo.temp.night} units="°C" isCompact="true" round={true}/>
                        </div>
                        <div className="flex justify-between">
                            <DataContainer image="precipitation" data={ dailyInfo.pop*100 } units="%" isCompact="true"/>
                            <DataContainer image="humedity" data={dailyInfo.humidity} units="%" isCompact="true"/>
                            <DataContainer image="clouds" data={dailyInfo.clouds} units="%" isCompact="true"/>
                            <DataContainer image="wind" data={dailyInfo.wind_speed} units="m/s" isCompact="true"/>
                            
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center flex justify-center">
                <button onClick={()=>toogleDailyBox()} className="text-lg text-white font-bold px-3 py-1 mt-2 rounded-2xl bg-blue-500 focus:outline-none focus:ring-4 focus:border-blue-300" >{dailyDetails ? "Mostrar Menos ▲" : "Mostrar Mas ▼"}</button>
            </div>

        </div>
    )
}

export default DailyWeatherDetails
