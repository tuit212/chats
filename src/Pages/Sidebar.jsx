import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import TollIcon from '@mui/icons-material/Toll';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import FaceIcon from '@mui/icons-material/Face';
import './Sidebar.scss'
import UserProfile from './UserProfile/UserProfile';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-header">
            <div className="sidebar-header-img">
                <PersonIcon/>
            </div>
            <div className="sidebar-header-btn">
                <TollIcon/>
                <InsertCommentIcon/>
                <MoreVertIcon/>
            </div>
        </div>

        <div className="sidebar-search">
            <div className="sidebar-search-input">
                <SearchIcon/>
                <input type="text" name='search' placeholder='search...' />
            </div>
        </div>

        <div className="sidebar-user-list">
            <UserProfile
                name='Asadbek'
                photo=<FaceIcon/>
            />
            <UserProfile
                name='Tohir'
                photo=<PersonIcon/>
            />
            <UserProfile
                name='Asadbek'
                photo=<FaceIcon/>
            />
            <UserProfile
                name='Tohir'
                photo=<PersonIcon/>
            />
            <UserProfile
                name='Asadbek'
                photo=<FaceIcon/>
            />
            <UserProfile
                name='Tohir'
                photo=<PersonIcon/>
            />
            <UserProfile
                name='Asadbek'
                photo=<FaceIcon/>
            />
            <UserProfile
                name='Tohir'
                photo=<PersonIcon/>
            />
            <UserProfile
                name='Asadbek'
                photo=<FaceIcon/>
            />
            <UserProfile
                name='Tohir'
                photo=<PersonIcon/>
            />
            <UserProfile
                name='Asadbek'
                photo=<FaceIcon/>
            />
            <UserProfile
                name='Tohir'
                photo=<PersonIcon/>
            />
        </div>
    </div>
  )
}

export default Sidebar