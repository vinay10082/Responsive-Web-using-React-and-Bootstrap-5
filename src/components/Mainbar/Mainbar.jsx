import React , {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { makePost } from '../../actions/post'

function Mainbar() {

  const [field, setField] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const dispatch = useDispatch()
  const User = useSelector((state) => (state.currentUserReducer))
  const postsList = useSelector(state => state.postsReducer)
  const navigate = useNavigate()

const handlePostSubmit = (e) => {
  e.preventDefault()
  if(User === null){
    alert("login or signup to ask a question")
}else{
  if(!field && !title && !description){
      alert('filling marked field is compulsary')
  }
  else{
  console.log({field, title, description})
  dispatch(makePost({ field, title, description, userPosted: User.result.firstname }, navigate))
  }
 }
}
  return (
<nav class="navbar navbar-expand-lg bg-light border-bottom">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse mx-5" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item">
          <a class="nav-link" href="#!">All Posts 
          {/* ({ postsList.data.length }) */}
          </a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="#!">Article</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="#!">Event</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="#!">Education</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="#!">Job</a>
          </li>
      </ul>
          <span class="post mr-auto">
          <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#PostModal">
  Write a Post <i class="fa fa-angle-down" aria-hidden="true"></i>
</button>
{/* Model */}
<div class="modal fade" id="PostModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header bg-warning">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Make Your Post Here !</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form onSubmit={handlePostSubmit}>
      <div className="post-container">
        <div class="post-field">
          <h4>Add Field *</h4>
        <input type="text" id="field" placeholder='Interested Field' onChange={(e) => {setField(e.target.value)}}/>
        <select>
          <option>Article</option>
          <option>Education</option>
          <option>Jobs</option>
          <option>Meetup</option>
          </select>
        </div>
        <div className="post-title">
          <h4>Add Title *</h4>
          <textarea onChange={(e) => {setTitle(e.target.value)}} />
        </div>
        <div className="post-description">
          <h4>Add Description *</h4>
          <textarea onChange={(e) => {setDescription(e.target.value)}} />
        </div>
        
        <button type='submit' class="btn btn-primary">Post</button>
      </div>
        </form>
      </div>
    </div>
  </div>
</div>
          <a href="users" class="btn btn-primary" ><i class="fa fa-users" aria-hidden="true"></i> Users</a>
          </span>
    </div>
  </div>
</nav>
  );
}

export default Mainbar