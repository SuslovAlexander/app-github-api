import { EPageDirection } from '../../../shared/types/EPageDirection';
import styles from './PageNavigationButton.module.css';

interface iPageNavigationButtonProps {
    direction: string;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const PageNavigationButton = ({ direction, disabled, onClick = () => null }: iPageNavigationButtonProps): JSX.Element => {
    return <button onClick={onClick} disabled={disabled} className={styles.btn}>{EPageDirection[direction === "prev" ? "Prev" : "Next"]}</button>;
};

export default PageNavigationButton;