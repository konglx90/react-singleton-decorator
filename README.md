## react-singleton-decorator

### Basic

At least you need have these configs in `.babelrc` and install them.

```js
// .babelrc
{
    "presets": [
      "env",
      "es2015",
      "stage-0",
      "react"
    ],
    "plugins": [
      "transform-decorators-legacy"
    ]
}
```

### Install

`npm install react-singleton-decorator --save`

### Use

```js
import singleton from 'react-singleton-decorator';

@singleton
class Hello extends Component {
    render() {
        const { name } = this.props;
        return (
            <div onClick={() => this.hide()}>
                Hello, {name}!
            </div>
        )
    }
}

Hello.show({
    name: 'Lily'
});
Hello.hide();
```

### Can use on

```sh
Alert

Modal

Message

Notification

PageLoading
```

### Demo

```sh
npm run example
```

### Build

```sh
npm run build
```
