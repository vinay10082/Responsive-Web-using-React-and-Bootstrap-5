import React, {useState} from 'react'
// import { useSelector, useDispatch } from 'react-redux'

import Oletter from '../../assets/Oletter.png'
// import Group from '../../assets/Group.png'
// import Avatar from '../../components/Avatar/Avatar'

function Navbar() {
  const [isSignup, setIsSignup] = useState(false)
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmPassword] = useState('')


  const handleSwitch = () => {
    setIsSignup(!isSignup)
}

const handleSubmit = (e) => {
  e.preventDefault()
  if(!email && !password){
    alert('Enter email and password')
  }
  if(isSignup){
        if(password !== confirmpassword){
          alert('Password not match')
        }else{
          if(!firstname || !lastname){
            alert("Enter a name to continue")
          }
            console.log({firstname, lastname,email,password})
        }
      }else{
        console.log({email, password})
    }
}

  return (
<nav class="navbar row">
  <div className="container-fluid">
  <div class="col">
    <l><b class="text-success">ATG.</b>W<i><img src={Oletter} /></i>RLD</l>
      </div >
      <div class="input-group col">
  <button type="button" class="btn btn-light border-top border-bottom">
  <i class="fa fa-search"></i>
  </button>
    <input type="search" id="form1" class="form-control" placeholder='Search for your favorite groups in ATG' />
</div>
<div class="col">
    <div class="float-end">
      <div>
      <b>create account.</b>
      <button type="button" class="btn btn-link fw-bold text-decoration-none" data-bs-toggle="modal" data-bs-target="#RegistrationModal">
  It's free! <i class="fa fa-angle-down text-dark fw-bold" aria-hidden="true"></i>
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
                        {
                          isSignup && (
                            <>
                            <h4>Confirm Password</h4>
                            <input type="password" class='form-control' name='confirm-password' id='confirm-password' onChange={(e) => {setConfirmPassword(e.target.value)}}/>
                            </>
                          )
                        }
                            { !isSignup && 
                            <div>
                            <p type="button" data-bs-toggle="modal" data-bs-target="#FModal" style={{ color: "#007ac6", fontSize:'13px'}}>forgot password?</p>
                            </div>
                            }
                        </div>
                        
                    { isSignup ?
                    <>
                    <button type='submit' className='btn btn-primary'>Create Account</button>
                    </>
                     : 
                     <>
                     <button type='submit' className='btn btn-primary'>Sign In</button>
                     </>
                     }
                </form>
                <p>
                    {isSignup ? 'Already have an account?' : "Don't have an account?"}
                    <button type='button' className='btn btn-link text-decoration-none' onClick={handleSwitch}>{ isSignup ? "sign in" : 'sign up'}</button>
                </p>
            </div>
        </section>
      </div>
      </div>
    </div>
  </div>
</div>
{/* Model */}
<div class="modal fade" id="FModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header bg-primary text-light">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Change Your Password</h1>
        <button type="button" class="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div>
      <p type="button" data-bs-toggle="modal" data-bs-target="#RegistrationModal" style={{ color: "#007ac6", fontSize:'13px'}}>sign in</p>
      </div>
      </div>
    </div>
  </div>
</div>
</div> 
</div>
</div>
</div>
</nav>
  );
}

export default Navbar