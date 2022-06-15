const { createProxyMiddleware } = require('http-proxy-middleware')
const dotenv = require('dotenv')
dotenv.config()

module.exports = (app) => {
  app.use(
    createProxyMiddleware('/api/data', {
      target: process.env.PROXY || 'http://localhost:5000',
      changeOrigin: true,
    })
  )
}