import React, { useState } from "react";

function Button(props){
    const [title,setTitle ] = useState('Updated from hook')
    return(
        <button onClick={()=> setTitle("Updated Value")}>{title}</button>
    )
}
export default Button;