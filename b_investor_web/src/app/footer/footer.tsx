'use client'
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

import styles from './page.module.css'
export default function Footer({ userName }: { userName: string }) {
    const router = useRouter()
    return (
        <footer className={styles.footer} >  
            <button onClick={() => router.push(`/portfolio/${userName}`)} className={styles.boxFooter}>
                <FontAwesomeIcon icon={fas.faPieChart} />
                <div className={styles.boxLabel}>Portfolio</div>
            </button>
            <button onClick={() => router.push(`/watchList/${userName}`)} className={styles.boxFooter} >                
                <FontAwesomeIcon icon={fas.faLineChart} />
                <div className={styles.boxLabel}>WatchList</div>
            </button>
            <button onClick={() => router.push(`/transactions/${userName}`)} className={styles.boxFooter}>
                <FontAwesomeIcon icon={fas.faExchange} />
                <div className={styles.boxLabel}>Transaction</div>
            </button>
            <button onClick={() => router.push(`/profile/${userName}`)} className={styles.boxFooter}>
                <FontAwesomeIcon icon={fas.faUser} />
                <div className={styles.boxLabel}>Profile</div>
            </button>
        </footer>
    );
}