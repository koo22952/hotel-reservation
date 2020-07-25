import React from 'react'
import { getAllRooms } from '../api'

function withHome(Component) {
  return class extends React.Component {
    state = {
      roomsInfo: [],
    }
    componentWillMount() {
      getAllRooms().then(({ data }) => {
        if (data.success) {
          this.setState({
            roomsInfo: data.items,
          })
        }
      })
    }

    render() {
      return <Component {...this.state} {...this.props} />
    }
  }
}

export default withHome
