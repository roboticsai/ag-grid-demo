"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/gridPopupMenu.js":
/*!*************************************!*\
  !*** ./components/gridPopupMenu.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _tippyjs_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tippyjs/react */ \"./node_modules/@tippyjs/react/dist/tippy-react.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst GridPopupMenu = (props)=>{\n    _s();\n    const tippyRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const show = ()=>setVisible(true);\n    const hide = ()=>setVisible(false);\n    const btnStyle = \"m-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800\";\n    const dropDownContent = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"bg-white w-full border-b border-gray-200 dark:border-gray-700\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    class: \"flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400\",\n                    id: \"myTab\",\n                    \"data-tabs-toggle\": \"#myTabContent\",\n                    role: \"tablist\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            class: \"mr-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                id: \"profile-tab\",\n                                \"data-tabs-target\": \"#profile\",\n                                role: \"tab\",\n                                \"aria-controls\": \"profile\",\n                                \"aria-selected\": \"false\",\n                                class: \"inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    fill: \"none\",\n                                    viewBox: \"0 0 24 24\",\n                                    \"stroke-width\": \"1.5\",\n                                    stroke: \"currentColor\",\n                                    class: \"w-4 h-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        \"stroke-linecap\": \"round\",\n                                        \"stroke-linejoin\": \"round\",\n                                        d: \"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu.js\",\n                                        lineNumber: 19,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu.js\",\n                                    lineNumber: 18,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu.js\",\n                                lineNumber: 17,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu.js\",\n                            lineNumber: 16,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            class: \"mr-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                id: \"dashboard-tab\",\n                                \"data-tabs-target\": \"#dashboard\",\n                                role: \"tab\",\n                                \"aria-controls\": \"dashboard\",\n                                \"aria-selected\": \"false\",\n                                class: \"inline-flex p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group\",\n                                \"aria-current\": \"page\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    fill: \"none\",\n                                    viewBox: \"0 0 24 24\",\n                                    \"stroke-width\": \"1.5\",\n                                    stroke: \"currentColor\",\n                                    class: \"w-4 h-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        \"stroke-linecap\": \"round\",\n                                        \"stroke-linejoin\": \"round\",\n                                        d: \"M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu.js\",\n                                        lineNumber: 26,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu.js\",\n                                    lineNumber: 25,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu.js\",\n                                lineNumber: 24,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu.js\",\n                            lineNumber: 23,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            class: \"mr-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                class: \"inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    fill: \"none\",\n                                    viewBox: \"0 0 24 24\",\n                                    \"stroke-width\": \"1.5\",\n                                    stroke: \"currentColor\",\n                                    class: \"w-4 h-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        \"stroke-linecap\": \"round\",\n                                        \"stroke-linejoin\": \"round\",\n                                        d: \"M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu.js\",\n                                        lineNumber: 33,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu.js\",\n                                lineNumber: 31,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu.js\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu.js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu.js\",\n                lineNumber: 14,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"myTabContent\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800\",\n                        id: \"profile\",\n                        role: \"tabpanel\",\n                        \"aria-labelledby\": \"profile-tab\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            class: \"text-sm text-gray-500 dark:text-gray-400\",\n                            children: [\n                                \"This is some placeholder content the \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    class: \"font-medium text-gray-800 dark:text-white\",\n                                    children: \"Profile tab's associated content\"\n                                }, void 0, false, {\n                                    fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 102\n                                }, undefined),\n                                \". Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu.js\",\n                            lineNumber: 41,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800\",\n                        id: \"dashboard\",\n                        role: \"tabpanel\",\n                        \"aria-labelledby\": \"dashboard-tab\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            class: \"text-sm text-gray-500 dark:text-gray-400\",\n                            children: [\n                                \"This is some placeholder content the \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    class: \"font-medium text-gray-800 dark:text-white\",\n                                    children: \"Dashboard tab's associated content\"\n                                }, void 0, false, {\n                                    fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 102\n                                }, undefined),\n                                \". Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu.js\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800\",\n                        id: \"settings\",\n                        role: \"tabpanel\",\n                        \"aria-labelledby\": \"settings-tab\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            class: \"text-sm text-gray-500 dark:text-gray-400\",\n                            children: [\n                                \"This is some placeholder content the \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    class: \"font-medium text-gray-800 dark:text-white\",\n                                    children: \"Settings tab's associated content\"\n                                }, void 0, false, {\n                                    fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 102\n                                }, undefined),\n                                \". Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu.js\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800\",\n                        id: \"contacts\",\n                        role: \"tabpanel\",\n                        \"aria-labelledby\": \"contacts-tab\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            class: \"text-sm text-gray-500 dark:text-gray-400\",\n                            children: [\n                                \"This is some placeholder content the \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    class: \"font-medium text-gray-800 dark:text-white\",\n                                    children: \"Contacts tab's associated content\"\n                                }, void 0, false, {\n                                    fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 102\n                                }, undefined),\n                                \". Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu.js\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu.js\",\n                lineNumber: 39,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true);\n    const onClickHandler = (option)=>{\n        hide();\n        if (option === \"create\") {\n            props.api.applyTransaction({\n                add: [\n                    {}\n                ]\n            });\n        }\n        if (option === \"delete\") {\n            props.api.applyTransaction({\n                remove: [\n                    props.data\n                ]\n            });\n        }\n        if (option === \"edit\") {\n            props.api.startEditingCell({\n                rowIndex: props.rowIndex,\n                colKey: \"make\"\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tippyjs_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        ref: tippyRef,\n        content: dropDownContent,\n        visible: visible,\n        onClickOutside: hide,\n        allowHTML: true,\n        arrow: false,\n        appendTo: document.body,\n        interactive: true,\n        placement: \"right\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: \"btn btn-primary\",\n            onClick: visible ? hide : show,\n            children: \"Action\"\n        }, void 0, false, {\n            fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu.js\",\n            lineNumber: 88,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu.js\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, undefined);\n};\n_s(GridPopupMenu, \"V9zAjYAhOMIsnnHlev3gvqQ/yZU=\");\n_c = GridPopupMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GridPopupMenu);\nvar _c;\n$RefreshReg$(_c, \"GridPopupMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDRFQUFDQzs0QkFBRXZCLE9BQU07O2dDQUEyQzs4Q0FBcUMsOERBQUN3QjtvQ0FBT3hCLE9BQU07OENBQTRDOzs7Ozs7Z0NBQTBDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQU92TSxNQUFNeUIsaUJBQWlCLENBQUNDLFNBQVc7UUFDakM5QjtRQUNBLElBQUk4QixXQUFXLFVBQVU7WUFDdkJuQyxNQUFNb0MsR0FBRyxDQUFDQyxnQkFBZ0IsQ0FBQztnQkFDekJDLEtBQUs7b0JBQUMsQ0FBQztpQkFBRTtZQUNYO1FBQ0YsQ0FBQztRQUNELElBQUlILFdBQVcsVUFBVTtZQUN2Qm5DLE1BQU1vQyxHQUFHLENBQUNDLGdCQUFnQixDQUFDO2dCQUFFRSxRQUFRO29CQUFDdkMsTUFBTXdDLElBQUk7aUJBQUM7WUFBQztRQUNwRCxDQUFDO1FBRUQsSUFBSUwsV0FBVyxRQUFRO1lBQ3JCbkMsTUFBTW9DLEdBQUcsQ0FBQ0ssZ0JBQWdCLENBQUM7Z0JBQ3pCQyxVQUFVMUMsTUFBTTBDLFFBQVE7Z0JBQ3hCQyxRQUFRO1lBQ1Y7UUFDRixDQUFDO0lBQ0g7SUFFQSxxQkFDRSw4REFBQzdDLHNEQUFLQTtRQUNKOEMsS0FBSzNDO1FBQ0w0QyxTQUFTdEM7UUFDVEwsU0FBU0E7UUFDVDRDLGdCQUFnQnpDO1FBQ2hCMEMsV0FBVyxJQUFJO1FBQ2ZDLE9BQU8sS0FBSztRQUNaQyxVQUFVQyxTQUFTQyxJQUFJO1FBQ3ZCQyxhQUFhLElBQUk7UUFDakJDLFdBQVU7a0JBRVYsNEVBQUNDO1lBQU9DLFdBQVU7WUFBa0JDLFNBQVN0RCxVQUFVRyxPQUFPRCxJQUFJO3NCQUFFOzs7Ozs7Ozs7OztBQUsxRTtHQXpGTUw7S0FBQUE7QUEyRk4sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ncmlkUG9wdXBNZW51LmpzPzZiOGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRpcHB5IGZyb20gJ0B0aXBweWpzL3JlYWN0JztcclxuY29uc3QgR3JpZFBvcHVwTWVudSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHRpcHB5UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHNob3cgPSAoKSA9PiBzZXRWaXNpYmxlKHRydWUpO1xyXG4gIGNvbnN0IGhpZGUgPSAoKSA9PiBzZXRWaXNpYmxlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgIGJ0blN0eWxlID0gJ20tMSB0ZXh0LXdoaXRlIGJnLWJsdWUtNzAwIGhvdmVyOmJnLWJsdWUtODAwIGZvY3VzOnJpbmctNCBmb2N1czpyaW5nLWJsdWUtMzAwIGZvbnQtbWVkaXVtIHJvdW5kZWQtbGcgdGV4dC1zbSBweC01IHB5LTIuNSBtci0yIG1iLTIgZGFyazpiZy1ibHVlLTYwMCBkYXJrOmhvdmVyOmJnLWJsdWUtNzAwIGZvY3VzOm91dGxpbmUtbm9uZSBkYXJrOmZvY3VzOnJpbmctYmx1ZS04MDAnXHJcblxyXG4gIGNvbnN0IGRyb3BEb3duQ29udGVudCA9IChcclxuICAgIDw+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYmctd2hpdGUgdy1mdWxsIGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCBkYXJrOmJvcmRlci1ncmF5LTcwMFwiPlxyXG4gICAgICAgIDx1bCBjbGFzcz1cImZsZXggZmxleC13cmFwIC1tYi1weCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtY2VudGVyIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwXCIgaWQ9XCJteVRhYlwiIGRhdGEtdGFicy10b2dnbGU9XCIjbXlUYWJDb250ZW50XCIgcm9sZT1cInRhYmxpc3RcIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibXItMlwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBpZD1cInByb2ZpbGUtdGFiXCIgZGF0YS10YWJzLXRhcmdldD1cIiNwcm9maWxlXCIgcm9sZT1cInRhYlwiIGFyaWEtY29udHJvbHM9XCJwcm9maWxlXCIgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCIgY2xhc3M9XCJpbmxpbmUtZmxleCBwLTQgYm9yZGVyLWItMiBib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZC10LWxnIGhvdmVyOnRleHQtZ3JheS02MDAgaG92ZXI6Ym9yZGVyLWdyYXktMzAwIGRhcms6aG92ZXI6dGV4dC1ncmF5LTMwMCBncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgY2xhc3M9XCJ3LTQgaC00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNMy43NSA2Ljc1aDE2LjVNMy43NSAxMmgxNi41bS0xNi41IDUuMjVoMTYuNVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibXItMlwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBpZD1cImRhc2hib2FyZC10YWJcIiBkYXRhLXRhYnMtdGFyZ2V0PVwiI2Rhc2hib2FyZFwiIHJvbGU9XCJ0YWJcIiBhcmlhLWNvbnRyb2xzPVwiZGFzaGJvYXJkXCIgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCIgY2xhc3M9XCJpbmxpbmUtZmxleCBwLTQgdGV4dC1ibHVlLTYwMCBib3JkZXItYi0yIGJvcmRlci1ibHVlLTYwMCByb3VuZGVkLXQtbGcgYWN0aXZlIGRhcms6dGV4dC1ibHVlLTUwMCBkYXJrOmJvcmRlci1ibHVlLTUwMCBncm91cFwiIGFyaWEtY3VycmVudD1cInBhZ2VcIj5cclxuICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIGNsYXNzPVwidy00IGgtNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBkPVwiTTEyIDNjMi43NTUgMCA1LjQ1NS4yMzIgOC4wODMuNjc4LjUzMy4wOS45MTcuNTU2LjkxNyAxLjA5NnYxLjA0NGEyLjI1IDIuMjUgMCAwMS0uNjU5IDEuNTkxbC01LjQzMiA1LjQzMmEyLjI1IDIuMjUgMCAwMC0uNjU5IDEuNTkxdjIuOTI3YTIuMjUgMi4yNSAwIDAxLTEuMjQ0IDIuMDEzTDkuNzUgMjF2LTYuNTY4YTIuMjUgMi4yNSAwIDAwLS42NTktMS41OTFMMy42NTkgNy40MDlBMi4yNSAyLjI1IDAgMDEzIDUuODE4VjQuNzc0YzAtLjU0LjM4NC0xLjAwNi45MTctMS4wOTZBNDguMzIgNDguMzIgMCAwMTEyIDN6XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJtci0yXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiaW5saW5lLWZsZXggcC00IGJvcmRlci1iLTIgYm9yZGVyLXRyYW5zcGFyZW50IHJvdW5kZWQtdC1sZyBob3Zlcjp0ZXh0LWdyYXktNjAwIGhvdmVyOmJvcmRlci1ncmF5LTMwMCBkYXJrOmhvdmVyOnRleHQtZ3JheS0zMDAgZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIGNsYXNzPVwidy00IGgtNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBkPVwiTTkgNC41djE1bTYtMTV2MTVtLTEwLjg3NSAwaDE1Ljc1Yy42MjEgMCAxLjEyNS0uNTA0IDEuMTI1LTEuMTI1VjUuNjI1YzAtLjYyMS0uNTA0LTEuMTI1LTEuMTI1LTEuMTI1SDQuMTI1QzMuNTA0IDQuNSAzIDUuMDA0IDMgNS42MjV2MTIuNzVjMCAuNjIxLjUwNCAxLjEyNSAxLjEyNSAxLjEyNXpcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBpZD1cIm15VGFiQ29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoaWRkZW4gcC00IHJvdW5kZWQtbGcgYmctZ3JheS01MCBkYXJrOmJnLWdyYXktODAwXCIgaWQ9XCJwcm9maWxlXCIgcm9sZT1cInRhYnBhbmVsXCIgYXJpYS1sYWJlbGxlZGJ5PVwicHJvZmlsZS10YWJcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+VGhpcyBpcyBzb21lIHBsYWNlaG9sZGVyIGNvbnRlbnQgdGhlIDxzdHJvbmcgY2xhc3M9XCJmb250LW1lZGl1bSB0ZXh0LWdyYXktODAwIGRhcms6dGV4dC13aGl0ZVwiPlByb2ZpbGUgdGFiJ3MgYXNzb2NpYXRlZCBjb250ZW50PC9zdHJvbmc+LiBDbGlja2luZyBhbm90aGVyIHRhYiB3aWxsIHRvZ2dsZSB0aGUgdmlzaWJpbGl0eSBvZiB0aGlzIG9uZSBmb3IgdGhlIG5leHQuIFRoZSB0YWIgSmF2YVNjcmlwdCBzd2FwcyBjbGFzc2VzIHRvIGNvbnRyb2wgdGhlIGNvbnRlbnQgdmlzaWJpbGl0eSBhbmQgc3R5bGluZy48L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImhpZGRlbiBwLTQgcm91bmRlZC1sZyBiZy1ncmF5LTUwIGRhcms6YmctZ3JheS04MDBcIiBpZD1cImRhc2hib2FyZFwiIHJvbGU9XCJ0YWJwYW5lbFwiIGFyaWEtbGFiZWxsZWRieT1cImRhc2hib2FyZC10YWJcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+VGhpcyBpcyBzb21lIHBsYWNlaG9sZGVyIGNvbnRlbnQgdGhlIDxzdHJvbmcgY2xhc3M9XCJmb250LW1lZGl1bSB0ZXh0LWdyYXktODAwIGRhcms6dGV4dC13aGl0ZVwiPkRhc2hib2FyZCB0YWIncyBhc3NvY2lhdGVkIGNvbnRlbnQ8L3N0cm9uZz4uIENsaWNraW5nIGFub3RoZXIgdGFiIHdpbGwgdG9nZ2xlIHRoZSB2aXNpYmlsaXR5IG9mIHRoaXMgb25lIGZvciB0aGUgbmV4dC4gVGhlIHRhYiBKYXZhU2NyaXB0IHN3YXBzIGNsYXNzZXMgdG8gY29udHJvbCB0aGUgY29udGVudCB2aXNpYmlsaXR5IGFuZCBzdHlsaW5nLjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGlkZGVuIHAtNCByb3VuZGVkLWxnIGJnLWdyYXktNTAgZGFyazpiZy1ncmF5LTgwMFwiIGlkPVwic2V0dGluZ3NcIiByb2xlPVwidGFicGFuZWxcIiBhcmlhLWxhYmVsbGVkYnk9XCJzZXR0aW5ncy10YWJcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+VGhpcyBpcyBzb21lIHBsYWNlaG9sZGVyIGNvbnRlbnQgdGhlIDxzdHJvbmcgY2xhc3M9XCJmb250LW1lZGl1bSB0ZXh0LWdyYXktODAwIGRhcms6dGV4dC13aGl0ZVwiPlNldHRpbmdzIHRhYidzIGFzc29jaWF0ZWQgY29udGVudDwvc3Ryb25nPi4gQ2xpY2tpbmcgYW5vdGhlciB0YWIgd2lsbCB0b2dnbGUgdGhlIHZpc2liaWxpdHkgb2YgdGhpcyBvbmUgZm9yIHRoZSBuZXh0LiBUaGUgdGFiIEphdmFTY3JpcHQgc3dhcHMgY2xhc3NlcyB0byBjb250cm9sIHRoZSBjb250ZW50IHZpc2liaWxpdHkgYW5kIHN0eWxpbmcuPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoaWRkZW4gcC00IHJvdW5kZWQtbGcgYmctZ3JheS01MCBkYXJrOmJnLWdyYXktODAwXCIgaWQ9XCJjb250YWN0c1wiIHJvbGU9XCJ0YWJwYW5lbFwiIGFyaWEtbGFiZWxsZWRieT1cImNvbnRhY3RzLXRhYlwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtc20gdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDBcIj5UaGlzIGlzIHNvbWUgcGxhY2Vob2xkZXIgY29udGVudCB0aGUgPHN0cm9uZyBjbGFzcz1cImZvbnQtbWVkaXVtIHRleHQtZ3JheS04MDAgZGFyazp0ZXh0LXdoaXRlXCI+Q29udGFjdHMgdGFiJ3MgYXNzb2NpYXRlZCBjb250ZW50PC9zdHJvbmc+LiBDbGlja2luZyBhbm90aGVyIHRhYiB3aWxsIHRvZ2dsZSB0aGUgdmlzaWJpbGl0eSBvZiB0aGlzIG9uZSBmb3IgdGhlIG5leHQuIFRoZSB0YWIgSmF2YVNjcmlwdCBzd2FwcyBjbGFzc2VzIHRvIGNvbnRyb2wgdGhlIGNvbnRlbnQgdmlzaWJpbGl0eSBhbmQgc3R5bGluZy48L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG5cclxuICApO1xyXG5cclxuICBjb25zdCBvbkNsaWNrSGFuZGxlciA9IChvcHRpb24pID0+IHtcclxuICAgIGhpZGUoKTtcclxuICAgIGlmIChvcHRpb24gPT09ICdjcmVhdGUnKSB7XHJcbiAgICAgIHByb3BzLmFwaS5hcHBseVRyYW5zYWN0aW9uKHtcclxuICAgICAgICBhZGQ6IFt7fV0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKG9wdGlvbiA9PT0gJ2RlbGV0ZScpIHtcclxuICAgICAgcHJvcHMuYXBpLmFwcGx5VHJhbnNhY3Rpb24oeyByZW1vdmU6IFtwcm9wcy5kYXRhXSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAob3B0aW9uID09PSAnZWRpdCcpIHtcclxuICAgICAgcHJvcHMuYXBpLnN0YXJ0RWRpdGluZ0NlbGwoe1xyXG4gICAgICAgIHJvd0luZGV4OiBwcm9wcy5yb3dJbmRleCxcclxuICAgICAgICBjb2xLZXk6ICdtYWtlJyxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUaXBweVxyXG4gICAgICByZWY9e3RpcHB5UmVmfVxyXG4gICAgICBjb250ZW50PXtkcm9wRG93bkNvbnRlbnR9XHJcbiAgICAgIHZpc2libGU9e3Zpc2libGV9XHJcbiAgICAgIG9uQ2xpY2tPdXRzaWRlPXtoaWRlfVxyXG4gICAgICBhbGxvd0hUTUw9e3RydWV9XHJcbiAgICAgIGFycm93PXtmYWxzZX1cclxuICAgICAgYXBwZW5kVG89e2RvY3VtZW50LmJvZHl9XHJcbiAgICAgIGludGVyYWN0aXZlPXt0cnVlfVxyXG4gICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiXHJcbiAgICA+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17dmlzaWJsZSA/IGhpZGUgOiBzaG93fT5cclxuICAgICAgICBBY3Rpb25cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L1RpcHB5PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHcmlkUG9wdXBNZW51O1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSZWYiLCJSZWFjdCIsIlRpcHB5IiwiR3JpZFBvcHVwTWVudSIsInByb3BzIiwidGlwcHlSZWYiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInNob3ciLCJoaWRlIiwiYnRuU3R5bGUiLCJkcm9wRG93bkNvbnRlbnQiLCJkaXYiLCJjbGFzcyIsInVsIiwiaWQiLCJkYXRhLXRhYnMtdG9nZ2xlIiwicm9sZSIsImxpIiwiYSIsImhyZWYiLCJkYXRhLXRhYnMtdGFyZ2V0IiwiYXJpYS1jb250cm9scyIsImFyaWEtc2VsZWN0ZWQiLCJzdmciLCJ4bWxucyIsImZpbGwiLCJ2aWV3Qm94Iiwic3Ryb2tlLXdpZHRoIiwic3Ryb2tlIiwicGF0aCIsInN0cm9rZS1saW5lY2FwIiwic3Ryb2tlLWxpbmVqb2luIiwiZCIsImFyaWEtY3VycmVudCIsImFyaWEtbGFiZWxsZWRieSIsInAiLCJzdHJvbmciLCJvbkNsaWNrSGFuZGxlciIsIm9wdGlvbiIsImFwaSIsImFwcGx5VHJhbnNhY3Rpb24iLCJhZGQiLCJyZW1vdmUiLCJkYXRhIiwic3RhcnRFZGl0aW5nQ2VsbCIsInJvd0luZGV4IiwiY29sS2V5IiwicmVmIiwiY29udGVudCIsIm9uQ2xpY2tPdXRzaWRlIiwiYWxsb3dIVE1MIiwiYXJyb3ciLCJhcHBlbmRUbyIsImRvY3VtZW50IiwiYm9keSIsImludGVyYWN0aXZlIiwicGxhY2VtZW50IiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/gridPopupMenu.js\n"));

/***/ })

});