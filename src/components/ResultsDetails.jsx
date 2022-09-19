import React from 'react'

export default function ResultsDetails(props) {
  return (
    <div>
        Showing results for:
        <p>{props.location} area</p>
        <p>From {props.fromDate}</p>
        <p>To {props.toDate}</p>
        <p>For {props.guests.adult} adults, {props.guests.children} children on {props.guests.room} room</p>
    </div>
  )
}
