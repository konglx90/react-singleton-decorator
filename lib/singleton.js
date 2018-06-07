'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = singleton;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function singleton(Target) {
    var dom = void 0;
    var instance = void 0;

    var show = function show() {
        var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        if (!dom) {
            dom = document.createElement('div');
            document.body.appendChild(dom);
        }
        instance = (0, _reactDom.render)(_react2.default.createElement(Target, option), dom);
    };

    var hide = function hide() {
        if (dom) {
            (0, _reactDom.unmountComponentAtNode)(dom);
        }
    };

    Target.prototype.show = show;
    Target.prototype.hide = hide;

    Target.show = show;
    Target.hide = hide;
}
//# sourceMappingURL=singleton.js.map