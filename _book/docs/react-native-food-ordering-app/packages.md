# Packages Used

_package.json_

<pre class="line-numbers"><code class="language-json">
{
  "name": "SwiggyApp",
  "version": "5.2.0",
  "private": true,
  "scripts": {
    "postinstall": "remotedev-debugger",
    "start": "node_modules/react-native/packager/packager.sh",
    "eslint": "eslint",
    "test": "jest"
  },
  "dependencies": {
    "color": "^0.11.3",
    "lodash": "^4.13.1",
    "moment": "^2.13.0",
    "native-base": "0.5.11",
    "react": "15.3.2",
    "react-native": "0.35.0",
    "react-native-animatable": "^0.6.1",
    "react-native-button": "^1.6.0",
    "react-native-code-push": "1.15.0-beta",
    "react-native-easy-grid": "0.1.6",
    "react-native-gifted-spinner": "0.0.4",
    "react-native-lightbox": "^0.6.0",
    "react-native-list-popover": "^1.0.5",
    "react-native-modalbox": "^1.3.4",
    "react-native-navigation-redux-helpers": "^0.4.1",
    "react-native-search-bar": "^2.11.0",
    "react-native-simple-modal": "^3.0.4",
    "react-native-slide-down-panel": "^1.0.6",
    "react-native-swiper": "^1.4.5",
    "react-native-vector-icons": "^2.0.3",
    "react-redux": "^4.4.5",
    "redux": "^3.5.2",
    "redux-persist": "^3.2.2",
    "redux-thunk": "^2.1.0",
    "remote-redux-devtools": "^0.3.3",
    "remote-redux-devtools-on-debugger": "^0.4.6"
  },
  "devDependencies": {
    "babel-eslint": "^6.1.2",
    "babel-jest": "16.0.0",
    "babel-preset-react-native": "1.9.0",
    "chai": "^3.5.0",
    "eslint": "^3.5.0",
    "eslint-config-airbnb": "^11.1.0",
    "eslint-plugin-import": "^1.14.0",
    "eslint-plugin-jsx-a11y": "^2.2.1",
    "eslint-plugin-react": "^6.2.0",
    "eslint-plugin-react-native": "^2.0.0",
    "jest": "16.0.2",
    "jest-react-native": "16.0.0",
    "mocha": "^2.5.3",
    "react-test-renderer": "15.3.2"
  },
  "upstreamRepo": "git@github.com:GeekyAnts/react-native-native-base-seed.git",
  "jest": {
    "preset": "jest-react-native"
  }
}</code></pre>
