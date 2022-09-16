import { useState } from 'react'
import DeleteHotel from '../components/DeleteHotel'
import Enquiries from '../components/Enquiries'
import RegisterHotel from '../components/RegisterHotel'

export default function Owner() {
  const [menu, setMenu] = useState('Enquiries')

  return (
    <>

      <span onClick={() => setMenu('Enquiries')}>Enquiries</span>
      <span onClick={() => setMenu('Listings')}>Listings</span>
      

      {menu === 'Enquiries' && (
        <Enquiries />
      )}
    
      {menu === 'Listings' && (
      <div className='Listings'>
        <RegisterHotel />
        <DeleteHotel />
      </div>
      )}

    </>
  )
}
