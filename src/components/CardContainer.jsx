import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { Card } from './Card'
export const cardContext = React.createContext(null);

export const CardContainer = () => {
    const [cards, setCards] = useState([])
    const getCards = async () => await axios.get(process.env.REACT_APP_BASE_URL + 'recruiter/get-recruiter-flow-data')

    const handleAddition = useCallback(async () => {
        await axios.post(process.env.REACT_APP_BASE_URL + 'recruiter/post-recruiter-flow-data')
    })

    useEffect(() => {
        getCards().then((res) => setCards(res.data))
    }, [handleAddition])

    return (
        <cardContext.Provider value={{ cards, setCards }}>
            <div className='mainContainer'>
                <button onClick={handleAddition}>Add Card</button>
                <div className="cardContainer">
                    {cards.map((card) => <Card identifier={card._id} data={card.data} />)}
                </div>
            </div>
        </cardContext.Provider>
    )
}
