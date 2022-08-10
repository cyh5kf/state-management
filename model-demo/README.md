# umi project

## Getting Started

Install dependencies,
```bash
$ yarn
```

> 请注意，带有@mc-design/ 前缀的包需要通过npm切换成公司内网私库的地址才能安装，可以通过nrm工具来切换npm源地址

Start the dev server,

```bash
$ yarn start
```

build,

```bash
$ yarn build
```

analyze package module,

```bash
$ yarn analyze 
```

## 全局样式
在src/themes/index.less修改

## 路由
在config/routes.ts中修改，菜单根据路由自动生成

## 修改本地开发服务端口
在.env中修改PORT

## 自动部署到内网测试环境

### 1、授权

选择对应的 git 项目，进行授权（应该需要master权限）

```
http://192.168.241.2:30006
```

### 2、拷贝脚本

拷贝以下脚本文件到项目根目录下

.drone.yml, deploy

### 3、修改.drone.yml 脚本命令

如'skip build'则需本地打包后再上传

service_env为default为dev开发环境， qa为qa测试环境，pro-preview为外网生产环境

修改 branch 填写要打包的分支

### 4、修改 deploy

修改deploy/server下的conf文件名，可以为对应的项目名，如'umi_pc', 文件名不能有'-'，必须为'_'
修改values.yml文件下的前缀名，如'umi_pc', 下面为对应的代理地址
修改location/web.conf下的nginx配置代理，地址直接引用values.yml配置的地址

### 5、任意代码修改后，提交推送到git上之后，自动执行部署脚本
同样可以通过http://192.168.241.2:30006/ 查看部署进程

### 6、访问内网开发环境
应用名默认为git的项目名称

```
http://应用名.dev.mchz.com.cn
```

### 7、访问内网测试环境
建议新建一个分支，例如qa，修改.drone.yml中的service_env值改为qa，修改branch分支为当前分支名
应用名默认为git的项目名称

```
http://应用名.qa.mchz.com.cn
```

### 8、访问演示环境
建议新建一个分支，例如preview，修改.drone.yml中的service_env值改为prod-preview，修改branch分支为当前分支名
内网地址：
```
http://应用名.prod.mc
```
对应外网地址：（无需vpn）
```
http://应用名.demoenv.mchz.com.cn:6777
```


