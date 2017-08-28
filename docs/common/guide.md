# Start Building Your App

This App guides you throughout building your app, providing the steps and procedure to customize.<br /><br />
**Contents discussed in this section:**
* [How to add new Component?](#new-component)
* [How to add new Stylesheet?](#new-styleSheet)

<a id="new-component"></a>
### How to add new Component

* Create a new folder, say ``` NewComponent ``` and place it under ``` /src/screens/```.
* Create a new file ``` index.js``` , within this folder.
* Name the class same as that of folder name.

```
class NewComponent extends Component {
    . . .
    . . .
}
```

<a id="new-stylesheet"></a>
### How to add new Stylesheet

Create a new file ``` styles.js``` , place it under ```/src/screens/NewComponent/```.

```import``` newly created StyleSheet into the Component.
```
import styles from './styles';
class NewComponent extends Component {
    . . .
    . . .
}
```
