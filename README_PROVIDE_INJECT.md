## 组件的通信 provide inject
> 主要用在子组件获取上级组件的状态

在父子之间通信的时候，使用ref,$parent,$children通信是有弊端的，如果组件A和组件B之间，
间隔了数代的话，使用parent和children就不行了，这个时候可以使用Vuex或者Bus,但是，vuex如果项目
较小的时候官方不建议使用，bus的话，每次使用，在监听事件的组件中还要销毁监听，下面介绍一种无依赖的组件
通信的方法：Vue中内置的provide/inject,下面来看下官方对其的介绍：
> 这对选项需要一起使用，以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，
并在起上下游关系成立的时间里始终生效。如果你熟悉 React，这与 React 的上下文特性很相似。

翻译一下：如果你需要父组件通知它所有的子组件的时候使用这对api就对了

来看下怎么使用：
父组件：
export default {
  provide: {
    name: 'wfq'
  }
}
子组件：
  export default {
    inject:['name],
    mounted(){
        console.log(this.name) // wfq
    }
  }
  
可以看到，在父组件中，使用了provide，它的作用就是将name这个变量提供给它所有的子组件
但是这对API有个需要注意的地方：
> provide 和 inject 绑定并不是可响应的。这是刻意为之的。
然而，如果你传入了一个可监听的对象，那么其对象的属性还是可响应的。

翻译一下：也就是如果在上面的父组件中改变name的值的话，子组件是监听不到的，值还是wfq

#### 有什么用？
可以替代Vuex
使用Vuex,最主要的目的是跨组件通信，全局数据维护，这里刚好可以用来替代全局数据维护，比方说：用户信息维护，
我们知道，App.vue是项目的入口文件，我们可以把它理解为是最外层的根组件，用来存储全局的数据和状态，甚至是computed
,methods等。所以我们可以把整个App.vue的实例通过provide对外提供，这样在所有的页面也好，组件也好，都可以
通过this.app.xxx来进行获取数据或者方法的调用，App.vue是整个项目第一个被调用的组件，而且只会被渲染一次，
即使切换路由，App.vue也不会被再次渲染，利用这个特性，很适合做一次性全局的数据状态管理。
```$xslt
App.vue
<script>
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
                    this.userInfo = {username: 'wfq', age: 25}
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
</script>

项目中的页面或者组件：
 methods: {
            onGetUserInfo() {
                window.alert(this.app.userInfo.username)
            },
            onChangeUserInfo() {
                this.app.changeUserInfo()
            },
        },
```
如果还有别的全局数据状态管理，都要放在App里面的话整个App就会显得很累赘，这个时候mixin就登场了，比如可以把上面的
用户信息维护的数据放在单独的一个js文件里面，比如user.js
```$xslt
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
修改App文件：
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
```
具体的使用，参看：/src/components/ProvideInjectComponent和ProvideInjectTest.vue和App.vue