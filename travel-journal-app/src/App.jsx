import { useState } from 'react'
import './App.css'
import journalEntries from './journal-entries.json'
import Card from './components/Card'

function App() {

  const cardData = JSON.parse(JSON.stringify(journalEntries));

  function displayCards() {
    return cardData.map(entry => (
       <Card id={entry.id} 
        key={entry.id}
        pic={entry.picture} 
        place={entry.place} 
        date={entry.date} 
        description={entry.description}
      />
    ));
  }

  return (
    <main>
      <header>
        <h1>My Japanese Trip</h1>
      </header>
      {displayCards()}
    </main>
  )
}

export default App
