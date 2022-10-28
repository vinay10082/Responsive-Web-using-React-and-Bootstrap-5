import React from 'react'
// import './Mainbar.css'

function Mainbar() {
  return (
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse mx-5" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item">
          <a class="nav-link" href="/">All Posts</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="/">Article</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="/">Event</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="/">Education</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="/">Job</a>
          </li>
      </ul>
          <span class="post mr-auto">
          <button class="btn btn-light">Write Post <select></select></button>
          <button class="btn btn-primary">Join a Group</button>
          </span>
    </div>
  </div>
</nav>
  );
}

export default Mainbar