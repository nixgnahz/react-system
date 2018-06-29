import React from 'react'

import {Form, Checkbox, Button, Radio, Input} from 'antd'

const checkboxItems = [
    {
        label: '必须关注公众账号才能报名',
        value: '0'
    },
    {
        label: '必须成为会员才能报名',
        value: '1'
    },
    {
        label: '必须分享才能报名',
        value: '2'
    }
]

const enrollTable = [
    {
        checked: 1,
        name: "姓名",
        tip: "请填写您的姓名"
    },
    {
        checked: 1,
        name: "手机",
        tip: "请填写您的手机"
    }
]

class Sign extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            enrollTable: enrollTable
        }
        this.addEnrollRequirement = this.addEnrollRequirement.bind(this)
    }

    addEnrollRequirement () {
        var arr = this.state.enrollTable
        arr.push({
            checked: 0,
            name: "",
            tip: ""
        })
        this.setState({
            enrollTable: arr
        })
    }

    deleteEnrollRequirement (index) {
        var arr = this.state.enrollTable
        arr.splice(index, 1)
        this.setState({
            enrollTable: arr
        })
    }

    render () {
        const {increaseStep, decreaseStep} = this.props
        return (
            <div>
                <Form className="form">
                    <Form.Item label="报名限制">
                        <Checkbox.Group options={checkboxItems}/>
                    </Form.Item>
                    <Form.Item label="付费活动">
                        <Radio.Group defaultValue="0">
                            <Radio value='0'>免费</Radio>
                            <Radio value='1'>费用</Radio>
                        </Radio.Group>
                        <Input disabled={true} addonAfter="人"/>
                    </Form.Item>
                    <Form.Item label="允许取消报名">
                        <Radio.Group defaultValue="0">
                            <Radio value='0'>不允许</Radio>
                            <Radio value='1'>允许</Radio>
                        </Radio.Group>
                        <Input disabled={true} addonAfter="人"/>
                    </Form.Item>
                    <Form.Item label="报名是否需要审核">
                        <Radio.Group defaultValue="0">
                            <Radio value='0'>不需要</Radio>
                            <Radio value='1'>需要</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="设置报名表" className="enroll-table">
                        {this.state.enrollTable.map((item, index)=>
                            <div key={index} className="table-item">
                                <Checkbox checked={item.checked}>必填</Checkbox>
                                <Input defaultValue={item.name} className="label-input"/>
                                <Input placeholder={"提示语：" + item.tip} className="tip-input"/>
                                <Button icon="delete" onClick={()=>this.deleteEnrollRequirement(index)}></Button>
                            </div>
                        )}
                        <Button type="primary" onClick={this.addEnrollRequirement}>添加更多</Button>
                    </Form.Item>
                    <Form.Item label="签到方式">
                        <Radio.Group>
                            <Radio value={1}>签到二维码</Radio>
                            <Radio value={2}>入场二维码</Radio>
                            <Radio value={3}>会员二维码</Radio>
                            <Radio value={4}>手机号</Radio>
                            <Radio value={5}>暗号</Radio>
                            <Input className="label-input" disabled={true} placeholder="请输入您的暗号"/>
                        </Radio.Group>
                    </Form.Item>
                </Form>
                <div className="btns" style={{marginBottom: '0.5rem'}}>
                    <Button onClick={decreaseStep}>上一步</Button>
                    <Button type="primary" onClick={increaseStep}>下一步</Button>
                </div>
            </div>
        )
    }
}

export default Sign