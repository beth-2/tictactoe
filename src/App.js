import React from 'react'
import SquareCom from './components/SquareCom'
import { Header_Text } from './style/Style.styles'

const App = () => {
  return (
    <div>
      <Header_Text>React Tic-Tac-Toe</Header_Text>
      <SquareCom />
    </div>
  )
}

export default App