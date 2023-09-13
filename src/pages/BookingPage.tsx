/* Booking page ligger under /booking */
import React, { useEffect, useState, useContext, useRef } from 'react'
import Header from '../components/Header'
import './bookingpage.css'
import { bookWorkout, getBookings } from '../service/localStorageService'
import { WorkoutType, DatesType } from '../mockData'
import { UserContext } from '../service/UserContext'
import { FaCheck } from 'react-icons/fa'

function BookingPage() {

  const [bookings, setBookings] = useState<Array<DatesType>>([])
  const [selectedDate, setSelectedDate] = useState<DatesType>()
  const [selectedWorkout, setSelectedWorkout] = useState<WorkoutType>()
  const [bookingsMade, setBookingsMade] = useState<number>(0);

  const dateRef = useRef<HTMLSelectElement>(null);
  const workoutRef = useRef<HTMLSelectElement>(null);

  const {user, setUser} = useContext(UserContext); // Hämta usercontext (vilken anvädare som är inloggad)


  useEffect(() => { // Hämta data från localStorage
    setBookings(getBookings())
  }, [bookingsMade])
  

  const handleDateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDate(JSON.parse(e.target.value))
  }


  const handleWorkoutChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedWorkout(JSON.parse(e.target.value))
  }


  const resetSelects = () => {
    setSelectedDate(undefined)
    setSelectedWorkout(undefined)
    workoutRef.current!.value = "";
    dateRef.current!.value = "";
  }


  const submitBooking = () => {
    if(user === "") { // Kolla så att användaren är inloggad
      alert("Du måste vara inloggad för att kunna boka")
      return
    }

    if(!selectedDate || !selectedWorkout) { // Kolla så att datum och pass är valt
      alert("Välj datum och pass");
      return
    }

    if (selectedWorkout.participants.some((participant) => participant.username === user)) {
      // Kolla så att användaren inte redan är bokad
      alert(`Du har redan bokat ${selectedWorkout.title} den: ${selectedDate.date}. Vänligen kontakta oss om du vill avboka/boka om ett pass`);

    } else { // Boka passet
      
      bookWorkout(user, selectedDate, selectedWorkout)
      setBookingsMade(bookingsMade + 1);
      alert(`Du har bokat ${selectedWorkout.title} den: ${selectedDate.date}`);
    }
    
    resetSelects() // Resetta alla val
  }
  
  
  return (
    <div className='booking-page'>
      <Header></Header>

      <div className="booking-container">

        <h1>Boka träningspass</h1>

        <div className='booking-content'>
          <h3>Välj datum och tid</h3>

          <div className="select-container">
            <select onChange={(e) => handleDateChange(e)} ref={dateRef}>
              <option disabled selected value="" style={{display: "none"}}></option>

              {bookings.map((day, i) => {
                return (<option value={JSON.stringify(day)} key={i}>{day.date}</option>)
              })}
            
            </select>
          </div>

          <h3 className={selectedDate?.date === undefined ? "disable-select" : ""}>Välj pass</h3>

          <div className={`select-container ${selectedDate?.date === undefined ? "disable-select" : ""}`}>

            <select disabled={selectedDate?.date === undefined} onChange={(e) => handleWorkoutChange(e)} ref={workoutRef}>
              <option disabled selected value="" style={{display: "none"}}></option>
              
              {selectedDate?.workouts.map((workout, i) => { // Mappa ut passen som finns den dagen man valt
                // Lägg en check bredvid passen man redan är inbokad på 
                const isBooked = workout.participants.some((participant) => participant.username === user)

                return (<option value={JSON.stringify(workout)} key={i}>
                  {workout.title}
                  {isBooked && <>&#x2713;</>} 
                  </option>)
              })}


            </select>
            
          </div>

          <button className='book-btn' onClick={submitBooking}>Boka</button>

        </div>
                


      </div>

    </div>
  )
}

export default BookingPage