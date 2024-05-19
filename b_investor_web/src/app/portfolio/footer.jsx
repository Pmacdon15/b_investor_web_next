import styles from './page.module.css'
export default function Footer() {
    return (
        <footer className={styles.footer} >
            <div className={styles.boxFooter} >
                {/* <i className={fa-fa-pie-chart-box-item}></i> */}
                <div className={styles.boxLabel}>Portfolio</div>
            </div>
            <div className={styles.boxFooter} >
                {/* <i className={styles.fa-fa-line-chart-box-item}></i> */}
                <div className={styles.boxLabel}>WatchList</div>
            </div>
            <div className={styles.boxFooter}>
                {/* <i className={styles.fa-fa-exchange-box-item}></i> */}
                <div className={styles.boxLabel}>Transaction</div>
            </div>
            <div className={styles.boxFooter}>
                {/* <i className={styles.fa-fa-user-circle-o-box-item}></i> */}
                <div className={styles.boxLabel}>Profile</div>
            </div>
        </footer>
    );
}