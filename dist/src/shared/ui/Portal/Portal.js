import { createPortal } from 'react-dom';
export var Portal = function (_a) {
    var children = _a.children, _b = _a.element, element = _b === void 0 ? document.body : _b;
    return createPortal(children, element);
};
