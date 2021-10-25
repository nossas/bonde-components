module.exports = {
  "extends": [
    "react-app",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ]
}

// modules.exports = {
//   "parser": "@typescript-eslint/parser",
//   "extends": [
//     "plugin:react/recommended", // Uses the recommended rules Create React App
//     "plugin:@typescript-eslint/recommended" // Uses the recommended rules from @typescript-eslint/eslint-plugin
//   ],
//   "plugins": [
//     "@typescript-eslint"
//   ],
//   "parserOptions": {
//     "project": "./tsconfig.json",
//     "ecmaFeatures": {
//       "jsx": true // Allows for the parsing of JSX
//     },
//     "ecmaVersion": 2020, // Allows for the parsing of modern ECMAScript features
//     "sourceType": "module" // Allows for the use of imports
//   },
//   "rules": {
//     "@typescript-eslint/no-unused-vars": [
//       "error",
//       {
//         "argsIgnorePattern": "^_",
//         "varsIgnorePattern": "^_"
//       }
//     ],
//     "@typescript-eslint/ban-ts-ignore": "off",
//     "@typescript-eslint/no-explicit-any": "off",
//     "@typescript-eslint/camelcase": "off"
//   },
//   "settings": {
//     "react": {
//       "version": "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
//     }
//   }
// }
