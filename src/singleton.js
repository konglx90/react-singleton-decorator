import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

const classOf = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1);
}

function safeCall(func, context) {
  if (func && classOf(func) === 'Function') {
    func.call(context);
  };
}

export default function singleton(Target) {
    let dom;
    let instance;

    const show  = (option = {}) => {
        if(!dom) {
            dom = document.createElement('div');
            document.body.appendChild(dom);
        }
        instance = render(<Target {...option} />, dom);
        // call the instance show
        safeCall(instance.show, instance);
    }

    const hide = () => {
        if (dom) {
          unmountComponentAtNode(dom);
          // instance = null;
        }
        // call the instance hide
        safeCall(instance.hide, instance);
    }

    // we shouldn't cover the instance show and hide method or property
    // Target.prototype.show = show;
    // Target.prototype.hide = hide;

    Target.show = show;
    Target.hide = hide;
}
