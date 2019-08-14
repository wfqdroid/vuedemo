<template>
    <div >
        <div class="top_back">
            <span class="top_back_title">关联</span>
        </div>

        <span>增加v1分支</span>



        <div style="padding-top: 80px;">

            <div class="flex box_center_v mt_20" style="padding: 0 30px;">
                <el-input size="mini" placeholder="请输入JIRA单号/关键词" style="width: 300px;margin-right: 20px;"></el-input>
                <el-button type="primary" size="mini" >匹配</el-button>
            </div>

            <div class="mt_10 w_full mb_30 mt_30" >

                <el-table
                        :data="mData"
                        style="width: 100%;box-shadow: 0 0 25px #e5e5e5"
                        :header-cell-style="{
                        'background-color': '#F2F3F5',
                        'width':'100%'
                    }">
                    <el-table-column
                            prop="type"
                            label="类型">
                    </el-table-column>
                    <el-table-column
                            prop="one"
                            label="报障单">
                    </el-table-column>
                    <el-table-column
                            prop="two"
                            label="JIRA单">
                    </el-table-column>
                </el-table>
            </div>


            <div class="flex_r box_center_v">
                <el-button type="primary" round style="margin-left: 10px;" size="medium">确认关联</el-button>
                <el-button round size="medium">清除</el-button>
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
                mData:[]
            }
        },
        methods: {
            handleClick(e){
                console.error(e)
                this.curTabName = e.name
            },
            getNameByType(pos){
                let data = ['单号','描述详情','其他']
                return data[pos]
            },
            getBaoZhangDanByPositon(pos){
                let data = ['72948752037','保障单描述详情','保障单其他信息']
                return data[pos]
            },
            getJIRAByPositon(pos){
                let data = ['72948752037','JIRA单描述详情','JIRA单其他信息']
                return data[pos]
            }
        },
        mounted() {
            let res = []
            for(let i= 0;i<3;i++){
                let tmpObj = {
                    type:this.getNameByType(i),
                    one:this.getBaoZhangDanByPositon(i),
                    two:this.getJIRAByPositon(i)
                }
                res.push(tmpObj)
            }
            console.error('res is: ' + JSON.stringify(res))
            this.mData = res
        }
    }
</script>

<style scoped>

</style>