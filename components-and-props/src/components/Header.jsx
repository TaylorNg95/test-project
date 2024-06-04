import Button from "./Button"

function Header({fname, lname, surface, tournamentTotal}) {
    return (
        <>
            <div>Hello {fname} {lname}, your favorite surface is {surface.toLowerCase()} and you have played in {tournamentTotal} tournaments.</div>
            
            <Button />
        </>
    )
}

export default Header