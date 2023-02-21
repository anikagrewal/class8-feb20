import Link from "next/link"
import { useEffect, useState } from "react"
import styles from '@/styles/UseEffectOne.module.css'

export default function UseEffectOne() {

    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber(number + 1)
    })
    return(
        <>
        <main className={styles.main}>
        <div className={styles.nav}>
            <div className={styles.navLink}>
        <Link href="/">Home</Link>
        </div>
        </div>
        <div className={styles.header}>
            UseEffect One
        </div>
        <div className={styles.num}>
        <div className={styles.numb}>
          {number}
        </div>
        </div>
        </main>
        </>
    )
}