import { useEffect, useState } from "react";
import Home from "./home";

const Test = () => {

    const [name,setname] = useState([])

    useEffect(() => {
      fetch('http://localhost:8000/resouce')
      .then(respon => {
        return respon.json()
      })
      .then(data => {
        setname(data)
      });
    },[])

    return ( 
       <div className="test">
          {<Home name={name}></Home>}
       </div>
     );
}
 
export default Test;