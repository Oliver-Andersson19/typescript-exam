import React, {useEffect, useState} from 'react'
import Header from '../components/Header'
import WorkoutCard from '../components/WorkoutCard'
import './adminpage.css'
import { getBookings } from '../service/localStorageService'
import { DatesType, WorkoutType } from '../mockData'

function AdminPage() {
  
  const [bookings, setBookings] = useState<Array<DatesType>>([])
  const [bookingsMade, setBookingsMade] = useState<number>(0);

  useEffect(() => { // Hämta data från localStorage
    setBookings(getBookings())
  }, [bookingsMade])

  

  return (
    <div className='admin-page'>
      <Header></Header>
      
      <div className="admin-container">

        

          {bookings.map((day) => {
            return (<>
              <h2>{day.date}</h2>
              <div className='workout-container'>
                {day.workouts.map((workout) => {
                  return (<WorkoutCard workout={workout}></WorkoutCard>)
                })}
              </div>
            </>)
          })}


        



      </div>
    
    </div>
  )
}

export default AdminPage