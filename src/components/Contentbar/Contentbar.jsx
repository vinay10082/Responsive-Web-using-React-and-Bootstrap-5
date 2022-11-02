import React from 'react'
// import { useSelector} from 'react-redux'

// import PostsList from './PostsList'
import wallpaper from '../../assets/wallpaper.jpg'

function LeftSidebar() {

  // const postsList = useSelector (state => state.postsReducer)

  return (
    <div class="modal-body mx-5 row">
  <div class="post-list my-5 col-md-7">
            {/* <div>
                 {
                    postsList.data === null ?
                    <h1>Loading...</h1>
                     :
                   <>
                       <PostsList questionsList={postsList.data} />
                  </>
                 } 
            </div> */}
  <div class="card my-2">
  <img src={wallpaper} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Hello! World</h5>
    <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste magnam accusamus ex asperiores ad voluptates vitae! Nesciunt reprehenderit dolores doloremque, veniam nulla amet? Facere molestiae animi non nemo corporis dicta.</p>
    </div>
  </div>
  <div class="card my-2">
  <img src={wallpaper} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Hello! World</h5>
    <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident et incidunt quod veritatis dolorum fugiat. Iure commodi, distinctio non magni magnam explicabo sint deleniti temporibus voluptate ratione expedita architecto itaque.</p>
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