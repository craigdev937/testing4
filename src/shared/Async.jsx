import React from "react";

export const Async = () => {
    const [posts, setPosts] = React.useState([]);
    
    React.useEffect(() => {
        const URL = "https://jsonplaceholder.typicode.com/posts";
        fetch(URL)
            .then((res) => res.json())
            .then((data) => { 
                setPosts(data);
            });
    }, []);

    return (
        <React.Fragment>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </React.Fragment>
    );
};



