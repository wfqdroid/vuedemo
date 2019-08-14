<template>
    <div >
        <div class="top_back">
            <span class="top_back_title">报障单列表</span>
        </div>
        <div style="padding-top: 80px;">
            <el-tabs v-model="curTabName" @tab-click="handleClick" class="mt_20">
                <el-tab-pane label="已结单" name="first"></el-tab-pane>
                <el-tab-pane label="未结单" name="second"></el-tab-pane>
            </el-tabs>
        </div>

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
                        label="单号">
                </el-table-column>
                <el-table-column
                        prop="desc"
                        label="报障描述">
                </el-table-column>
                <el-table-column
                        prop="time"
                        label="时间">
                </el-table-column>
                <el-table-column
                label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" round type="primary">处理</el-button>
                    </template>
                </el-table-column>
            </el-table>
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
                          time:'2019-06-06'
                      },
                      {
                          orderNum:'123456',
                          desc:'描述是啥',
                          time:'2019-06-06'
                      },
                      {
                          orderNum:'123456',
                          desc:'描述是啥',
                          time:'2019-06-06'
                      }
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