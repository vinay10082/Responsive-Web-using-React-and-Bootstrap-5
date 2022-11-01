import React from 'react'
import { useSelector} from 'react-redux'
import PostsList from './PostsList'

function LeftSidebar() {



  const postsList = useSelector (state => state.postsReducer)

  return (
    <div class="modal-body mx-5 row">
  <div class="post-list my-5 col-md-7">
            <div>
                {
                    postsList.data === null ?
                    <h1>Loading...</h1> :
                    <>
                        <PostsList questionsList={postsList.data} />
                    </>
                }
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