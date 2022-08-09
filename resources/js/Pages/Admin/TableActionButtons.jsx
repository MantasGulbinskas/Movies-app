import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import axios from 'axios';
import React, { Component, useState } from 'react';

function TableActionButtons(props) {

    console.log(props)
    return (
        <div>
            <InertiaLink className='btn btn-primary' href={'/admin/edit/' + props.id.id} as='button'>Edit</InertiaLink>
            <InertiaLink className='btn btn-danger' href={'/admin/delete/' + props.id.id} as='button'>Delete</InertiaLink>

        </div>
    )
}

export default TableActionButtons;