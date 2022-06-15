const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (app) => {
  console.log(process.env.PROXY)
  app.use(
    createProxyMiddleware('/api/data', {
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  )
}