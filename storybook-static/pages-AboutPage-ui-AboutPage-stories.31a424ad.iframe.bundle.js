"use strict";(self.webpackChunkmy_webpack_project=self.webpackChunkmy_webpack_project||[]).push([[821,531],{"./src/pages/AboutPage/ui/AboutPage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dark:()=>Dark,Light:()=>Light,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/app/providers/ThemeProvider/index.ts"),shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./src/app/styles/index.scss"),__webpack_require__("./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx"));const __WEBPACK_DEFAULT_EXPORT__={title:"pages/AboutPage",component:__webpack_require__("./src/pages/AboutPage/ui/AboutPage.tsx").default,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{}},Light={args:{}},Dark={args:{},decorators:[(0,shared_config_storybook_ThemeDecorator_ThemeDecorator__WEBPACK_IMPORTED_MODULE_2__.F)(app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_0__.Q2.DARK)]};Light.parameters={...Light.parameters,docs:{...Light.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Light.parameters?.docs?.source}}},Dark.parameters={...Dark.parameters,docs:{...Dark.parameters?.docs,source:{originalSource:"{\n  args: {},\n  decorators: [ThemeDecorator(Theme.DARK)]\n}",...Dark.parameters?.docs?.source}}};const __namedExportsOrder=["Light","Dark"]},"./src/pages/AboutPage/ui/AboutPage.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_i18next__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const AboutPage=()=>{const{t}=(0,react_i18next__WEBPACK_IMPORTED_MODULE_0__.$G)("about");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:t("about site")})};AboutPage.displayName="AboutPage";const __WEBPACK_DEFAULT_EXPORT__=AboutPage}}]);