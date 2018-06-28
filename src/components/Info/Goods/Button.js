import React from 'react'

import {Icon} from 'antd'

class Button extends React.Component {
    render () {
        const {icon, title} = this.props.value
        return (
            <div className="action-btn">
                <Icon type={icon} style={{fontSize: 20}}/>
                <p>{title}</p>
            </div>
        )
    }
}

export default Button