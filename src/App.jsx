import { useState } from "react"
import styles from './App.css'
export default function App() {
  const [ current, setCurrent ] = useState('Select a Date')
  const handleChange = (e) => {
    setCurrent(e.target.value)
  }
  return (
  <>
      <div className={styles.container}>
          <button>Undo</button>
          <button>Redo</button>
          <input type='date' name='date' id='date' value={current} onChange={handleChange}></input>
          <span>{current}</span>
      </div>
  </>
  )
}
