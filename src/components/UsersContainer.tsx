import React, {useState, useEffect} from 'react'
import './userscontainer.css'
import { UserType, roleType } from '../types'
import { getUsers } from '../service/localStorageService'

type UsersContainerProps = {
    role: roleType
} 

function UsersContainer(props: UsersContainerProps) {

    const [users, setUsers] = useState<UserType[]>([])
    const [showUsers, setShowUsers] = useState<boolean>(false)

    useEffect(() => {
        setUsers(getUsers())
    }, [])
    

    const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
        setShowUsers(!showUsers)
    }

    return (
        <div className='users-container'>
            <header>
                <h3>Registrerade {props.role} användare</h3>

                <button className='expand-users-btn' onClick={handleToggle}>+</button>

            </header>

            {showUsers && <div className='user-list'>
                {users.map((user, i) => {
                    if(user.role === props.role) {
                        return (<p key={i}>{user.username} <span className='role'>{user.role}</span></p>)
                    }
                })}
            </div>}

        </div>
  )
}

export default UsersContainer