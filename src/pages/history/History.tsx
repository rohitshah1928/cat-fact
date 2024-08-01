import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import styles from './History.module.css';

const History = () => {
    const { likedFact } = useSelector((state: RootState) => state.cat);

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Liked Facts</h1>
            <ul className={styles.factList}>
                {likedFact.map((item, index) => (
                    <li key={index} className={styles.factItem}>
                        <h3>
                            <span className={styles.index}>{index + 1}.</span> {item}
                        </h3>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default History;
