import React from 'react'
import Day from './Day'
import Edit from './Edit'
import Breakdown from './Breakdown'

export default function Main() {
    return(
        <div className='main'>
            <Day />
            <Edit />
            <Breakdown />
        </div>
    )
}