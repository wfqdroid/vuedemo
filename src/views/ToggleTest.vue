<template>
    <div>
        <div class="toggle">
            <div class="toggle_wrap">
                <div>ImGuiderX</div>
                <i class="el-icon-s-operation" style="cursor: pointer;" @click="onToggleClick"></i>
            </div>
        </div>
        <nav id="nav">
            <ul v-if="isShowMenu">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Manager</a></li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "toggle-test",
        data() {
            return {
                isShowMenu: true
            }
        },
        methods: {
            onToggleClick() {
                this.isShowMenu = !this.isShowMenu
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>
    nav {
        width: 100%;
        background-color: #00316b;
    }

    ul {
        width: 100%;
        margin: 0 auto;
        padding: 0;
        box-sizing: border-box;
    }

    ul li {
        list-style: none;
        display: inline-block;
        padding: 20px;
        cursor: pointer;
    }

    ul li:hover {
        background: #e91e63;
    }

    ul li a {
        color: white;
        text-decoration: none;
    }

    .toggle {
        background: #001f44;
        padding: 10px 20px;
        color: white;
        display: none;

    }

    .toggle_wrap {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    @media (max-width: 768px) {
        .toggle {
            display: block;
        }

        ul li {
            display: block;
        }
    }

</style>