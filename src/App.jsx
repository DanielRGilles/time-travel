import { useState } from "react"
import styles from './App.css';

 function useTimeTravel()  {
    const [ history, setHistory ] = useState([''])
    const [index, setIndex ] = useState(0);
    const current = history[index];
    const [ error, setError ] = useState('')
      
    const save = (e) => {
      setHistory([...history, e.target.value ]);
      setIndex(history.length)
      setError('')
      }

    const undo = () => {
       !index 
       ? setError("You can't undo more that you haven't already done")
       : setIndex(index - 1) & setError('');
      }

    const redo = () => {
      const length = history.length - 1; 
      index < length
       ? setIndex(index + 1) & setError('')
       : setError("You can't redo more that you hadn't already undone");
      }

      return { save, redo, undo, current, error }
}




export default function App() {
  const { save, redo, undo, current, error } = useTimeTravel()
  return (
  <main className={styles.main}>
      <div className={styles.container}>
          <section className={styles.input}>
            <input 
            type='date'
             name='date' 
             id='date' 
             aria-label='date select'
             value={current} 
             onChange={save}></input>
          </section>
          <span aria-label='output'>{current ? current : 'Please select a date'}</span>
          <div>
          <button className={styles.button} onClick={undo}>Undo</button> 
          <button className={styles.button} onClick={redo}>Redo</button>
         </div>
         {error ? <h2 className={styles.error}>{error}</h2> : null}
      </div>
  </main>
  )
}
