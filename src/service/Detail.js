import React from 'react'
import { bookingRoom, getOneRoom, getAllRooms } from '../api'
import { addDays, eachDayOfInterval, format } from 'date-fns'

function withDetail (Component) {
  return class extends React.Component {
    state = {
      roomId: '',
      room: {},
      booking: [],
      bookingDate: [],
      roomsInfo: [],
      bookingInfo: {person: '', phone: '', date: []},
      startDate: null,
      endDate: null,
      minDate: null,
      checkBookingModal: false
    }

    fetchBookingRoom = async () => {
      const {bookingInfo, roomId} = this.state

      const {person: name, phone: tel, date} = bookingInfo

      let data = {
        name,
        tel,
        date
      }

      try {
        const res = await bookingRoom(roomId, data)
        if (res.success) {
          this.initState(this.fetchGetOneRoom)
        }
      } catch (err) {
        console.log(err.response)
      }
    }

    fetchGetOneRoom = async () => {

      const {roomId} = this.state

      try {
        const res = await getOneRoom(roomId)
        const {booking, room} = res

        let key = Object.keys(room[0].amenities)
        let val = Object.values(room[0].amenities)

        room[0].amenities = key.map((device, i) => {
          return {
            device,
            isHave: val[i]
          }
        })

        let bookingDate = booking.map(item => item.date)

        this.setState({
          room: room[0],
          booking,
          bookingDate
        })
      } catch (err) {
        alert(err.response.data.message)
        this.props.history.push('/home')
      }
    }
    fetchGetAllRoom = async () => {
      await getAllRooms().then((resp) => {
        if (resp.success) {
          this.setState({
            roomsInfo: resp.items
          })
        }
      })
    }
    handleDateChange = (val, checkInOut) => {

      if (checkInOut) {
        this.setState({
          startDate: val,
          minDate: addDays(val, 1)
        })
      } else {
        this.setState({
          endDate: val
        })
      }
    }

    handleInputChange = (e, type) => {
      const val = e.target.value

      this.setState((prevState) => {
        return {
          bookingInfo: {
            ...prevState.bookingInfo,
            [type]: val
          }
        }
      })
    }

    handleModal = () => {
      this.setState({
        checkBookingModal: !this.state.checkBookingModal
      })
    }

    handleModalCheck = () => {
      const {startDate, endDate} = this.state

      let intervalDay = eachDayOfInterval({
        start: startDate,
        end: endDate
      }).map((day) => format(day, 'yyyy-MM-dd'))

      intervalDay.pop()

      this.setState({
        bookingInfo: {
          ...this.state.bookingInfo,
          date: intervalDay
        }
      }, () => {
        this.fetchBookingRoom()
      })
    }

    handleImgChange = () => {

      const {room} = this.state
      let img = []

      for (let i = 0, j; i < room.imageUrl.length; i++) {
        j = i
        img.push(room.imageUrl[(j + 1) % 3])
      }

      this.setState({
        room: {
          ...this.state.room,
          imageUrl: img
        }
      })

    }

    initState = (fn) => {
      const {params} = this.props.match

      this.setState({
        roomId: params.roomId,
        bookingInfo: {person: '', phone: '', date: []},
        startDate: null,
        endDate: null,
        minDate: null,
        checkBookingModal: false
      }, () => {
        fn()
      })
    }

    componentDidUpdate (prevProps) {
      const {params} = this.props.match
      const {params: prevParams} = prevProps.match

      if (params.roomId !== prevParams.roomId) {
        this.initState(this.fetchGetOneRoom)
      }
    }

    componentDidMount () {
      const {params} = this.props.match

      this.setState({roomId: params.roomId}, () => {
        this.fetchGetAllRoom()
        this.fetchGetOneRoom()
      })
    }

    render () {
      return (
        <Component
          handleInputChange={this.handleInputChange}
          handleDateChange={this.handleDateChange}
          handleModal={this.handleModal}
          handleModalCheck={this.handleModalCheck}
          handleImgChange={this.handleImgChange}
          {...this.state}
          {...this.props}
        />
      )
    }
  }
}

export default withDetail

// import Detail from '../views/Detail'

// function withDetail(Component) {
//   return function DetailHoc(props) {
//     return <Component {...props} />
//   }
// }

// 若要在邏輯層引入 view 的檔案做成 HOC，必須記得 router 路徑也需要更改，component 引用路徑調整
// export default withDetail(Detail)

/*
 * routes
 *
 * import Detail from 'service/Detail'
 *
 * {
 *    path: '/detail',
 *    component: Detail,
 *    exact: true,
 * },
 *
 *
 *
 * */
