import { useState } from 'react'
import './App.css'
import TokyoTower from './assets/TokyoTower.jpeg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <header>
        <h1>My Japanese Trip</h1>
      </header>
      <section className="location-card">
        <div className="img-container">
          <img className="card-img" src={TokyoTower}/>
        </div>
        <div className="description-container">
          <h2>Tokyo Tower</h2>
          <p id="date">2025年4月3日</p>
          <p>p</p>
        </div>
      </section>
    </main>
  )
}

export default App
