import BlueParagraph from "./StyledComponents/BlueParagraph"
import Header from "./components/Header"
/* import './App.css' */
import { headers } from './globals'
import { useEffect } from "react"

function App() {

  useEffect(() => {
    console.log('a')
  }, [])
  
  console.log(headers)

  return (
    <>
      <Header name="Nancy" age={61}/>
      <Header name="Arthur" age={64}/>
      <BlueParagraph>Mwahaha</BlueParagraph>
      <BlueParagraph>Testing</BlueParagraph>
    </>
  )
}

export default App
