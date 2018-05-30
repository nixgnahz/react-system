import React from 'react'

import {withRouter} from 'react-router-dom'

import {Menu} from 'antd'

class MenuHead extends React.Component {
    constructor (props){
        super(props)
        var pathname = getPathname(props.location.pathname)
        this.props.history.push(pathname)
        this.state = {
            current: pathname
        }
        this.changeMenu = this.changeMenu.bind(this)
    }

    changeMenu (e) {
        this.setState({
            current: e.key
        })
        this.props.history.push(e.key)
    }

    render () {
        return (
            <section className="menu-head">
                <Menu mode="horizontal" selectedKeys={[this.state.current]} style={{backgroundColor: '#143f6d', color: '#ffffff'}} onClick={this.changeMenu}>
                    <Menu.Item key="/echart">图表管理</Menu.Item>
                    <Menu.Item key="/activity">活动管理</Menu.Item>
                    <Menu.Item key="/info">信息管理</Menu.Item>
                    <Menu.Item key="/general">综合管理</Menu.Item>
                </Menu>
            </section>
        )
    }
}

function getPathname(pathname) {
    if(pathname === '/' || pathname.match('/echart')) {
        return '/echart'
    } else if (pathname.match('/activity')) {
        return '/activity'
    } else if (pathname.match('/info')) {
        return '/info'
    } else if (pathname.match('/general')){
        return '/general'
    } else {
        return pathname
    }
}

export default withRouter(MenuHead)