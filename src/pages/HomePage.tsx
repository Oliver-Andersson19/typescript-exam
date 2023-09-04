import React from 'react'
import Header from '../components/Header'
import {Link} from 'react-router-dom'
import './homepage.css'

function HomePage() {
  return (
    <div className='home-page'>
      <Header></Header>
      <main>

        <div className="welcome-container">
          <h1>Välkommen till Strong n' Epic</h1>
          
          <Link to="/booking">
            <button>BOKA PASS</button>
          </Link>
        </div>
      
      </main>
    </div>
  )
}

export default HomePage