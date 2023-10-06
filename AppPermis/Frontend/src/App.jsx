import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from "axios"
import List from "../components/List"
import AddForm from "../components/AddForm"

function App() {
  return <div className='App'>
    <h1>POST</h1>
    <AddForm />
    <List />
  </div>

}
export default App
