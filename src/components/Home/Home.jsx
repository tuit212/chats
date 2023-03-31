import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './Home.scss'
import Sidebar from '../../Pages/Sidebar'

const Home = () => {
  return (
    <div className='home'>
        <div className="home__container">
            {/* sidebar */}
            <Sidebar/>
            {/* chat logo */}
            <div className="home-bg">
                <WhatsAppIcon/>
            </div>
        </div>
    </div>
  )
}

export default Home