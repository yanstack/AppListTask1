

//import { Button } from 'react-bootstrap';

import { Route, Routes } from "react-router-dom"
import { ShowBlogs } from "./blog/ShowBlogs.jsx"
import { CreateBlog } from "./blog/CreateBlog.jsx"
import { EditBlog } from "./blog/EditBlog.jsx"


function App() {

  
  return (
    <>
      <h1 className="display-5 text-center">Lista de tareas</h1>
      <Routes>
        <Route path="/" element={<ShowBlogs />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/edit/:id" element={<EditBlog />} />
      </Routes>
    </>
  )
}

export default App
