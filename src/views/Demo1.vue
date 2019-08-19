<template>
    <div>
        <div>name:{{userInfo.name}}</div>
        <el-button type="primary" size="small" @click="setInfo">设置用户信息</el-button>
    </div>
</template>

<script>
    import {mapState,mapActions} from 'vuex'
    export default {
        name: "demo1",
        data() {
            return {}
        },
        computed:{
            ...mapState('wfq/user',[
                'userInfo',
            ]),
        },
        methods: {
            ...mapActions('wfq/user',[
                'setUserInfoAsync',
            ]),
            setInfo(){
                this.setUserInfoAsync();
            },
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>