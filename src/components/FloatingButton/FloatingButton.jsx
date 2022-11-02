import React from 'react'
import './FloatingButton.css'

function FloatingButton() {

  return (
    <div class="float">
        <button type="button" class="float-btn" data-bs-toggle="modal" data-bs-target="#PostModal"><i class="fa fa-pencil" aria-hidden="true"></i></button>
    </div>
  )
}

export default FloatingButton