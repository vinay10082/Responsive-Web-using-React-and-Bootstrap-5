import React from 'react'

import Mainbar from '../components/Mainbar/Mainbar'
import HomeMainbar from '../components/HomeMainbar/HomeMainbar'
import Contentbar from '../components/Contentbar/Contentbar'



function Home  ()  {
  return (
    <div className='home-container-1'>
      <HomeMainbar/>
    <div className='home-container-2'>
    <Mainbar/>
    <div className='home-container-3'>
      <Contentbar />
    </div>
  </div>
</div>
  );
}

export default Home