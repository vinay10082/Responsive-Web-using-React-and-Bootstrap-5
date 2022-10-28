import React from 'react'
import logo from '../../assets/logo.png'
import Group from '../../assets/Group.png'

function Navbar() {
  return (
<nav class="navbar bg-light">
  <div class="container-fluid">
<a class="navbar-brand" href="/">
      <img src={logo} alt="Logo" width="20%" class="d-inline-block align-text-top" />
      </a>
      <form class="d-flex" role="search">
      <button class="btn btn-outline-success" type="submit">Search</button>
      <input class="form-control me-2" type="search" placeholder="Search for your favorite groups in ATG" aria-label="Search" />
    </form>
    <span class="mr-auto">
      <b>create account.</b><button type="button" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#exampleModal">
  It's free!
</button>
{/* Model */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Let's learn, share & 
        inspire each other with 
        our passion for computer engineering. 
        Sign up now 🤘🏼</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <section class="vh-100">
     <div class="container py-5 h-100">
     <div class="row d-flex align-items-center justify-content-center h-100">
      <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form>
          {/* <!-- Email input --> */}
          <div class="form-outline mb-4">
            <input type="email" id="form1Example13" class="form-control form-control-lg" />
            <label class="form-label" for="form1Example13">Email address</label>
          </div>

          {/* <!-- Password input --> */}
          <div class="form-outline mb-4">
            <input type="password" id="form1Example23" class="form-control form-control-lg" />
            <label class="form-label" for="form1Example23">Password</label>
          </div>

          <div class="d-flex justify-content-around align-items-center mb-4">
            {/* <!-- Checkbox --> */}
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
              <label class="form-check-label" for="form1Example3"> Remember me </label>
            </div>
            <a href="#!">Forgot password?</a>
          </div>

          {/* <!-- Submit button --> */}
          <button type="submit" class="btn btn-primary btn-lg btn-block">Sign in</button>

          <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
          </div>

          <a class="btn btn-primary btn-lg btn-block" href="#!"
            role="button">
            <i class="fab fa-facebook-f me-2"></i>Continue with Facebook
          </a>
          <a class="btn btn-primary btn-lg btn-block" href="#!"
            role="button">
            <i class="fab fa-twitter me-2"></i>Continue with Twitter</a>
        </form>
      </div>
      <div class="col-md-8 col-lg-7 col-xl-6">
        <img src={Group} width="50%" class="img-fluid" alt="Phone image" />
      </div>
    </div>
  </div>
</section>
      </div>
    </div>
  </div>
</div>
      <select></select>
    </span>
  </div>
</nav>
  );
}

export default Navbar