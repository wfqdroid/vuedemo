<template>
    <div>
        <div>name:{{userInfo.name}}</div>
        <el-button type="primary" size="small" @click="getInfo">获取用户信息</el-button>
    </div>
</template>

<script>
    import {mapState,mapActions} from 'vuex'
    export default {
        name: "vuex1",
        data() {
            return {}
        },
        computed:{
            ...mapState('wfq/user',[
                'userInfo'
            ])
        },
        methods: {
            ...mapActions('wfq/user',[
                'getUserInfo'
            ]),
            getInfo(){
                this.getUserInfo()
            },
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>