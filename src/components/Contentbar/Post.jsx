import React from 'react'
import wallpaper from '../../assets/wallpaper.jpg'

const Post = ({post}) => {
  return (
<div class="card my-2">
  <img src={wallpaper} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">{post.postTitle}</h5>
    <p class="card-text">{post.postTitle}</p>
    </div>
  </div>
  )
}

export default Post