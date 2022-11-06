import React from 'react'

const User = ({users}) => {
  return (
    <div>
    <h3>{ users.firstname.charAt(0).toUpperCase() }</h3>
    <h5>{ users.firstname }</h5>
    </div>
  )
}

export default User