import {useEffect, useState} from 'react'
import Image from 'next/image'
import minTempIcon from "../public/imgs/min_temp.png";
import maxTempIcon from "../public/imgs/max_temp.png";
import precipitationIcon from "../public/imgs/precipitation.png";
import humedityIcon from "../public/imgs/humedity.png";
import windIcon from "../public/imgs/wind.png";
import cloudIcon from "../public/imgs/clouds.png";
import uvIcon from "../public/imgs/uv.png";
import sunsetIcon from "../public/imgs/sunset_icon.svg";
import sunriseIcon from "../public/imgs/sunrise_icon.svg";
import morningIcon from "../public/imgs/morning.png";
import noonIcon from "../public/imgs/noon.png";
import eveningIcon from "../public/imgs/evening.png";
import nightIcon from "../public/imgs/night.png";
function DataContainer({image, title, data, units, color, round, sufix, isCompact}) {
    
    const [icon, setIcon] = useState(minTempIcon)
    const [uvValue, setUvValue] = useState()

    useEffect(() => {
        switch(image){
            case 'minTemp':
                setIcon(minTempIcon)
                break;
            case 'maxTemp':
                setIcon(maxTempIcon)
                break;
            case 'precipitation':
                setIcon(precipitationIcon)
                break;
            case 'humedity':
                setIcon(humedityIcon)
                break;
            case 'wind':
                setIcon(windIcon)
                break;
            case 'clouds':
                setIcon(cloudIcon)
                break;
            case 'uv':
                setIcon(uvIcon)
                break;
            case 'sunset':
                setIcon(sunsetIcon)
                break;
            case 'sunrise':
                setIcon(sunriseIcon)
                break;
            case 'morning':
                setIcon(morningIcon)
                break;
            case 'noon':
                setIcon(noonIcon)
                break;
            case 'evening':
                setIcon(eveningIcon)
                break;
            case 'night':
                setIcon(nightIcon)
                break;
            default:
                setIcon(image)
                break;
        }

        if(image==='uv'){
            if(data>=0 && data<1.5){
                setUvValue('bg-green-200')
            }
            if(data>=1.5 && data<3){
                setUvValue('bg-green-300')
            }  
            if(data>=3 && data<4.5){
                setUvValue('bg-yellow-200')
            }
            if(data>=4.5 && data<6){
                setUvValue('bg-yellow-300')
            }
            if(data>=6 && data<7){
                setUvValue('bg-yellow-400')
            }
            if(data>=7 && data<8){
                setUvValue('bg-yellow-500')
            }
            if(data>=8 && data<=11){
                setUvValue('bg-red-300')
            }
            if(data>11){
                setUvValue('bg-purple-300')
            }   
        }
    }, [image, data])

    return (
        <div className="flex-1 rounded-xl text-gray-800">    
         
                
                
            {
            isCompact ? 
                <div className={color + " " + "m-0 p-0 flex items-center justify-center flex-col" +" "+uvValue}>

                    <Image
                        src={icon}
                        alt=""
                        width="25"
                        height="25"
                        objectFit="contain"
                        quality={40}
                    />

                    <div>   
                        <h3 className="text-xs font-bold ml-2 md:text-base lg:text-xl">
                            {
                            round ?
                            Math.round(data)+units
                            :
                            data+units
                            }
                        </h3>
                    </div>
                </div>
            :
                <div className={color + " " + "m-2 p-2 flex flex-1 justify-between items-center" +" "+uvValue}>
                        <Image
                            src={icon}
                            alt=""
                            width="60"
                            height="60"
                            objectFit="contain"
                            quality={90}
                            className="filter drop-shadow-sm"
                        />
                    <div className="text-right">
                        <h4 className="text-xs text-gray-400 font-medium md:text-lg">{title}</h4>
                        <div className="flex items-center flex-wrap-reverse justify-end">
                            <span className="text-xs font-medium md:text-base">{sufix}</span>
                            <h3 className="text-base font-bold ml-1 md:text-2xl">
                            
                                {
                                round ?
                                Math.round(data)+units
                                :
                                data+units
                                }
                            </h3>
                        </div>
                    </div> 
                </div>           
            }
                
        </div>

        // <div className="flex-1 rounded-xl text-gray-800">
        //     {
        //         uvValue ? 
        //         <div className={"m-2 p-2 flex flex-1 justify-between items-center" + " "+uvValue}>

        //             <Image
        //                 src={icon}
        //                 alt=""
        //                 width="50"
        //                 height="50"
        //                 objectFit="contain"
        //             />
        //             {
        //             isCompact ? 
        //                 <div className="text-right">
        //                     <h4 className="text-sm text-gray-600 font-light">{title}</h4>
        //                     <div className="flex items-start flex-wrap-reverse justify-end">
        //                         <span className="text-base font-medium">{sufix}</span>
        //                         <h3 className="text-2xl font-bold ml-2">
                                
        //                             {
        //                             round ?
        //                             Math.round(data)+units
        //                             :
        //                             data+units
        //                             }
        //                         </h3>
        //                     </div>
        //                 </div>
        //             :
        //                 <div className="text-right">
        //                     <h4 className="text-sm text-gray-600 font-light">{title}</h4>
        //                     <div className="flex items-start flex-wrap-reverse justify-end">
        //                         <span className="text-base font-medium">{sufix}</span>
        //                         <h3 className="text-2xl font-bold ml-2">
                                
        //                             {
        //                             round ?
        //                             Math.round(data)+units
        //                             :
        //                             data+units
        //                             }
        //                         </h3>
        //                     </div>
        //                 </div>            
        //             }
                    
        //         </div>
        //         :
        //         <div className={color + " " + "m-2 p-2 flex flex-1 justify-between items-center"+ uvValue}>
        //             <Image
        //                 src={icon}
        //                 alt=""
        //                 width="50"
        //                 height="50"
        //                 objectFit="contain"
        //             />
        //             <div className="text-right">
        //                 <h4 className="text-sm text-gray-600 font-light">{title}</h4>
        //                 <div className="flex items-start flex-wrap-reverse justify-end">
        //                     <span className="text-base font-medium">{sufix}</span>
        //                     <h3 className="text-2xl font-bold ml-2">
                            
        //                         {
        //                         round ?
        //                         Math.round(data)+units
        //                         :
        //                         data+units
        //                         }
        //                     </h3>
        //                 </div>
        //             </div>
        //         </div>
        //     }
            
        // </div>
        
    )
}

export default DataContainer
