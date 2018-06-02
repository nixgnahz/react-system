import React from 'react'

import {Steps} from 'antd'

class Step extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 0
        }
    }

    render () {
        return (
            <div>
                <Steps current={this.state.current} size="small">
                    <Steps.Step title={this.state.current >= 1 ? "已完成" : "进行中"} description="报名信息" />
                    <Steps.Step title={this.state.current >= 2 ? "已完成" : "进行中"} description="报道签名" />
                    <Steps.Step title={this.state.current >= 3 ? "已完成" : "进行中"} description="分享设置" />
                    <Steps.Step title={this.state.current >= 4 ? "已完成" : "进行中"} description="个性设置" />
                </Steps>
            </div>
        )
    }
}

export default Step