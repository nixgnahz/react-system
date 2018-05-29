import React from 'react'

import './index.scss'

import {Route, Redirect} from 'react-router-dom'

import SideMenu from './SideMenu'
import Histogram from './Histogram/Index'
import Radar from './Radar/Index'

class Echarts extends React.Component {
    constructor(props) {
        super(props)
        var pathname = props.location.pathname
        if(pathname.match('/echart')) {
            pathname = '/echart/histogram'
        }
        this.state = {
            match: props.match.url,
            current: pathname
        }
    }

    render () {
        return (
            <div>
                <SideMenu value={this.state.match} current={this.state.current}/>
                <div className="content-container">
                    <Route exact path={this.state.match + '/'} render={() =>
                        <Redirect to={this.state.match + '/histogram'} />
                    }/>
                    <Route path={this.state.match + '/histogram'} component={Histogram} />
                    <Route path={this.state.match + '/radar'} component={Radar} />
                </div>
            </div>
        )
    }
}

export default Echarts