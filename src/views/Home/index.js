import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import withHome from '../../service/Home'
import './index.scss'

function Home(props) {
  const webInfo = [
    { icon: 'location_on', content: '台北市ＯＯ區ＯＯ街123號' },
    { icon: 'tel', content: '12345-6789' },
    { icon: 'email', content: 'abcd@efghijk.com' },
  ]

  const { roomsInfo } = props

  return (
    <div className="home">
      <div className="home-wrapper">
        <h1 className="home-logo">
          <Link to="/home">WHITE INN</Link>
        </h1>
        <div className="home-container">
          <div className="home-room">
            {roomsInfo.map((info) => {
              return (
                <Link
                  to={{
                    pathname: `/detail?${info.id}`,
                  }}
                  key={info.id}
                >
                  <div
                    className="home-room-pic"
                    style={{ backgroundImage: `url(${info.imageUrl})` }}
                  ></div>
                  <div className="home-room-info">
                    <h3>{info.name}</h3>
                    <p>$ {info.holidayPrice}</p>
                    <p>$ {info.normalDayPrice}</p>
                  </div>
                </Link>
              )
            })}
          </div>
          <div className="home-footer">
            {webInfo.map((info, i) => {
              return (
                <span key={i}>
                  <i className="material-icons">{info.icon}</i>
                  {info.content}
                </span>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default withHome(Home)
