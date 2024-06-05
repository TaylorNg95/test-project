function Button({handleTournAdd}) {
    return (
        <>
            <button onClick={handleTournAdd}>Add Tournament</button>
        </>
    )
}

export default Button
























/* import { useState } from "react"

function Button() {
    const [count, setCount] = useState(0)

    function handleClick() {
        setCount(count + 1)
    }

    return (
        <button onClick={handleClick}>Count: {count}</button>
    )
}

export default Button */