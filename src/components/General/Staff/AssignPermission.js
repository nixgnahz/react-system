import React from 'react'

import {Checkbox, Button} from 'antd'

class AssignPermission extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render () {
        return (
            <div className="mask-container">
                <div className='form-container'>
                    <div className="assign-permission">
                        <span className='form-header'>请选择需要修改的权限</span>
                        <p>
                            <span className="labels">电池登记</span>
                            <Checkbox></Checkbox>
                        </p>
                        <p>
                            <span className="labels">基础信息</span>
                            <Checkbox></Checkbox>
                        </p>
                        <p>
                            <span className="labels">运行状况</span>
                            <Checkbox></Checkbox>
                        </p>
                        <p>
                            <span className="labels">主动检测</span>
                            <Checkbox></Checkbox>
                        </p>
                        <p>
                            <span className="labels">历史数据</span>
                            <Checkbox></Checkbox>
                        </p>
                        <p>
                            <span className="labels">报警设置</span>
                            <Checkbox></Checkbox>
                        </p>
                        <p>
                            <span className="labels">设备删除</span>
                            <Checkbox></Checkbox>
                        </p>
                        <p>
                            <span className="labels">同一电池单元数据分析</span>
                            <Checkbox></Checkbox>
                        </p>
                    </div>
                    <div className="btns-row">
                        <Button type="primary">确定</Button>
                        <Button>取消</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AssignPermission