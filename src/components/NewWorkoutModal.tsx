import React, {useState} from 'react'
import './newworkoutmodal.css'
import { createNewWorkout } from '../service/localStorageService'

type WorkoutProps = {
    handleToggleModal: () => void,
    updateBookings: () => void
} 

type ModalData = {
    date: string,
    title: string,
    maxParticipants: number
}

function NewWorkoutModal(props: WorkoutProps) {

    const [modalData, setModalData] = useState<ModalData>({
        date: "",
        title: "",
        maxParticipants: 0
    })

    const updateModalData = (e: React.ChangeEvent<HTMLInputElement>) => {
        setModalData({...modalData, [e.target.name]: e.target.value})
    }
    
    const handleCreateNewWorkout = (e: React.MouseEvent<HTMLButtonElement>) => {
        createNewWorkout(modalData.date, modalData.title, modalData.maxParticipants)
        props.updateBookings();
    }

    return (
        <div className='workout-modal'>
            <button onClick={props.handleToggleModal}>X</button>
        
            <label>Datum</label>
            <input type="date" name='date' onChange={(e) => updateModalData(e)}/>
            
            <label>Typ av pass</label>
            <input type="text" placeholder='Ryggpass...' name='title' onChange={(e) => updateModalData(e)}/>
            
            <label>Max antal deltagare</label>
            <input type="text" placeholder='10...' name='maxParticipants' onChange={(e) => updateModalData(e)}/>

            <button onClick={handleCreateNewWorkout}>Lägg till</button>

        </div>
  )
}

export default NewWorkoutModal