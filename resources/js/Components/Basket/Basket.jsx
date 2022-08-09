import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';


export default function Basket(props) {
    return (
        <div className='bag-container'>
            <FontAwesomeIcon className='shopping-icon' icon={faBagShopping} />            
            <span>

                0       </span>
                  </div>
    )
}
