import React from 'react'

import './index.css'

import Echarts from '../Echarts/Index'
import Activity from '../Activity/Index'
import Info from '../Info/Index'
import General from '../General/Index'

class Head extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render () {
        return (
            <div>
                <Echarts/>
                <Activity/>
                <Info/>
                <General/>
            </div>
        )
    }
}

export default Head