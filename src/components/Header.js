import React from 'react'
import LOGO from '../images/earth-icon.png'

export default function Header () {
    return (
        <nav className="title">
            <h1>Jay's Travel Journal</h1>
            <img src={LOGO} alt='earth'className="earth"/>
        </nav>
    )
}