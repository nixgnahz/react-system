import React from 'react'

import './index.scss'

import {Route, Redirect} from 'react-router-dom'

import SideMenu from './SideMenu'
import Sponsor from './Sponsor/Index'
import Manage from './Manage/Index'

class Activity extends React.Component {
    constructor(props) {
        super(props)
        var pathname = props.location.pathname
        if(pathname.match('/activity')) {
            pathname = '/activity/sponsor'
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
                        <Redirect to={this.state.match + '/sponsor'} />
                    }/>
                    <Route path={this.state.match + '/sponsor'} component={Sponsor} />
                    <Route path={this.state.match + '/manage'} component={Manage} />
                </div>
            </div>
        )
    }
}

export default Activity