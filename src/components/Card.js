// boston, california, peru
import React, {useState} from "react"
import {useEffect} from "react"

export default function Card (props) {
    const [weatherData, setWeatherData] = useState({})
    useEffect(()=> {
        fetch(`http://api.weatherapi.com/v1/current.json?key=90ab25695d9f41ee81b20151233001&q=${props.data.city}&aqi=no`)
            .then(res => res.json())
            .then(dataJS => setWeatherData({
                temp_c: dataJS.current.temp_c,
                temp_f: dataJS.current.temp_f,
                condition: dataJS.current.condition.text,
                condition_icon: dataJS.current.condition.icon
            }))
    }, [])

    return (
        <section>
            <div className='info'>
                <div className="location">
                    <p>{props.data.location}</p>
                    <a href={props.data.googleMapsUrl} target="_blank">View on Google Maps</a>
                    <p>Feels like {weatherData.temp_c}</p>
                </div>
                <h1 className='title'>{props.data.title}</h1>
                <p className='dates'>{props.data.startDate} - {props.data.endDate}</p>  
                <p className='description'>{props.data.description}</p>
            </div>
            <div>
                <img src={props.data.imageURL} alt="travel" className='image'/>
            </div>
        </section>
    )
}