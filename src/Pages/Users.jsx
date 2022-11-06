import React from 'react'

import UsersList from '../components/User/UsersList'

const Users = () => {

  return (
        <div className="main-container mx-5">
    <div>
        <a class="btn btn-link text-decoration-none" href="home"><i class="fa fa-sign-out" aria-hidden="true"></i> Back to Home</a>
        
        <h1 class="text-center text-danger"><i class="fa fa-id-card-o" aria-hidden="true"> USERS</i>...</h1>

        <a className="btn btn-primary" href="#!">Edit Profile</a>
    </div>
    <div className="left-container float-start my-5">
        <p>This is user segment</p>
        {
        <div>
            <UsersList />
        </div>
        }
    </div>
    <div className="right-container float-end">
        <p>This is user info segment</p>
    </div>
    </div>
  )
}

export default Users