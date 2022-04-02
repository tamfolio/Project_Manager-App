import React from 'react'
import Notify from './Notify'
import ProjectList from '../projects/ProjectList'

function Dashboard() {
  return (
    <div className='dashboard container'>
        <div className="row">
            <div className="col s12 m6"></div>
            <div className="col s12 m5 offset-m1">
                <Notify/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard