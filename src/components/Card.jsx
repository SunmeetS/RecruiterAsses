import axios from 'axios'
import React from 'react'
import { cardContext } from './CardContainer'

export const Card = ({ identifier, data }) => {
    const { cards, setCards } = React.useContext(cardContext)
    const [isVisible, setIsVisible] = React.useState(true)

    const handleDeletion = async (card) => {
        console.log(identifier)
        setIsVisible(false)
        setTimeout(async () => {
            await axios.delete(process.env.REACT_APP_BASE_URL + 'recruiter/delete-recruiter-flow-data/' + identifier)
            window.location.reload()
        }, 200);
    }
    return (
        <div className='card animated bounce' style={{
            transition: 'all 1s',
            opacity: Number(isVisible),
            marginLeft: !isVisible ? '-100px' : ''
        }}>
            <div className="card-content">
                {data} {identifier}
                <button onClick={(card) => handleDeletion(card)} >Delete</button>
            </div>
            <img src="https://picsum.photos/500/300?random=1" alt="" />
        </div>
    )
}
