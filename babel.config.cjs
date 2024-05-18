// babel.config.js
module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    // "@babel/preset-typescript", // 如果你在项目中使用了 TypeScript
  ],
  plugins: [
    // 你的 Babel 插件
  ],
};
