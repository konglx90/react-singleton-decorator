import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

export default function singleton(Target) {
    let dom;
    let instance;

    Target.show = (option = {}) => {
        if(!dom) {
            dom = document.createElement('div');
            document.body.appendChild(dom);
        }
        instance = render(<Target />, dom);
    }

    Target.hide = () => {
        if (dom) {
          unmountComponentAtNode(dom);
        }
    }
}
