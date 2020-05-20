module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins:[ //使用按需加载ant ui
    ['import', {
      'libraryName': 'ant-design-vue',
      'libraryDirectory': 'es',
      'style': true // `style: true` 会加载 less 文件
    }]
  ]
}
