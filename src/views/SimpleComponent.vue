<template>

    <div>
        <wbutton @click="handleBtnClick">
            <i class="el-icon-edit" slot="icon"></i>
            <span>点击</span>
        </wbutton>
    </div>
</template>

<script>
    import wbutton from '@/components/WButton.vue'
    export default {
        name: "simple-component",
        data() {
            return {
                title:'simple-component'
            }
        },
        components: {
            wbutton
        },
        methods: {
            handleBtnClick() {
                // const comA = this.$refs.comA
                // comA.sayHello()
                console.log(this.$children[0].sayHello())
            },
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>