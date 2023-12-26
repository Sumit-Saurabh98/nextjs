'use client'

import { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [count, setCount] = useState(0)
  const router = useRouter()

  const handleCount = ()=>{
    setCount(count+1)
  }

  const InnerComponenet = (props) =>{
    return <main>
      <h1>InnerComponenet</h1>
      {props.count}
      <Link href="/about">got to login page</Link>
      <button onClick={()=>router.push("/about")}>Go to about</button>
      <Link href="/about/aboutstudent">go to about student page</Link>
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
