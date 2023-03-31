import React from 'react'
import './UserProfile.scss'

const UserProfile = ({name , photo}) => {
  return (
    <div className='user-profile'>
        {/* img  */}
        <div className="user-img">
            {photo}
        </div>
        {/* name */}
        <div className="user-info">
            <p className="user-name">
                {name}
            </p>
        </div>
    </div>
  )
}

export default UserProfile