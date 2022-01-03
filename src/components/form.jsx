import {useState,useEffect} from "react";
import './form.css';

export const Form=()=>{
    const [data,setData]=useState([]);
    const [form,setForm]=useState({title:"",ingredients:"",time:""});
    const getData=()=>{
        fetch(" http://localhost:3001/users")
        .then(d=>d.json())
        .then((res)=>setData(res))
    }
    
    useEffect(()=>{
        getData()
    },[])
    const handlesubmit=async(e)=>{
        e.preventDefault();
       
      let res=await fetch("http://localhost:3001/users",{
           method:"POST",
           body:JSON.stringify(form),
           headers:{"content-type": "application/json"}
       })
       getData()
    }
    const handleChange=(e)=>{
        const {name,value} = e.target;
        setForm({
            ...form,
            [name]:value,
        })
        
    }
return (
    <>
    <div className="main">
    <form method="POST" onSubmit={handlesubmit}>
        <div>
    <input type="text" name="title" onChange={handleChange} placeholder="Enter Title"/>
    </div>
    <div>
    <input type="text" name="ingredients" onChange={handleChange} placeholder="Enter Ingredients"/>  
    </div>
    <div>
    <input type="text" name="time" onChange={handleChange} placeholder="Enter Time"/>  
    </div>
    

    <div>
    <input type="submit" className="sub"/>  
    </div>
    </form>
  
    </div>
      <div>
          {data.map(el=><><h2>{el.title}</h2>
          <p>{el.ingredients}</p>
          <p>{el.time}</p>
          </>

          )}
      </div>
    </>

);  

};