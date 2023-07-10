import styles from './Loader.module.css';

const Loader = (): JSX.Element => {
    return (
        <div className={styles.wrap}>
            <span className={styles.loader} />
        </div>
    )
}

export default Loader;