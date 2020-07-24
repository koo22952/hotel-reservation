import React from 'react'
import { Link } from 'react-router-dom'
import withDetail from '../../service/Detail'
import { bookingRoom } from '../../api'

function Detail() {

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
  return (
    <div>
      <Link to="/home"> 1244443GGYY</Link>
    </div>
  )
}

export default withDetail(Detail)
