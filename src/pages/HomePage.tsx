import React from 'react'
import Header from '../components/Header'
import {Link} from 'react-router-dom'
import './homepage.css'

function HomePage() {
  return (
    <div className='home-page'>
      <Header></Header>
      <header className="hero-section">
        <div className="welcome-container">
          <h1>Välkommen till Strong n' Epic</h1>
          <Link to="/booking">
            <button><span>Boka Pass</span></button>
          </Link>
        </div>
      </header>
      {/* <main className="news-section">
        <h1>Senaste Nytt</h1>
        <article className="news-article">
          <section className="article-left">
          </section>
          <section className="article-right">
            <h2 className="article-title">Strong n' Epic öppnar nytt gym i Mjölby</h2>
            <p className="article-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nam nesciunt nemo reiciendis necessitatibus asperiores neque nobis nisi unde animi?</p>
          </section>
        </article>
      </main> */}
    </div>
  )
}

export default HomePage