import React from 'react'

import {Form, Input, Button, Radio, DatePicker, Tag, Select, Upload, Icon} from 'antd'

const formItemLayout = {
    labelCol: {
        span: 2
    },
    wrapperCol: {
        span: 22
    }
}

class Enroll extends React.Component {
    constructor(props) {
        super(props)
        this.label = ""
        this.state = {
            labels: []
        }
        this.addLabel = this.addLabel.bind(this)
        this.getText = this.getText.bind(this)
        this.deleteLabel = this.deleteLabel.bind(this)
    }

    addLabel () {
        var arr = this.state.labels
        var count = 0
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === this.label) count++
        }
        if(!count) {
            arr.push(this.label)
            this.setState({
                labels: arr
            })
        }
    }

    deleteLabel (index) {
        var arr = this.state.labels
        arr.splice(index, 1)
        this.setState({
            labels: arr
        })
    }

    getText (e) {
        const value = e.target.value.replace(/\s+/, "")
        if(value) {
            this.label = value
        }
    }

    render () {
        const { getFieldDecorator } = this.props.form
        return (
            <div>
                <Form className="form">
                    <Form.Item label="活动名称" {...formItemLayout}>
                    {getFieldDecorator('name', {
                        rules: [
                            {
                                required: true, message: '请输入活动名称'
                            }
                        ]
                    })(
                        <Input className="name-input" type='text' placeholder="请输入活动名称"/>
                    )}
                    </Form.Item>
                    <Form.Item label="活动类型" {...formItemLayout}>
                    {getFieldDecorator('type', {
                        initialValue: "0",
                        rules: [
                            {
                                required: true
                            }
                        ]
                    })(
                        <Radio.Group>
                            <Radio value="0">测试活动</Radio>
                            <Radio value="1">精彩活动</Radio>
                            <Radio value="2">免费活动</Radio>
                        </Radio.Group>
                    )}
                    </Form.Item>
                    <Form.Item label="活动标签" {...formItemLayout}>
                        <Input className="label-input" type='text' placeholder="请输入活动标签" onChange={this.getText}/>
                        <Button icon="plus" style={{margin: '0.2rem'}} onClick={this.addLabel}></Button>
                        {
                            this.state.labels.map((item, index)=>
                                <Tag key={item} closable onClose={()=>this.deleteLabel(index)}>{item}</Tag>
                            )
                        }
                    </Form.Item>
                    <Form.Item label="活动时间" {...formItemLayout}>
                    {getFieldDecorator('activity', {
                        rules: [
                            {
                                required: true, message: '请选择活动时间'
                            }
                        ]
                    })(
                        <div>
                            <DatePicker placeholder="请选择日期"/>
                            <span style={{margin: '0px 0.25rem'}}>-</span>
                            <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" placeholder="请选择时间"/>
                        </div>
                    )}
                    </Form.Item>
                    <Form.Item label="报名时间" {...formItemLayout}>
                    {getFieldDecorator('enroll', {
                        rules: [
                            {
                                required: true, message: '请选择报名时间'
                            }
                        ]
                    })(
                        <div>
                            <DatePicker placeholder="请选择日期"/>
                            <span style={{margin: '0px 0.25rem'}}>-</span>
                            <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" placeholder="请选择时间"/>
                        </div>
                    )}
                    </Form.Item>
                    <Form.Item label="活动地点" {...formItemLayout} className="address">
                    {getFieldDecorator('address', {
                        rules: [
                            {
                                required: true, message: '请填写活动地址'
                            }
                        ]
                    })(
                        <div>
                            <Select placeholder="请选择">
                                <Select.Option value="beijing">北京</Select.Option>
                                <Select.Option value="shanghai">上海</Select.Option>
                            </Select>
                            <Select placeholder="请选择">
                                <Select.Option value="beijing">北京</Select.Option>
                                <Select.Option value="shanghai">上海</Select.Option>
                            </Select>
                            <Select placeholder="请选择">
                                <Select.Option value="beijing">北京</Select.Option>
                                <Select.Option value="shanghai">上海</Select.Option>
                            </Select>
                            <Input className="name-input" type='text' placeholder="请输入活动具体地址"/>
                        </div>
                    )}
                    </Form.Item>
                    <Form.Item label="活动人数" {...formItemLayout}>
                        <Radio.Group>
                            <Radio value="0">无限制</Radio>
                            <Radio value="1">限制</Radio>
                        </Radio.Group>
                        <Input addonAfter="人" disabled={true}/>
                    </Form.Item>
                    <Form.Item label="活动封面" {...formItemLayout}>
                        <Upload name="avatar" listType="picture-card" showUploadList={false}>
                            <Icon type="plus" style={{fontSize: 25}}/>
                            <p className="upload">点击上传</p>
                        </Upload>
                    </Form.Item>
                    <Form.Item label="活动简介" {...formItemLayout}>
                        <Input.TextArea rows={3} />
                    </Form.Item>
                    <Form.Item label="评价功能" {...formItemLayout}>
                        <Radio.Group>
                            <Radio value="0">不开启</Radio>
                            <Radio value="1">实时评价</Radio>
                            <Radio value="2">审核后评价</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="赞助广告" {...formItemLayout}>
                        <Upload name="avatar" listType="picture-card" showUploadList={false}>
                            <Icon type="plus" style={{fontSize: 25}}/>
                            <p className="upload">点击上传</p>
                        </Upload>
                    </Form.Item>
                    <Form.Item label="广告信息" {...formItemLayout}>
                        <Input placeholder="请填写广告标题"/>
                        <Input.TextArea rows={3} placeholder="请填写广告内容" style={{margin: '0.25rem 0px'}}/>
                        <Input placeholder="请填写赞助链接"/>
                    </Form.Item>
                </Form>
                <div className="btns" style={{marginBottom: '0.5rem'}}>
                    <Button>预览</Button>
                    <Button type="primary">下一步</Button>
                </div>
            </div>
        )
    }
}

export default Form.create()(Enroll)

