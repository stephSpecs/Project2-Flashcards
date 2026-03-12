import { useState } from 'react'
import './App.css'
import Card from './Card'

function App() {
  const [guess, setGuess] = useState("")
  const [feedback, setFeedback] = useState("")
  const [cardIndex, setCardIndex] = useState(0)
  const [card, setCard] = useState([
    { question: 'France', answer: 'Paris'},
    { question: 'Spain', answer: 'Madrid'},
    { question: 'Italy', answer: 'Rome'},
    { question: 'Germany', answer: 'Berlin'},
    { question: 'Portugal', answer: 'Lisbon'},
    { question: 'Netherlands', answer: 'Amsterdam'},
    { question: 'Belgium', answer: 'Brussels'},
    { question: 'Sweden', answer: 'Stockholm'},
    { question: 'Norway', answer: 'Oslo'},
    { question: 'Denmark', answer: 'Copenhagen'},
    { question: 'Finland', answer: 'Helsinki'},
    { question: 'Switzerland', answer: 'Bern'},
    { question: 'Austria', answer: 'Vienna'},
    { question: 'Greece', answer: 'Athens'},
    { question: 'Ireland', answer: 'Dublin'},
    { question: 'Poland', answer: 'Warsaw'},
    { question: 'Czech Republic', answer: 'Prague'},
    { question: 'Hungary', answer: 'Budapest'},
    { question: 'Croatia', answer: 'Zagreb'},
    { question: 'Slovenia', answer: 'Ljubljana'},
    { question: 'Slovakia', answer: 'Bratislava'},
    { question: 'Bulgaria', answer: 'Sofia'},
    { question: 'Romania', answer: 'Bucharest'},
    { question: 'Japan', answer: 'Tokyo'},
    { question: 'Korea', answer: 'Seoul'},
    { question: 'China', answer: 'Beijing'},
    { question: 'India', answer: 'New Delhi'},
    { question: 'Australia', answer: 'Canberra'},
    { question: 'New Zealand', answer: 'Wellington'},
    { question: 'South Africa', answer: 'Pretoria'},
    { question: 'Egypt', answer: 'Cairo'},
    { question: 'Morocco', answer: 'Rabat'},
    { question: 'Vietnam', answer: 'Hanoi'},
    { question: 'Thailand', answer: 'Bangkok'},
    { question: 'Indonesia', answer: 'Jakarta'},
    { question: 'Philippines', answer: 'Manila'},
    { question: 'Malaysia', answer: 'Kuala Lumpur'},
    { question: 'Singapore', answer: 'Singapore'},
    { question: 'Russia', answer: 'Moscow'},
    { question: 'Saudi Arabia', answer: 'Riyadh'},
  ])
  return (
    <>
      <div className = "app">
        <h1>World Capital Flashcards!</h1>
        <h4 className = "description">Test your knowledge of world capitals! Click a card to reveal the capital, then hit 'Next Card' to get a new country.</h4>
        <h5 className = "cardCount">Total Cards: {card.length}</h5>

        <Card key = {cardIndex} question = {card[cardIndex].question} answer = {card[cardIndex].answer}/>

        <div className="inputContainer">
          <input className="guessInput" type="text" placeholder="Enter your guess here..." value={guess} onChange={(e) => setGuess(e.target.value)}/>

          <button className="submitButton" onClick={() => {
            if (guess.toLowerCase() === card[cardIndex].answer.toLowerCase()) {
              setFeedback("correct")
            } else {
              setFeedback("incorrect")
            }
          }}>Submit</button>
          {feedback === "correct" && <p>Correct!</p>}
          {feedback === "incorrect" && <p>Incorrect. Try again!</p>}
        </div>

        <div className="navButtons">
          <button className="backButton" disabled={cardIndex === 0} onClick={() => { setGuess(""); setFeedback(""); setCardIndex(cardIndex - 1)}}>⇦</button>
          <button className="nextButton" disabled={cardIndex === card.length - 1} onClick={() => { setGuess(""); setFeedback(""); setCardIndex(cardIndex + 1)}}>⇨</button>
        </div>
        <button className="shuffleButton" onClick={() => { setCard([...card].sort(() => Math.random() - 0.5)); setCardIndex(0); setGuess(""); setFeedback("");}}>Shuffle</button>
      </div>
    </>
  )
}

export default App
