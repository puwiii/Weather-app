import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import HomeComponent from '../components/HomeComponent'
import requests from '../utils/requests'
import notFound from '../imgs/not-found.png'

export default function Home({CurrentWeatherData, OneCallWeatherData}) {
  console.log(CurrentWeatherData)
  console.log(OneCallWeatherData)
  return (
    <div className="bg-gray-200 min-h-screen pt-32 text-gray-800">
      <Head>
        <title>Climapp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      {
        CurrentWeatherData.cod === '404' ? 
        <div className="container w-full flex flex-col text-center">
          <h2 className="font-bold text-4xl text-gray-600">Ciudad no encontrada</h2>
          <Image
            src={notFound}
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </div> :  <HomeComponent CurrentWeatherData={CurrentWeatherData} OneCallWeatherData={OneCallWeatherData}/>
      }

    </div>
  );
}

export async function getServerSideProps(context){
  const fetchType = context.query.search;

  let OneCall = null
  let fetchData = ''
  let lat = ''
  let lon = ''

  if(!fetchType){
    const locationFetch = await fetch(requests.fetchGeoLocation.url).then(response=>response.json())
    const location = locationFetch?.location;
    fetchData = requests.fetchCurrentWeatherDataByLocation.url(location.city,location.country)
  }else{
    fetchData = requests.fetchCurrentWeatherDataBySearch[fetchType]?.url(context.query.value)
  }

  let request = await fetch(
    `https://api.openweathermap.org/data/2.5/${fetchData}`
  ).then(response=>response.json())

  if(request.coord){
    lat=request.coord.lat;
    lon=request.coord.lon;
  }
 
  OneCall = await fetch(`https://api.openweathermap.org/data/2.5/${requests.fetchOneCall.url(lat,lon)}`)
    .then(response=>response.json())
  

  return {
    props: {
      OneCallWeatherData: OneCall,
      CurrentWeatherData: request,
      fetchUrl: fetchData,
    }
  }

}
