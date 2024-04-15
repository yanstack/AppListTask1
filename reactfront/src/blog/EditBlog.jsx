import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';



const URI = "http://localhost:8000/blogs/";

export const EditBlog = () => {


const [title, setTitle] = useState('');
const [content, setContent] = useState('');
const navigate= useNavigate();

const {id}=useParams();


console.log(id);

const update=async(e)=>{
    e.preventDefault();
    await axios.put(URI+id, {Title:title,Content:content});
    navigate("/")
}

useEffect(() => {
getBlogById();
}, []);

const getBlogById= async()=>{
    const response= await axios.get(URI+id);
    setTitle(response.data.Title);
    setContent(response.data.Content);
}






  return (
   <>
     <h2>Edit Blog</h2>
            <form onSubmit={update}>

                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} className="form-control"/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Content</label>
                    <textarea value={content} onChange={(e)=> setContent(e.target.value)} className="form-control"/>
                </div>


                <button type="submit">Aceptar</button>
            </form>
   
   </>
  )
}
