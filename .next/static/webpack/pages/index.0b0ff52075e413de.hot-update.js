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

/***/ "./components/gridPopupMenu/gridPopupMenu.js":
/*!***************************************************!*\
  !*** ./components/gridPopupMenu/gridPopupMenu.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _tippyjs_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tippyjs/react */ \"./node_modules/@tippyjs/react/dist/tippy-react.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst GridPopupMenu = (props)=>{\n    _s();\n    const tippyRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"filter\");\n    const show = ()=>setVisible(true);\n    const hide = ()=>setVisible(false);\n    const btnStyle = \"m-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800\";\n    function tabClicked(tab) {\n        if (tab == \"panel\") {\n            setVisible;\n        } else if (tab == \"filter\") {} else if (tab == \"select\") {}\n    }\n    const dropDownContent = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white w-full border-b border-gray-200 dark:border-gray-700\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"mr-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                onClick: tabClicked(\"panel\"),\n                                href: \"#\",\n                                className: \"inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    fill: \"none\",\n                                    viewBox: \"0 0 24 24\",\n                                    \"stroke-width\": \"1.5\",\n                                    stroke: \"currentColor\",\n                                    className: \"w-4 h-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        \"stroke-linecap\": \"round\",\n                                        \"stroke-linejoin\": \"round\",\n                                        d: \"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                                        lineNumber: 35,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                                lineNumber: 33,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"mr-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                onClick: tabClicked(\"filter\"),\n                                href: \"#\",\n                                className: \"inline-flex p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group\",\n                                \"aria-current\": \"page\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    fill: \"none\",\n                                    viewBox: \"0 0 24 24\",\n                                    \"stroke-width\": \"1.5\",\n                                    stroke: \"currentColor\",\n                                    className: \"w-4 h-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        \"stroke-linecap\": \"round\",\n                                        \"stroke-linejoin\": \"round\",\n                                        d: \"M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                                        lineNumber: 42,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                                lineNumber: 40,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"mr-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                onClick: tabClicked(\"select\"),\n                                href: \"#\",\n                                className: \"inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    fill: \"none\",\n                                    viewBox: \"0 0 24 24\",\n                                    \"stroke-width\": \"1.5\",\n                                    stroke: \"currentColor\",\n                                    className: \"w-4 h-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        \"stroke-linecap\": \"round\",\n                                        \"stroke-linejoin\": \"round\",\n                                        d: \"M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                                lineNumber: 47,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                lineNumber: 30,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(visibility, \" p-4 rounded-lg bg-gray-50 dark:bg-gray-800\"),\n                \"aria-labelledby\": \"profile-tab\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    class: \"text-sm text-gray-500 dark:text-gray-400\",\n                    children: [\n                        \"This is some placeholder content the \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                            class: \"font-medium text-gray-800 dark:text-white\",\n                            children: \"Profile tab's associated content\"\n                        }, void 0, false, {\n                            fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                            lineNumber: 56,\n                            columnNumber: 100\n                        }, undefined),\n                        \". Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                    lineNumber: 56,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                lineNumber: 55,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800\",\n                \"aria-labelledby\": \"dashboard-tab\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    class: \"text-sm text-gray-500 dark:text-gray-400\",\n                    children: [\n                        \"This is some placeholder content the \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                            class: \"font-medium text-gray-800 dark:text-white\",\n                            children: \"Dashboard tab's associated content\"\n                        }, void 0, false, {\n                            fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                            lineNumber: 59,\n                            columnNumber: 100\n                        }, undefined),\n                        \". Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                    lineNumber: 59,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800\",\n                \"aria-labelledby\": \"settings-tab\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    class: \"text-sm text-gray-500 dark:text-gray-400\",\n                    children: [\n                        \"This is some placeholder content the \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                            class: \"font-medium text-gray-800 dark:text-white\",\n                            children: \"Settings tab's associated content\"\n                        }, void 0, false, {\n                            fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                            lineNumber: 62,\n                            columnNumber: 100\n                        }, undefined),\n                        \". Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                    lineNumber: 62,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800\",\n                \"aria-labelledby\": \"contacts-tab\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    class: \"text-sm text-gray-500 dark:text-gray-400\",\n                    children: [\n                        \"This is some placeholder content the \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                            class: \"font-medium text-gray-800 dark:text-white\",\n                            children: \"Contacts tab's associated content\"\n                        }, void 0, false, {\n                            fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                            lineNumber: 65,\n                            columnNumber: 100\n                        }, undefined),\n                        \". Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                    lineNumber: 65,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n    const onClickHandler = (option)=>{\n        hide();\n        if (option === \"create\") {\n            props.api.applyTransaction({\n                add: [\n                    {}\n                ]\n            });\n        }\n        if (option === \"delete\") {\n            props.api.applyTransaction({\n                remove: [\n                    props.data\n                ]\n            });\n        }\n        if (option === \"edit\") {\n            props.api.startEditingCell({\n                rowIndex: props.rowIndex,\n                colKey: \"make\"\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tippyjs_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        ref: tippyRef,\n        content: dropDownContent,\n        visible: visible,\n        onClickOutside: hide,\n        allowHTML: true,\n        arrow: false,\n        appendTo: document.body,\n        interactive: true,\n        placement: \"right\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: \"btn btn-primary\",\n            onClick: visible ? hide : show,\n            children: \"Action\"\n        }, void 0, false, {\n            fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n            lineNumber: 102,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n        lineNumber: 91,\n        columnNumber: 5\n    }, undefined);\n};\n_s(GridPopupMenu, \"zWgbPaWKNTC77JgGszy8jO1lO4Q=\");\n_c = GridPopupMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GridPopupMenu);\nvar _c;\n$RefreshReg$(_c, \"GridPopupMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dyaWRQb3B1cE1lbnUvZ3JpZFBvcHVwTWVudS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5QztBQUNmO0FBQ1M7QUFFbkMsTUFBTUksZ0JBQWdCLENBQUNDLFFBQVU7O0lBQy9CLE1BQU1DLFdBQVdMLDZDQUFNQTtJQUN2QixNQUFNLENBQUNNLFNBQVNDLFdBQVcsR0FBR1IsK0NBQVFBLENBQUMsS0FBSztJQUM1QyxNQUFNLENBQUNTLFdBQVdDLGFBQWEsR0FBR1YsK0NBQVFBLENBQUM7SUFFM0MsTUFBTVcsT0FBTyxJQUFNSCxXQUFXLElBQUk7SUFDbEMsTUFBTUksT0FBTyxJQUFNSixXQUFXLEtBQUs7SUFHbkMsTUFBT0ssV0FBVztJQUVsQixTQUFTQyxXQUFXQyxHQUFHLEVBQUM7UUFDdEIsSUFBR0EsT0FBSyxTQUFTO1lBQ2ZQO1FBQ0YsT0FDSyxJQUFHTyxPQUFLLFVBQVUsQ0FFdkIsT0FDSyxJQUFHQSxPQUFLLFVBQVUsQ0FFdkIsQ0FBQztJQUNIO0lBRUEsTUFBTUMsZ0NBQ0o7OzBCQUNBLDhEQUFDQztnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ0M7b0JBQUdELFdBQVU7O3NDQUNWLDhEQUFDRTs0QkFBR0YsV0FBVTtzQ0FDViw0RUFBQ0c7Z0NBQUVDLFNBQVNSLFdBQVc7Z0NBQVVTLE1BQUs7Z0NBQUlMLFdBQVU7MENBQ3BELDRFQUFDTTtvQ0FBSUMsT0FBTTtvQ0FBNkJDLE1BQUs7b0NBQU9DLFNBQVE7b0NBQVlDLGdCQUFhO29DQUFNQyxRQUFPO29DQUFlWCxXQUFVOzhDQUN6SCw0RUFBQ1k7d0NBQUtDLGtCQUFlO3dDQUFRQyxtQkFBZ0I7d0NBQVFDLEdBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FJN0QsOERBQUNiOzRCQUFHRixXQUFVO3NDQUNWLDRFQUFDRztnQ0FBRUMsU0FBU1IsV0FBVztnQ0FBV1MsTUFBSztnQ0FBSUwsV0FBVTtnQ0FBNkhnQixnQkFBYTswQ0FDL0wsNEVBQUNWO29DQUFJQyxPQUFNO29DQUE2QkMsTUFBSztvQ0FBT0MsU0FBUTtvQ0FBWUMsZ0JBQWE7b0NBQU1DLFFBQU87b0NBQWVYLFdBQVU7OENBQ3pILDRFQUFDWTt3Q0FBS0Msa0JBQWU7d0NBQVFDLG1CQUFnQjt3Q0FBUUMsR0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUk3RCw4REFBQ2I7NEJBQUdGLFdBQVU7c0NBQ1YsNEVBQUNHO2dDQUFFQyxTQUFTUixXQUFXO2dDQUFXUyxNQUFLO2dDQUFJTCxXQUFVOzBDQUNyRCw0RUFBQ007b0NBQUlDLE9BQU07b0NBQTZCQyxNQUFLO29DQUFPQyxTQUFRO29DQUFZQyxnQkFBYTtvQ0FBTUMsUUFBTztvQ0FBZVgsV0FBVTs4Q0FDekgsNEVBQUNZO3dDQUFLQyxrQkFBZTt3Q0FBUUMsbUJBQWdCO3dDQUFRQyxHQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNckUsOERBQUNoQjtnQkFBSUMsV0FBVyxHQUFjLE9BQVhpQixZQUFXO2dCQUE4Q0MsbUJBQWdCOzBCQUN0Riw0RUFBQ0M7b0JBQUVDLE9BQU07O3dCQUEyQztzQ0FBcUMsOERBQUNDOzRCQUFPRCxPQUFNO3NDQUE0Qzs7Ozs7O3dCQUF5Qzs7Ozs7Ozs7Ozs7OzBCQUVoTSw4REFBQ3JCO2dCQUFJcUIsT0FBTTtnQkFBb0RGLG1CQUFnQjswQkFDM0UsNEVBQUNDO29CQUFFQyxPQUFNOzt3QkFBMkM7c0NBQXFDLDhEQUFDQzs0QkFBT0QsT0FBTTtzQ0FBNEM7Ozs7Ozt3QkFBMkM7Ozs7Ozs7Ozs7OzswQkFFbE0sOERBQUNyQjtnQkFBSXFCLE9BQU07Z0JBQW9ERixtQkFBZ0I7MEJBQzNFLDRFQUFDQztvQkFBRUMsT0FBTTs7d0JBQTJDO3NDQUFxQyw4REFBQ0M7NEJBQU9ELE9BQU07c0NBQTRDOzs7Ozs7d0JBQTBDOzs7Ozs7Ozs7Ozs7MEJBRWpNLDhEQUFDckI7Z0JBQUlxQixPQUFNO2dCQUFvREYsbUJBQWdCOzBCQUMzRSw0RUFBQ0M7b0JBQUVDLE9BQU07O3dCQUEyQztzQ0FBcUMsOERBQUNDOzRCQUFPRCxPQUFNO3NDQUE0Qzs7Ozs7O3dCQUEwQzs7Ozs7Ozs7Ozs7Ozs7SUFNck0sTUFBTUUsaUJBQWlCLENBQUNDLFNBQVc7UUFDakM3QjtRQUNBLElBQUk2QixXQUFXLFVBQVU7WUFDdkJwQyxNQUFNcUMsR0FBRyxDQUFDQyxnQkFBZ0IsQ0FBQztnQkFDekJDLEtBQUs7b0JBQUMsQ0FBQztpQkFBRTtZQUNYO1FBQ0YsQ0FBQztRQUNELElBQUlILFdBQVcsVUFBVTtZQUN2QnBDLE1BQU1xQyxHQUFHLENBQUNDLGdCQUFnQixDQUFDO2dCQUFFRSxRQUFRO29CQUFDeEMsTUFBTXlDLElBQUk7aUJBQUM7WUFBQztRQUNwRCxDQUFDO1FBRUQsSUFBSUwsV0FBVyxRQUFRO1lBQ3JCcEMsTUFBTXFDLEdBQUcsQ0FBQ0ssZ0JBQWdCLENBQUM7Z0JBQ3pCQyxVQUFVM0MsTUFBTTJDLFFBQVE7Z0JBQ3hCQyxRQUFRO1lBQ1Y7UUFDRixDQUFDO0lBQ0g7SUFFQSxxQkFDRSw4REFBQzlDLHNEQUFLQTtRQUNKK0MsS0FBSzVDO1FBQ0w2QyxTQUFTbkM7UUFDVFQsU0FBU0E7UUFDVDZDLGdCQUFnQnhDO1FBQ2hCeUMsV0FBVyxJQUFJO1FBQ2ZDLE9BQU8sS0FBSztRQUNaQyxVQUFVQyxTQUFTQyxJQUFJO1FBQ3ZCQyxhQUFhLElBQUk7UUFDakJDLFdBQVU7a0JBRVYsNEVBQUNDO1lBQU8xQyxXQUFVO1lBQWtCSSxTQUFTZixVQUFVSyxPQUFPRCxJQUFJO3NCQUFFOzs7Ozs7Ozs7OztBQUsxRTtHQXRHTVA7S0FBQUE7QUF3R04sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ncmlkUG9wdXBNZW51L2dyaWRQb3B1cE1lbnUuanM/YjA1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVGlwcHkgZnJvbSAnQHRpcHB5anMvcmVhY3QnO1xyXG5cclxuY29uc3QgR3JpZFBvcHVwTWVudSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHRpcHB5UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFthY3RpdmVUYWIsIHNldEFjdGl2ZVRhYl0gPSB1c2VTdGF0ZSgnZmlsdGVyJykgIFxyXG5cclxuICBjb25zdCBzaG93ID0gKCkgPT4gc2V0VmlzaWJsZSh0cnVlKTtcclxuICBjb25zdCBoaWRlID0gKCkgPT4gc2V0VmlzaWJsZShmYWxzZSk7XHJcblxyXG5cclxuICBjb25zdCAgYnRuU3R5bGUgPSAnbS0xIHRleHQtd2hpdGUgYmctYmx1ZS03MDAgaG92ZXI6YmctYmx1ZS04MDAgZm9jdXM6cmluZy00IGZvY3VzOnJpbmctYmx1ZS0zMDAgZm9udC1tZWRpdW0gcm91bmRlZC1sZyB0ZXh0LXNtIHB4LTUgcHktMi41IG1yLTIgbWItMiBkYXJrOmJnLWJsdWUtNjAwIGRhcms6aG92ZXI6YmctYmx1ZS03MDAgZm9jdXM6b3V0bGluZS1ub25lIGRhcms6Zm9jdXM6cmluZy1ibHVlLTgwMCdcclxuXHJcbiAgZnVuY3Rpb24gdGFiQ2xpY2tlZCh0YWIpe1xyXG4gICAgaWYodGFiPT0ncGFuZWwnKSB7XHJcbiAgICAgIHNldFZpc2libGVcclxuICAgIH1cclxuICAgIGVsc2UgaWYodGFiPT0nZmlsdGVyJykge1xyXG5cclxuICAgIH1cclxuICAgIGVsc2UgaWYodGFiPT0nc2VsZWN0Jykge1xyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGRyb3BEb3duQ29udGVudCA9IChcclxuICAgIDw+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHctZnVsbCBib3JkZXItYiBib3JkZXItZ3JheS0yMDAgZGFyazpib3JkZXItZ3JheS03MDBcIj5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgLW1iLXB4IHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1jZW50ZXIgdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDBcIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1yLTJcIj5cclxuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RhYkNsaWNrZWQoJ3BhbmVsJyl9IGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggcC00IGJvcmRlci1iLTIgYm9yZGVyLXRyYW5zcGFyZW50IHJvdW5kZWQtdC1sZyBob3Zlcjp0ZXh0LWdyYXktNjAwIGhvdmVyOmJvcmRlci1ncmF5LTMwMCBkYXJrOmhvdmVyOnRleHQtZ3JheS0zMDAgZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIGNsYXNzTmFtZT1cInctNCBoLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgZD1cIk0zLjc1IDYuNzVoMTYuNU0zLjc1IDEyaDE2LjVtLTE2LjUgNS4yNWgxNi41XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXItMlwiPlxyXG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGFiQ2xpY2tlZCgnZmlsdGVyJyl9IGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggcC00IHRleHQtYmx1ZS02MDAgYm9yZGVyLWItMiBib3JkZXItYmx1ZS02MDAgcm91bmRlZC10LWxnIGFjdGl2ZSBkYXJrOnRleHQtYmx1ZS01MDAgZGFyazpib3JkZXItYmx1ZS01MDAgZ3JvdXBcIiBhcmlhLWN1cnJlbnQ9XCJwYWdlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBjbGFzc05hbWU9XCJ3LTQgaC00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNMTIgM2MyLjc1NSAwIDUuNDU1LjIzMiA4LjA4My42NzguNTMzLjA5LjkxNy41NTYuOTE3IDEuMDk2djEuMDQ0YTIuMjUgMi4yNSAwIDAxLS42NTkgMS41OTFsLTUuNDMyIDUuNDMyYTIuMjUgMi4yNSAwIDAwLS42NTkgMS41OTF2Mi45MjdhMi4yNSAyLjI1IDAgMDEtMS4yNDQgMi4wMTNMOS43NSAyMXYtNi41NjhhMi4yNSAyLjI1IDAgMDAtLjY1OS0xLjU5MUwzLjY1OSA3LjQwOUEyLjI1IDIuMjUgMCAwMTMgNS44MThWNC43NzRjMC0uNTQuMzg0LTEuMDA2LjkxNy0xLjA5NkE0OC4zMiA0OC4zMiAwIDAxMTIgM3pcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtci0yXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0YWJDbGlja2VkKCdzZWxlY3QnKX0gaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBwLTQgYm9yZGVyLWItMiBib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZC10LWxnIGhvdmVyOnRleHQtZ3JheS02MDAgaG92ZXI6Ym9yZGVyLWdyYXktMzAwIGRhcms6aG92ZXI6dGV4dC1ncmF5LTMwMCBncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgY2xhc3NOYW1lPVwidy00IGgtNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBkPVwiTTkgNC41djE1bTYtMTV2MTVtLTEwLjg3NSAwaDE1Ljc1Yy42MjEgMCAxLjEyNS0uNTA0IDEuMTI1LTEuMTI1VjUuNjI1YzAtLjYyMS0uNTA0LTEuMTI1LTEuMTI1LTEuMTI1SDQuMTI1QzMuNTA0IDQuNSAzIDUuMDA0IDMgNS42MjV2MTIuNzVjMCAuNjIxLjUwNCAxLjEyNSAxLjEyNSAxLjEyNXpcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3Zpc2liaWxpdHl9IHAtNCByb3VuZGVkLWxnIGJnLWdyYXktNTAgZGFyazpiZy1ncmF5LTgwMGB9IGFyaWEtbGFiZWxsZWRieT1cInByb2ZpbGUtdGFiXCI+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cInRleHQtc20gdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDBcIj5UaGlzIGlzIHNvbWUgcGxhY2Vob2xkZXIgY29udGVudCB0aGUgPHN0cm9uZyBjbGFzcz1cImZvbnQtbWVkaXVtIHRleHQtZ3JheS04MDAgZGFyazp0ZXh0LXdoaXRlXCI+UHJvZmlsZSB0YWIncyBhc3NvY2lhdGVkIGNvbnRlbnQ8L3N0cm9uZz4uIENsaWNraW5nIGFub3RoZXIgdGFiIHdpbGwgdG9nZ2xlIHRoZSB2aXNpYmlsaXR5IG9mIHRoaXMgb25lIGZvciB0aGUgbmV4dC4gVGhlIHRhYiBKYXZhU2NyaXB0IHN3YXBzIGNsYXNzZXMgdG8gY29udHJvbCB0aGUgY29udGVudCB2aXNpYmlsaXR5IGFuZCBzdHlsaW5nLjwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJoaWRkZW4gcC00IHJvdW5kZWQtbGcgYmctZ3JheS01MCBkYXJrOmJnLWdyYXktODAwXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZGFzaGJvYXJkLXRhYlwiPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+VGhpcyBpcyBzb21lIHBsYWNlaG9sZGVyIGNvbnRlbnQgdGhlIDxzdHJvbmcgY2xhc3M9XCJmb250LW1lZGl1bSB0ZXh0LWdyYXktODAwIGRhcms6dGV4dC13aGl0ZVwiPkRhc2hib2FyZCB0YWIncyBhc3NvY2lhdGVkIGNvbnRlbnQ8L3N0cm9uZz4uIENsaWNraW5nIGFub3RoZXIgdGFiIHdpbGwgdG9nZ2xlIHRoZSB2aXNpYmlsaXR5IG9mIHRoaXMgb25lIGZvciB0aGUgbmV4dC4gVGhlIHRhYiBKYXZhU2NyaXB0IHN3YXBzIGNsYXNzZXMgdG8gY29udHJvbCB0aGUgY29udGVudCB2aXNpYmlsaXR5IGFuZCBzdHlsaW5nLjwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJoaWRkZW4gcC00IHJvdW5kZWQtbGcgYmctZ3JheS01MCBkYXJrOmJnLWdyYXktODAwXCIgYXJpYS1sYWJlbGxlZGJ5PVwic2V0dGluZ3MtdGFiXCI+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cInRleHQtc20gdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDBcIj5UaGlzIGlzIHNvbWUgcGxhY2Vob2xkZXIgY29udGVudCB0aGUgPHN0cm9uZyBjbGFzcz1cImZvbnQtbWVkaXVtIHRleHQtZ3JheS04MDAgZGFyazp0ZXh0LXdoaXRlXCI+U2V0dGluZ3MgdGFiJ3MgYXNzb2NpYXRlZCBjb250ZW50PC9zdHJvbmc+LiBDbGlja2luZyBhbm90aGVyIHRhYiB3aWxsIHRvZ2dsZSB0aGUgdmlzaWJpbGl0eSBvZiB0aGlzIG9uZSBmb3IgdGhlIG5leHQuIFRoZSB0YWIgSmF2YVNjcmlwdCBzd2FwcyBjbGFzc2VzIHRvIGNvbnRyb2wgdGhlIGNvbnRlbnQgdmlzaWJpbGl0eSBhbmQgc3R5bGluZy48L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaGlkZGVuIHAtNCByb3VuZGVkLWxnIGJnLWdyYXktNTAgZGFyazpiZy1ncmF5LTgwMFwiIGFyaWEtbGFiZWxsZWRieT1cImNvbnRhY3RzLXRhYlwiPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+VGhpcyBpcyBzb21lIHBsYWNlaG9sZGVyIGNvbnRlbnQgdGhlIDxzdHJvbmcgY2xhc3M9XCJmb250LW1lZGl1bSB0ZXh0LWdyYXktODAwIGRhcms6dGV4dC13aGl0ZVwiPkNvbnRhY3RzIHRhYidzIGFzc29jaWF0ZWQgY29udGVudDwvc3Ryb25nPi4gQ2xpY2tpbmcgYW5vdGhlciB0YWIgd2lsbCB0b2dnbGUgdGhlIHZpc2liaWxpdHkgb2YgdGhpcyBvbmUgZm9yIHRoZSBuZXh0LiBUaGUgdGFiIEphdmFTY3JpcHQgc3dhcHMgY2xhc3NlcyB0byBjb250cm9sIHRoZSBjb250ZW50IHZpc2liaWxpdHkgYW5kIHN0eWxpbmcuPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG5cclxuICApO1xyXG5cclxuICBjb25zdCBvbkNsaWNrSGFuZGxlciA9IChvcHRpb24pID0+IHtcclxuICAgIGhpZGUoKTtcclxuICAgIGlmIChvcHRpb24gPT09ICdjcmVhdGUnKSB7XHJcbiAgICAgIHByb3BzLmFwaS5hcHBseVRyYW5zYWN0aW9uKHtcclxuICAgICAgICBhZGQ6IFt7fV0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKG9wdGlvbiA9PT0gJ2RlbGV0ZScpIHtcclxuICAgICAgcHJvcHMuYXBpLmFwcGx5VHJhbnNhY3Rpb24oeyByZW1vdmU6IFtwcm9wcy5kYXRhXSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAob3B0aW9uID09PSAnZWRpdCcpIHtcclxuICAgICAgcHJvcHMuYXBpLnN0YXJ0RWRpdGluZ0NlbGwoe1xyXG4gICAgICAgIHJvd0luZGV4OiBwcm9wcy5yb3dJbmRleCxcclxuICAgICAgICBjb2xLZXk6ICdtYWtlJyxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUaXBweVxyXG4gICAgICByZWY9e3RpcHB5UmVmfVxyXG4gICAgICBjb250ZW50PXtkcm9wRG93bkNvbnRlbnR9XHJcbiAgICAgIHZpc2libGU9e3Zpc2libGV9XHJcbiAgICAgIG9uQ2xpY2tPdXRzaWRlPXtoaWRlfVxyXG4gICAgICBhbGxvd0hUTUw9e3RydWV9XHJcbiAgICAgIGFycm93PXtmYWxzZX1cclxuICAgICAgYXBwZW5kVG89e2RvY3VtZW50LmJvZHl9XHJcbiAgICAgIGludGVyYWN0aXZlPXt0cnVlfVxyXG4gICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiXHJcbiAgICA+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17dmlzaWJsZSA/IGhpZGUgOiBzaG93fT5cclxuICAgICAgICBBY3Rpb25cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L1RpcHB5PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHcmlkUG9wdXBNZW51O1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSZWYiLCJSZWFjdCIsIlRpcHB5IiwiR3JpZFBvcHVwTWVudSIsInByb3BzIiwidGlwcHlSZWYiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsImFjdGl2ZVRhYiIsInNldEFjdGl2ZVRhYiIsInNob3ciLCJoaWRlIiwiYnRuU3R5bGUiLCJ0YWJDbGlja2VkIiwidGFiIiwiZHJvcERvd25Db250ZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwidWwiLCJsaSIsImEiLCJvbkNsaWNrIiwiaHJlZiIsInN2ZyIsInhtbG5zIiwiZmlsbCIsInZpZXdCb3giLCJzdHJva2Utd2lkdGgiLCJzdHJva2UiLCJwYXRoIiwic3Ryb2tlLWxpbmVjYXAiLCJzdHJva2UtbGluZWpvaW4iLCJkIiwiYXJpYS1jdXJyZW50IiwidmlzaWJpbGl0eSIsImFyaWEtbGFiZWxsZWRieSIsInAiLCJjbGFzcyIsInN0cm9uZyIsIm9uQ2xpY2tIYW5kbGVyIiwib3B0aW9uIiwiYXBpIiwiYXBwbHlUcmFuc2FjdGlvbiIsImFkZCIsInJlbW92ZSIsImRhdGEiLCJzdGFydEVkaXRpbmdDZWxsIiwicm93SW5kZXgiLCJjb2xLZXkiLCJyZWYiLCJjb250ZW50Iiwib25DbGlja091dHNpZGUiLCJhbGxvd0hUTUwiLCJhcnJvdyIsImFwcGVuZFRvIiwiZG9jdW1lbnQiLCJib2R5IiwiaW50ZXJhY3RpdmUiLCJwbGFjZW1lbnQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/gridPopupMenu/gridPopupMenu.js\n"));

/***/ })

});