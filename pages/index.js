import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import HomeComponent from '../components/HomeComponent'
import requests from '../utils/requests'
import notFound from '../imgs/not-found.png'
import Welcome from '../components/Welcome'

export default function Home({CurrentWeatherData, OneCallWeatherData, fetchType}) {
  console.log(CurrentWeatherData)
  console.log(OneCallWeatherData)
  console.log(fetchType)
  return (
    <div className="bg-gray-200 min-h-screen pt-32 text-gray-800 font-inter">
      <Head>
        <title>Climapp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      
      {
        fetchType ? 
          <div>
            <Header />
            <div className="container w-full flex flex-col text-center">
            {
              CurrentWeatherData.cod === "404" || CurrentWeatherData.cod === 401 ?
              <div>
                
                <h2 className="font-bold text-4xl text-gray-600">Ciudad no encontrada</h2>
                <Image
                  src={notFound}
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              :
              <HomeComponent CurrentWeatherData={CurrentWeatherData} OneCallWeatherData={OneCallWeatherData}/>
            }
          </div>
          </div>
          
        
        :

          <Welcome/>
      }

    </div>
  );
}

export async function getServerSideProps(context){
  let fetchType = context.query.search;

  let OneCall = null
  let CurrentWeatherData = null
  let request = null
  let fetchData = ''
  let lat = ''
  let lon = ''

  // if(!fetchType){
  //   const locationFetch = await fetch(requests.fetchGeoLocation.url).then(response=>response.json())
  //   const location = locationFetch?.location;
  //   fetchData = requests.fetchCurrentWeatherDataByLocation.url(location.city,location.country)
  // }else{
  //   fetchData = requests.fetchCurrentWeatherDataBySearch[fetchType]?.url(context.query.value)
  // }

  if(!fetchType){
    fetchType = null
  }else{
    request = await fetch(
      `https://api.openweathermap.org/data/2.5/${requests.fetchCurrentWeatherDataBySearch[fetchType]?.url(context.query.value)}`
    ).then(response=>response.json())
  
    if(request.coord){
      lat=request.coord.lat;
      lon=request.coord.lon;
    }
   
    OneCall = await fetch(`https://api.openweathermap.org/data/2.5/${requests.fetchOneCall.url(lat,lon)}`)
      .then(response=>response.json())  
  }

  return {
    props: {
      OneCallWeatherData: OneCall,
      CurrentWeatherData: request,
      fetchUrl: fetchData,
      fetchType: fetchType,
    }
  }

}
