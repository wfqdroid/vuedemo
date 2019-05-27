<template>
    <div>
        <div>name:{{$store.state.userInfo.name}}</div>
        <el-button type="primary" size="small" @click="$store.dispatch('getUserInfo')">获取用户信息</el-button>
    </div>
</template>

<script>
    export default {
        name: "vuex1",
        data() {
            return {}
        },
        methods: {},
        mounted() {
        }
    }
</script>

<style scoped>

</style>