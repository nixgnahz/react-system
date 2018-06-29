import React from 'react'

import {Steps} from 'antd'

class Step extends React.Component {
    render () {
        const {step} = this.props
        return (
            <div>
                <Steps current={step} size="small">
                    <Steps.Step title={step >= 1 ? "已完成" : "进行中"} description="报名信息" />
                    <Steps.Step title={step >= 2 ? "已完成" : "进行中"} description="报道签名" />
                    <Steps.Step title={step >= 3 ? "已完成" : "进行中"} description="分享设置" />
                    <Steps.Step title={step >= 4 ? "已完成" : "进行中"} description="个性设置" />
                </Steps>
            </div>
        )
    }
}

export default Step