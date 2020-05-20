const UglifyJsPlugin = require('uglifyjs-webpack-plugin') // 去掉注释

const isProduction = process.env.NODE_ENV === 'production';//是否是生产环境
const plugins = [];
plugins.push(
    new UglifyJsPlugin({
        uglifyOptions: {
            output: {
                comments: false, // 去掉注释
            },
            warnings: false,
            compress: {
                drop_console: true,
                drop_debugger: false,
                pure_funcs: ['console.log'] //移除console
            }
        }
    })
)

const assetsCdn={
    externals: {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        vuex: 'Vuex',
        axios: 'axios'
      },
      css:[],
      js: [
        'https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js',
        'https://cdn.jsdelivr.net/npm/vue-router@3.1.3/dist/vue-router.min.js',
        'https://cdn.jsdelivr.net/npm/vuex@3.1.1/dist/vuex.min.js',
        'https://cdn.jsdelivr.net/npm/axios@0.19.0/dist/axios.min.js'
      ]
}


module.exports={
    publicPath: './',//打包引入静态资源路径
    lintOnSave: false, // 关闭eslint
    productionSourceMap:false,
    css:{
        loaderOptions: {
            less: {
                lessOptions:{
                    javascriptEnabled: true
                }
                }
            }
          
    },
    configureWebpack: config=>{
        if(isProduction){
            plugins
        }
        config.externals=isProduction ? assetsCdn.externals : {}
    },
    chainWebpack : config=>{
       if(isProduction){ //prod  build  配置cdn 替换vue vuex axios vur-router
           config.plugin('html').tap(args => {
               args[0].cdn = assetsCdn
               return args;
           })
       }
    }
}