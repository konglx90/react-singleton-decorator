import React, { Component } from 'react';
import singleton from '../src/singleton';

@singleton
export default class Hello extends Component {
    // constructor() {
    //   super();
    //   this.state = {};
    // }

    render() {
        return (
            <div>
                hello world!
            </div>
        )
    }
}
