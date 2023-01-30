  
import {useState} from 'react'
import { useEffect } from 'react'
import data from '../data'

export default function Weather() {
    const [weatherData, setWeatherData] = useState({})
    useEffect(()=> {
        fetch("http://api.weatherapi.com/v1/current.json?key=90ab25695d9f41ee81b20151233001&q=48823&aqi=no")
            .then(res => res.json())
            .then(dataJS => setWeatherData(dataJS.current))
    }, [])

    console.log({weatherData})
}
