module.exports = (api, options) => {
  api.render('./template', {
    doesCompile: api.hasPlugin('babel') || api.hasPlugin('typescript'),
    useBabel: api.hasPlugin('babel')
  })

  if (options.vueVersion === '18') {
    api.extendPackage({
      dependencies: {
        '@ping-home/sailfish': "latest"
      }
    })
  } else {
    api.extendPackage({
      dependencies: {
        '@ping-home/sailfish': "latest"
      }
    })
  }

  api.extendPackage({
    scripts: {
      "dev": "rice dev",
      "build": "rice build",
      "color": "rice color",
      "theme": "rice theme",
      "newPage": "rice newPage"
    },
    browserslist: [
      '> 1%',
      'last 2 versions',
      'not dead',
      ...(options.vueVersion === '3' ? ['not ie 11'] : [])
    ]
  })

  if (options.cssPreprocessor) {
    const deps = {
      sass: {
        sass: '^1.32.7',
        'sass-loader': '^12.0.0'
      },
      'dart-sass': {
        sass: '^1.32.7',
        'sass-loader': '^12.0.0'
      },
      less: {
        'less': '^4.0.0',
        'less-loader': '^8.0.0'
      },
      stylus: {
        'stylus': '^0.55.0',
        'stylus-loader': '^6.1.0'
      }
    }

    api.extendPackage({
      devDependencies: deps[options.cssPreprocessor]
    })
  }
}
