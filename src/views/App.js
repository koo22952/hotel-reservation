import React, { useEffect } from 'react'
import './App.scss'

import { bookingRoom } from '../api'

const booking = bookingRoom

function App () {

    useEffect(() => {
    }, [])

    const fetchBookingRoom = async () => {
        const postData = {
            'name': 'HELL',
            'tel': '0987654321',
            'date': ['2020-08-20', '2020-08-21']
        }
        const id = '3Elqe8kfMxdZv5xFLV4OUeN6jhmxIvQSTyj4eTgIowfIRvF4rerA2Nuegzc2Rgwu'

        try {
            const res = await booking(id, postData)
            console.log(res)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className="App">
            123
        </div>
    )
}

export default App
