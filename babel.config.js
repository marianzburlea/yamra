module.exports = {
  "plugins": [
    "babel-plugin-styled-components"
  ],
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "entry",
        "corejs": 3
      }
    ],
    "@babel/preset-react"
  ]
}