import React from 'react'

import {Card, Button} from 'antd'

class Good extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render () {
        return (
            <Card className="good-card" hoverable cover={<img alt="" src="http://wx.wpart.cn/uploads/Q/Qdh4nAHglce5Bkn7PTKf/5/7/6/c/5b10fdbb9e0db.png_p2js" />}>
                <span className="name">好吃的汉堡</span>
                <div className="actions">
                    <p className="price">¥18</p>
                    <p>
                        <Button type="primary" size="small">编辑</Button>
                    </p>
                </div>
            </Card>
        )
    }
}

export default Good