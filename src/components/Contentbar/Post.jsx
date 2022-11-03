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
    <>
    <p class="card-date">
    posted {moment(post.askedOn).fromNow()}
    </p>
    </>
    <p>{post.field}
    {
      User?.result?._id === post?.userId && (
    <i type="button" class="btn btn-link float-end text-decoration-none" onClick = {handleDelete}>Delete</i>
      )
}
    </p>
    <h5 class="card-title"><b>{post.title}</b><i class="fa fa-ellipsis-h float-end" aria-hidden="true"></i></h5>
    <p class="card-text text-muted">{post.description}</p>
    <>
    <p class="card-user float-start"><i class="fa fa-user-circle fs-4" aria-hidden="true"></i> <b>{ post.userPosted }</b></p>
    <p class="card-info float-end text-muted"><i class="fa fa-eye" aria-hidden="true"></i> 1.4k views &nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-share-alt" aria-hidden="true"></i></p>
    </>
    </div>
  </div>
  )
}

export default Post