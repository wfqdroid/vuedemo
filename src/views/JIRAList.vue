<template>
    <div >
        <div class="top_back">
            <span class="top_back_title">JIRA单关联报障单</span>
        </div>


        <div style="padding-top: 80px;">

            <div class="mt_10 w_full mb_30 mt_30">

            <el-table
                    :data="mData"
                    style="width: 100%;box-shadow: 0 0 25px #e5e5e5"
                    :header-cell-style="{
                        'background-color': '#F2F3F5',
                        'width':'100%'
                    }">
                <el-table-column
                        prop="orderNum"
                        label="JIRA单号">
                </el-table-column>
                <el-table-column
                        prop="desc"
                        label="描述">
                </el-table-column>
                <el-table-column
                        prop="count"
                        label="关联报障单数">
                </el-table-column>

                <el-table-column
                        prop="version"
                        label="版本计划">
                </el-table-column>
            </el-table>
        </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "reportobstacle",
        data() {
            return {
                curTabName:'first',
                mData:[
                    {
                        orderNum:'123456',
                        desc:'描述是啥',
                        count:200,
                        version:'2019-06-06'
                    },{
                        orderNum:'123456',
                        desc:'描述是啥',
                        count:200,
                        version:'2019-06-06'
                    },{
                        orderNum:'123456',
                        desc:'描述是啥',
                        count:200,
                        version:'2019-06-06'
                    },
                ]
            }
        },
        methods: {
            handleClick(e){
                console.error(e)
                this.curTabName = e.name
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>