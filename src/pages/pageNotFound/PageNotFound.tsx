import { Link } from 'react-router-dom';
import styles from './PageNotFound.module.css';

const PageNotFound = () => {
    return (
        <div className={styles.pagenotfoundContainer}>
            <h1>404</h1>
            <p>Page Not Found</p>
            <Link to="/" className={styles.homeLink}>Go to Home</Link>
        </div>
    );
};

export default PageNotFound;
