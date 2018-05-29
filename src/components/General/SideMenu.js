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
        console.log(props)
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
                <Menu selectedKeys={[this.state.current]} onClick={this.changeMenu}>
                    <Menu.Item key={ this.state.match + '/other'}>
                        <Icon type="mail" />
                        <span>其他管理</span>
                    </Menu.Item>
                    <Menu.Item key={ this.state.match + '/staff'}>
                        <Icon type="calendar" />
                        <span>员工管理</span>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default withRouter(SideMenu)