<template>
    <div>
        <div>简版vuex</div>
        <span>count:{{count}}</span>
        <el-button @click="changeCount(count+1)">count++</el-button>
        <el-button @click="changeCount(count-1)">count--</el-button>

    </div>
</template>

<script>
    import {store, mutation} from '@/store/storeObservable'


    export default {
        name: "vuex_simp1",
        data() {
            return {
                title:'vuex_simp1'
            }
        },

        computed: {
            count() {

                return store.count
            }
        },
        methods: {

            changeCount(count) {
                mutation.setCount(count)
            }
        },
        mounted() {

        }
    }
</script>

<style scoped>

</style>