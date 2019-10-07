import React from 'react'
import DayCard from './DayCard'

export default function Day() {
    const array = ['new day +', 'monday', 'tuesday', 'wednesday', 'friday']
    const renderDays = () => {
        return array.map(day => {
            return <DayCard day={day} />
        })
    }
    return(
        <div className='secondary'>
            <h2>Days</h2>
            {renderDays()}
        </div>
    )
}