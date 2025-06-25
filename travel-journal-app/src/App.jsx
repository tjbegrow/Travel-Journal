import { useState } from 'react'
import './App.css'
import journalEntries from './journal-entries.json'
import Card from './components/Card'

function App() {

  const cardData = JSON.parse(JSON.stringify(journalEntries));

  function displayCards() {
    return cardData.map(element => (
       <Card id={element.id} 
        key={element.id}
        pic={element.picture} 
        place={element.place} 
        date={element.date} 
        description={element.description}
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
