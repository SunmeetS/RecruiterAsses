import React, { useState } from 'react'
import { Card } from './Card'
export const cardContext = React.createContext(null);

export const CardContainer = () => {
    const [cards, setCards] = useState([])
    return (
        <cardContext.Provider value={{ cards, setCards }}>
            <div className='mainContainer'>
                <button onClick={() => setCards([...cards, <Card key={Date.now()} identifier={Date.now()} className='cardAdding' />])}>Add Card</button>
                <div className='cardContainer'>{cards.map((card) => card)}</div>
            </div>
        </cardContext.Provider>
    )
}
