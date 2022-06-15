const asyncHandler = require('express-async-handler')

const MethodTest01 = asyncHandler(async (req, res) => {
  console.log('입장')
  res.json('/test/test01');
})

const MethodTest02 = asyncHandler(async (req, res) => {
  res.json('/test/test02')
})

module.exports = {
  MethodTest01,
  MethodTest02,
}