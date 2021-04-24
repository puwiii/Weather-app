
export function convertTimestamp(time, lang, timezoneOffset){

    const d = new Date(time * 1000)
    const localTime = d.getTime()
    const localOffset =  d.getTimezoneOffset() * 60000
    const utc = localTime + localOffset

    const dateObject = new Date(utc + (1000 * timezoneOffset))

    

    const dayName= dateObject.toLocaleString(lang, {weekday: "long"})
    const monthName= dateObject.toLocaleString(lang, {month: "long"}) // December
    const dayNumber= dateObject.toLocaleString(lang, {day: "numeric"}) // 9
    const year= dateObject.toLocaleString(lang, {year: "numeric"}) // 2019
    const hour= dateObject.toLocaleString(lang, {hour: "2-digit"}) // 10 AM
    const minutes= dateObject.toLocaleString(lang, {minute: "2-digit"}) // 30
    const seconds= dateObject.toLocaleString(lang, {second: "2-digit"}) // 15
    const fullHour= hour+":"+ (minutes >= 10 ? minutes :  "0"+minutes) +":"+ (seconds >= 10 ? seconds :  "0"+seconds)
    const fullDate= dateObject.toLocaleString(lang, {timeZoneName: "short"}) // 12/9/2019, 10:30:15 AM CST
    
    const datetime={
        dayname: dayName,
        monthname: monthName, 
        daynumbre: dayNumber, 
        year: year, 
        hour: hour, 
        minutes: minutes, 
        seconds: seconds, 
        fullhour: hour+":"+ (minutes >= 10 ? minutes :  "0"+minutes) +":"+ (seconds >= 10 ? seconds :  "0"+seconds),
        compacthour: hour+":"+ (minutes >= 10 ? minutes :  "0"+minutes),
        fulldate: fullDate, 

    }

    return datetime
}