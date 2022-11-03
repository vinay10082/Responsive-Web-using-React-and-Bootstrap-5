import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import moment from 'moment'

import wallpaper from '../../assets/wallpaper.jpg'
import { deletePost } from '../../actions/post'

const Post = ({post}) => {

  const id = post._id

  const User = useSelector((state) => (state.currentUserReducer))
  const Navigate = useNavigate()
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deletePost(id, Navigate))
}

  return (
<div class="card my-2">
  <img src={wallpaper} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">{post.title}</h5>
    <p>{post.field}</p>
    <p class="card-text">{post.description}</p>
    <p class="card-date">asked {moment(post.askedOn).fromNow()} { post.userPosted }</p>
    {
      User?.result?._id === post?.userId && (
    <p type="button" class="btn btn-link" onClick = {handleDelete}>Delete</p>
      )
}
    </div>
  </div>
  )
}

export default Post