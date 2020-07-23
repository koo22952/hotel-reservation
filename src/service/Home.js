import React from 'react'

function withHome (Component) {
    return class extends React.Component {

        render () {
            return <Component/>
        }
    }
}

export default withHome
