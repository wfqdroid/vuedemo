<template>
    <div>
        <span>{{name}}</span>
    </div>
</template>

<script>
    export default {
        name: "com-b",
        inject:['name'],
        data() {
              return {
                  title:''

              }
            },
            methods: {},
            mounted() {
            }
    }
</script>

<style scoped>

</style>