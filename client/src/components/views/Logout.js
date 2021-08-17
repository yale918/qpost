import { useHistory } from "react-router-dom"


const Logout = () =>{
  const history = useHistory()
  localStorage.clear()
  history.push('/signin')
  return(
    <h1>Hello Logout</h1>
  )
}


export default Logout