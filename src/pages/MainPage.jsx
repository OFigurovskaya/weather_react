import { useState } from 'react'
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


    return <div>
        <div className="mainPage">
            <h1>Это MainPage</h1>
            {post && (
                <article>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </article>
            )}
        </div>
    </div>
}

export default MainPage;