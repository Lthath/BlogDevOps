import React from "react";
import axios from "axios";
import { useState} from "react";
import { useEffect } from "react";
import Post from "./post"


const List = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try{
                const {data} = await axios.get("http://localhost:3000/")
                setPosts(data)
            } catch (err) {
                console.error("Erreur lors de la récupération des données :" + err);
            }             

        }
       fetchPosts(); 
    }, []);


    return (
        <div className="list">
            {posts.map((post) => (
                <Post post={post} key={post._id} /> 
                
            ))}
        </div>
        
    )

}


export default List;