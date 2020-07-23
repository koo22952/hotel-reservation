import React from 'react'
import { Link } from 'react-router-dom'
import withDetail from '../../service/Detail'

function Detail () {
    return (
        <div className="App">
            <Link to="/home"> 1244443GGYY</Link>
        </div>
    )
}

export default withDetail(Detail)
