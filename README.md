# 如何开一个属于自己的前端框架
- 基于webpack进行资源构建
- 使用es6语法进行开发
- 将包输出为umd规范的文件
- 使用mocha和chai进行测试
- 使用eslint来进行代码检查
- 基于npm scripts来集成开发命令


## 基本开发环境
- 全局环境：node&npm
- 命令行：terminal&shell
- 版本管理:git
- 编辑器：atom/webstorm/st3/vs
- 浏览器：chrome
- 注册npm账号(https://www.npmjs.com/signup)
- 注册github账号


## 创建项目的基本结构

```
src 开发源代码
lib 编译后的资源
test 测试用例
.gitignore
LICENSE
README.md
package.json
webpack.config.js
.babelrc
.eslint.js

```

## 结合webpack跑通es6语法编译的过程
- webpack.config.js
```
npm install webpack webpack-dev-server --save-dev
```
- babel及相关preset、plugin、loader
```
npm install babel-loader babel-core babel-preset-es2015 babel-plugin-add-module-exports --save-dev
```
## umd

## webpack几个小配置

- resolve
 - extension 扩展名，方便
 - root 添加默认搜索路径，但得是绝对路径，可以是数组和字符串(resolve中root配置该目录(本项目静态资源目录是src)下的满足extension，
    //即src下的任何js,css,json等都可以省略后缀)

- devtool 开发工具配置(在浏览器source中产生一个webpack目录，里面放的还是es6转化成es5的代码，但是比network中加载出来的js简洁些)
 - cheap-source-


## 区分开发环境和生产环境(在我们开发环境中的时候，有很多代码或者配置的话都是属于我们开发态的，比如console.log,alert,或者一些代码不规范的问题,甚至我们整个代码可以在network中看到的是一些没有压缩经过任何的处理的,这是我们开发态的一个现状,但是到了生产环境，首先我们需要将一些代码进行压缩，并且的话，可能需要做一些校验，这些东西的话是需要区分开的)
- sparrow.js (开发环境，未压缩校验，一些开发环境的配置和代码)
- sparrow.min.js(生产环境)

```
区分开发态生产态

process.env.WEBPACK_ENV(在window涉及兼容性)
yargs(推荐)是nodejs的一个package
npm install yargs --save-dev

在webpack.config.js中引入：
var mode=require('yargs').argv.mode

在package.json中加上：
  "scripts": {
    "dev": "webpack --progress --colors --watch --mode=development",
    "build": "webpack --mode=production" 
  },

```
## 将用于生产环境的代码压缩(webpack内置的方法)
```
webpack.optimize.UglifyJsPlugin
```
- 提供给生产环境和开发环境用的文件名需要区分

## eslint
```
eslint eslint-loader(在cmd下运行.\node_modules\.bin\eslint --init注意只能在cmd下运行且是反斜杠,git bash运行会报错的,以上的karam等也是同样init,如果全局安装eslint或者karma等这些，可以在git bash中运行，但是同样的一些所需要的插件方法也要全局一下，再或者可以配置packagejson，就不用全局安装，执行的时候npm run 配置的名字key)

```
> 第一次eslint会报错 没关系,在package.json配置个lint：fix
```
"lint:fix":"eslint ./src  --fix"
```
![Img src](E:\markdownimg\eslint-init.png)

## 代码测试(代码检查,保证自己开发的类库没有问题没有bug的)
- mocha
- chai
```
npm install mocha chai --save-dev

```