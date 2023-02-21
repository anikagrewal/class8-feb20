import Link from "next/link"
import { useEffect, useState } from "react"
import styles from '@/styles/UseEffectThree.module.css'

export default function UseEffectThree() {

    const [number, setNumber] = useState(0);

    const [value, setValue] = useState(-10);

    useEffect(() => {
        setValue(value + 10)
    }, [ number ])

    return(
        <>
        <main className={styles.main}>
        <div className={styles.nav}>
            <div className={styles.navLink}>
        <Link href="/">Home</Link>
        </div>
        </div>
       
        <div className={styles.header}>
            UseEffect Three
        </div>
        <div className={styles.btn}>
            <button className={styles.button} onClick={() => setNumber(number +1)}>Click Me</button>
        </div>
     
        <div className={styles.val}>
            {value}
        </div>
        </main>
        </>
    )
}