import React from "react";


const Post = ({post}) => {
    return (
        <div className="post">
            <h2 className="post-title">{post.title}</h2>
            <p className="post-content">{post.content}</p>
            <p className="post.author">par {post.author}</p>
        </div>
    )
    

    }
    


export default Post;