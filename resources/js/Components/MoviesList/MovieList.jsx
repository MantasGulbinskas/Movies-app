import React from 'react';

import '../../../scss/MovieList/MovieList.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCar, faCartShopping } from '@fortawesome/free-solid-svg-icons';


export default function MoviesList(props) {
    return (
        <div key={props.id} className='list-container'>
            <img src={props.img} alt="image" />
            <div className="title">
                <h4>{props.title}</h4>
                <FontAwesomeIcon className='icon' icon={faCartShopping} />
                <p className='price'>20Eur</p>

                <p className='quantity'>{props.quantity} in Stock</p>
            </div>
    
        </div>
    )
}