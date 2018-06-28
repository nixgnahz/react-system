import React from 'react'

import './index.scss'

import {Input, Button, Table, Modal, message} from 'antd'

import AddUser from './AddUser'

const data = [
    {
        "key": 1,
        "name": "龚静",
        "age": 18,
        "sex": "女",
        "address": "云南省 昆明市 寻甸回族彝族自治县",
        "date": "2016-10-03"
    },
    {
        "key": 2,
        "name": "宋刚",
        "age": 24,
        "sex": "男",
        "address": "四川省 广安市 华蓥市",
        "date": "2016-10-01"
    },
    {
        "key": 3,
        "name": "彭平",
        "age": 24,
        "sex": "女",
        "address": "江西省 萍乡市 莲花县",
        "date": "2016-10-01"
    },
    {
        "key": 4,
        "name": "孙强",
        "age": 24,
        "sex": "男",
        "address": "河南省 信阳市 固始县",
        "date": "2016-10-01"
    },
    {
        "key": 5,
        "name": "赵涛",
        "age": 30,
        "sex": "女",
        "address": "广东省 潮州市 其它区",
        "date": "2016-10-02"
    },
    {
        "key": 6,
        "name": "贺丽",
        "age": 18,
        "sex": "女",
        "address": "广东省 湛江市 麻章区",
        "date": "2016-10-03"
    },
    {
        "key": 7,
        "name": "程伟",
        "age": 24,
        "sex": "男",
        "address": "云南省 丽江市 宁蒗彝族自治县",
        "date": "2016-10-01"
    },
    {
        "key": 8,
        "name": "薛娟",
        "age": 24,
        "sex": "女",
        "address": "西藏自治区 山南地区 琼结县",
        "date": "2016-10-01"
    },
    {
        "key": 9,
        "name": "武超",
        "age": 24,
        "sex": "男",
        "address": "四川省 广安市 华蓥市",
        "date": "2016-10-01"
    },
    {
        "key": 10,
        "name": "徐强",
        "age": 30,
        "sex": "女",
        "address": "陕西省 汉中市 佛坪县",
        "date": "2016-10-02"
    },
    {
        "key": 11,
        "name": "秦秀兰",
        "age": 18,
        "sex": "女",
        "address": "云南省 昆明市 寻甸回族彝族自治县",
        "date": "2016-10-03"
    },
    {
        "key": 12,
        "name": "高强",
        "age": 24,
        "sex": "男",
        "address": "四川省 广安市 华蓥市",
        "date": "2016-10-01"
    },
    {
        "key": 13,
        "name": "王秀兰",
        "age": 24,
        "sex": "女",
        "address": "江西省 萍乡市 莲花县",
        "date": "2016-10-01"
    },
    {
        "key": 14,
        "name": "雷刚",
        "age": 24,
        "sex": "男",
        "address": "河南省 信阳市 固始县",
        "date": "2016-10-01"
    },
    {
        "key": 15,
        "name": "袁丽",
        "age": 30,
        "sex": "女",
        "address": "广东省 潮州市 其它区",
        "date": "2016-10-02"
    },
    {
        "key": 16,
        "name": "蒋娜",
        "age": 18,
        "sex": "女",
        "address": "广东省 湛江市 麻章区",
        "date": "2016-10-03"
    },
    {
        "key": 17,
        "name": "于伟",
        "age": 24,
        "sex": "男",
        "address": "云南省 丽江市 宁蒗彝族自治县",
        "date": "2016-10-01"
    },
    {
        "key": 18,
        "name": "张秀英",
        "age": 24,
        "sex": "女",
        "address": "西藏自治区 山南地区 琼结县",
        "date": "2016-10-01"
    },
    {
        "key": 19,
        "name": "许杰",
        "age": 24,
        "sex": "男",
        "address": "四川省 广安市 华蓥市",
        "date": "2016-10-01"
    },
    {
        "key": 20,
        "name": "汪刚",
        "age": 30,
        "sex": "女",
        "address": "陕西省 汉中市 佛坪县",
        "date": "2016-10-02"
    },
    {
        "key": 21,
        "name": "金霞",
        "age": 18,
        "sex": "女",
        "address": "云南省 昆明市 寻甸回族彝族自治县",
        "date": "2016-10-03"
    },
    {
        "key": 22,
        "name": "邹杰",
        "age": 24,
        "sex": "男",
        "address": "四川省 广安市 华蓥市",
        "date": "2016-10-01"
    },
    {
        "key": 23,
        "name": "彭平",
        "age": 24,
        "sex": "女",
        "address": "江西省 萍乡市 莲花县",
        "date": "2016-10-01"
    },
    {
        "key": 24,
        "name": "张勇",
        "age": 24,
        "sex": "男",
        "address": "河南省 信阳市 固始县",
        "date": "2016-10-01"
    },
    {
        "key": 25,
        "name": "周娟",
        "age": 30,
        "sex": "女",
        "address": "广东省 潮州市 其它区",
        "date": "2016-10-02"
    },
    {
        "key": 26,
        "name": "邓娟",
        "age": 18,
        "sex": "女",
        "address": "广东省 湛江市 麻章区",
        "date": "2016-10-03"
    },
    {
        "key": 27,
        "name": "马强",
        "age": 24,
        "sex": "男",
        "address": "云南省 丽江市 宁蒗彝族自治县",
        "date": "2016-10-01"
    },
    {
        "key": 28,
        "name": "廖敏",
        "age": 24,
        "sex": "女",
        "address": "西藏自治区 山南地区 琼结县",
        "date": "2016-10-01"
    },
    {
        "key": 29,
        "name": "郑超",
        "age": 24,
        "sex": "男",
        "address": "四川省 广安市 华蓥市",
        "date": "2016-10-01"
    },
    {
        "key": 30,
        "name": "崔超",
        "age": 30,
        "sex": "女",
        "address": "陕西省 汉中市 佛坪县",
        "date": "2016-10-02"
    }
]

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {},
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User',
        name: record.name
    })
}

class User extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            sortedInfo: null
        }
        this.tableChange = this.tableChange.bind(this)
    }

    tableChange (pagination, filters, sorter) {
        this.setState({
            sortedInfo: sorter
        })
    }

    showDeleteConfirm () {
        Modal.confirm({
            title: '提示',
            content: '此操作将永久删除该用户，是否继续',
            okText: '确定',
            cancelText: '取消',
            onOk() {
                message.success('删除成功');
            }
        })
    }

    render () {
        const {status, changeAddStatus} = this.props
        var sortedInfo = this.state.sortedInfo || {}
        const columns = [
            {
                title: '#',
                dataIndex: 'key',
                key: 'index',
                align: 'center'
            },
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name'
            },
            {
                title: '性别',
                dataIndex: 'sex',
                key: 'sex'
            },
            {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
                sorter: (a, b) => a.age - b.age,
                sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order
            },
            {
                title: '生日',
                dataIndex: 'date',
                key: 'date'
            },
            {
                title: '地址',
                dataIndex: 'address',
                key: 'address'
            },
            {
                title: '操作',
                dataIndex: 'action',
                align: 'center',
                render: () => (
                    <div className="btns">
                        <Button type="primary" size="small" onClick={this.editUser}>编辑</Button>
                        <Button type="danger" size="small" onClick={this.showDeleteConfirm}>删除</Button>
                    </div>
                )
            }
        ]

        var AddUserComponent = null
        if(status) {
            AddUserComponent = <AddUser changeEvent={changeAddStatus}/>
        }

        return (
            <div>
                {AddUserComponent}
                <div className='top-header'>
                    <p>用户管理</p>
                </div>
                <div className="search-container">
                    <Input placeholder="请输入用户姓名" />
                    <Button type="primary" icon="search">查询</Button>
                    <Button type="primary" onClick={changeAddStatus}>新增</Button>
                </div>
                <Table pagination={{showQuickJumper: true, pageSize: 10, total: 30}} rowSelection={rowSelection} className="user-table" columns={columns} dataSource={data} bordered={true} size="small" onChange={this.tableChange}/>
                <Button disabled={true} className="deletes-btn">批量删除</Button>
            </div>
        )
    }
}

export default User