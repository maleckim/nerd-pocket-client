import React, { useState } from 'react'
import { enGB } from 'date-fns/locale'
import { DatePicker } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'

export default function DateChooser(props) {
  const [date, setDate] = useState()
  const [task, setTask] = useState()


  return (
    <form onSubmit={props.setDate(date,task)}>
    <label>to-do</label><br />
    <input type='text' onChange={(e) => setTask(e.target.value)} />
    <DatePicker date={date} onDateChange={setDate} locale={enGB}>
      {({ inputProps, focused }) => (
        <>
        <label>date:</label><br />
        <input
          className={'input' + (focused ? ' -focused' : '')}
          {...inputProps}
        />
        </>
      )}
    </DatePicker>

    <input type='submit' />
    </form>
  )
}







