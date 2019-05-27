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
