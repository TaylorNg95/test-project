import Header from "./components/Header"
import PlayerCards from "./components/PlayerCards"
import playerData from "./data/data"

function App() {
  return (
    <>
      <Header />
      <PlayerCards players={playerData}/>
    </>
  )
}

export default App
