var path = require('path')
var webpack = require('webpack')
var mode=require('yargs').argv.mode
//plugin
var uglifyPlugin=webpack.optimize.UglifyJsPlugin
console.log(111111,mode)
var libraryName = 'sparrow'
var plugins=[]
var filename=''

//生产环境
if(mode==='production'){
plugins.push(new uglifyPlugin({minimize:true}))
filename=libraryName+'.min.js'
// sparrow.min.js
}
//开发环境
else{
    //sparrow.js
filename=libraryName+'.js'
}

var config = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, './lib'),
        filename:filename,
        library:libraryName,
        libraryTarget:'umd',
        umdNamedDefine:true 
    },
//devtool:在浏览器中调试方便 (cheap-source-map支持生产环境)
    'devtool':'cheap-source-map',
    //resolve中root配置该目录(本项目静态资源目录是src)下的满足extension，
    //即src下的任何js,css,json等都可以省略后缀
    resolve:{
        extension:['','.js','.css','.json'],
        root:path.resolve('./src')
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
             {
                test: /\.js$/,
                loader: 'eslint',
                exclude: /node_modules/
            }
            
        ]
    },
    plugins:plugins
}

module.exports = config