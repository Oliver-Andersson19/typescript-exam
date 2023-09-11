import React, { useState } from 'react'
import './workoutcard.css'
import { WorkoutType } from '../mockData'

type WorkoutProps = {
  workout: WorkoutType
} 

function WorkoutCard(props: WorkoutProps) {

  const [showParticipants, setShowParticipants] = useState<boolean>(false)

  const toggleView = () => {
    setShowParticipants(!showParticipants)
  }


  return (
    <div className='workout-card'>
      <h2 className='card-heading'>{props.workout.title}</h2>
      

      {!showParticipants && <div className="preview">
        
        <div className='participant-number'>
          <h3>Deltagare: </h3>
          <p>{props.workout.participants.length}/{props.workout.maxParticipants}</p>
        </div>



        
        <button onClick={() => toggleView()} className='toggle-btn'>Visa mer</button>
      
      </div>}



      {showParticipants && <div className="participants">
        
        {props.workout.participants.map((participant) => {
          return (<p>{participant.username}</p>)
        })}

        <button onClick={() => toggleView()}  className='toggle-btn'>Tillbaka</button>
      </div>}

    </div>
  )
}

export default WorkoutCard