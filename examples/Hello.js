import React, { Component } from 'react';

function log(target, name, descriptor) {
    let message = `LOG: Calling \`${name}\` function.`;
  
    if (typeof target === 'string') {
      message = target;
  
      return (target, name, descriptor) => {
        console.log(`LOG: ${message}`, name);
        return descriptor;
      };
    } else {
      console.log(message);
      return descriptor;
    }
  }

@log
function x() {
    console.log('x');
}

x();

export default class Hello extends Component {
    @log
    x() {
        console.log('xx');
    }

    render() {
        this.x();
        return (
            <div>
                hello world!
            </div>
        )
    }
}