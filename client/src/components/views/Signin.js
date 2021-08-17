import {useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'

const Signin = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const history = useHistory()

  const postData = () =>{
    fetch('/signin',{
      method:"post",
      headers: {"Content-Type":"application/json"},
      body:JSON.stringify({email:email,password:password})
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.error){
        M.toast({html: '帳號密碼錯誤!', classes: 'rounded'});
        return
      }
      //console.log(data)
      localStorage.setItem('jwt',data.token)
      localStorage.setItem('user',JSON.stringify(data.user))
      history.push('/')
    })
    .catch(err=>{
      console.log(err)
    })
  }


  return (
    <>
      <div style={container}>
        <label
        >
          reIG
        </label>
        <div style={{padding:"24px",textAlign:"center"}}className="card input-field col s6">
          <input
            value={email}
            type="text"
            placeholder="email"
            onChange={(e)=>{setEmail(e.target.value)}}
          />
          <input
            value={password}
            type="text"
            placeholder="password"
            onChange={(e)=>{setPassword(e.target.value)}}
          />
          <button 
          className="btn waves-effect waves-light" 
          type="submit" 
          name="action"
          onClick={()=>{postData()}}
          >
            Login
            <i className="material-icons right">send</i>
          </button>
        </div>
        <Link to="/signup"><h4>create an Account -</h4></Link>
      </div>
    </>
  )
}

const container = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "100px"
}

export default Signin

