let publicPath = './'  // prod

module.exports = {
    publicPath, // 根据你的实际情况更改这里
    // devServer: {
    //     publicPath // 和 publicPath 保持 一致
    // },
    devServer: {
        proxy: {
            '/': {
                // http://fe.pr.sh.ctc.com/aeap/fe/
                target: 'http://192.168.137.159:8081/tele',
                changeOrigin: true,
                pathRewrite: {
                    '^/': ''
                }
            }
        }
    }
}