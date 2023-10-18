import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuther] = useState('');
    const navigate = useNavigate();

    const HandleSubmit = (e)=>{
        e.preventDefault();
        const newBlog ={
            title,
            body,
            author,
        }
        fetch("http://localhost:8000/blogs",{
            method : "POST",
            headers :{"Content-type": "application/json"},
            body :JSON.stringify(newBlog),
        }).then(()=>{
            navigate('/')
        })
    }
    return ( 
        
        <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={HandleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          placeholder="Title"
          value={title}
          onChange={(e)=> setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e)=> setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <input type="text"
        required
        value={author}
        onChange={(e)=> setAuther(e.target.value)}
        />
        <button>Add Blog</button>
      </form>
    </div>
     );
}
 
export default Create;

/*
~Notes~
Handle form submission in reactjs
1. assign a handler to submit event in form element
2. within submit handler we prevent page refresh
3. implement post request with fetch api to send post data to designated api
thats all !!!
*/