import React, { Component } from 'react';
import { render } from 'react-dom';

import Hello from './Hello';

class Main extends Component {
    render() {
        return (
            <div>
                <div onClick={() => Hello.show()}>creare hello world.</div>
                <div onClick={() => Hello.hide()}>delete hello world</div>
            </div>
        )
    }
}
render(
    <Main />,
    document.getElementById('app')
)
