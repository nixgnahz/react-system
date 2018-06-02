import React from 'react'

import {Form, Input, Button, Radio, InputNumber, DatePicker, Icon} from 'antd'

const formItemLayout = {
    labelCol: {
        span: 4
    },
    wrapperCol: {
        span: 20
    }
}

class AddUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render () {
        const { getFieldDecorator } = this.props.form
        return (
            <div className='mask-container'>
                <div className='form-container'>
                    <p className='form-header'>创建用户</p>
                    <p className="close-btn">
                        <Icon type="close" style={{fontSize: 25}}/>
                    </p>
                    <Form className="add-user">
                        <Form.Item label="姓名" {...formItemLayout}>
                            {getFieldDecorator('name', {
                                rules: [
                                    {
                                        required: true, message: '请填写姓名'
                                    }
                                ]
                            })(
                                <Input type='text' placeholder="请输入姓名"/>
                            )}
                        </Form.Item>
                        <Form.Item label="性别" {...formItemLayout}>
                            <Radio.Group>
                                <Radio value="boy">男</Radio>
                                <Radio value="girl">女</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item label="年龄" {...formItemLayout}>
                            {getFieldDecorator('age', {
                                initialValue: 18,
                                rules: [
                                    {
                                        required: true, message: '请填写年龄'
                                    }
                                ]})
                            (
                                <InputNumber min={1} max={80} />
                            )}
                        </Form.Item>
                        <Form.Item label="生日" {...formItemLayout}>
                            {getFieldDecorator('date', {
                                rules: [
                                    {
                                        required: true, message: '请选择生日'
                                    }
                                ]
                            })(
                                <DatePicker placeholder="请选择生日"/>
                            )}
                        </Form.Item>
                        <Form.Item label="地址" {...formItemLayout}>
                            {getFieldDecorator('address', {
                                initialValue: '',
                                rules: [
                                    {
                                        required: true, message: '请填写地址'
                                    }
                                ]
                            })(
                                <Input.TextArea type='text' placeholder="请填写地址"/>
                            )}
                        </Form.Item>
                    </Form>
                    <div className="btns-row">
                        <Button>取消</Button>
                        <Button type="primary">提交</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form.create()(AddUser)