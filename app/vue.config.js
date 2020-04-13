module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pwa: {

    name: 'Bens ao Domicílio',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "src/service-worker.js",
    }
  }
}