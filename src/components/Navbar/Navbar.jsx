import React, {useState, useEffect} from 'react'
import { setCurrentUser } from '../../actions/currentUser'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import decode from 'jwt-decode'

import { signup, signin } from '../../actions/auth'
import logo from '../../assets/logo.png'
// import Group from '../../assets/Group.png'
import Avatar from '../../components/Avatar/Avatar'

function Navbar() {
  const [isSignup, setIsSignup] = useState(false)
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleSwitch = () => {
    setIsSignup(!isSignup)
}

const handleSubmit = (e) => {
  e.preventDefault()
  if(!email && !password){
      alert('Enter email and password')
    }
      if(isSignup){
        if(!firstname || !lastname){
          alert("Enter a name to continue")
        }
          console.log({firstname, lastname,email,password})
          dispatch(signup({ firstname, lastname, email, password }, navigate))
      }else{
        console.log({email, password})
        dispatch(signin({ email, password }, navigate))
    }
}

  const dispatch = useDispatch()
  var User = useSelector((state) => (state.currentUserReducer))
  const navigate = useNavigate();
  
  
  const handleSignout = () => {
      dispatch({ type: 'LOGOUT'});
      navigate('/')
      dispatch(setCurrentUser(null))
  }
  useEffect(() => {
      const token = User?.token 
      if(token){
          const decodedToken = decode(token)
          if(decodedToken.exp * 1000 < new Date().getTime()){
              handleSignout()
          }
      }
      dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile'))))
  },[User?.token, dispatch])

  return (
<nav class="navbar row">
  <div className="container-fluid">
  <div class="col">
<a class="navbar-brand" href="/">
      <img src={logo} alt="Logo" width="70%" class="d-inline-block align-text-top" />
      </a>
      </div >
      <div class="input-group col">
  <button type="button" class="btn btn-light border-top border-bottom">
  <i class="fa fa-search"></i>
  </button>
    <input type="search" id="form1" class="form-control" placeholder='Search for your favorite groups in ATG' />
</div>
<div class="col">
    <div class="float-end">

      { User === null ?
      <>
      <b>create account.</b>
      <button type="button" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#RegistrationModal">
  It's free!
  <i class="fa fa-angle-down text-dark" aria-hidden="true"></i>
</button>
{/* Model */}
<div class="modal fade" id="RegistrationModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header bg-success text-light">
        
        { isSignup && <h1 class="modal-title fs-6" id="exampleModalLabel">Let's learn, share & 
        inspire each other with 
        our passion for computer engineering. <b>Create Account now 🤘🏼</b></h1> }
        { !isSignup && <h1 class="modal-title fs-6" id="exampleModalLabel">Let's learn, share & 
        inspire each other with 
        our passion for computer engineering. <b>Sign in now 🤘🏼</b></h1> }
        
        <button type="button" class="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div>
      <section class='auth-section'>
            <div class='auth-container'>
                <form onSubmit={handleSubmit}>
                    {
                        isSignup && (
                          <div class='input-group'>
                            <div>
                            <h4>First Name</h4>
                            <input type="text" class='form-control' id='firstname' name='firstname' onChange={(e) => {setFirstName(e.target.value)}} />
                            </div>
                            <div>
                            <h4>Last Name</h4>
                        <input type="text" class='form-control' name='lastname' id='lastname' onChange={(e) => {setLastName(e.target.value)}}/>
                          </div>
                          </div>
                        )
                    }
                    
                      <div>
                        <h4>Email</h4>
                        </div>
                        <input type="email" class='form-control' name='email' id='email' onChange={(e) => {setEmail(e.target.value)}}/>
                  
                        <div>
                            <h4>Password</h4>
                        <input type="password" class='form-control' name='password' id='password' onChange={(e) => {setPassword(e.target.value)}}/>
                        { isSignup && <p style={{ color: "#666767", fontSize:"13px"}}>Passwords must contain at least eight characters, including at least 1 letter and 1 number.</p> }
                            { !isSignup && <p style={{ color: "#007ac6", fontSize:'13px'}}>forgot password?</p> }
                        </div>
                    { isSignup ? <button type='submit' className='btn btn-primary'>Create Account</button>
                     : <button type='submit' className='btn btn-primary'>Sign In</button>}
                </form>
                <p>
                    {isSignup ? 'Already have an account?' : "Don't have an account?"}
                    <button type='button' className='btn btn-link' onClick={handleSwitch}>{ isSignup ? "Log in" : 'sign up'}</button>
                </p>
            </div>
        </section>
      </div>
      </div>
    </div>
  </div>
</div>
</> :
<>
<Avatar>
  <Link to={`/Users/${User?.result?._id}`}>{User.result.name.charAt(0).toUpperCase()}</Link>
  </Avatar>
<button onClick={handleSignout}>Sign out</button>
</>
}
      </div>
      </div>
      </div>
</nav>
  );
}

export default Navbar