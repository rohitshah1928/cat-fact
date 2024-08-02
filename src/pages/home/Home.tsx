import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { addLike, getCatFactData, removeLike } from '../../redux/features/catSlice';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';

const Home = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { catFact, cateImage, isLoading } = useSelector((state: RootState) => state.cat);

    const handleGenerate = () => {
        dispatch(getCatFactData());
    };

    const handleLike = () => {
        dispatch(addLike())
    }
    const handleDislike=()=>{
        dispatch(removeLike())
    }

    return (
        <div className={styles.maincontainer}>
            <div className={styles.container}>
                <div className={styles.historyContainer}>
                    <Link to="/history" className={styles.history}>History</Link>
                </div>
                {
                    isLoading ? <div className={styles.loading} ><ReactLoading type={'bubbles'} color={'#FF0000'} /></div>
                        : (
                            catFact && cateImage ? (
                                <div className={styles.catFactContainer}>

                                    <img
                                        src={cateImage}
                                        alt="Cat"
                                        className={styles.catImage}


                                    />

                                    <div className={styles.reactions}>
                                        <button onClick={ handleLike} className={styles.reactionButton}>
                                            Like
                                        </button>
                                        <button className={styles.reactionButton} onClick={ handleDislike}>
                                            Dislike
                                        </button>
                                    </div>
                                    <p className={styles.catFact}>{catFact}</p>
                                </div>
                            ) : (
                                <p className={styles.welcomeMessage}>Welcome to Cat Fact</p>
                            )
                        )
                }

                <div style={{ width: '100%', display: 'flex' }}>
                    <button onClick={handleGenerate} className={styles.generateButton}>
                        Generate Cat Fact
                    </button>
                </div>

            </div>

        </div>
    );
};

export default Home;
