import React, {useState} from 'react'
import './newworkoutmodal.css'
import { createNewWorkout } from '../service/localStorageService'
import { AiOutlineClose } from 'react-icons/ai'

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
        <div className='new-workout-bg'>
            <div className='workout-modal'>
                <h2>Lägg till pass<button onClick={props.handleToggleModal}><AiOutlineClose/></button></h2>
            
                <label>Datum</label>
                <input type="date" name='date' onChange={(e) => updateModalData(e)}/>
                
                <label>Typ av pass</label>
                <input type="text" placeholder='Ryggpass...' name='title' onChange={(e) => updateModalData(e)}/>
                
                <label>Max antal deltagare</label>
                <input type="text" placeholder='10...' name='maxParticipants' onChange={(e) => updateModalData(e)}/>

                <button onClick={handleCreateNewWorkout} className='login-btn'>Lägg till</button>

            </div>
        </div> 
  )
}

export default NewWorkoutModal