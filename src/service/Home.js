import React from 'react'
import { getAllRooms } from '../api'

function withHome (Component) {
  return class extends React.Component {
    state = {
      roomsInfo: []
    }

    componentWillMount () {
      getAllRooms().then((resp) => {
        if (resp.success) {
          this.setState({
            roomsInfo: resp.items
          })
        }
      })
    }

    render () {
      return <Component {...this.state} {...this.props} />
    }
  }
}

export default withHome
