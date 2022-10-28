import React from 'react'
import wallpaper from '../../assets/wallpaper.jpg'
import './HomeMainbar.css'
function HomeMainbar() {
  return (
    <div class="intro">
    <img src={wallpaper} class="img-fluid w-100" alt="..."></img>
    <div class="head">
      <h1>Computer Engineering</h1>
      <p>142,765 Computer Engineers follow this</p>
    </div>
    </div>
  );
}

export default HomeMainbar