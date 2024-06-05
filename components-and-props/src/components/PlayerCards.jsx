import CardHeader from "./CardHeader"
import CardBody from "./CardBody"

function PlayerCards({players}) {
    const playerList = players.map(player => (
        <div key={player.id} style={{display: 'inline-block', width: '22%', margin: '1%'}}>
            <CardHeader
                fname={player.fname}
                lname={player.lname}
                img={player.img}
            />
            <CardBody
                rank={player.rank}
                surface={player.surface}
                tournamentTotal={player.tournamentTotal}
                country={player.country}
            />
        </div>
    ))
    
    return (
        <>
            {playerList}
        </>
    )
}

export default PlayerCards