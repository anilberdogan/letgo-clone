import React from 'react'
import './Card.css'
import {Link} from 'react-router-dom';

function Card({obj}) {
    return (
        <div className="my-4 ourcard">
            <Link  to={`/${obj.slug}`} >
            <div>
                <img src={obj.imgurl} alt='xd' className="ourcard-image border-bottom"/>
            </div>
            <div className="ourcard-info p-2">
                <h6>{obj.city} </h6>
                <h6>{obj.desc}</h6>
                <h6>{obj.category}</h6>
                <h6>{obj.price}</h6>
            </div>
            </Link>
        </div>
    )
}

export default Card
