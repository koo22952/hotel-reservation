import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import withDetail from '../../service/Detail'
import { bookingRoom } from '../../api'
import './index.scss'

import { DatePicker } from '@material-ui/pickers'
import Input from '@material-ui/core/Input'

function Detail (props) {

  const fetchBookingRoom = async () => {
    const postData = {
      name: 'HELL',
      tel: '0987654321',
      date: ['2020-08-20', '2020-08-21']
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

  const [selectedDate, handleDateChange] = useState(null)

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
              style={{backgroundImage: `url(${url})`}}
            />
            <div className="detail-left-pic_down">
              <span style={{backgroundImage: `url(${url})`}}/>
              <span style={{backgroundImage: `url(${url})`}}/>
            </div>
          </div>
        </div>
        <div className="detail-right">
          <div className="detail-right-rooms">
            <span>Deluxe Single Room</span>
            <span>Deluxe Single Room</span>
            <span>Double Room</span>
            <span>Double Room</span>
            <span>Double Room</span>
          </div>
          <div className="detail-right-roomInfo">
            <div className="detail-right-roomInfo_title">
              <h3>Single Room</h3>
              <div>
                <span>平日(一~四)價格：<b>1380</b></span>
                <span>假日(五~日)價格：<b>1500</b></span>
              </div>
            </div>
            <div className='detail-right-roomInfo_detail'>
              <div className="room-detail">
                <p>
                  Single Room is only reserved for one guest. There is a bedroom with a single size bed and a private bathroom. Everything you need prepared for you: sheets and blankets, towels, soap and shampoo, hairdryer are provided. In the room there is AC and of course WiFi.
                </p>
                <ul>
                  <li>房客人數限制： 1 人</li>
                  <li>床型：單人床</li>
                  <li>衛浴數量： 1 間</li>
                  <li>房間大小： 18 平方公尺</li>
                  <li>checkIn 時間：15:00~21:00</li>
                  <li>checkOut 時間：10:00</li>
                </ul>
              </div>
              <div className="room-reservation">
                <div className='startDate'>
                  <DatePicker
                    id={'datePicker'}
                    disableToolbar
                    inputVariant="outlined"

                    variant="inline"
                    value={selectedDate}
                    onChange={handleDateChange}
                    format="yyyy/MM/dd"
                    autoOk
                    animateYearScrolling
                    // renderDay={(selectedDate: selectedDate, dayInCurrentMonth: true) => { return}}
                  />
                  <div id='eeee'>
                    <label htmlFor='datePicker'>
                      45646546
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="detail-right-roomInfo_roomDevice">
              <span><i className="material-icons">check_box</i>wifi</span>
              <span><i className="material-icons">check_box_outline_blank</i>早餐</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withDetail(Detail)
