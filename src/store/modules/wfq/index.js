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
