# Vuex的使用
什么是Vuex，这里就不介绍了，请移步到官网 https://vuex.vuejs.org/zh/guide/ 学习，这里我们只需要知道Vuex可以用来做应用的状态管理。
首先来看一下使用vue create my-project命令生成项目的时候，自动生成的Vuex的代码,store.js：
```$xslt
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  }
})

```
下面我们来搞懂模版代码中的state，mutations，actions是干嘛的，既然Vuex可以用来做状态管理，那么管理的是什么？我们知道vue是mvvm架构，想到mvvm
我们就是想到数据驱动ui,所以，状态管理，说白了管理的就是数据，那么我们就可以把我们需要操控的数据放在state里面

### state
> 状态，也就是存放我们需要操控的数据
### mutations
> 改变，如果我们需要改变state中的数据的时候可以在这里面操作，怎么操作？下面说
### actions
> 行为，和mutations类似，我们想要改变state中的数据的时候可以在这里面进行操作，同样，怎么操作，下面说

既然是状态管理，如果我们直接操作state去改变他的值的话，当然就称不上管理，Vuex采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化
，当然不会直接让我们去修改state里面的值。如果想要改变状态的值怎么办，mutations登场：
```$xslt
store.js:

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        userInfo: {}
    },
    mutations: {
        setUserInfo(state) {
            let info = {
                name: 'wfq',
                age: 26
            }
            state.userInfo = info
        }
    },
    actions: {}
})
```
然后在我们的页面上，我们可以这样使用：
```$xslt
<template>
    <div>
        <div>name:{{$store.state.userInfo.name}}</div>
        <el-button type="primary" size="small" @click="$store.commit('setUserInfo')">获取用户信息</el-button>
    </div>
</template>

<script>
    export default {
        name: "vuex1",
        data() {
            return {}
        },
        methods: {},
        mounted() {
        }
    }
</script>

<style scoped>

</style>
```
使用$store.commit('setUserInfo')来触发mutations中的getUserInfo方法，对于mutations，这里有几点需要注意：
* mutations 中的方法是不分组件的，如果在多个组件中都有setUserInfo,那么执行$store.commit('setUserInfo')的时候会把所有组件中的这个方法都执行，
* mutations 中的方法最好是同步的，异步的方法有什么问题？没什么问题，但是官方建议我们将异步的操作放在actions里面去操作

多个 state 的操作 , 使用 mutations 会来触发会比较好维护 , 那么需要执行多个 mutations怎么办？actions登场,前面说过
官方建议我们在actions里面写异步的代码，那么我们模拟一下：
```$xslt
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userInfo: {}
    },
    mutations: {
        setUserInfo(state,userInfo) {
            state.userInfo = userInfo
        }
    },
    actions: {
        // commit来自Vuex中上下文context,这里直接使用对象解构，相当于context.commit('setUserInfoAsync',info)
        setUserInfoAsync({commit}){
            setTimeout(()=>{
                let info = {
                    name: 'wfq',
                    age: 26
                }
                commit('setUserInfo',info)
            },2000)
        }
    }
})

```
在store.js中我们在actions中使用commit来触发mutations里面的方法，这个和上面说的一致，那么我们怎么触发actions里面的方法：
```$xslt
<template>
    <div>
        <div>name:{{$store.state.userInfo.name}}</div>
        <el-button type="primary" size="small" @click="$store.dispatch('setUserInfoAsync')">获取用户信息</el-button>
    </div>
</template>
```
我们使用dispatch来触发actions里面的方法。

## 总结
1. 为什么我们在页面可以直接使用this.$store来触发store.js里面的代码，因为我们在main.js构建vue的实例的时候已经将store.js引入
2. state好理解，那么我何时该使用mutations，何时该使用actions？
    同步的方法，我们放在mutations里面，异步的代码我们放在actions里面，
    触发mutations里面的方法，我们使用commit,触发actions里面的方法我们使用dispatch
3.注意：我们在actions里面的方法，是已经默认携带了上下文context的，当然使用对象解构的话，我们可以直接使用如下方法来书写代码：
    functionName({commit,dispatch},param1,param2...){}
    
## mapState、mapGetters、mapActions
> 如果我们调用方法，页面上过度使用this.$store.***的话，会显得很累赘，上面三个函数便是Vuex给我们提供的函数，方便我们调用store里面的方法
首先记住一点，mapstate和mapGetters放在computed中，mapActions放在methods，记得导入mapState,mapGetters，mapActions，那么我们之前页面的代码可以改写如下：

```
store.js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userInfo: {}
    },
    getters:{
        getUserInfo(state){
            return state.userInfo
        }
    },
    mutations: {
        setUserInfo(state,userInfo) {
            state.userInfo = userInfo
        }
    },
    
    actions: {
        // commit来自Vuex中上下文context,这里直接使用对象解构，相当于context.commit('setUserInfoAsync',info)
        setUserInfoAsync({commit}){
            setTimeout(()=>{
                let info = {
                    name: 'wfq',
                    age: 26
                }
                commit('setUserInfo',info)
            },2000)
        }
    }
})

```

```
页面
<template>
    <div>
        <div>name:{{userInfo.name}}</div>
        <el-button type="primary" size="small" @click="getInfo">获取用户信息</el-button>
    </div>
</template>

<script>
    import {mapState,mapGetters,mapActions} from 'vuex'
    export default {
        name: "vuex1",
        data() {
            return {}
        },
        computed:{
        // 这里的mapState对应store.js里面的state,参数是个数组，里面的元素其实就是store.js里面的state里面的数据
            ...mapState([
                'userInfo'
            ]),
        // 这里的mapGetters对应store.js里面的getters,参数是个数组，里面的元素其实就是store.js里面的getters里面的方法
        // mapGetters其实和mapState类似，都是获取state里面的数据，大多数情况，我们使用mapState即可，这也是为什么state.js的
        // 模版代码中没有getters
            ...mapGetters([
                'getUserInfo'
            ])
            
        },
        methods: {
        // 这里的mapActions对应的是store.js里面的actions，参数是个数组，里面的元素其实就是store.js里面的actions里面的方法           
            ...mapActions([
                'setUserInfoAsync'
            ]),
            getInfo(){
            // 调用的方法是mapActions里面的setUserInfoAsync
                this.setUserInfoAsync()
            },
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>
```

### 思考一个问题：如果我们应用需要状态管理的数据过多的时候，写在一个store里面的话就显得太累赘，怎么处理？
> 这里我们使用了Vuex的modules，以及namespaced属性，modules允许我们以modules的形式导出多个store,namespaced:true的话代表
  我们访问store里面的方法时要在对应的命名空间下
  
下面我们改写代码，新建store文件夹，在下面新建index.js和modules文件夹,在modules文件夹下面新建一个我们自己需要的文件夹wfq，
然后在wfq下面新建modules文件夹和index.js，然后在main.js里修改store的路径,目录结构如下图


代码如下：

store/index.js
```
import Vue from 'vue'
import Vuex from 'vuex'
import wfq from './modules/wfq'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        wfq
    }
})
```

store/modules/wfq/index.js
```
// 找出以.js开头的文件
const files = require.context('./modules', false, /\.js$/)
const modules = {}
files.keys().forEach(key => {
    modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})
export default {
    namespaced: true,
    modules
}


```
store/modules/wfq/modules/user.js
```
export default {
    namespaced: true,
    state: {
        userInfo: {name:'WFQ'}
    },
    getters:{
        getUserInfo(state){
            return state.userInfo
        }
    },
    mutations:{
        setUserInfo(state,info){
            state.userInfo = info
        }
    },
    actions: {
        
        setUserInfoAsync({commit}){
            setTimeout(()=>{
                let info = {
                    name: 'wfq',
                    age: 26
                }
                commit('setUserInfo',info)
            },2000)
        }
    }
}

```
接下来看我们怎么使用：
```
<template>
    <div>
        <div>name:{{userInfo.name}}</div>
        <el-button type="primary" size="small" @click="setInfo">设置用户信息</el-button>
    </div>
</template>

<script>
    import {mapState,mapActions} from 'vuex'
    export default {
        name: "demo1",
        data() {
            return {}
        },
        computed:{
            ...mapState('wfq/user',[
                'userInfo',
            ]),
        },
        methods: {
            ...mapActions('wfq/user',[
                'setUserInfoAsync',
            ]),
            setInfo(){
                this.setUserInfoAsync();
            },
        },
        mounted() {
        }
    }
</script>

```
使用modules修改后，mapState和mapActions要在第一个参数加上路径,'wfq/user',这也就证明了namespaced的作用

接下来再思考一个问题，如果我在一个store文件（例如user.js）里面想调用另一个store的方法怎么办，比如，在得到用户的信息后，
我想直接调用该用户的订单信息，然后存储在vuex中怎么办？我们知道，获取订单信息是一个异步操作，我们要放在actions里面，而actions里面的
方法怎么触发呢？使用dispatch
我们新建一个store文件，order.js，代码如下：
```
export default {
    namespaced: true,
    state: {
        orderList:[]
    },
    getters:{

    },
    mutations:{

    },
    actions: {
        setOrderListByUser({state},userInfo){
            if(userInfo.name === 'wfq'){
                let orderlist = ['order1','order2']
                state.orderList = orderlist
            }

        }

    }
}
```

下面我们修改user.js的代码如下：

```
actions: {
        
        setUserInfoAsync({commit,dispatch}){
            setTimeout(()=>{
                let info = {
                    name: 'wfq',
                    age: 26
                }
                commit('setUserInfo',info)
                dispatch('wfq/order/setOrderListByUser',info,{ root: true })
            },2000)
        }
    }
```
我们使用dispatch来触发order下面的setOrderListByUser的方法，并传入用户信息，注意：这里要设置{ root: true },
这样我们就能在别的页面获取到order.js里面的state下面的orderList的数据了，注意：别忘了去main.js里面修改store的路径

    