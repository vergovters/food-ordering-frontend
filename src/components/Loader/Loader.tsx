import styles from "./Loader.module.css"

const Loader = () => {
    return (
        <div className={styles.loader}>
            <div className={styles.bar1}></div>
            <div className={styles.bar2}></div>
            <div className={styles.bar3}></div>
            <div className={styles.bar4}></div>
            <div className={styles.bar5}></div>
            <div className={styles.bar6}></div>
        </div>
    );
}

export default Loader;
