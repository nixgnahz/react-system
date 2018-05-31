import React from 'react'

import {Card, Tag} from 'antd'

const dishes = [
    {
        id: 1,
        name: "火锅",
        labels: ["香辣", "麻辣", "重庆特产"]
    },
    {
        id: 2,
        name: "酸菜鱼",
        labels: ["鲜嫩", "爽快", "滑溜"]
    },
    {
        id: 3,
        name: "汉堡",
        labels: ["能量高", "大大大", "香喷喷"]
    },
    {
        id: 4,
        name: "烧烤",
        labels: ["撸串", "麻辣", "肉肉肉"]
    },
    {
        id: 5,
        name: "番茄炒蛋",
        labels: ["家常菜", "营养高", "美味"]
    },
    {
        id: 6,
        name: "麻辣烫",
        labels: ["大杂烩", "麻", "辣", "烫"]
    },
    {
        id: 7,
        name: "重庆小面",
        labels: ["麻辣", "早餐"]
    },
    {
        id: 8,
        name: "红烧肉",
        labels: ["肥而不腻", "鲜美", "肉肉肉"]
    }
]

class Dishes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render () {
        return (
            <div className="rate-container">
                <Card title="美食排序">
                    <ul className="dishes">
                        {dishes.map((item)=>
                            <li>
                                <span className="dish-name">{item.name}</span>
                                {item.labels.map((label, index)=>
                                    <Tag closable color="green">{label}</Tag>
                                )}
                            </li>
                        )}
                    </ul>
                </Card>
            </div>
        )
    }
}

export default Dishes