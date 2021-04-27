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
        <div className="p-4 py-10 bg-white bg-opacity-50 flex-1 w-100 max-w-full mb-10">


            <div className="flex flex-1 ">
                <DataContainer image="sunrise" title="Amanecer" data={convertTimestamp(OneCallWeatherData.current.sunrise, "sp-ES", OneCallWeatherData.timezone_offset).compacthour} units="hs" color="bg-white bg-opacity-50"/>
                <DataContainer image="sunset" title="Ocaso" data={convertTimestamp(OneCallWeatherData.current.sunset, "sp-ES", OneCallWeatherData.timezone_offset).compacthour} units="hs" color="bg-white bg-opacity-50"/>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4">
                <DataContainer image="morning" title="Mañana" data={OneCallWeatherData.daily[0].temp.morn} units="°C" color="bg-white bg-opacity-50" sufix={"ST "+Math.round(OneCallWeatherData.daily[0].feels_like.morn)+"°C"} round={true}/>
                <DataContainer image="noon" title="Mediodia" data={OneCallWeatherData.daily[0].temp.day} units="°C" color="bg-white bg-opacity-50" sufix={"ST "+Math.round(OneCallWeatherData.daily[0].feels_like.day)+"°C"} round={true}/>
                <DataContainer image="evening" title="Tarde" data={OneCallWeatherData.daily[0].temp.eve} units="°C" color="bg-white bg-opacity-50" sufix={"ST "+Math.round(OneCallWeatherData.daily[0].feels_like.eve)+"°C"} round={true}/>
                <DataContainer image="night" title="Noche" data={OneCallWeatherData.daily[0].temp.night} units="°C" color="bg-white bg-opacity-50" sufix={"ST "+Math.round(OneCallWeatherData.daily[0].feels_like.night)+"°C"} round={true}/>
            </div>

            <h2 className="text-3xl font-bold text-gray-500 mb-4 mt-24">Siguientes horas</h2>
            <div className={"relative p-1 flex flex-wrap grid grid-cols-1 overflow-y-hidden" + (hourlyDetails ? "max-h-full":" max-h-96") + " md:grid-cols-2 lg:flex lg:flex-nowrap lg:overflow-x-scroll lg:max-h-full"}>
                <div className={"absolute w-full h-full bg-gradient-to-b from-transparent to-gray-100" + (hourlyDetails ? "hidden":" block") + " lg:hidden"}></div>
                {OneCallWeatherData.hourly.map((hourInfo, index)=>(
                    <div className="flex flex-col items-stretch bg-black bg-opacity-5 rounded-sm p-1 py-4 m-1 flex-1 lg:flex-none lg:w-96" key={index}>
                        <h3 className="font-medium text-2xl text-center">
                            <span className="block font-light text-sm">{convertTimestamp(hourInfo.dt, "sp-ES", OneCallWeatherData.timezone_offset).compactdayname}</span>
                            {convertTimestamp(hourInfo.dt, "sp-ES", OneCallWeatherData.timezone_offset).hour}hs                      
                        </h3>
                        <DataContainer image={URL+hourInfo.weather[0].icon+'@2x.png'} title={hourInfo.weather[0].description} data={hourInfo.temp} units="°C" sufix={"ST "+Math.round(hourInfo.feels_like)+"°C"} round={true}/>
                        <div className="flex">
                            <DataContainer image="precipitation" data={hourInfo.pop} units="%" isCompact="true"/>
                            <DataContainer image="humedity" data={hourInfo.humidity} units="%" isCompact="true"/>
                            <DataContainer image="clouds" data={hourInfo.clouds} units="%" isCompact="true"/>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center flex justify-center lg:hidden">
                <button onClick={()=>toogleHourlyBox()} className="text-base text-white font-medium px-4 py-2 mt-2 rounded-2xl bg-blue-500 focus:outline-none focus:ring-4 focus:border-blue-300" >{hourlyDetails ? "Mostrar Menos ▲" : "Mostrar Mas ▼"}</button>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-500 mb-4 mt-24">Siguientes Dias</h2>
            <div className={"relative p-1 flex flex-wrap grid grid-cols-1 overflow-y-hidden" + (dailyDetails ? "max-h-full":" max-h-96") + " md:grid-cols-2 lg:flex lg:flex-nowrap lg:overflow-x-scroll lg:max-h-full"}>
                <div className={"absolute w-full h-full bg-gradient-to-b from-transparent to-gray-100" + (hourlyDetails ? "hidden":" block") + " lg:hidden"}></div>
                {OneCallWeatherData.daily.map((dailyInfo, index)=>(
                    <div className="flex flex-col items-stretch bg-black bg-opacity-5 rounded-sm p-1 py-4 m-1 flex-1 lg:flex-none lg:w-96" key={index}>
                        <h3 className="font-medium text-base text-center">
                            <span className="block font-light text-sm">{convertTimestamp(dailyInfo.dt, "sp-ES", OneCallWeatherData.timezone_offset).monthname}</span>
                            {convertTimestamp(dailyInfo.dt, "sp-ES", OneCallWeatherData.timezone_offset).daynumbre + " " + convertTimestamp(dailyInfo.dt, "sp-ES", OneCallWeatherData.timezone_offset).dayname}                      
                        </h3>
                        <DataContainer image={URL+dailyInfo.weather[0].icon+'@2x.png'} title={dailyInfo.weather[0].description} data={dailyInfo.temp.day} units="°C" sufix="en el dia" round={true}/>
                        <div className="flex justify-between py-2">
                            <DataContainer image="morning" data={dailyInfo.temp.morn} units="°C" isCompact="true" round={true}/>
                            <DataContainer image="noon" data={dailyInfo.temp.day} units="°C" isCompact="true" round={true}/>
                            <DataContainer image="evening" data={dailyInfo.temp.eve} units="°C" isCompact="true" round={true}/>
                            <DataContainer image="night" data={dailyInfo.temp.night} units="°C" isCompact="true" round={true}/>
                        </div>
                        <div className="flex justify-between py-2">
                            <DataContainer image="precipitation" data={ dailyInfo.pop*100 } units="%" isCompact="true" round={true}/>
                            <DataContainer image="humedity" data={dailyInfo.humidity} units="%" isCompact="true" round={true}/>
                            <DataContainer image="clouds" data={dailyInfo.clouds} units="%" isCompact="true" round={true}/>
                            <DataContainer image="wind" data={(dailyInfo.wind_speed*3.6).toFixed(1)} units="k/h" isCompact="true"/>
                            
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center flex justify-center lg:hidden">
                <button onClick={()=>toogleDailyBox()} className="text-base text-white font-medium px-4 py-2 mt-2 rounded-2xl bg-blue-500 focus:outline-none focus:ring-4 focus:border-blue-300" >{dailyDetails ? "Mostrar Menos ▲" : "Mostrar Mas ▼"}</button>
            </div>

        </div>
    )
}

export default DailyWeatherDetails
