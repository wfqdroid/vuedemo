<template>
    <div>
        <h2>Provide 和 Inject</h2>
        <comA></comA>
        <comB></comB>
        <el-button @click="onGetUserInfo">获取全局UserInfo</el-button>
        <el-button @click="onChangeUserInfo">改变全局UserInfo</el-button>
    </div>
</template>

<script>
    import comA from '@/components/ProvideInjectComponent/ComA.vue'
    import comB from '@/components/ProvideInjectComponent/ComB.vue'

    export default {
        name: "provide-inject-test",
        provide: {
            name: 'WFQ',
        },
        inject: ['app'],
        data() {
            return {}
        },
        components: {
            comA, comB
        },
        methods: {
            onGetUserInfo() {
                window.alert(this.app.userInfo.username)
            },
            onChangeUserInfo() {
                this.app.changeUserInfo()
            },
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>