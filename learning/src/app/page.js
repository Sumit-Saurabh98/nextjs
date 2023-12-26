'use client'

import { useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [count, setCount] = useState(0)

  const handleCount = ()=>{
    setCount(count+1)
  }

  const InnerComponenet = (props) =>{
    return <main>
      <h1>InnerComponenet</h1>
      {props.count}
    </main>
  }
  return (
    <main className={styles.main}>

      <button onClick={()=>alert("hello")}>show alert</button>

      <button onClick={handleCount}>Counter:- {count}</button>

      <InnerComponenet count={count}/>

    </main>
  )
}
