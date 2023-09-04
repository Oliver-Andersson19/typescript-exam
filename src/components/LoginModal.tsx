/*Login form som kommer upp när man trycker Logga in i headern */

import React from 'react'
import './loginmodal.css'

type LoginModalProps = {
  showLoginModal: boolean;
}

function LoginModal({showLoginModal}: LoginModalProps) {

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => { // Hantera login här
    e.preventDefault();
  }

  return (
    <div className={`loginbg ${showLoginModal ? "" : "hide"}`}>
      <form className='login-modal'>
          <h2>Logga in</h2>
          <label >Användarnamn</label>
          <input type="text" />
          <label >Lösenord</label>
          <input type="text" />
          <button onClick={(e) => handleLogin(e)}>Logga in</button>
      </form>
    </div>
  )
}

export default LoginModal