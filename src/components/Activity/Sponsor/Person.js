import React from 'react'

import {Form, Button, Input, Upload, Icon, Checkbox} from 'antd'

const formItemLayout = {
    labelCol: {
        span: 2
    },
    wrapperCol: {
        span: 22
    }
}

const postInfos = [
    {
        id: 1,
        checked: 1,
        name: "报名成功",
        tip: "您已成功报名***(默认活动标题名)活动"
    },
    {
        id: 2,
        checked: 1,
        name: "审核通过",
        tip: "您报名的***(默认活动标题名)活动，已审核通过"
    },
    {
        id: 3,
        checked: 1,
        name: "审核不通过",
        tip: "您报名的***(默认活动标题名)活动，审核不通过"
    },
    {
        id: 4,
        checked: 1,
        name: "签到成功",
        tip: "***(默认用户名)您好！恭喜您签到成功！"
    },
    {
        id: 5,
        checked: 1,
        name: "签到失败",
        tip: "抱歉，签到失败"
    },
    {
        id: 6,
        checked: 1,
        name: "重复签到",
        tip: "请勿重复签到！"
    }
]

class Person extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            postInfos: postInfos
        }
    }

    render () {
        return (
            <div>
                <Form className="form">
                    <Form.Item label="消息推送" {...formItemLayout}>
                    {this.state.postInfos.map((item)=>
                        <div key={item.id}>
                            <Checkbox checked={item.checked}>{item.name}</Checkbox>
                            <Input className="post-tip-input" placeholder={item.tip}/>
                        </div>
                    )}
                    </Form.Item>
                </Form>
                <div className="btns" style={{marginBottom: '0.5rem'}}>
                    <Button>上一步</Button>
                    <Button type="primary">发布</Button>
                </div>
            </div>
        )
    }
}

export default Person