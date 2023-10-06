import React from "react";
import axios from "axios"
import {useState, useEffect} from "react"

const AddForm = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");

        const addPost = async (e) => {
            e.preventDefault();
            try{
           
            const {data} = await axios.post("http://localhost:3000", {
                title: title,
                author: author,
                content: content,
                });
                
                // Réinitialiser les champs du formulaire
                setTitle("");
                setAuthor("");
                setContent("");



            }catch(error) {
                
                console.error("l'erreur est", error)
            }
            }
    
    return (
        <form onSubmit={addPost} className="form">
                <input
                    type="text"
                    name=""
                    className="form-title"
                    placeholder="Titre"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    name=""
                    className="form-author"
                    placeholder="Auteur"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <textarea
                    name=""
                    className="form-content"
                    cols="30"
                    rows="10"
                    placeholder="Contenu"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <input
                    type="submit"
                    className="form-submit"
                    value="Publier"
                />
            </form>
    )
}

export default AddForm