import React, { Component } from 'react';
import { render } from 'react-dom';

import Hello from './Hello';

class Main extends Component {
    render() {
        return (
            <div>
                <Hello />
            </div>
        )
    }
}
render(
    <Main />,
    document.getElementById('app')
)