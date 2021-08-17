import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import M from 'materialize-css'
const Gopost = () => {
  const history = useHistory()
  const [title,setTitle] = useState("")
  const [content,setContent] = useState("")


  
  useEffect(() => {
    //postData('/checkloginstate')
    const user = JSON.parse(localStorage.getItem("user"))
    if (user) {
    }
    else {
      M.toast({ html: '請先登入唷!', classes: 'rounded' });
      history.push('/signin')
    }
  }, [])

  const postData = () => {
    const url = "https://res.cloudinary.com/yalecloud/image/upload/v1627549064/h3ltqp3up0wsc7xme1jg.jpg"
    const token = localStorage.getItem('jwt')
    const user = localStorage.getItem('user')
      
    console.log(token)
    console.log(user)
    //console.log(JSON.parse(user).name)
    //console.log(user.name)

    fetch('/createpost',{
        method:"POSt",
        headers:{
          "Content-Type":"application/json",
          Authorization:token
        },
        body:JSON.stringify({
          author:JSON.parse(user).name,
          title:title,
          content:content,
          picture:url
        })
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
    <>
      <div style={{
        margin: "50px auto",
        maxWidth: "500px",
        padding: "30px",
        textAlign: "center"
      }}
        className="card input-field col s6">
        <div className="input-field col s6">
          <input
            placeholder="title"
            value={title}
            type="text"
            className="validate"
            onChange={(e)=>{
              setTitle(e.target.value)
            }}
          />
        </div>
        <div className="input-field col s6">
          <input
            placeholder="content"
            value={content}
            type="text"
            className="validate"
            onChange={(e)=>{
              setContent(e.target.value)
            }}
          />
        </div>
        <div className="file-field input-field">
          <div className="btn">
            <span>upload a pic</span>
            <input
              type="file"
              onClick={() => { console.log("test") }}
            />
          </div>
          <div className="file-path-wrapper">
            <input
              className="file-path validate"
              type="text"
            />
          </div>
        </div>
        <a
          className="btn waves-effect waves-light #64b5f6 blue darken-1"
          onClick={
            () => {
              postData()
              
              /*
              fetch('/createpost',{
                method:"POST",
                headers:{
                  "Content-Type":"application/json"
                }
              })
                .then((res) => res.json())
                .then((data) => {
                  console.log(data)
                })
                .catch((err) => console.log(err))
              */

            }
            

          }
        >post</a>
      </div>

    </>
  )
}


export default Gopost