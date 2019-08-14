<template>
    <!--<div id="app">-->
    <!--&lt;!&ndash;<div id="nav">&ndash;&gt;-->
    <!--&lt;!&ndash;<router-link to="/">Home</router-link> |&ndash;&gt;-->
    <!--&lt;!&ndash;<router-link to="/about">About</router-link>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--<router-view/>-->
    <!--</div>-->
    <div>
        <router-view/>
    </div>
</template>

<script>
    import mixins_user from '@/mixins/user'
    export default {
        mixins:[mixins_user],
        data() {
            return {
            }
        },
    }
</script>


<style lang="scss">
    /*#app {*/
        /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
        /*-webkit-font-smoothing: antialiased;*/
        /*-moz-osx-font-smoothing: grayscale;*/
        /*text-align: center;*/
        /*color: #2c3e50;*/
    /*}*/

    /*#nav {*/
        /*padding: 30px;*/
        /*a {*/
            /*font-weight: bold;*/
            /*color: #2c3e50;*/
            /*&.router-link-exact-active {*/
                /*color: #42b983;*/
            /*}*/
        /*}*/
    /*}*/




    /*布局*/
    .flex {
        display: flex;
    }

    .flex_r {
        display: flex;
        flex-direction: row-reverse;
    }

    .flex_v {
        display: flex;
        flex-direction: column;
    }
    .flex_1{
        flex: 1;
    }

    .box_center_v {
        align-items: center;
    }

    .box_center_h {
        justify-content: center;
    }

    .space_between {
        justify-content: space-between;
    }

    /*字体大小*/
    .fs22 {
        font-size: 22px;
    }

    .fs20 {
        font-size: 20px;
    }

    .fs18 {
        font-size: 18px;
    }

    .fs16 {
        font-size: 16px;
    }

    .fs14 {
        font-size: 14px;
    }

    .fs12 {
        font-size: 12px;
    }

    .bold {
        font-weight: bold;
    }

    /*背景颜色*/
    .bg_blue {
        background-color: #4B74FF;
    }

    .bg_white {
        background-color: #fff;
    }
    .bg_gray {
        background-color: #fafafc;
    }

    /*字体颜色*/
    .color_blue {
        color: #2f74ff !important;
    }

    .color_white {
        color: #fff;
    }
    .color_b1 {
        color: #586377;
    }
    .color_b1_a {
        color: rgba(88, 99, 119, 0.65);
    }
    .color_r{
        color: red;
    }
    .color_333{
        color: #333;
    }

    /*用户响应*/
    .cursor_pointer {
        cursor: pointer;
    }

    /*边框*/
    .border-bottom {
        border-bottom: 1px solid #e5e5e5
    }

    .border_e5 {
        border: 1px solid #e5e5e5;
    }

    /*宽高*/
    .w_full {
        width: 100%;
    }

    .h_full {
        height: 100%;
    }
    .max_line_1{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .max_line_2 {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .max_line_3 {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }
    .max_line_4 {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
    }

    /*margin-top*/
    .mt_5{
        margin-top: 5px;
    }
    .mt_10{
        margin-top: 10px;
    }
    .mt_15{
        margin-top: 15px;
    }
    .mt_20{
        margin-top: 20px;
    }
    .mt_25{
        margin-top: 25px;
    }
    .mt_30{
        margin-top: 30px;
    }
    .mt_35{
        margin-top: 35px;
    }
    .mt_40{
        margin-top: 40px;
    }
    /* margin-left*/
    .ml_5{
        margin-left: 5px;
    }
    .ml_10{
        margin-left: 10px;
    }
    .ml_15{
        margin-left: 15px;
    }
    .ml_20{
        margin-left: 20px;
    }
    .ml_25{
        margin-left: 25px;
    }
    .ml_30{
        margin-left: 30px;
    }

    /*margin-right*/
    .mr_5{
        margin-right: 5px;
    }
    .mr_10{
        margin-right: 10px;
    }
    .mr_15{
        margin-right: 15px;
    }
    .mr_20{
        margin-right: 20px;
    }
    .mr_25{
        margin-right: 25px;
    }
    .mr_30{
        margin-right: 30px;
    }
    .mb_10{
        margin-bottom: 10px;
    }
    .mb_15{
        margin-bottom: 15px;
    }
    .mb_20{
        margin-bottom: 20px;
    }
    .mb_30{
        margin-bottom: 30px;
    }
    .mb_40{
        margin-bottom: 40px;
    }
    .mb_25{
        margin-bottom: 25px;
    }
    .common_title{
        font-size: 16px;
        color: black;
        position: relative;

    }
    .common_title:before{
        content: '';
        position: absolute;
        top: 0;
        bottom:0;
        background: #3B77F6;
        width: 3px;
        height: 100%;
        left: -10px;
    }
    .top_back{
        background-color: white;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        padding: 0 30px;
        z-index: 100;
        box-shadow: 0 2px 5px #e5e5e5;
    }
    .top_back_title{
        font-size: 20px;
        font-weight: bold;
    }
    .right_top_back{
        position: fixed;
        right: 60px;
        top: 60px;
        z-index: 500;

    }
    .height_50{
        height:50px;
    }
    .height_60{
        height:60px;
    }
    .height_80{
        height:80px;
    }
    .height_100{
        height:100px;
    }

    .hover{
        animation-name: choosed;
        animation-duration: .3s;
        animation-timing-function: linear;
        animation-iteration-count: 1;
    }


    @keyframes choosed {
        from {
            transform: scale(1);
        }

        50% {
            transform: scale(0.8);
        }

        to {
            transform: scale(1);
        }
    }

    .mouseScale{
        transition: all 0.6s;

    }
    .mouseScale:hover{
        transform: scale(1.1);
    }



</style>
