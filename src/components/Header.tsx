import React from 'react'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import { UserContext } from '../service/UserContext'
import LoginModal from './LoginModal'

function Header() {

  const [showLoginModal, setShowLoginModal] = useState<boolean>(false)
  const {user, setUser} = useContext(UserContext);

  return (
    <>
      <header>
        
          <Link to="/">
            <h2>Strong n' Epic</h2>
          </Link>
          
          
          {user === "" && <button onClick={() => setShowLoginModal(true)}>Logga in</button>}
          {user !== "" && <button onClick={() => setUser("")}>Logga ut</button>}
      </header>
      <LoginModal showLoginModal={showLoginModal}></LoginModal>
    </>
  )
}

export default Header