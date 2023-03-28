import React from 'react'
import Dash from '../components/Dash'
import Sidebar from '../layout/auth/Sidebar'
import TopNav from '../layout/auth/TopNav'

const Dashboard = () => {
  return (
    <div className='flex flex-row'>
        <div className='w-72'>
            <Sidebar/>
        </div>
        <div className='w-full flex flex-col'>
            <TopNav title='Dashboard'/>
              <div><Dash/></div>
        </div>
    </div>
  )
}

export default Dashboard