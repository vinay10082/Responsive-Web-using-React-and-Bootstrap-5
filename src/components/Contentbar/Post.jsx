import React from 'react'
import wallpaper from '../../assets/wallpaper.jpg'

const Post = () => {
  return (
<div class="card my-2">
  <img src={wallpaper} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  )
}

export default Post