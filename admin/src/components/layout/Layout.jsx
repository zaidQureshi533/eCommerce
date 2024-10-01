import './layout.css'
import React from 'react'
import Topbar from '../topbar/Topbar'
import Sidebar from '../sidebar/Sidebar'

const Layout = ({children}) => {
  return (
    <>
      <Topbar />
    <div className="main-container">
        <Sidebar />
        <div className='outlet'>
            {children}
        </div>
    </div>
    </>
  )
}

export default Layout
