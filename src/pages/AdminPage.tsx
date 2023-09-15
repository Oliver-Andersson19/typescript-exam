import React, {useEffect, useState, useContext} from 'react'
import Header from '../components/Header'
import WorkoutCard from '../components/WorkoutCard'
import './adminpage.css'
import { getBookings } from '../service/localStorageService'
import { DatesType, WorkoutType } from '../types'
import NewWorkoutModal from '../components/NewWorkoutModal'
import { UserContext } from '../service/UserContext'
import { useNavigate } from 'react-router-dom'
import UsersContainer from '../components/UsersContainer'

function AdminPage() {
  
  const [bookings, setBookings] = useState<Array<DatesType>>([])
  const [toggleWorkoutModal, setToggleWorkoutModal] = useState<boolean>(false)
  const {user, setUser, role, setRole} = useContext(UserContext); // Hämta usercontext (vilken anvädare som är inloggad)
  const navigate = useNavigate()


  useEffect(() => {
     // Hämta data från localStorage
    setBookings(getBookings())
    
    // Kolla om anvädaren är admin
    if(role !== "ADMIN") {
      navigate("/")
    }

  }, [user])

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

        <h2 className='workouts-heading'>Adminvy</h2>
        
        <div className='users-section'>
          <UsersContainer role='USER'></UsersContainer>
          <UsersContainer role='ADMIN'></UsersContainer>
        </div>

        <section className='workouts-section'>
          
          <h2 className='workouts-heading'>Hantera träningspass</h2>
          <button className='new-workout-btn' onClick={(e) => handleToggleModal()}>+ Lägg till pass</button>

          {bookings.map((day, i) => {
            return (<React.Fragment key={i}>
              <div className='date-container'>
                <h3 className='date-heading'>{day.date}</h3>
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