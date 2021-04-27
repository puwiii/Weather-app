import { useRouter } from 'next/router'
import Image from 'next/image'
import React, {useState} from 'react'
import logotipo from "../imgs/logo.svg";
import Searcher from './Searcher';

function Header() {

    const router = useRouter();


    function goHome(){
        router.push('')
    }

    return (
        <header className="py-2 bg-transparent absolute top-0 left-0 w-full z-50">
            <div className="container flex items-center">

                <div className="mr-4 flex-1 hidden md:block">
                    <Image
                        src={logotipo}
                        alt="Climapp"
                        width="200"
                        height="50"
                        // layout="fill"
                        // objectFit="contain"
                        className="filter drop-shadow-md cursor-pointer"
                        onClick={()=>goHome()}
                    />  
                </div>
                
                
                <Searcher/>
            </div>
        </header>
    )
}

export default Header
