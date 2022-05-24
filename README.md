# react-native-template-rnbasic
react-native 模版项目脚手架
#### 项目信息说明 
这是一个集成了redux的react-native模板项目，使用者能够通过简单的命令进行项目的初始化，在初始化之后就可以运行项目在实体机或者虚拟机上面，
开发者在使用过程中，可以pages中开发业务组件  
#### 如何使用 
##### 1.生成项目  
```
react-native init projectName --template rnbasic
```
##### 2.运行项目  
```
react-native run-android
或者  
react-native run-ios
```
之后就可以在设备上看到初始化的app  
#### 目录结构说明
```
|src--------------------源代码
  |api------------------项目接口
  |assets---------------静态资源文件，包括字体、图片等文件
  |components-----------通用组件库
  |constants------------常量，系统中使用的常量
  |hooks----------------常用hook类
  |navigator------------页面路由
  |reducers-------------reducers文件夹
  |screens--------------业务开发页面，在这里可以写自己的页面
  |store----------------redux中的store
  |tools----------------常用工具类，方法
  |index.js-------------页面入口
|.babelrc---------------babel配置文件
|.editorconfig----------编辑器配置文件
|.eslintignore----------eslint代码检查忽略文件
|.eslintrc--------------eslint检查项目配置文件
|.gitignore-------------git提交忽略文件内容配置文件
|index.js---------------入口文件
|dependencies.json------生产依赖
|scripts.json-----------debug命令
|package.json-----------npm init 
|README.md--------------项目信息说明文件
```
将会自动生成默认的配置 

