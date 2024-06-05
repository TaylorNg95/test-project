import CardHeader from "./CardHeader"
import CardBody from "./CardBody"

function PlayerCards() {

    return (
        <>
            <div style={{display: 'inline-block', width: '25%'}}>
                <CardHeader />
                <CardBody />
            </div>
            <div style={{display: 'inline-block', width: '25%'}}>
                <CardHeader />
                <CardBody />
            </div>
            <div style={{display: 'inline-block', width: '25%'}}>
                <CardHeader />
                <CardBody />
            </div>
            <div style={{display: 'inline-block', width: '25%'}}>
                <CardHeader />
                <CardBody />
            </div>
        </>
    )
}

export default PlayerCards