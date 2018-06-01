module.exports = {
  "extends": [
    "airbnb-base", 
    "plugin:flowtype/recommended"
  ],
  "parser": "babel-eslint",
  "plugins": [
    "flowtype",
    "jest"
  ],
  "env": {
    "jest": true,
    "jasmine": true
  }
};
