import React from 'react'

import {Badge, Icon, Dropdown, Menu} from 'antd'


const menu = (
    <Menu className="drop">
        <Menu.Item>
            <Icon type="calendar" style={{ color: '#495060' }}/>
            <span className="text">Updates</span>
            <Badge count={25} style={{ backgroundColor: '#63c2de' }} />
        </Menu.Item>
        <Menu.Item>
            <Icon type="mail" style={{ color: '#495060' }}/>
            <span className="text">Messages</span>
            <Badge count={25} style={{ backgroundColor: '#4dbd74' }} />
        </Menu.Item>
        <Menu.Item className="drop-border">
            <Icon type="user" style={{ color: '#495060' }}/>
            <span className="text">Profile</span>
        </Menu.Item>
        <Menu.Item>
            <Icon type="setting" style={{ color: '#495060' }}/>
            <span className="text">Settings</span>
        </Menu.Item>
        <Menu.Item>
            <Icon type="logout" style={{ color: '#495060' }}/>
            <span className="text logout">Logout</span>
        </Menu.Item>
    </Menu>
)

class InfoHead extends React.Component {
    render () {
        return (
            <section className="info-head">
                <Badge dot>
                    <Icon type="bell" style={{fontSize: 25, color: '#2d8cf0'}}/>
                </Badge>
                <Dropdown  overlay={menu} placement="topCenter">
                    <span>
                        <img src="http://wx.y1y.me/uploads/notoken/a/a/f/8/58d4f2ad0ac71.jpg" alt="" className="portrait"/>
                        <span className="username">admin</span>
                    </span>
                </Dropdown>
                <span className="icon-span">
                    <Icon type="bars" style={{ fontSize: 25, color: '#2d8cf0' }} />
                </span>
            </section>
        )
    }
}

export default InfoHead