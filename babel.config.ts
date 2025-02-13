import { ConfigAPI } from "@babel/core";

module.exports = function (api: ConfigAPI) {
  api.cache.forever();
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          allowUndefined: false,
        },
      ],
    ],
  };
};
