<template>
    <div>
        <div>name:{{userInfo.name}}</div>
        <el-button type="primary" size="small" @click="getInfo">获取用户信息</el-button>
        <el-button type="primary" size="small" @click="testLodash">lodash</el-button>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'

    export default {
        name: "vuex1",
        data() {
            return {}
        },
        computed: {
            ...mapState('wfq/user', [
                'userInfo'
            ])
        },
        methods: {
            ...mapActions('wfq/user', [
                'getUserInfo'
            ]),
            getInfo() {
                this.getUserInfo()
            },

            test(){
                console.log('WFQ')
            },
            testLodash(){
                // var throttled = this._.throttle(this.test, 5000, false);
                // var debounce = this._.debounce(this.test,1000,false)
                // // throttled()
                // debounce()

                // let str = 'wfq'
                // // console.log(this._.capitalize(str))
                // console.log(this._.endsWith(str,'f',2))
                // this.http.get(`/user/userLogin`).then(res=>{}).catch(error=>{})
            }

        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>