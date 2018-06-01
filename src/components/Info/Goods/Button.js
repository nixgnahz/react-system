import React from 'react'

import {Icon} from 'antd'

class Button extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            icon: props.value.icon,
            title: props.value.title
        }
    }

    render () {
        return (
            <div className="action-btn">
                <Icon type={this.state.icon} style={{fontSize: 20}}/>
                <p>{this.state.title}</p>
            </div>
        )
    }
}

export default Button