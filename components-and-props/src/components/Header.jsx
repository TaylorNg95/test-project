import { useEffect } from "react"

function Header({name, age}) {
    useEffect(() => {
        console.log('b', name)
      }, [])

    return (
        <div>Hello {name}, you are {age} years old</div>
    )
}

export default Header