import { useState } from "react";
import Test from "./test";
const Home = ({name,title}) => {

    return ( 
        <div className="preview">
            
            {
                name.map((blog) => (
                   <div className="blog-preview" key={blog.id}>

                    <p>{blog.Name}</p>
                    <p>{blog.title}</p>

                   </div>
                ))
            }
        </div>
     );
}
 
export default Home;