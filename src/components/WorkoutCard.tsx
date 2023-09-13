import React, { useState, useContext } from 'react'
import './workoutcard.css'
import { DatesType, WorkoutType } from '../mockData'
import { BsTrashFill } from 'react-icons/bs';
import { FaUsers } from 'react-icons/fa'
import { removeUser } from '../service/localStorageService';
import { UserContext } from '../service/UserContext';

type WorkoutProps = {
  workout: WorkoutType,
  date: DatesType,
  updateBookings: () => void
} 

function WorkoutCard(props: WorkoutProps) {

  const [showParticipants, setShowParticipants] = useState<boolean>(false)
  const {user} = useContext(UserContext); // Hämta usercontext (vilken anvädare som är inloggad)


  const toggleView = () => {
    setShowParticipants(!showParticipants)
  }

  const handleRemoveUser = (e: React.MouseEvent<HTMLButtonElement>, user: string) => {
    removeUser(user, props.date, props.workout)
    props.updateBookings()
  }

  return (
    <div className='workout-card'>
      
      

      {!showParticipants && <div className="preview">

        <header className='card-heading'>
          <div className='heading-container'>
            <h2>
              {props.workout.title}
            </h2>
            <div className='participant-number'>
              <FaUsers/>
              <p className='participant-text'>{props.workout.participants.length}/{props.workout.maxParticipants}</p>
            </div>
          </div>
          <button onClick={() => toggleView()}  className='toggle-btn'>+</button>
        </header>

        
      </div>}



      {showParticipants && <div className="participants">

      <header className='card-heading'>
          <div className='heading-container'>
            <h2>
              {props.workout.title}
            </h2>
            <div className='participant-number'>
              <FaUsers/>
              <p className='participant-text'>{props.workout.participants.length}/{props.workout.maxParticipants}</p>
            </div>
          </div>
          <button onClick={() => toggleView()}  className='toggle-btn'>-</button>
        </header>


        {props.workout.participants.map((participant, i) => {
          return (
          <p className='user-row' key={i}>
            <label>
              {participant.username}
            </label>
            <button className='del-btn' onClick={(e) => handleRemoveUser(e, participant.username)}><BsTrashFill></BsTrashFill></button>
          </p>
          )
        })}

        
      </div>}

    </div>
  )
}

export default WorkoutCard