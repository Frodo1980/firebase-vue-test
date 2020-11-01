module.exports = {
  transpileDependencies: ['vuetify'],

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: ['/', '/home', '/about'],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}
