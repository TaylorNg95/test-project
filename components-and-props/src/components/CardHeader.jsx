function CardHeader({fname, lname, img}) {
    return (
        <>
            <h2>{fname} {lname}</h2>
            <img style={{width: '100%'}}src={img}></img>
        </>
    )
}

export default CardHeader