# Packages Used

_package.json_

<pre class="line-numbers"><code class="language-json">
{
    "name": "TaxiApp",
    "version": "6.0.0",
    "private": true,
    "scripts": {
        "postinstall": "remotedev-debugger",
        "start": "node_modules/react-native/packager/packager.sh"
    },

    "dependencies": {
        "lodash": "^4.13.1",
        "moment": "^2.13.0",
        "native-base": "2.0.x",
        "react": "15.4.2",
        "react-native": "0.41.0",
        "react-native-code-push": "^1.17.0-beta",
        "react-native-country-picker-modal": "^0.2.10",
        "react-native-maps": "^0.13.0",
        "react-redux": "^4.4.5",
        "redux": "^3.5.2",
        "redux-persist": "^3.2.2",
        "redux-thunk": "^2.1.0",
        "rx": "^4.1.0"
    },
    "devDependencies": {
        "chai": "^3.5.0",
        "mocha": "^2.5.3",
        "remote-redux-devtools": "^0.3.3",
        "remote-redux-devtools-on-debugger": "^0.4.6"
    }
}</code></pre>
