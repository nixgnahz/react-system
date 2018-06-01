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
                    <Menu.Item key={ this.state.match + '/histogram'}>
                        <Icon type="mail" />
                        <span>柱状图</span>
                    </Menu.Item>
                    <Menu.Item key={ this.state.match + '/radar'}>
                        <Icon type="calendar" />
                        <span>雷达图</span>
                    </Menu.Item>
                    <Menu.Item key={ this.state.match + '/line'}>
                        <Icon type="calendar" />
                        <span>折线图</span>
                    </Menu.Item>
                    <Menu.Item key={ this.state.match + '/pie'}>
                        <Icon type="calendar" />
                        <span>饼状图</span>
                    </Menu.Item>
                    <Menu.Item key={ this.state.match + '/area'}>
                        <Icon type="calendar" />
                        <span>面积图</span>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default withRouter(SideMenu)