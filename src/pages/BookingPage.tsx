/* Booking page ligger under /booking */
import React from 'react'
import Header from '../components/Header'
import './bookingpage.css'


function BookingPage() {



  return (
    <div className='booking-page'>
      <Header></Header>

      <div className="booking-container">

        <select name="" id="">
          <option disabled selected value="" style={{display: "none"}}>Välj ett pass</option>
          <option className='pass-option' value=""><p>Ryggpass</p></option>
        </select>

      </div>

    </div>
  )
}

export default BookingPage