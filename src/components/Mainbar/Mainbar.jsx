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
          <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#PostModal">
  Write a Post <i class="fas fa-downarrow"></i>
</button>
{/* Model */}
<div class="modal fade" id="PostModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Make Your Post Here !</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      Hello! World
      </div>
    </div>
  </div>
</div>
          <button class="btn btn-primary">Join a Group</button>
          </span>
    </div>
  </div>
</nav>
  );
}

export default Mainbar