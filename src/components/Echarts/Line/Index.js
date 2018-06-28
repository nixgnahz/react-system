import React from 'react'

import echarts from 'echarts/lib/echarts'
import 'echarts/lib/component/title'
import 'echarts/lib/component/toolbox'
import 'echarts/lib/component/grid'
import 'echarts/lib/component/legend'
import 'echarts/lib/chart/line'

class Line extends React.Component {
    componentDidMount() {
        var myChart = echarts.init(document.getElementById('chart'));
        myChart.setOption({
            title: {
                text: "客户来源分布图"
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['邮件营销', '联盟广告', '搜索引擎']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value'
            },
            toolbox: {
                feature: {
                    saveAsImage: {},
                    dataView: {},
                    magicType: {type: ['bar']}
                },
                showTitle: false,
            },
            series: [
                {
                    name: '邮件营销',
                    type: 'line',
                    stack: '总量',
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '联盟广告',
                    type: 'line',
                    stack: '总量',
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '搜索引擎',
                    type: 'line',
                    stack: '总量',
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        })
    }

    render () {
        return (
            <div>
                <div className='top-header'>
                    <p>折线图</p>
                </div>
                <div id="chart"></div>
            </div>
    )
    }
}

export default Line