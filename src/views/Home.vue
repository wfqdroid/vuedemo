<template>
    <div>
        <el-button v-for="item in mData" type="primary" style="margin-bottom: 20px;" @click="onBtnClick(item.path)">{{item.label}}</el-button>
    </div>

</template>

<script>
    export default {
        name: 'home',
        data() {
            return {
                mData: [
                    {
                        label: 'vuex学习',
                        path: '/vuex1'
                    },
                    {
                        label: 'vuex简版1',
                        path: '/vuex_simp1'
                    },
                    {
                        label: '简单组件',
                        path: '/simple-component'
                    },
                    {
                        label: 'eventbustest',
                        path: '/eventbustest'
                    },
                    {
                        label: 'Provide和Injecttest',
                        path: '/provideinjecttest'
                    },
                    {
                        label: 'ToggleTest',
                        path: '/toggletest'
                    },
                    {
                        label: 'dispatchbroadcast',
                        path: '/dispatchbroadcast'
                    },
                    {
                        label: 'chart',
                        path: '/chart'
                    },
                    {
                        label: '保障单列表',
                        path: '/Reportobstacle'
                    },
                    {
                        label: 'JIRA单列表',
                        path: '/JIRAList'
                    },
                    {
                        label: '关联JRIA',
                        path: '/guanlian'
                    },
                    {
                        label: 'DEMO1',
                        path: '/demo1'
                    },
                    {
                        label: 'DEMO2',
                        path: '/demo2'
                    }
                ]
            }
        },
        methods: {
            onBtnClick(path) {
                this.$router.push({path: path})
            }
        },
        mounted() {
        }

    }
</script>
