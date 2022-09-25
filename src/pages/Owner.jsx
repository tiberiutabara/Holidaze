// General imports
import { useState } from 'react'
import DeleteHotel from '../components/DeleteHotel'
import Enquiries from '../components/Enquiries'
import RegisterHotel from '../components/RegisterHotel'

// Styling imports
import './styles/OwnerMenu.scss'

export default function Owner() {
  const [menu, setMenu] = useState('Enquiries')

  return (
    <>

      <div className='owner-menu'>
        <span className={menu === 'Enquiries' ? 'active' : ''} onClick={() => setMenu('Enquiries')}>Enquiries</span>
        <span>|</span>
        <span className={menu === 'Listings' ? 'active' : ''} onClick={() => setMenu('Listings')}>Listings</span>
      </div>
      

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
