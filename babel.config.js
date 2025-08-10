module.exports = function (api) {
  api.cache(true);

  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@themes": "./src/themes",
            "@routes": "./src/routes",
            "@types": "./src/types",
            "@contexts": "./src/contexts",
            "@api": "./src/api" ,
            "@hooks": "./src/hooks",
            "@services": "./src/services",
            "@dtos": "./src/dtos" 
          }
        }
      ]
    ]
  }
}