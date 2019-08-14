<template>
    <div>
        <span style="color: red">{{title}}</span>
    </div>
</template>

<script>
    export default {
        name: "event-buscomponent-b",
        data() {
            return {
                title:''
            }
        },
        methods: {},
        mounted() {
        },
        created(){
           this.bus.$on('comA',res=>{
               this.title = res.name
           })
        },
        beforeDestroy(){
            this.bus.$off('comA')
        }
    }
</script>

<style scoped>

</style>