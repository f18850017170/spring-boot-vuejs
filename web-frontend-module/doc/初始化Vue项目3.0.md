#1.安装node.js

#2.安装npm(高版本node已附带npm)

#3.指定淘宝镜像（防止vue-cli构建报错）
    npm config set registry https://registry.npm.taobao.org //配置指向源
    或者安装cnpm
    npm install -g cnpm --registry=https://registry.npm.taobao.org
------------------------------------------
    https://www.cnblogs.com/lock360/p/5810402.html
    vue-cli构建项目报错处理
    https://blog.csdn.net/weixin_43207791/article/details/82714882
    npm介绍与cnpm介绍
    https://blog.csdn.net/shelly1072/article/details/51524029
    直接设置镜像，不适用cnpm
    https://segmentfault.com/a/1190000002589144
------------------------------------------

#4.vue-cli-3.0(改名了)
    npm uninstall vue-cli -g
    npm install -g @vue/cli 
#5.初始化项目模板
    vue create {web-fe}
    参数指定
    =========================
    ? Please select a preset //使用默认设置就好default(babel,eslint)
    ==========================
#6.cnpm install 
    或者npm install --registry=https://registry.npm.taobao.org
    安装项目依赖
#6.1 安装axios http tool lib 
    npm install axios --save
#7.cnpm run serve
    非cnpm install则直接npm run serve
    启动服务开发模式
    访问端口验证是否成功

#8.npm run build
    构建生产环境使用的文件在dist/目录下

#9.整合到spring
    参考文章https://www.baeldung.com/spring-boot-vue-js
    https://jaxlondon.com/blog/java-core-languages/put-spring-boot-und-vue-js-practical-use-project-tutorial/
