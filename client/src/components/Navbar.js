import {Link} from 'react-router-dom'


const Navbar = () =>{

  return(
    <nav>
    <div className="nav-wrapper">
    <li className="brand-logo left" ><Link to="/" style={logo}>Qpost</Link></li>
      <ul id="nav-mobile" className="right">
        {/* <li><Link to="/tools">Tools</Link></li>*/}
        
        {/*<li><Link to="/test">testF</Link></li>*/}
        <li><Link to="/gopost">GoPost</Link></li>
        <li><Link to="/me">ME</Link></li>
        <li><Link to="/myfollow">MyFollow</Link></li>
        <li><Link to="/logout">Logout</Link></li>
        

      </ul>
    </div>
  </nav>
  )
}

const logo = {
  marginLeft:"16px"
}

export default Navbar