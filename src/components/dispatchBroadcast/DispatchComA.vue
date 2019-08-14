<template>
    <div>
        <h2>我是DiapatchComA子组件</h2>
        <h2>我是DiapatchComA子组件</h2>
        <el-button @click="onDispatchClick">子组件向上分发事件</el-button>
    </div>
</template>

<script>
    import Emitter from '../../mixins/emitter'

    export default {
        name: "dispatchComA",
        mixins:[Emitter],
        data() {
            return {}
        },
        methods: {
            onDispatchClick() {
                this.dispatch("dispatch-and-broadcast", 'tt', "我是来自子组件的消息")
            },
        },
        created() {
            this.$on('test', res => {
                window.alert(res)
            })
        },
        mounted() {

        }
    }
</script>

<style scoped>

</style>