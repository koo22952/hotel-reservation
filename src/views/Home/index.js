import React, { useEffect } from 'react'
import { bookingRoom } from '../../api'
import { Link } from 'react-router-dom'
import withHome from '../../service/Home'
import './index.scss'

function Home () {
    useEffect(() => {}, [])

    return (
        <div className="home">
            <div className="home-wrapper">
                <h1 className='home-logo'><Link to="/detail">WHITE INN</Link></h1>
                <div className='home-container'>
                    <div className='home-rooms'>12345</div>
                    <div className='home-footer'>
                        <span className="material-icons" style={{fontSize: '21px'}}>location_on</span>
                        <span className="material-icons" style={{fontSize: '21px'}}>phone</span>
                        <span className="material-icons" style={{fontSize: '21px'}}>email</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withHome(Home)
