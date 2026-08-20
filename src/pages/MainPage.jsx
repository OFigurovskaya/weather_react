import { useState } from 'react';
import styles from './MainPage.module.scss';

function MainPage() {
    const [post, setPost] = useState(null);
    const fetchDate = async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            if (!res.ok) {
                throw new Error(`net: ${res.status}`)
            }
            const result = await res.json();
            setPost(result)
        } catch (error) {
            console.log(error.message)
        } finally {
            console.log('all')
        }

    }

    fetchDate();


    return <>
        <div className={styles.mainPage}>
            <h1 className={styles.headTitle}>Это MainPage</h1>
            {post && (
                <article className={styles.block}>
                    <h2 className={styles.title}>{post.title}</h2>
                    <p className={styles.post}>{post.body}</p>
                </article>
            )}
            <ul className={styles.list}>
                <li className={styles.item}>это</li>
                <li className={styles.item}>добавленный</li>
                <li className={styles.item}>список</li>
            </ul>
        </div>

    </>
}

export default MainPage;