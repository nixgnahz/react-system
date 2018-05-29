import React from 'react'

import './index.scss'

import {Route, Redirect} from 'react-router-dom'

import SideMenu from './SideMenu'
import User from './User/Index'
import Goods from './Goods/Index'

class Info extends React.Component {
    constructor(props) {
        super(props)
        var pathname = props.location.pathname
        if(pathname.match('/info')) {
            pathname = '/info/user'
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
                        <Redirect to={this.state.match + '/user'} />
                    }/>
                    <Route path={this.state.match + '/user'} component={User} />
                    <Route path={this.state.match + '/goods'} component={Goods} />
                </div>
            </div>
        )
    }
}

export default Info