module.exports = {
  "presets": [
    ['@vue/babel-preset-jsx', {
      injectH: false
    }],
    ['@vue/app', {
      useBuiltIns: 'entry'
    }],
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}