import React, { useEffect } from 'react'
import { bookingRoom } from '../../api'
import { Link } from 'react-router-dom'
import withHome from '../../service/Home'

const booking = bookingRoom

function Home () {
    useEffect(() => {}, [])

    const fetchBookingRoom = async () => {
        const postData = {
            name: 'HELL',
            tel: '0987654321',
            date: ['2020-08-20', '2020-08-21']
        }
        const id =
            '3Elqe8kfMxdZv5xFLV4OUeN6jhmxIvQSTyj4eTgIowfIRvF4rerA2Nuegzc2Rgwu'

        try {
            const res = await booking(id, postData)
            console.log(res)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className="App">
            <Link to="/detail">Homeeeeeeeeeeeee</Link>
        </div>
    )
}

export default withHome(Home)
