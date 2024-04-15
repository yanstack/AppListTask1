import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const URI = "http://localhost:8000/blogs/";


export const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault();
        const data = await axios.post(URI, { Title:title, Content:content });
        navigate("/");


    }
    return (
        <>
            {/* <h1>{data}</h1> */}
            <h2>Create Blog</h2>
            <form onSubmit={store}>

                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} className="form-control"/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <textarea value={content} onChange={(e)=> setContent(e.target.value)} className="form-control"/>
                </div>


                <button type="submit">Crear</button>
            </form>
        </>
    )
}
