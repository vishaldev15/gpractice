import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';


const Dashboard = () => {
  return (
    <>
        <div className='dashboard'>
            <div className='verticaldashboard'>
                <h1 className='headingstyle'>Admin Pannel</h1>
                <Link style={{textDecoration:"none", color:'white'}}><h2 className='h2headingstyle'><AiOutlineHome/><span className='h2headingstylespan'>Dashboard</span></h2></Link>
            </div>

            <div className='horizontaldashboard'>
          Hello
            </div>
        </div>
    </>
  )
}

export default Dashboard;