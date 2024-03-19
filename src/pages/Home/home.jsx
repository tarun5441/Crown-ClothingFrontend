import React from 'react'
import "./Home.css"
import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/Directory'
const home = () => {
  return (
    <div className='homepage'>
    <Outlet/>
      <Directory/>
    </div>
  )
}

export default home
