import React from 'react'

import {Form, Button, Input, Upload, Icon} from 'antd'

const formItemLayout = {
    labelCol: {
        span: 2
    },
    wrapperCol: {
        span: 22
    }
}

class Share extends React.Component {
    render () {
        return (
            <div>
                <Form className="form">
                    <Form.Item label="分享标题" {...formItemLayout}>
                        <Input className="name-input" placeholder="请输入分享标题"/>
                    </Form.Item>
                    <Form.Item label="分享描述" {...formItemLayout}>
                        <Input className="name-input" placeholder="请输入分享描述"/>
                    </Form.Item>
                    <Form.Item label="分享图片" {...formItemLayout}>
                        <Upload name="avatar" listType="picture-card" showUploadList={false}>
                            <Icon type="plus" style={{fontSize: 25}}/>
                            <p className="upload">点击上传</p>
                        </Upload>
                    </Form.Item>
                </Form>
                <div className="btns" style={{marginBottom: '0.5rem'}}>
                    <Button>上一步</Button>
                    <Button type="primary">下一步</Button>
                </div>
            </div>
        )
    }
}

export default Share