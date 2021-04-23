import { useRouter } from 'next/router'
import {useState} from 'react'
import logotipo from "../imgs/logo.svg";
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import requests from '../utils/requests'

function Header() {

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
        <header className="py-5 bg-white bg-opacity-60">
            <div className="container flex items-center">

                <div className="mr-10">
                    <img src={logotipo} alt=""/>
                </div>
                
                <form className="flex flex-1 px-5 py-2 items-center rounded-3xl bg-black bg-opacity-5">

                    <button 
                        type="submit" 
                        className="" 
                        onClick={(e)=>makeRequest(e)} 
                    >
                        <FontAwesomeIcon icon={faSearch} className="w-5 text-gray-600"/>
                    </button>

                    <input 
                        type="text" 
                        placeholder="Ingresa una localidad" 
                        className="flex-1 bg-transparent ml-3 outline-none text-lg text-gray-700 font-medium " 
                        onChange={(e)=>setSearcherValue(e.target.value)}
                    />

                    <select name="select" id="select" className="bg-transparent text-lg font-medium outline-none text-center">
                        {Object.entries(requests.fetchCurrentWeatherDataBySearch).map(([key, {title}])=>(
                            <option key={key} value={key} className="text-right">{title}</option>
                        ))}
                    </select>

                </form>
            </div>
        </header>
    )
}

export default Header