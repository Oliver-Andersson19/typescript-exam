import React, {useEffect, useState} from 'react'
import Header from '../components/Header'
import WorkoutCard from '../components/WorkoutCard'
import './adminpage.css'
import { getBookings } from '../service/localStorageService'
import { DatesType, WorkoutType } from '../mockData'
import NewWorkoutModal from '../components/NewWorkoutModal'

function AdminPage() {
  
  const [bookings, setBookings] = useState<Array<DatesType>>([])
  const [toggleWorkoutModal, setToggleWorkoutModal] = useState<boolean>(false)

  useEffect(() => { // Hämta data från localStorage
    setBookings(getBookings())
  }, [])

  const updateBookings = () => {
    setBookings(getBookings())
  }
  
  const handleToggleModal = (): void => {
    setToggleWorkoutModal(!toggleWorkoutModal)
  }

  return (
    <div className='admin-page'>

      {toggleWorkoutModal && <NewWorkoutModal handleToggleModal={handleToggleModal} updateBookings={updateBookings}></NewWorkoutModal>}

      <Header></Header>
      
      <div className="admin-container">
  
        <section className='workouts-section'>
          
          <h1 className='workouts-heading'>Hantera träningspass</h1>
          <button className='new-workout-btn' onClick={(e) => handleToggleModal()}>+ Lägg till pass</button>

          {bookings.map((day, i) => {
            return (<React.Fragment key={i}>
              <div className='date-container'>
                <h2 className='date-heading'>{day.date}</h2>
                <div className='workout-container'>
                  {day.workouts.map((workout, i) => {

                    return (<WorkoutCard workout={workout} date={day} key={i} updateBookings={updateBookings}></WorkoutCard>)
                  
                  })}
                </div>
              </div>
            </React.Fragment>)
          })}
        </section>
        
      </div>
    
    </div>
  )
}

export default AdminPage