module.exports = {
  transpileDependencies: ['vuetify'],

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: ['/', '/about'],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}
