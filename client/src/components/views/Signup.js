import {useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'



const Signup = () =>{
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const history = useHistory()

  const uploadFields = () =>{
    fetch("/signup",{
      method:"post",
      headers:{"Content-Type" : "application/json"},
      body:JSON.stringify({name,email,password}),
    })
    .then((res) => res.json())
    .then((data) => { 
      if(data.error){
        M.toast({html: '帳號密碼錯誤!', classes: 'rounded'});
        return
      }
      console.log("申請ok 瀏覽器跳轉")
      history.push('/signin')
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  return(
    <>
        <div style={container}>
        <label
        >
          reIG 
        </label>
        <div style={{padding:"24px",textAlign:"center"}} className="card input-field col s6">
        <input
            value={name}
            type="text"
            placeholder="name"
            onChange={(e)=>{
              setName(e.target.value)
            }}
          />
          <input
            value={email}
            type="text"
            placeholder="email"
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
          />
          <input
            value={password}
            type="text"
            placeholder="password"
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
          />
          <button 
          className="btn waves-effect waves-light" 
          type="submit" 
          name="action"
          onClick={()=>{uploadFields()}}
          >
            Signup
            <i className="material-icons right">send</i>
          </button>
        </div>
        <Link to="/signin"><h4>Already have an account -</h4></Link>

      </div>
      
    </>
  )
}

const container = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "100px",
}
/*
const sub_con = {
  padding: "20px"
}
*/
export default Signup