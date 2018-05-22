# dn-template-mobx-react

## 一、目录结构

```
├── .dawn                  # dawn 工具的配置文件目录
│   └─── pipe.yml          # dawn 工具的配置文件，介绍文档：https://alibaba.github.io/dawn/docs/#!/zh/middleware/webpack
│
├── mock                   # mock 请求的相关文件，Faked 中间件文档：https://alibaba.github.io/dawn/docs/#!/zh/middleware/faked
├── src
│   ├── app
│   │   ├── controllers    # 控制器层
│   │   ├── models         # 模型层
│   │   ├── services       # service层
│   │   └── views          # 视图层
│   │       ├── components # 组件层
│   │       ├── containers # 容器层
│   │       └── style      # 样式
│   │
│   ├── assets             # 静态资源文件
│   ├── configs            # 配置文件
│   ├── helpers            # 辅助函数
│   └── libs               # 第三方函数库
│ 
├── webpack.config.js      # 自定义 webpack 配置，配置文档：https://alibaba.github.io/dawn/docs/#!/zh/middleware/webpack
│
```

## 二、下载模板

```
$ npm install -g dawn
$ mkdir demo && cd demo
$ dn init -t mobx-react
```

## 三、运行

```
$ dn dev
```

## 四、相关技术文档
 - [dawn](https://alibaba.github.io/dawn/)
 - [react](https://doc.react-china.org)
 - [mobx](https://cn.mobx.js.org)
 - [mobx-react](https://www.npmjs.com/package/mobx-react)