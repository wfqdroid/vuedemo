<template>
    <button :class="'w-button-size' + size"
            :disabled="disabled"
            @click="handleClick">
        <slot name="icon"></slot>
        <slot></slot>
    </button>
</template>

<script>
    function oneOf (value, validList) {
        for (let i = 0; i < validList.length; i++) {
            if (value === validList[i]) {
                return true;
            }
        }
        return false;
    }
    export default {
        name: "w-button",
        data(){
            return{
                title:'WButton'
            }
        },
        props:{
            size:{
                // 自定义校验
                validator(value){
                    return oneOf(value,['small','large','default'])
                },
                default:'default'
            },
            disabled:{
                type:Boolean,
                default:false
            }
        },
        methods:{
            handleClick(e){
                this.$emit('click',e)
            },
            sayHello(){
                window.alert(this.$parent.title)
            }
        }
    }
</script>

<style scoped>

    .w-button-sizedefault{
        width: 80px;
        height: 40px;
        background-color: #e5e5e5;
        outline: none;
        border: none;
        cursor: pointer;
        margin: 0 5px;
    }
    .w-button-sizelarge{
        width: 100px;
        height: 50px;
        background-color: #e5e5e5;
        outline: none;
        border-radius: 5px;
    }

</style>