import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchHello = async () => {
    try {
      const {data} = await axios.get("http://localhost:3000/api/");
      setMessage(data.message);
    } catch (error) {
      console.error(error)
    }
    
  };
    fetchHello();
   
});

    
  return <div className='App'>{message}</div>




}
export default App
