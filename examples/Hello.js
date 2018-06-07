import React, { Component } from 'react';
import singleton from '../src/singleton';

@singleton
export default class Hello extends Component {
    render() {
        const { name } = this.props;
        return (
            <div onClick={() => this.hide()}>
                {name}, hello world!
            </div>
        )
    }
}
