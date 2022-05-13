module.exports = {
   
    extends: [
      'plugin:vue/vue3-recommended',
      // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
    ],
    rules: {
        "no-unused-vars": 'off',
        'vue/multi-word-component-names': 0
    },
    parserOptions: {
        'parser':"babel-eslint",
        "ecmaVersion": 6,
        
      },
  }