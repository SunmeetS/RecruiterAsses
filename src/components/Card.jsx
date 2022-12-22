import React from 'react'
import { cardContext } from './CardContainer'

export const Card = ({identifier}) => {
    const {cards, setCards} = React.useContext(cardContext)
    const [isVisible, setIsVisible] = React.useState(true)

    const handleDeletion = (card) => {
        console.log(identifier)
        setIsVisible(false)
        const newCards = cards.filter ((ele) => ele.key != identifier)
        setTimeout(() => setCards (newCards), 850)
    }
    return (
        <div className='card animated bounce' style={{
            transition: 'all 1s',
            opacity: Number(isVisible),
            margin: !isVisible? '-100px': '10px'
        }}>
            <div className="card-content">
                Card content {identifier}
                <button onClick={(card) => handleDeletion(card)} >Delete</button>
            </div>
            <img src="https://picsum.photos/500/300?random=1" alt="" />
        </div>
    )
}
