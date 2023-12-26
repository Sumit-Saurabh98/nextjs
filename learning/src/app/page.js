'use client'
import styles from './page.module.css'

export default function Home() {

  const printFruit = (fruit)=>{
    alert(fruit)
  }
  return (
    <main className={styles.main}>
      <h1>Home Page</h1>
      <button onClick={()=>printFruit("mango")}>Click me</button>
    </main>
  )
}
