<template>
    <div>
        <button classs="btn" @click="handleEventBusComponentrAClick">发送事件</button>
    </div>
</template>

<script>
    export default {
        name: "event-buscomponent-a",
        data() {
            return {}
        },
        methods: {
            handleEventBusComponentrAClick(){
                this.bus.$emit('comA',{name:'wfq',age:25})
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>
    .btn{
        width: 100px;
        height: 50px;
        background-color: rebeccapurple;
        color: white;
        border: none;

    }

</style>