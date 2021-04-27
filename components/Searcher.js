import { useRouter } from 'next/router'
import React, {useState} from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import requests from '../utils/requests'


function Searcher() {
    const router = useRouter();

    const [searcherValue, setSearcherValue] = useState('')

    function makeRequest(e){
        e.preventDefault();
        if(searcherValue){
            console.log(searcherValue)
            let selectValue = document.getElementById('select').value
            
            if(selectValue==='fetchCurrentWeatherDataByCity'){
                router.push(`/?search=${selectValue}&value=${searcherValue}`)
            }
            else{
                router.push(`/?search=${selectValue}&value=${searcherValue}&code=ar`)
            }
            
        } 
    }

    return (
        <form className="flex flex-0 px-4 py-2 items-center rounded-3xl bg-black bg-opacity-50 text-xs  md:text-sm ">

            <button 
                type="submit" 
                className="" 
                onClick={(e)=>makeRequest(e)} 
            >
                <FontAwesomeIcon icon={faSearch} className="w-5 text-gray-200"/>
            </button>
            
            <input 
                type="text" 
                placeholder="Ingresa una localidad" 
                spellCheck="false"
                className="flex-1 bg-transparent ml-3 outline-none text-white font-medium placeholder-gray-300" 
                onChange={(e)=>setSearcherValue(e.target.value)}
            />

            <select name="select" id="select" className="bg-transparent font-medium outline-none text-center text-white hidden">
                {Object.entries(requests.fetchCurrentWeatherDataBySearch).map(([key, {title}])=>(
                    <option key={key} value={key} className="text-right">{title}</option>
                ))}
            </select>

        </form>
    )
}

export default Searcher
