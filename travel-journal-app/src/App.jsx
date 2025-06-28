import { useState } from 'react'
import './App.css'
import journalEntries from './journal-entries.json'
import Card from './components/Card'
import Menu from './components/Menu'

function App() {

  const cardData = JSON.parse(JSON.stringify(journalEntries));

  function displayCards() {
    return cardData.map(entry => (
       <Card id={entry.id} 
        key={entry.id}
        pic={entry.picture} 
        place={entry.place} 
        location={entry.location}
        googleMapsLink={entry.googleMapsLink}
        date={entry.date} 
        description={entry.description}
      />
    ));
  }

  return (
    <main>
      <header>
        <Menu />
      </header>
      <div className="container">
        {displayCards()}
      </div>
    </main>
  )
}

export default App
