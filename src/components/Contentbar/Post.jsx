import React from 'react'
import wallpaper from '../../assets/wallpaper.jpg'
import moment from 'moment'

const Post = ({post}) => {
  return (
<div class="card my-2">
  <img src={wallpaper} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">{post.postTitle}</h5>
    <p>{post.postField}</p>
    <p class="card-text">{post.postDescription}</p>
    <p class="card-date">asked {moment(post.askedOn).fromNow()} { post.userPosted }</p>
    </div>
  </div>
  )
}

export default Post