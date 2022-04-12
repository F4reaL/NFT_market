import { useState } from 'react'
import './App.css'
import TheHeader from './components/TheHeader'
import TheContent from './components/TheContent'
import TheFooter from './components/TheFooter'

function App() {

  return (
    <div className="App">
     <TheHeader></TheHeader>
     <TheContent></TheContent>
     <TheFooter></TheFooter>
    </div>
  )
}

export default App
