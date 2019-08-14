<template>
    <div>
        <h2>EventBus测试</h2>
        <busA></busA>
        <busB></busB>

    </div>
</template>

<script>
    import busA from '@/components/eventbus/EventBuscomponentA.vue'
    import busB from '@/components/eventbus/EventBuscomponentB.vue'

    export default {
        name: "event-bus-test",
        data() {
            return {}
        },
        components: {
            busA, busB
        },

        methods: {},
        mounted() {
            const children = this.$children
            console.log(`children is`, children)
            children.forEach(child => {
                const name = child.$options.name
                console.log(`name is: ${name}`)
            })
        }
    }
</script>

<style scoped>

</style>