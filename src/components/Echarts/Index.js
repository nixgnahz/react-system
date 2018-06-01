import React from 'react'

import './index.scss'

import {Route, Redirect} from 'react-router-dom'

import SideMenu from './SideMenu'
import Histogram from './Histogram/Index'
import Radar from './Radar/Index'
import Line from './Line/Index'
import Pie from './Pie/Index'
import Area from './Area/Index'

class Echarts extends React.Component {
    constructor(props) {
        super(props)
        var pathname = props.location.pathname
        if(pathname === '/echart') {
            pathname = '/echart/histogram'
        }
        this.state = {
            match: props.match.url,
            current: pathname
        }
    }

    render () {
        return (
            <div className='main'>
                <SideMenu value={this.state.match} current={this.state.current}/>
                <div className="content-container">
                    <Route exact path={this.state.match + '/'} render={() =>
                        <Redirect to={this.state.match + '/histogram'} />
                    }/>
                    <Route path={this.state.match + '/histogram'} component={Histogram} />
                    <Route path={this.state.match + '/radar'} component={Radar} />
                    <Route path={this.state.match + '/line'} component={Line} />
                    <Route path={this.state.match + '/pie'} component={Pie} />
                    <Route path={this.state.match + '/area'} component={Area} />
                </div>
            </div>
        )
    }
}

export default Echarts