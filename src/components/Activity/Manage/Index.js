import React from 'react'

import './index.scss'

import Header from './Header'
import ActivityList from './ActivityList'

class Manage extends React.Component {
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