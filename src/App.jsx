import { useState } from "react"
import styles from './App.css';

 const useTimeTravel = (date= '' ) => {
    const [history, setHistory] = useState(date ? [date] : [] )
    const [ index, setIndex ] = useState(-1);
    const current = index > -1 ? history[index] : date;
    const [error, setError ] = useState('');
      
    const save = (value) => {
      setHistory((prevDates) => {
        const first = prevDates.slice(0, index + 1);
        const second = prevDates.slice(index + 1, prevDates.length);
        return index < prevDates.length - 1
        ? [...first, value, ...second]
        : [...prevDates, value];
      })
      setError('');
      setIndex((prevIndex) => prevIndex + 1);
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
  const { save, redo, undo, current, error, } = useTimeTravel()
  return (
  <main className={styles.main}>
      <div className={styles.container}>
          <section className={styles.input}>
            <input 
            type='date'
             name='date' 
             id='date' 
             aria-label='date'
             value={current} 
             onChange={({ target }) => save(target.value)}></input>
          </section>
          <span aria-label='output'>{current ? current : 'Please select a date'}</span>
          <div>
          <button className={styles.button} onClick={undo}>Undo</button> 
          <button className={styles.button} onClick={redo}>Redo</button>
         </div>
         {error ? <h2 className={styles.error}>{error}</h2> : null}
      </div>
      {console.log()}
  </main>
  )
}


