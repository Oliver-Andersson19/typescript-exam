import React from 'react'
/* Page header som syns under varje sida */

import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import { UserContext } from '../service/UserContext'
import LoginModal from './LoginModal'

function Header() {

  const [showLoginModal, setShowLoginModal] = useState<boolean>(false)
  const {user, setUser, role, setRole} = useContext(UserContext); // Hämta usercontext (vilken anvädare som är inloggad)

  const closeLoginModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setShowLoginModal(false);
  }

  const handleLogout = () => {
    setUser("")
    setRole("")
  }

  return (
    <>
      <header className="top-header">
        
          <Link to="/">
            <h2 className="logo">Strong n' Epic</h2>
          </Link>
          
          <div className="login-container">
            {/* Kolla om nån är inloggad eller inte */}
            {user === "" && <button className="login-btn" onClick={() => setShowLoginModal(true)}>Logga in</button>}
            {user !== "" && <>
              <Link to="/admin">
                <h3></h3>
              </Link>
              <h3>Inloggad som <span>{user}</span></h3>
              <button className='login-btn' onClick={() => handleLogout()}>Logga ut</button>
            </>}
            {role}
          </div>
      </header>
      <LoginModal showLoginModal={showLoginModal} closeLoginModal={closeLoginModal}></LoginModal>
    </>
  )
}

export default Header