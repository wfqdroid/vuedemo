<template>
    <div>
        <DispatchComA></DispatchComA>
        <el-button type="primary" @click="onBroast">父组件广播事件</el-button>
    </div>
</template>

<script>
    import Emitter from '@/mixins/emitter.js'
    import DispatchComA from '@/components/dispatchBroadcast/DispatchComA.vue'
    export default {
        name: "dispatch-and-broadcast",
        mixins:[Emitter],
        components:{
            DispatchComA
        },
        data() {
            return {}
        },
        methods: {
            onBroast(){
                this.broadcast("dispatchComA","test","我是父组件的消息")
            }
        },
        mounted() {
            console.log(`mounted invoke`)
            this.$on('tt',res=>{
                window.alert(res)
            })
        },
        created(){
            console.log(`created invoke`)
        }
    }
</script>

<style scoped>

</style>