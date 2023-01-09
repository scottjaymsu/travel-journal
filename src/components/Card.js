// boston, california, peru
import React from 'react'

export default function Card (props) {
    return (
        <section>
            <div className='info'>
                <div className="location">
                    <p>{props.data.location}</p>
                    <a href={props.data.googleMapsUrl} target="_blank">View on Google Maps</a>
                </div>
                <h1 className='title'>{props.data.title}</h1>
                <p className='dates'>{props.data.startDate} - {props.data.endDate}</p>  
                <p className='description'>{props.data.description}</p>
            </div>
            <div className='image'>
                <img src={props.data.imageUrl} alt="travel" />
            </div>
        </section>
    )
}