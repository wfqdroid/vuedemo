## Vue组件通信之Bus
在Vue2.0中，$dispatch和broadcast已经被弃用了，官方给的解释是：
> 因为基于组件树结构的事件流方式实在是让人难以理解，并且在组件结构扩展的过程中会变得越来越脆弱。
这种事件方式确实不太好，我们也不希望在以后让开发者们太痛苦。
并且$dispatch 和 $broadcast 也没有解决兄弟组件间的通信问题。

关于Bus的通信，和Android的EventBus的方式很像，发送事件，监听事件，销毁事件
其实官方文档中也有提到这样一句话：
有时候两个组件也需要通信（非父子组件），在简单的场景下，可以使用一个空的Vue实例作为中央事件总线：
var bus = new Vue()
bus.$emit('event_name',obj)
bus.$on('event_name',obj => {})
bus.$off('event_name')

我们可以在全局配置bus然后用于子组件之间的通信，在main.js里面
Vue.prototype.bus = new Vue()
然后在组件A中：this.bus.$emit('doSth',params)
在组件B的created()声明周期中进行监听：this.bus.$on('doSth',res=>{})
然后记得在组件B销毁的时候销毁监听，在组件B的：
        beforeDestroy(){
            this.bus.$off('doSth')
        }