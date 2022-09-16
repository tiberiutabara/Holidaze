import React from 'react'
import DeleteHotel from '../components/DeleteHotel'
import RegisterHotel from '../components/RegisterHotel'

export default function Owner() {
  return (
    <div>
      <RegisterHotel />
      <DeleteHotel />
    </div>
  )
}
