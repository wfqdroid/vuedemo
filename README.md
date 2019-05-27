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
        getUserInfo(state) {
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
        <el-button type="primary" size="small" @click="$store.commit('getUserInfo')">获取用户信息</el-button>
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
使用$store.commit('getUserInfo')来触发mutations中的getUserInfo方法，对于mutations，这里有几点需要注意：
* mutations 中的方法是不分组件的，如果在多个组件中都有getUserInfo,那么执行$store.commit('getUserInfo')的时候会把所有组件中的这个方法都执行，
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
        getUserInfo(state,userInfo) {
            state.userInfo = userInfo
        }
    },
    actions: {
        // commit来自Vuex中上下文context,这里直接使用对象解构，相当于context.commit('getUserInfo',info)
        getUserInfo({commit}){
            setTimeout(()=>{
                let info = {
                    name: 'wfq',
                    age: 26
                }
                commit('getUserInfo',info)
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
        <el-button type="primary" size="small" @click="$store.dispatch('getUserInfo')">获取用户信息</el-button>
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
三个函数类似，下面我们以mapState和mapActions来讲解：






