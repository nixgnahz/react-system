import React from 'react'

import './index.scss'

import {Button, Table, Modal, message} from 'antd'

import AddUser from './AddUser'
import AssignPermission from './AssignPermission'

const data = [
    {
        key: '1',
        name: '张欣',
        identity: '管理员',
        tel: '18876564356',
        mail: 'surezhangxin@123.com'
    },
    {
        key: '2',
        name: '陈应洲',
        identity: '管理员',
        tel: '17622934512',
        mail: 'purechenyingzhou@123.com'
    },
    {
        key: '3',
        name: '王家卫',
        identity: '用户',
        tel: '1308764570',
        mail: '467567898765@123.com'
    },
    {
        key: '4',
        name: '李敏丽',
        identity: '用户',
        tel: '18723461269',
        mail: 'opensure@123.com'
    }
]

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {},
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User',
        name: record.name
    })
}

const config = {
    loading: false,
    pagination: false,
    bordered: true
}

class Staff extends React.Component {
    constructor (props) {
        super(props)
        this.columns = [
            {
                title: '用户名',
                dataIndex: 'name'
            },
            {
                title: '账号身份',
                dataIndex: 'identity'
            },
            {
                title: '手机号',
                dataIndex: 'tel'
            },
            {
                title: '邮箱',
                dataIndex: 'mail'
            },
            {
                title: '操作',
                dataIndex: 'action',
                align: 'center',
                render: () => (
                    <Button type="primary" onClick={this.showDeleteTips}>删除</Button>
                )
            }
        ]
        this.state = {
            showAddUser: false,
            showAssignPermission: false
        }
        this.showDeleteTips = this.showDeleteTips.bind(this)
        this.showDeleteSuccess = this.showDeleteSuccess.bind(this)
        this.showAddUser = this.showAddUser.bind(this)
        this.showAssignPermission = this.showAssignPermission.bind(this)
    }

    showDeleteTips () {
        var self = this
        Modal.confirm({
            title: '提示',
            content: '确定删除该用户？',
            okText: '确定',
            cancelText: '取消',
            onOk() {
                self.showDeleteSuccess()
            }
        })
    }

    showDeleteSuccess () {
        message.success('删除成功')
    }

    showAddUser () {
        this.setState((prevState, props) => ({
            showAddUser: !prevState.showAddUser
        }))
    }

    showAssignPermission () {
        this.setState((prevState, props) => ({
            showAssignPermission: !prevState.showAssignPermission
        }))
    }

    render () {
        var AddUserComponent = <AddUser/>
        var AssignPermissionComponent = <AssignPermission/>
        if(!this.state.showAddUser) {
            AddUserComponent = null
        }
        if(!this.state.showAssignPermission) {
            AssignPermissionComponent = null
        }
        return (
            <div>
                {AddUserComponent}
                {AssignPermissionComponent}
                <div className="btns">
                    <Button icon="plus-circle" size="default" onClick={this.showAddUser}>添加用户</Button>
                    <Button icon="key" size="default" onClick={this.showAssignPermission}>权限分配</Button>
                </div>
                <Table className="tables" loading={config.loading} size='small' pagination={config.pagination} bordered={config.bordered} rowSelection={rowSelection}  columns={this.columns} dataSource={data} />
            </div>
        )
    }
}

export default Staff