import React from 'react'
import wallpaper from '../../assets/wallpaper.jpg'

function LeftSidebar() {
  return (
    <div class="modal-body mx-5 row">
  <div class="post-list my-5 col-md-7">
<div class="card my-2">
  <img src={wallpaper} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="card my-2">
  <img src={wallpaper} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="card my-2">
  <img src={wallpaper} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</div>
  <div class="col-md-3 mx-5 my-5">
    <div class="location my-5 text-end">
      <div class="border-bottom">
    <i class="fa fa-map-marker" aria-hidden="true"></i> Noida, Delhi <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
    </div>
      <p style={{ color: "#666767", fontSize:"10px"}}> <i class="fa fa-exclamation-circle" aria-hidden="true"></i> Your location will help us serve better and 
        extend a personalised experience. </p>
    </div>
  </div>
  </div>
  )
}

export default LeftSidebar