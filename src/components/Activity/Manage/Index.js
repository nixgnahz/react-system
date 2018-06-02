import React from 'react'

import './index.scss'

import Header from './Header'
import ActivityList from './ActivityList'

class Manage extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render () {
        return (
            <div>
                <Header/>
                <ActivityList/>
            </div>
        )
    }
}

export default Manage