import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const URI = "http://localhost:8000/blogs/";


export const ShowBlogs = () => {

  const [blogs, setFirst] = useState([]);

  useEffect(() => {
    getBlogs();
  }, [])


  const getBlogs = async () => {
    const response = await axios.get(URI);
    const data = await response.data;
    setFirst(data);
  }

  const deleteBlog = async (id) => {
    await axios.delete(`${URI}${id}`);
    getBlogs();
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <Link to="/create" className="btn btn-primary m-2"><i className="fa-solid fa-plus"></i></Link>
            <table className="table">
              <thead className="table-secondary">
                <tr>
                  <th>Title</th>
                  <th>Content</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog) => (
                  <tr key={blog.id}>
                    <td>{blog.Title}</td>
                    <td>{blog.Content}</td>
                    <td>
                      <Link to={`/edit/${blog.id}`} className="btn btn-info"> <i className="fa-regular fa-pen-to-square"></i></Link>
                      <button onClick={() => deleteBlog(blog.id)} className="btn btn-danger"> <i className="fa-regular fa-trash-can"></i></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>


    </>
  )
}
