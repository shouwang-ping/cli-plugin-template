
export default defineConfig({
  delopMode: 'assets',
  applyType: 'console',
  hash: true, // 按package.json 生成版本号
  antd: {},
  qiankun: {

  },
  publicPath: '/',
  themeConfig: {

  },
  msfu: {
    esbuild: true,
    SSG: false,
    SSR: false,
    remoteRuntime: true
  },
  vite: false,
  isForceLint: true,
  tract: {
    a: '1123'
  }
});
