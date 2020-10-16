import React from 'react'
import "./Footer.css"
import logo from "../img/letgo-white.png"

function Footer() {
    return (
        <div className="bg-footer text-white text-center d-flex flex-column" >
            <img src={logo} width="128px" className="mx-auto my-4"/>
            <strong>Ahmet Barış Yerlikaya </strong>
            <strong>Ahmet Salih Özmen</strong>
            <strong>Anıl Berk Erdoğan </strong>
        </div>
    )
}

export default Footer

