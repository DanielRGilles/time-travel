import { useState } from "react"
import styles from './App.css'
export default function App() {
  const [ current, setCurrent ] = useState('Select a Date')
  const handleChange = (e) => {
    setCurrent(e.target.value)
  }
  return (
  <main className={styles.main}>
      <div className={styles.container}>
          <button className={styles.button}>Undo</button>
          <button className={styles.button}>Redo</button>
          <section className={styles.input}><input type='date' name='date' id='date' value={current} onChange={handleChange}></input></section>
          <span>{current}</span>
      </div>
  </main>
  )
}
