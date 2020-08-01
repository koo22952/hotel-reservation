import React from 'react'
import { bookingRoom, getOneRoom, getAllRooms } from '../api'
import { format } from 'date-fns'

function withDetail (Component) {
  return class extends React.Component {
    state = {
      room: [],
      booking: [],
      bookingDate: [],
      roomsInfo: [],
      bookingInfo: {person: '', phone: '', date: []},
      startDate: null,
      endDate: null,
      minDate: null
    }

    fetchBookingRoom = async () => {
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

    fetchGetOneRoom = async (id) => {
      try {
        const res = await getOneRoom(id)
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
      const formatDate = format(val, 'yyyy-MM-dd')

      if (checkInOut) {
        this.setState({
          startDate: formatDate,
          minDate: formatDate
        })
      } else {
        this.setState({
          endDate: formatDate
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

    componentDidUpdate (prevProps) {
      const {params} = this.props.match
      const {params: prevParams} = prevProps.match

      if (params.roomId !== prevParams.roomId) {
        this.setState({
          startDate: null,
          endDate: null,
          minDate: null
        }, () => {
          this.fetchGetOneRoom(params.roomId)

        })

      }

    }

    componentDidMount () {
      const {params} = this.props.match
      this.fetchGetAllRoom()
      this.fetchGetOneRoom(params.roomId)

      // getOneRoom(params.roomId).then((res) => {
      //   const { booking, room, success } = res.data

      //   let key = Object.keys(room[0].amenities)
      //   let val = Object.values(room[0].amenities)

      //   room[0].amenities = key.map((device, i) => {
      //     return {
      //       device,
      //       isHave: val[i],
      //     }
      //   })

      //   this.setState({
      //     room: room[0],
      //     booking,
      //   })
      // })
    }

    render () {
      return (
        <Component
          handleInputChange={this.handleInputChange}
          handleDateChange={this.handleDateChange}
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
