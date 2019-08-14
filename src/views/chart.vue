<template>
    <div class="page_wrap">
        <div class="top_wrap">
            <div class="top_left" style="position: relative">
                <div class="block_top">
                    <h5>区局保障统计</h5>
                </div>

                <div v-if="true" style="height: 0;flex: 1;display: flex;flex-direction: column-reverse;">
                    <ve-histogram :data="topLeftChartData"
                                  style="margin-top: -30px;margin-bottom: -30px;"
                                  :legend-visible="false"></ve-histogram>
                </div>
            </div>
            <div class="top_right">
                <div class="block_top">
                    <h5>保障渠道占比</h5>
                </div>

                <div v-if="true" style="height: 0;flex: 1;">
                    <ve-pie :data="topRightChartData"
                            style="margin-top: -70px;"
                            :legend-visible="false"></ve-pie>
                </div>
            </div>
        </div>
        <div class="bottom_wrap">
            <div class="top_left">
                <div class="block_top">
                    <h5>已关联保障单</h5>
                </div>
                <div style="width: 100%;flex: 1;">
                    <div style="width: 100%;height:100%;" ref="chartId"></div>
                </div>
            </div>
            <div class="top_right">
                <div class="block_top">
                    <h5>保障单类型</h5>
                </div>

                <div v-if="true" style="height: 0;flex: 1;">
                    <ve-ring :data="topRightChartData"
                            style="margin-top: -70px;"
                            :legend-visible="false"></ve-ring>
                </div>
            </div>
        </div>
        <!--<div style="width: 600px;height: 400px;" ref="chartId"></div>-->
    </div>
</template>

<script>
    export default {
        name: "chart",
        data() {
            return {
                topLeftChartData: {
                    columns: ['日期', '访问用户', '下单用户', '下单率'],
                    rows: [
                        { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
                        { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
                        { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
                        { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
                        { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323},
                        { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 },
                        { '日期': '1/7', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 },
                        { '日期': '1/8', '访问用户': 4593, '下单用户': 22193, '下单率': 0.78 },
                    ]
                },
                topRightChartData: {
                    columns: ['日期', '访问用户'],
                    rows: [
                        { '日期': '1/1', '访问用户': 1393 },
                        { '日期': '1/2', '访问用户': 3530 },
                        { '日期': '1/3', '访问用户': 2923 },
                        { '日期': '1/4', '访问用户': 1723 },
                        { '日期': '1/5', '访问用户': 3792 },
                        { '日期': '1/6', '访问用户': 4593 }
                    ]
                },
                bottomLeftChartData: {
                    yData: ['系统1', '系统2', '系统3', '系统4'],
                    legendData: ['已完成', '未处理']
                }
            }
        },
        methods: {
            initChartData(myChart) {
                var option = {
                    tooltip: {},
                    // legend: {
                    //     data: this.bottomLeftChartData.legendData,
                    //     show:true,
                    //     left: 'center',
                    // },
                    grid:{
                        top:"50px",
                        left:"50px",
                        right:"15px",
                        bottom:"50px"
                    },
                    xAxis: {
                        splitLine:{
                            lineStyle:{
                                color:'#e5e5e5'
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                type: 'solid',
                                color:'#e5e5e5',
                                width:'1'
                            }
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#333'
                            }
                        }
                    },
                    yAxis: {
                        data: this.bottomLeftChartData.yData,
                        splitLine:{show: false},//去除网格线
                        axisLine: {
                            lineStyle: {
                                type: 'solid',
                                color:'#e5e5e5',
                                width:'1'
                            }
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#333'
                            }
                        }
                    },
                    series: [
                        {
                            name: this.bottomLeftChartData.legendData[0],
                            type: 'bar',
                            stack:'使用情况',
                            data: [5, 20, 36, 10],
                            barWidth: 20,
                            itemStyle:{
                                normal:{
                                    color:"#5077F6",
                                    label: {
                                        show: true, //开启显示
                                        position: 'top', //在上方显示
                                        textStyle: { //数值样式
                                            color: '#e5e5e5',
                                            fontSize: 12,
                                        }
                                    }

                                },
                                emphasis: {
                                    color: '#5077F6',
                                },
                            }
                        },
                        {
                            name: this.bottomLeftChartData.legendData[1],
                            type: 'bar',
                            stack:'使用情况',
                            data: [15, 20, 26, 30],
                            barWidth: 20,
                            itemStyle:{
                                normal:{
                                    color:"#E6E9EC",
                                    label: {
                                        show: true, //开启显示
                                        position: 'right', //在上方显示
                                        textStyle: { //数值样式
                                            color: '#e5e5e5',
                                            fontSize: 12
                                        }
                                    }
                                },
                                emphasis: {
                                    color: '#e5e5e5',
                                },
                            }
                        }
                    ],
                    // stack: {'hello': ['销量', '哈哈']},
                };
                //用于使chart自适应高度和宽度
                window.onresize = function() {
                    myChart.resize();
                };
                myChart.setOption(option);
            }
        },
        mounted() {
            var myChart = echarts.init(this.$refs.chartId);
            this.initChartData(myChart)
        }
    }
</script>

<style scoped>
    .page_wrap{
        width: 100%;
        height: 100vh;
        padding: 0 20px;
        box-sizing: border-box;
        background-color: #fcfcfc;
    }
    .top_wrap{
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: space-between;
    }
    .bottom_wrap{
        width: 100%;
        height: 50%;
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
    }
    .top_left{
        width: 60%;
        height: 100%;
        background-color: white;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        justify-content: space-between;
    }
    .top_right{
        width: 40%;
        height: 100%;
        margin-left: 20px;
        background-color: white;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
    }
    .block_top{
        height: 50px;
        background-color: white;
        padding: 0 10px;
        box-sizing: border-box;
        display: flex;
        width: 100%;
        font-weight: bold;
        align-items: center;
        justify-content: space-between;
        color: #333;
        margin-bottom: 10px;
        border-bottom: 1px solid #e5e5e5;
        font-weight: bold;
    }

</style>