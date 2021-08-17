
import {useState} from 'react'
import '../css/Tools.css'



const Tools = () => {

  const switchdb = ()=>{
    fetch('/changedb',{
      method:"post",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({test:"test message"})
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
    })
    .catch(err=>{
      console.log(err)
    })
  }

  return (
    <div className="card"
      style={{
        margin: "50px auto",
        textAlign: "center",
        padding: "30px"
      }}>
      <section className="line1">
        <a 
        className="btn waves-effect waves-light #64b5f6 blue darken-1" 
        onClick={()=>{switchdb()}}
        >switch db</a>
        <p>reIG</p>
        <p>-</p>
        <p>igclone</p>
      </section>
    </div>
  )

}





export default Tools