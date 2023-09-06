/* Booking page ligger under /booking */
import React, { useEffect, useState, useContext, useRef } from 'react'
import Header from '../components/Header'
import './bookingpage.css'
import { book, getBookings } from '../service/localStorageService'
import { WorkoutType, DatesType } from '../mockData'
import { UserContext } from '../service/UserContext'

function BookingPage() {

  const [bookings, setBookings] = useState<Array<DatesType>>([])
  const [selectedDate, setSelectedDate] = useState<DatesType>()
  const [selectedWorkout, setSelectedWorkout] = useState<WorkoutType>()


  const dateRef = useRef<HTMLSelectElement>(null);
  const workoutRef = useRef<HTMLSelectElement>(null);

  const {user, setUser} = useContext(UserContext); // Hämta usercontext (vilken anvädare som är inloggad)
  const [bookingsMade, setBookingsMade] = useState<number>(0);

  useEffect(() => {
    setBookings(getBookings())
  }, [bookingsMade])
  

  const handleDateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDate(JSON.parse(e.target.value))
  }

  const handleWorkoutChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedWorkout(JSON.parse(e.target.value))
  }

  const submitBooking = () => {
    
    if(!selectedDate || !selectedWorkout) { // Snygga till det här sen !!!!!!!!!!!
      
      // Om man inte valt dag / pass
      alert("Välj datum och pass");
    
    } else {
      
      if(user !== "") {

        if (selectedWorkout.participants.some(
          (participant) => participant.username === user
        )) {
          alert(`Du har redan bokat ${selectedWorkout.title} den: ${selectedDate.date}. Vänligen kontakta oss om du vill avboka/boka om ett pass`);
        } else {
          book(user, selectedDate, selectedWorkout)
          setBookingsMade(bookingsMade + 1);
          alert(`Du har bokat ${selectedWorkout.title} den: ${selectedDate.date}`);
        }

      } else {
        // Om användare inte är inloggad
        alert("Logga in")
      }
    }
    resetSelects()
  }
  
  const resetSelects = () => {
    setSelectedDate(undefined)
    setSelectedWorkout(undefined)
    workoutRef.current!.value = "";
    dateRef.current!.value = "";
  }

  
  return (
    <div className='booking-page'>
      <Header></Header>

      <div className="booking-container">

        <h1>Boka träningspass</h1>

        <h3>Välj datum och tid</h3>
        <div className="select-container">
          <select value={JSON.stringify(selectedDate)} onChange={(e) => handleDateChange(e)} ref={dateRef}>

            <option disabled selected value="" style={{display: "none"}}></option>
            {bookings.map((day, i) => {
              return (<option value={JSON.stringify(day)} key={i}>{day.date}</option>)
            })}
          
          </select>
        </div>

        <h3 className={selectedDate?.date === undefined ? "disable-select" : ""}>Välj pass</h3>
        <div className={`select-container ${selectedDate?.date === undefined ? "disable-select" : ""}`}>
          <select value={JSON.stringify(selectedWorkout)} disabled={selectedDate?.date === undefined} onChange={(e) => handleWorkoutChange(e)}  ref={workoutRef}>
            <option disabled selected value="" style={{display: "none"}}></option>
            
            {selectedDate?.workouts.map((workout, i) => {
              return (<option value={JSON.stringify(workout)} key={i}>{workout.title}</option>)
            })}


          </select>
        </div>

        <button className='book-btn' onClick={submitBooking}>Boka</button>

      </div>

    </div>
  )
}

export default BookingPage