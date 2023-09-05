import React from 'react'
/* Page header som syns under varje sida */

import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import { UserContext } from '../service/UserContext'
import LoginModal from './LoginModal'

function Header() {

  const [showLoginModal, setShowLoginModal] = useState<boolean>(false)
  const {user, setUser} = useContext(UserContext); // Hämta usercontext (vilken anvädare som är inloggad)

  const closeLoginModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setShowLoginModal(false);
  }

  return (
    <>
      <header>
        
          <Link to="/">
            <h2>Strong n' Epic</h2>
          </Link>
          
          
          {/* Kolla om nån är inloggad eller inte */}
          {user === "" && <button onClick={() => setShowLoginModal(true)}>Logga in</button>}
          {user !== "" && <button onClick={() => setUser("")}>Logga ut</button>}
      </header>
      <LoginModal showLoginModal={showLoginModal} closeLoginModal={closeLoginModal}></LoginModal>
    </>
  )
}

export default Header