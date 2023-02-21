import Link from "next/link"
import { useEffect, useState } from "react"
import styles from '@/styles/UseEffectTwo.module.css'


export default function UseEffectTwo() {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber(number + 50);
    }, [])

    return(
        <>
        <main className={styles.main}>
        <div className={styles.nav}>
            <div className={styles.navLink}>
        <Link href="/">Home</Link>
        </div>
        </div>
        <div className={styles.header}>
            UseEffect Two 
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