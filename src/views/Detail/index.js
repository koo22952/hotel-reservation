import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import withDetail from '../../service/Detail'
import './index.scss'

import DatePicker from '../../components/DatePicker'
import Input from '../../components/Input'

function Detail(props) {
  const {
    startDate,
    endDate,
    minDate,
    handleDateChange,
    handleInputChange,
    bookingInfo,
    room,
    location,
    match,
  } = props

  const { roomsInfo } = location
  const { params } = match
  console.log(room)

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
          <div className="detail-right-rooms">
            {roomsInfo.map((room) => {
              if (room.id == params.roomId) return
              return <span key={room.id}>{room.name}</span>
            })}
          </div>
          <div className="detail-right-roomInfo">
            <div className="detail-right-roomInfo_title">
              <h3>Single Room</h3>
              <div>
                <span>
                  平日(一~四)價格：<b>1380</b>
                </span>
                <span>
                  假日(五~日)價格：<b>1500</b>
                </span>
              </div>
            </div>
            <div className="detail-right-roomInfo_detail">
              <div className="room-detail">
                <p>
                  Single Room is only reserved for one guest. There is a bedroom
                  with a single size bed and a private bathroom. Everything you
                  need prepared for you: sheets and blankets, towels, soap and
                  shampoo, hairdryer are provided. In the room there is AC and
                  of course WiFi.
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
                <Input
                  type="person"
                  handleInputChange={handleInputChange}
                  value={bookingInfo.person}
                />
                <Input
                  type="phone"
                  handleInputChange={handleInputChange}
                  value={bookingInfo.phone}
                />
                <div className="room-reservation-date">
                  <DatePicker
                    selectedDate={startDate}
                    handleDateChange={handleDateChange}
                    checkInOut={true}
                    minDate={minDate}
                  />
                  <DatePicker
                    selectedDate={endDate}
                    handleDateChange={handleDateChange}
                    checkInOut={false}
                    minDate={minDate}
                  />
                </div>
                <button className="room-reservation-check">預約</button>
              </div>
            </div>
            <div className="detail-right-roomInfo_roomDevice">
              {room.length
                ? room[0].amenities.map((d, i) => {
                    let icon = ''
                    d.isHave
                      ? (icon = 'check_box')
                      : (icon = 'check_box_outline_blank')

                    return (
                      <span key={i}>
                        <i className="material-icons">{icon}</i>
                        {d.device}
                      </span>
                    )
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withDetail(Detail)
