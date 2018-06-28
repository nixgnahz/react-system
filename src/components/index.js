import React from 'react'

import {BrowserRouter as Router, Route, Redirect} from "react-router-dom"

import {notification} from 'antd'

import Head from './Head/Index'
import Echarts from './Echarts/Index'
import Activity from './Activity/Index'
import Info from './Info/Index'
import General from './General/Index'

import './index.scss'

class App extends React.Component {
    componentDidMount () {
        notification.success({
            message: '欢迎进入REACTADMIN',
            description: '今天星期五，天气晴朗'
        })
    }

    render () {
        return (
            <Router>
                <div>
                    <Head/>
                    <Route exact path='/' render={() =>
                        <Redirect to='/echart' />
                    }/>
                    <Route path='/echart' component={Echarts} />
                    <Route path='/activity' component={Activity} />
                    <Route path='/info' component={Info} />
                    <Route path='/general' component={General} />
                </div>
            </Router>
        )
    }
}

export default App