<template>
    <div>
        <div>name:{{getUserInfo.name}}</div>
        <el-button type="primary" size="small" @click="getInfo">获取用户信息</el-button>
    </div>
</template>

<script>
    import {mapState,mapGetters} from 'vuex'
    export default {
        name: "demo2",
        data() {
              return {}
            },
        computed:{
            ...mapState([]),
            ...mapGetters([
                'getUserInfo'
            ])
        },
            methods: {},
            mounted() {
            }
    }
</script>

<style scoped>

</style>