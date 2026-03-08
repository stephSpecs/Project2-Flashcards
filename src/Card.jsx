import { useState } from 'react'

function Card(props) {
    const [isFlipped, setIsFlipped] = useState(false)

    return (
        <div className = "card" onClick = {() => setIsFlipped(!isFlipped)}>
            {isFlipped ? "Answer: " + props.answer : "Question: " + props.question}
        </div>
    )
}
export default Card;