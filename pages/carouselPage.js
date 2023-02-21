import Link from "next/link"
import Carousel from "@/components/carousel"
import styles from '@/styles/CarouselPage.module.css'

export default function CarouselPage() {
    return(
        <>
        <main className={styles.main}>
        <div className={styles.nav}>
            <div className={styles.navLink}>
        <Link href="/">Home</Link>
        </div>
        </div>
        <div className={styles.carousel}>
        <Carousel/>
        </div>
        </main>
        </>
    )
}