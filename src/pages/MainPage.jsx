import { useState } from 'react';
import styles from './MainPage.module.css';

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
            <h1 className='headTitle'>Это MainPage</h1>
            {post && (
                <article>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </article>
            )}
            <ul>
                <li>это</li>
                <li>добавленный</li>
                <li>список</li>
            </ul>
        </div>

    </>
}

export default MainPage;