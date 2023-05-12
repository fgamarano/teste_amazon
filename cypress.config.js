const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.amazon.com.br',
    setupNodeEvents(on, config) {
      allureWriter(on, config)
      return config
      // implement node event listeners here
    },
    viewportWidth: 1920,
    viewportHeight: 1080
  },
})
