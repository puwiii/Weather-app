import Head from 'next/head'
import { stringify } from 'postcss';
import CurrentWeather from '../components/CurrentWeather';
import Header from '../components/Header'
import HomeComponent from '../components/HomeComponent';
import requests from '../utils/requests'


export default function Home({CurrentWeatherData}) {
  console.log(CurrentWeatherData)
  return (
    <div>
      <Head>
        <title>Climapp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      <HomeComponent CurrentWeatherData={CurrentWeatherData}/>

      
    </div>
  );
}

export async function getServerSideProps(context){
  const fetchType = context.query.search;

  let fetchData = ''

  if(!fetchType){
    const locationFetch = await fetch(requests.fetchGeoLocation.url).then(response=>response.json())
    const location = locationFetch?.location;
    fetchData = requests.fetchCurrentWeatherDataByLocation.url(location.city,location.country)
  }else{
    fetchData = requests.fetchCurrentWeatherDataBySearch[fetchType]?.url(context.query.value)
  }

  let request = await fetch(
    `https://api.openweathermap.org/data/2.5/${fetchData}`
  ).then(data=>data.json())

  return {
    props: {
      CurrentWeatherData: request,
      fetchUrl: fetchData,
    }
  }

}
