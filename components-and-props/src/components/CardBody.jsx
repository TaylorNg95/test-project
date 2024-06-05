import Button from './Button'
import {useState} from 'react'

function CardBody({rank, surface, tournamentTotal, country}) {
    const [total, setTotal] = useState(tournamentTotal)

    function handleClick(){
        setTotal(total => total + 1)
    }

    return (
        <>
            <p>WTA Rank: {rank}</p>
            <p>Favorite Surface: {surface}</p>
            <p>Tournament Total: {total}</p>
            <p>Country: {country}</p>
            <Button handleTournAdd={handleClick}/>
        </>
    )
}

export default CardBody