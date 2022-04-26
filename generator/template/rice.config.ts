
interface IConfig {
	deployMode?: 'site' | 'Assets' | 'ssf'
	isMsp?: boolean,
	catch?: boolean,
	esBuild?: {},
	vite?: boolean,
	salmis?: boolean, // 埋点
	dva?: {
    hmr: true,
  },
}

function defineConfig(options: IConfig) {
	
}

module.exports = defineConfig({
	isMsp: false,
	catch: true
})