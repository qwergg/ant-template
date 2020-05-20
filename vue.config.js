const UglifyJsPlugin = require('uglifyjs-webpack-plugin') // 去掉注释
const isProduction = process.env.NODE_ENV === 'production';
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
module.exports={
    publicPath: './',//打包引入静态资源路径
    lintOnSave: false, // 关闭eslint
    productionSourceMap:true,//是否产生map文件 生产环境可以关掉 默认打开
  
    configureWebpack: config=>{
        if(isProduction){
            plugins
        }
    }
}