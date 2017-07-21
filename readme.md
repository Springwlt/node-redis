# Node Redis Api

如何在nodejs项目中使用redis

本教程主要包含如何在项目中将数据存入指定的数据库。
-  访问：http://localhost:3000/set   将存入{key:value}
-  访问：http://localhost:3000/get   返回value
-  访问：http://localhost:3000/hmset 将存入 {key:{key1:value1,key2:value2}}
-  访问：http://localhost:3000/hmget 可以通过key1获取value1
-  访问：http://localhost:3000/lpush 存入{key:{value1,value2,...}}

## 技术栈
- nodejs
- express
- redis

## 项目简介
- 使用ES6/ES7特性
- 使用ESlint进行语法检测，遵循[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

# 安装依赖
yarn install

# 运行
yarn run start

# 构建
yarn run build

# 测试
yarn run test

# 部署
yarn run deploy:dev  部署至开发服务器
yarn run deploy:prod 部署至正式服务器
yarn run stop        暂停服务
yarn run reload      重载服务

