import React from 'react'

import {Table, Select, Button} from 'antd'

const columns = [
    {
        title: '活动名称',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: '活动分类',
        dataIndex: 'typeWord',
        key: 'type'
    },
    {
        title: '活动状态',
        dataIndex: 'status',
        key: 'status'
    },
    {
        title: '浏览数',
        dataIndex: 'view',
        key: 'view'
    },
    {
        title: '报名数',
        dataIndex: 'enroll',
        key: 'enroll'
    },
    {
        title: '操作',
        dataIndex: 'action',
        align: 'center',
        render: () => (
            <Button type="primary" size="small" onClick={this.editUser}>查看详情</Button>
        )
    }
]
const data = [
    {
        "key": 1,
        "name": "植树节活动",
        "typeWord": "免费活动",
        "type": 0,
        "status": "已结束",
        "view": "200",
        "enroll": "100"
    },
    {
        "key": 2,
        "name": "清明祭祀",
        "typeWord": "收费活动",
        "type": 1,
        "status": "已结束",
        "view": "200",
        "enroll": "100"
    },
    {
        "key": 3,
        "name": "五一春游",
        "typeWord": "收费活动",
        "type": 1,
        "status": "报名中",
        "view": "200",
        "enroll": "100"
    },
    {
        "key": 4,
        "name": "周末烧烤",
        "typeWord": "收费活动",
        "type": 1,
        "status": "进行中",
        "view": "200",
        "enroll": "100"
    }
]

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {},
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User',
        name: record.name
    })
}

class ActivityList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sourceData: data
        }
        this.filterActivity = this.filterActivity.bind(this)
    }

    filterActivity (e) {
        var arr = data
        if(e === 'free') {
            arr = arr.filter((item)=>{
              return !item.type
            })
        }
        if(e === 'money') {
            arr = arr.filter((item)=>{
                return item.type
            })
        }
        this.setState({
            sourceData: arr
        })
    }

    render () {
        return (
            <div className="table-container">
                <p className="title">活动列表</p>
                <div className="actions">
                    <Select defaultValue="all" style={{width: '3.5rem', marginRight: '0.5rem'}} onChange={this.filterActivity}>
                        <Select.Option value="all">全部</Select.Option>
                        <Select.Option value="free">免费活动</Select.Option>
                        <Select.Option value="money">收费活动</Select.Option>
                    </Select>
                    <div className="btns">
                        <Button>置顶</Button>
                        <Button>删除</Button>
                    </div>
                </div>
                <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.sourceData} bordered={true} pagination={{showSizeChanger: true}}/>
            </div>
        )
    }
}

export default ActivityList