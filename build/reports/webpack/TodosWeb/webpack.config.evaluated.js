{
  mode: 'development',
  resolve: {
    modules: [
      '/Users/theant/kotlin-web-development/build/js/packages/TodosWeb/kotlin-dce-dev',
      'node_modules'
    ]
  },
  plugins: [
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
      '/Users/theant/kotlin-web-development/build/js/packages/TodosWeb/kotlin-dce-dev/TodosWeb.js'
    ]
  },
  output: {
    path: '/Users/theant/kotlin-web-development/build/distributions',
    filename: [Function: filename],
    library: 'TodosWeb',
    libraryTarget: 'umd'
  },
  devtool: 'eval-source-map',
  stats: {
    warningsFilter: [
      /Failed to parse source map/
    ],
    warnings: false,
    errors: false
  },
  devServer: {
    inline: true,
    lazy: false,
    noInfo: true,
    open: true,
    overlay: false,
    contentBase: [
      '/Users/theant/kotlin-web-development/build/processedResources/js/main'
    ]
  }
}