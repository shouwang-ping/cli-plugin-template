
export default defineConfig({
  delopMode: 'assets',
  applyType: 'console',
  hash: true, // 按package.json 生成版本号
  layout: {},
  openApi: {

  },
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
  fastfresh: true, // 快速刷新
  vite: false,
  isForceLint: true,
  tract: {
    a: '1123'
  }
});
