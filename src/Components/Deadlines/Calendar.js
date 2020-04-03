import React, { useState } from 'react'
import { enGB } from 'date-fns/locale'
import { DatePickerCalendar } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import './Deadlines.css'


export default function Calendar(props) {
  const [date, setDate] = useState()

  return (
    <div className='calendarBox'>
      <DatePickerCalendar date={date} onDateChange={setDate} locale={enGB} />
    </div>
  )
}