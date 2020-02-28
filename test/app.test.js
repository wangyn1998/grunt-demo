const expect = require("chai").expect,
      http = require("http");
describe("举行计算器 HTTP API 接口测试",function(){
    it("正确请求格式测试",function(){
        http.get('http://localhost:8080/rectangle?width=6&height=7')
    })
})