import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = () => {
    
//For Loading Data
    
// First Create a Use state 
const [blogs, setBlogs] = useState([])

//Second Create a UseEffect for fetching the data
useEffect( () => {
    fetch('blogs.json')
    .then(res =>res.json())
    .then(data => setBlogs(data))

          },[])

    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs :{blogs.length}</h1>
            {
                blogs.map(blog =>  
                <Blog 
                key={blog.id} 
                blog={blog}>
                    
                </Blog>)
            }
        </div>
    );
};

export default Blogs;