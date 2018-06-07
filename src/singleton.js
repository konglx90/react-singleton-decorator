import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

export default function singleton(Target) {
    let dom;
    let instance;

    const show  = (option = {}) => {
        if(!dom) {
            dom = document.createElement('div');
            document.body.appendChild(dom);
        }
        instance = render(<Target {...option} />, dom);
    }

    const hide = () => {
        if (dom) {
            unmountComponentAtNode(dom);
          }
    }

    Target.prototype.show = show;
    Target.prototype.hide = hide;

    Target.show = show;
    Target.hide = hide;
}
