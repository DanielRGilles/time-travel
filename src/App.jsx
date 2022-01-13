import { useState } from "react"
import styles from './App.css';

 function useTimeTravel()  {
    const [ history, setHistory ] = useState([''])
    const [index, setIndex ] = useState(0);
    const displayValue = history[index];
    const [ error, setError ] = useState('')
      
    const handleChange = (e) => {
      setHistory([...history, e.target.value ]);
      setIndex(history.length)
      setError('')
      }

    const handleUndoClick = () => {
       !index 
       ? setError("You can't undo more that you haven't already done")
       : setIndex(index - 1) & setError('');
      }

    const handleRedoClick = () => {
      const length = history.length - 1; 
      index < length
       ? setIndex(index + 1) & setError('')
       : setError("You can't redo more that you hadn't already undone");
      }

      return { handleChange, handleRedoClick, handleUndoClick, displayValue, error }
}




export default function App() {
  const { handleChange, handleRedoClick, handleUndoClick, displayValue, error } = useTimeTravel()
  return (
  <main className={styles.main}>
      <div className={styles.container}>
          <section className={styles.input}>
            <input type='date' name='date' id='date' value={displayValue} onChange={handleChange}></input>
          </section>
          <span>{displayValue ? displayValue : 'Please select a date'}</span>
          <div>
          <button className={styles.button} onClick={handleUndoClick}>Undo</button> 
          <button className={styles.button} onClick={handleRedoClick}>Redo</button>
         </div>
         {error ? <h2 className={styles.error}>{error}</h2> : null}
      </div>
  </main>
  )
}
