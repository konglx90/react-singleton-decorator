import React, { Component } from 'react';
import singleton from '../src/singleton';

@singleton
export default class Hello extends Component {
    constructor(props) {
      super(props);
      console.log('constructor');
    }
    shouldComponentUpdate(nextProps) {
      return nextProps.name !== this.props.name;
    }
    componentWillUpdate(nextProps) {
      console.log(this.props, nextProps);
    }
    render() {
        const { name } = this.props;
        return (
            <div onClick={() => this.hide()}>
                {name}, hello world!
            </div>
        )
    }
}
