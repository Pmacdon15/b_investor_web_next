
export default function Footer() {
    return (
        <footer>
            <div className={styles.box-footer} >
                <i className="fa fa-pie-chart box-item"></i>
                <div className={styles.box-label}>Portfolio</div>
            </div>
            <div className={styles.box-footer} >
                <i className={styles.fa-fa-line-chart-box-item}></i>
                <div className={styles.box-label}>WatchList</div>
            </div>
            <div className={styles.box-footer}>
                <i className={styles.fa-fa-exchange-box-item}></i>
                <div className={styles.box-label}>Transaction</div>
            </div>
            <div className={styles.box-footer}>
                <i className={styles.fa-fa-user-circle-o-box-item}></i>
                <div className={styles.box-label}>Profile</div>
            </div>
        </footer>
    );
}