import React from 'react'

import {Menu, Icon} from 'antd'

import {withRouter} from 'react-router-dom'

class SideMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            match: props.value,
            current: props.current
        }
        this.props.history.push(props.current)
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
            <div className='sideMenu'>
                <Menu selectedKeys={[this.state.current]} onClick={this.changeMenu} style={{backgroundColor: '#143f6d', color: '#ffffff'}}>
                    <Menu.Item key={ this.state.match + '/user'}>
                        <Icon type="mail" />
                        <span>用户管理</span>
                    </Menu.Item>
                    <Menu.Item key={ this.state.match + '/goods'}>
                        <Icon type="calendar" />
                        <span>商品管理</span>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default withRouter(SideMenu)