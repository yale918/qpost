import { useHistory } from "react-router"
import M from 'materialize-css'
const Me = () =>{
  const history = useHistory()
  const user = localStorage.getItem("user")
  if(user){

  }
  else{
    M.toast({ html: '請先登入唷!', classes: 'rounded' });
    history.push('/signin')
  }
  return(
    <h1>Hello Me</h1>
  )
}


export default Me