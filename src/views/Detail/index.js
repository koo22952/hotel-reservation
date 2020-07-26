import React from 'react'
import { Link } from 'react-router-dom'
import withDetail from '../../service/Detail'
import { bookingRoom } from '../../api'
import './index.scss'

function Detail(props) {
  const fetchBookingRoom = async () => {
    const postData = {
      name: 'HELL',
      tel: '0987654321',
      date: ['2020-08-20', '2020-08-21'],
    }
    const id =
      '3Elqe8kfMxdZv5xFLV4OUeN6jhmxIvQSTyj4eTgIowfIRvF4rerA2Nuegzc2Rgwu'

    try {
      const res = await bookingRoom(id, postData)
      console.log(res)
    } catch (err) {
      console.error(err)
    }
  }

  const url =
    'https://images.unsplash.com/photo-1551776235-dde6d482980b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80'

  return (
    <div className="detail">
      <div className="detail-wrapper">
        <div className="detail-left">
          <h2 className="detail-left-logo">
            <Link to="/home">WHITE INN</Link>
          </h2>
          <div className="detail-left-pic">
            <div
              className="detail-left-pic_top"
              style={{ backgroundImage: `url(${url})` }}
            />
            <div className="detail-left-pic_down">
              <span style={{ backgroundImage: `url(${url})` }} />
              <span style={{ backgroundImage: `url(${url})` }} />
            </div>
          </div>
        </div>
        <div className="detail-right">
          <div className="detail-right-rooms"></div>
          <div className="detail-right-roomInfo">
            <div className="detail-right-roomInfo_title"></div>
            <div className="detail-right-roomInfo_detail"></div>
            <div className="detail-right-roomInfo_reservation"></div>
            <div className="detail-right-roomDevice"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withDetail(Detail)
