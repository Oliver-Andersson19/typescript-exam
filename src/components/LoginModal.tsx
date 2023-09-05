/*Login form som kommer upp när man trycker Logga in i headern */

import React, { useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import { getUsers, getBookings, createUser } from '../service/localStorageService';
import { useNavigate } from "react-router-dom";
import './loginmodal.css'
import { UserContext } from '../service/UserContext';
import { UserType } from '../mockData';

type LoginModalProps = {
  showLoginModal: boolean;
  closeLoginModal: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function LoginModal({showLoginModal, closeLoginModal}: LoginModalProps) {
  
  const navigate = useNavigate();

  const [usernameField, setUsernameField] = useState<string>("")
  const [passwordField, setPasswordField] = useState<string>("")
  const [showRegisterForm, setShowRegisterForm] = useState<boolean>(false)
  const {user, setUser} = useContext(UserContext); // Hämta usercontext (vilken anvädare som är inloggad)

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => { // Hantera login här
    e.preventDefault();

    getUsers().forEach((user) => {
      if (user.username === usernameField && user.password === passwordField) {
        
        if(user.role === "ADMIN") {
          navigate("/admin")
        } else {
          closeLoginModal(e)
        };
        
        setUser(user.username)
      }
    });
  }

  const handleRegister = (e: React.MouseEvent<HTMLButtonElement>) => { // Hantera registrering här
    e.preventDefault();
    
    createUser({username: usernameField, password: passwordField, role: "USER"})
    setShowRegisterForm(false)

  }
  

  return (
    <div className={`loginbg ${showLoginModal ? "" : "hide"}`}>

      {!showRegisterForm && <div className='login-modal'>
          <h2>Logga in <button onClick={(e) => closeLoginModal(e)}>X</button></h2>
          <label >Användarnamn</label>
          <input type="text" onChange={(e) => setUsernameField(e.target.value)}/>
          <label >Lösenord</label>
          <input type="password" onChange={(e) => setPasswordField(e.target.value)}/>
          <p onClick={() => setShowRegisterForm(true)}>Inte medlem ännu? <span>Klicka här</span></p>
          <button onClick={(e) => handleLogin(e)} className='login-btn'>Logga in</button>
      </div>}

      {showRegisterForm && <div className='login-modal'>
          <h2>Bli medlem <button onClick={(e) => closeLoginModal(e)}>X</button></h2>
          <label >Användarnamn</label>
          <input type="text" onChange={(e) => setUsernameField(e.target.value)}/>
          <label >Lösenord</label>
          <input type="password" onChange={(e) => setPasswordField(e.target.value)}/>
          <p onClick={() => setShowRegisterForm(false)}>Har du redan ett konto? <span>Klicka här</span></p>
          <button onClick={(e) => handleRegister(e)} className='login-btn'>Registrera</button>
      </div>}
    </div>
  )
}

export default LoginModal