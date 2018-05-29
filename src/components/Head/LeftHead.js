import React from 'react'

import {Icon} from 'antd'

class LeftHead extends React.Component {
    constructor (props){
        super(props)
        this.state = {}
    }

    render () {
        return (
            <section className="left-head">
                <p>REACTADMIN</p>
                <span>
                    <Icon type="bars" style={{ fontSize: 25, color: '#2d8cf0' }} />
                </span>
            </section>
        )
    }
}

export default LeftHead