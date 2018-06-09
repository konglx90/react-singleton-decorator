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
    show() {
      console.log('show: ', this.props);
      // WARNING: It will be dead circle
      // Hello.show();
    }
    hide() {
      console.log('hide');
    }
    render() {
        const { name } = this.props;
        return (
            <div onClick={() => Hello.hide()}>
                {name}, hello world!
            </div>
        )
    }
}
