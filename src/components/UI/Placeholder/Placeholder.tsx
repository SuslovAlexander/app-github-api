import { ReactNode } from 'react';
import styles from './Placeholder.module.css';

const Placeholder = ({ children }: { children: ReactNode }): JSX.Element => {
    return <h3 className={styles.placeholder}>{children}</h3>
}

export default Placeholder;