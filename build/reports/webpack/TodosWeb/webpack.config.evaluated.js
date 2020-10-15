{
  mode: 'production',
  resolve: {
    modules: [
      '/Users/theant/kotlin-web-development/build/js/packages/TodosWeb/kotlin-dce',
      'node_modules'
    ]
  },
  plugins: [
    ProgressPlugin {
      profile: false,
      handler: [Function: handler],
      modulesCount: 500,
      showEntries: false,
      showModules: true,
      showActiveModules: true
    },
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {}
          },
          {
            loader: 'css-loader',
            options: {}
          }
        ]
      }
    ]
  },
  entry: {
    main: [
      '/Users/theant/kotlin-web-development/build/js/packages/TodosWeb/kotlin-dce/TodosWeb.js'
    ]
  },
  output: {
    path: '/Users/theant/kotlin-web-development/build/distributions',
    filename: [Function: filename],
    library: 'TodosWeb',
    libraryTarget: 'umd'
  },
  devtool: 'source-map',
  stats: {
    warningsFilter: [
      /Failed to parse source map/
    ],
    warnings: false,
    errors: false
  }
}