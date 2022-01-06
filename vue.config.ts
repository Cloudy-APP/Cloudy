import { ProjectOptions } from '@vue/cli-service'
import * as path from 'path'

const vueConfig: ProjectOptions = {
  pwa: {
    name: 'Cloudy',
    themeColor: '',
    appleMobileWebAppCapable: '',
    workboxPluginMode: '',
  },

  configureWebpack: {
    devServer: {
      historyApiFallback: true,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/'),
        '>>': path.resolve(__dirname, 'tests/'),
      },
    },
  },
  devServer: {
    port: 2137,
    host: '',
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true,
    },
  },
}

module.exports = vueConfig
