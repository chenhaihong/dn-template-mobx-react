// dawn Webpack 中间件
// 文档地址：https://alibaba.github.io/dawn/docs/#!/zh/middleware/webpack

module.exports = function (configs, webpack, ctx) {

  const src = `${__dirname}/src`
  const app = `${__dirname}/src/app`

  configs.resolve = configs.resolve || {}
  configs.resolve.alias = configs.resolve.alias || {}
  configs.resolve.alias = {
    ...configs.resolve.alias,

    // 自定义别名
    '@controllers': `${app}/controllers`,
    '@models': `${app}/models`,
    '@services': `${app}/services`,
    '@components': `${app}/views/components`,
    '@containers': `${app}/views/containers`,
    '@style': `${app}/views/style`,

    '@configs': `${src}/configs`,
    '@helpers': `${src}/helpers`,
  }

};