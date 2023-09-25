import { jsx as _jsx } from "react/jsx-runtime";
import { BrowserRouter } from 'react-router-dom';
// eslint-disable-next-line react/display-name
export var RouterDecorator = function (StoryComponent) { return (_jsx(BrowserRouter, { children: _jsx(StoryComponent, {}) })); };
