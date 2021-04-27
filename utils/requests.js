const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const GEO_API_KEY = process.env.GEO_API_KEY;
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

export default {

    fetchGeoLocation: {
        url: `https://geo.ipify.org/api/v1?apiKey=${GEO_API_KEY}&ipAddress=`
    },


    fetchOneCall: {
        url(lat,long){return `onecall?lat=${lat}&lon=${long}&units=metric&lang=es&appid=${WEATHER_API_KEY}`}
    },

    fetchCurrentWeatherDataByLocation: {
        url(cityName, country){return `weather?q=${cityName},${country}&units=metric&lang=es&appid=${WEATHER_API_KEY}`}
    },

    fetchCurrentWeatherDataBySearch: {
        fetchCurrentWeatherDataByCity: {
            title: "Localidad",
            url(cityName){ return `weather?q=${cityName}&units=metric&lang=es&appid=${WEATHER_API_KEY}`},
        },
        
        // fetchCurrentWeatherDataByZip: {
        //     title: "Codigo Postal",
        //     url(zipCode,countryCode){ return `weather?zip=${zipCode},${countryCode}&units=metric&lang=es&appid=${WEATHER_API_KEY}`},
        // }
    },

    // fetchCurrentWeatherDataByZip: {
    //     title: "Codigo Postal",
    //     path: "CurrentWeatherByZip",
    //     url: `weather?zip=${zipCode},${countryCode}&appid=${API_KEY}`,
    // }
}