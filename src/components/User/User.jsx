import React from 'react'

const User = ({user}) => {
  return (
    <div>
    <h3>{ user.firstname.charAt(0).toUpperCase() }</h3>
    <h5>{ user.firstname }</h5>
    <h5>{ user.lastname }</h5>
    </div>
  )
}

export default User