'use client'
import {useRouter } from 'next/navigation'
// import fontawesome from '@fortawesome/fontawesome-free'

import styles from './page.module.css'
export default function  Footer({ userName }: { userName: string }) {
    const router = useRouter()
    return (
        <footer className={styles.footer} >
            <button onClick={() => router.push(`/portfolio/${userName}`)} className={styles.boxFooter}>
                {/* <i className={fa-fa-pie-chart-box-item}></i> */}
                <div className={styles.boxLabel}>Portfolio</div>
            </button>
            <button onClick={()=> router.push(`/watchList/${userName}`) } className={styles.boxFooter} >
                {/* <i className={styles.fa-fa-line-chart-box-item}></i> */}
                <div className={styles.boxLabel}>WatchList</div>
            </button>
            <button onClick={()=> router.push(`/watchList/${userName}`)} className={styles.boxFooter}>
                {/* <i className={styles.fa-fa-exchange-box-item}></i> */}
                <div className={styles.boxLabel}>Transaction</div>
            </button>
            <button onClick={()=> router.push(`/watchList/${userName}`)} className={styles.boxFooter}>
                {/* <i className={styles.fa-fa-user-circle-o-box-item}></i> */}
                <div className={styles.boxLabel}>Profile</div>
            </button>           

        </footer>
    );
}