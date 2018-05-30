import React from 'react'

import './index.scss'

import {Route, Redirect} from 'react-router-dom'

import SideMenu from './SideMenu'
import Other from './Other/Index'
import Staff from './Staff/Index'

class General extends React.Component {
    constructor(props) {
        super(props)
        var pathname = props.location.pathname
        if(pathname === '/general') {
            pathname = '/general/other'
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
                        <Redirect to={this.state.match + '/other'} />
                    }/>
                     <Route path={this.state.match + '/other'} component={Other} />
                     <Route path={this.state.match + '/staff'} component={Staff} />  
                </div>
            </div>
        )
    }
}

export default General