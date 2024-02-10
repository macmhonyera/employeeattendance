import React from 'react'
import Sidebar from '../layout/auth/Sidebar'
import TopNav from '../layout/auth/TopNav'

const Departments = () => {
  return (
    <div className="flex flex-row">
    <div className="w-72">
      <Sidebar />
    </div>
    <div className="w-full flex flex-col">
      <TopNav title="Issued Stock" />
    </div>
  </div>
  )
}

export default Departments