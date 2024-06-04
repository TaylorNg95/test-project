import Header from "./components/Header"
import Button from "./components/Button"
import playerData from "./data/data"

function App() {
  return (
    <>
      <Header
        fname={playerData.fname}
        lname={playerData.lname}
        surface={playerData.surface}
        tournamentTotal={playerData.tournamentTotal}/>
    </>
  )
}

export default App
