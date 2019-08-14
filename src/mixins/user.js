export default {
    provide() {
        return {
            app: this
        }
    },
    data() {
        return {
            userInfo: null
        }
    },
    methods: {
        getUserInfo(userinfo) {
            if (userinfo) {
                this.userInfo = userinfo
                return
            }
            setTimeout(() => {
                this.userInfo = {username: '王富强', age: 25}
            }, 3000)
        },
        changeUserInfo() {
            this.getUserInfo({username: 'zhangsan', age: 22})
        },
    },
    mounted() {
        console.error('开始获取用户数据')
        this.getUserInfo();
    }
}