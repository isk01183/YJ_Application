const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // 이 부분에 프록시할 URL 패턴을 지정합니다. 필요에 따라 변경 가능합니다.
    createProxyMiddleware({
      target: 'http://localhost:8080', // Spring Boot 서버 주소에 맞게 변경
      changeOrigin: true,
    })
  );
};