import { useState } from 'react'
import Button from './Button'
import styles from './App.module.css'

function App() {

  return (
    <>
      <section>
        <div>
          <h1 className={styles.title}>Welcome Back@@@</h1>
          <Button text={"귀요미"} />
        </div>
      </section>
    </>
  )

}

export default App;
