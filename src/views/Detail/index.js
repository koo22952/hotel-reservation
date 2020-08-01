import React from 'react'
import { Link, useParams } from 'react-router-dom'
import withDetail from '../../service/Detail'
import './index.scss'

import DatePicker from '../../components/DatePicker'
import Input from '../../components/Input'

function Detail (props) {
  const {
    startDate,
    endDate,
    minDate,
    handleDateChange,
    handleInputChange,
    bookingInfo,
    room,
    roomsInfo
  } = props

  const params = useParams()

  const GuestLimit = room.descriptionShort?.GuestMax === room.descriptionShort?.GuestMin ? room.descriptionShort?.GuestMax : room.descriptionShort?.GuestMin
    + '~' +
    room.descriptionShort?.GuestMax

  return (
    <div className="detail">
      <div className="detail-wrapper">
        <div className="detail-left">
          <h2 className="detail-left-logo">
            <Link to="/home">WHITE INN</Link>
          </h2>
          {
            room.imageUrl == undefined ? null : (
              <div className="detail-left-pic">
                <div
                  className="detail-left-pic_top"
                  style={{backgroundImage: `url(${room.imageUrl[0]})`}}
                >
                  <span><i className="material-icons">keyboard_arrow_right</i></span>
                </div>
                <div className="detail-left-pic_down">
                  <span style={{backgroundImage: `url(${room.imageUrl[1]})`}}/>
                  <span style={{backgroundImage: `url(${room.imageUrl[2]})`}}/>
                </div>
              </div>)
          }
        </div>
        <div className="detail-right">
          <div className="detail-right-rooms">
            {roomsInfo.map((room) => {

              if (room.id == params.roomId) return
              return (
                <Link
                  to={{
                    pathname: `/detail/${room.id}`,
                    state: {roomsInfo}
                  }}
                  key={room.id}
                >
                  <span key={room.id}>{room.name}</span>
                </Link>)
            })}
          </div>
          <div className="detail-right-roomInfo">
            <div className="detail-right-roomInfo_title">
              <h3>{room.name}</h3>
              <div>
                <span>
                  平日(一~四)價格：<b>{room.normalDayPrice}</b>
                </span>
                <span>
                  假日(五~日)價格：<b>{room.holidayPrice}</b>
                </span>
              </div>
            </div>
            <div className="detail-right-roomInfo_detail">
              <div className="room-detail">
                <p>
                  {room.description}
                </p>
                <ul>
                  <li>{`房客人數限制： ${GuestLimit} 人`}</li>
                  <li>{`床型：${room.descriptionShort?.Bed[0]}`}</li>
                  <li>{`衛浴數量： ${room.descriptionShort?.['Private-Bath']} 間`}</li>
                  <li>{`房間大小： ${room.descriptionShort?.Footage} 平方公尺`}</li>
                  <li>{`checkIn 時間：${room.checkInAndOut?.checkInEarly}~${room.checkInAndOut?.checkInLate}`}</li>
                  <li>{`checkOut 時間：${room.checkInAndOut?.checkOut}`}</li>
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
              {room.amenities !== undefined
                ? room.amenities.map((d, i) => {
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
