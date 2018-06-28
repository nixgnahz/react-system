import React from 'react'

import {Row, Col, Form, Input, Button, Radio} from 'antd'

const formItemLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
}

class AddUser extends React.Component {
    componentDidMount() {
        this.props.form.validateFields()
    }

    render () {
        const {changeEvent} = this.props
        return (
            <div className='mask-container'>
                <div className='form-container'>
                    <Form className="add-user" layout="inline">
                        <p className='form-header'>创建用户</p>
                        <Row>
                            <Col span={12}>
                                <Form.Item label="用户名" {...formItemLayout}>
                                    <Input type='text'/>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="登录密码" {...formItemLayout}>
                                    <Input type='password'/>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <Form.Item label="邮箱" {...formItemLayout}>
                                    <Input type='text'/>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="电话号码" {...formItemLayout}>
                                    <Input type='text'/>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Form.Item label="用户身份" >
                            <Radio.Group>
                                <Radio value="admin">管理员</Radio>
                                <Radio value="user">用户</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Form>
                    <div className="btns-row">
                        <Button type="primary">提交</Button>
                        <Button onClick={changeEvent}>取消</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form.create()(AddUser)