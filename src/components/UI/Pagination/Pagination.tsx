import PageNavigationButton from '../PageNavigationButton/PageNavigationButton';
import styles from './Pagination.module.css';

interface IPaginationProps {
    hasPrev: boolean;
    hasNext: boolean;
    disabledPrev?: boolean;
    disabledNext?: boolean;
    onClickNext: () => void;
    onClickPrev: () => void;
}

const Pagination = ({ hasPrev, hasNext, disabledPrev = false, disabledNext = false, onClickPrev, onClickNext }: IPaginationProps): JSX.Element => {
    return (
        <div className={styles.pagination}>
            <div>
                {hasPrev && <PageNavigationButton direction="prev" onClick={onClickPrev} disabled={disabledPrev} />}
            </div>
            <div>
                {hasNext && <PageNavigationButton direction="next" onClick={onClickNext} disabled={disabledNext} />}
            </div>
        </div>
    )

}

export default Pagination;