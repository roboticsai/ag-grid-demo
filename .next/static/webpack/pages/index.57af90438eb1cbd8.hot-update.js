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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GridPopupMenu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _tippyjs_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tippyjs/react */ \"./node_modules/@tippyjs/react/dist/tippy-react.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction GridPopupMenu() {\n    _s();\n    const tippyRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        panel: \"hidden\",\n        filter: \"visible\"\n    });\n    const show = ()=>setVisible(true);\n    const hide = ()=>setVisible(false);\n    const btnStyle = \"m-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800\";\n    let panel_visibility, filter_visibility;\n    function tabClicked(tab) {\n        if (tab == \"panel\") {\n            setActiveTab({\n                panel: \"visible\",\n                filter: \"hidden\"\n            });\n        } else if (tab == \"filter\") {\n            setActiveTab({\n                panel: \"visible\",\n                filter: \"hidden\"\n            });\n        }\n    }\n    const dropDownContent = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white w-full border-b border-gray-200 dark:border-gray-700\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"mr-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                onClick: tabClicked(\"panel\"),\n                                href: \"#\",\n                                className: \"inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    fill: \"none\",\n                                    viewBox: \"0 0 24 24\",\n                                    \"stroke-width\": \"1.5\",\n                                    stroke: \"currentColor\",\n                                    className: \"w-4 h-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        \"stroke-linecap\": \"round\",\n                                        \"stroke-linejoin\": \"round\",\n                                        d: \"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                                lineNumber: 43,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"mr-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                onClick: tabClicked(\"filter\"),\n                                href: \"#\",\n                                className: \"inline-flex p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group\",\n                                \"aria-current\": \"page\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    fill: \"none\",\n                                    viewBox: \"0 0 24 24\",\n                                    \"stroke-width\": \"1.5\",\n                                    stroke: \"currentColor\",\n                                    className: \"w-4 h-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        \"stroke-linecap\": \"round\",\n                                        \"stroke-linejoin\": \"round\",\n                                        d: \"M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                                lineNumber: 50,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"mr-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                onClick: tabClicked(\"select\"),\n                                href: \"#\",\n                                className: \"inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    fill: \"none\",\n                                    viewBox: \"0 0 24 24\",\n                                    \"stroke-width\": \"1.5\",\n                                    stroke: \"currentColor\",\n                                    className: \"w-4 h-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        \"stroke-linecap\": \"round\",\n                                        \"stroke-linejoin\": \"round\",\n                                        d: \"M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                                lineNumber: 57,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                lineNumber: 40,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(panel_visibility, \" p-4 rounded-lg bg-gray-50 dark:bg-gray-800\"),\n                \"aria-labelledby\": \"profile-tab\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    class: \"text-sm text-gray-500 dark:text-gray-400\",\n                    children: [\n                        \"This is some placeholder content the \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                            class: \"font-medium text-gray-800 dark:text-white\",\n                            children: \"Profile tab's associated content\"\n                        }, void 0, false, {\n                            fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                            lineNumber: 66,\n                            columnNumber: 100\n                        }, this),\n                        \". Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                    lineNumber: 66,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                lineNumber: 65,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(filter_visibility, \" p-4 rounded-lg bg-gray-50 dark:bg-gray-800\"),\n                \"aria-labelledby\": \"dashboard-tab\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    class: \"text-sm text-gray-500 dark:text-gray-400\",\n                    children: [\n                        \"This is some placeholder content the \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                            class: \"font-medium text-gray-800 dark:text-white\",\n                            children: \"Dashboard tab's associated content\"\n                        }, void 0, false, {\n                            fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                            lineNumber: 69,\n                            columnNumber: 100\n                        }, this),\n                        \". Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                    lineNumber: 69,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800\",\n                \"aria-labelledby\": \"settings-tab\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    class: \"text-sm text-gray-500 dark:text-gray-400\",\n                    children: [\n                        \"This is some placeholder content the \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                            class: \"font-medium text-gray-800 dark:text-white\",\n                            children: \"Settings tab's associated content\"\n                        }, void 0, false, {\n                            fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                            lineNumber: 72,\n                            columnNumber: 100\n                        }, this),\n                        \". Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                    lineNumber: 72,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800\",\n                \"aria-labelledby\": \"contacts-tab\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    class: \"text-sm text-gray-500 dark:text-gray-400\",\n                    children: [\n                        \"This is some placeholder content the \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                            class: \"font-medium text-gray-800 dark:text-white\",\n                            children: \"Contacts tab's associated content\"\n                        }, void 0, false, {\n                            fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                            lineNumber: 75,\n                            columnNumber: 100\n                        }, this),\n                        \". Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                    lineNumber: 75,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n    const onClickHandler = (option)=>{\n        hide();\n        if (option === \"create\") {\n            props.api.applyTransaction({\n                add: [\n                    {}\n                ]\n            });\n        }\n        if (option === \"delete\") {\n            props.api.applyTransaction({\n                remove: [\n                    props.data\n                ]\n            });\n        }\n        if (option === \"edit\") {\n            props.api.startEditingCell({\n                rowIndex: props.rowIndex,\n                colKey: \"make\"\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tippyjs_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        ref: tippyRef,\n        content: dropDownContent,\n        visible: visible,\n        onClickOutside: hide,\n        allowHTML: true,\n        arrow: false,\n        appendTo: document.body,\n        interactive: true,\n        placement: \"right\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: \"btn btn-primary\",\n            onClick: visible ? hide : show,\n            children: \"Action\"\n        }, void 0, false, {\n            fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n            lineNumber: 112,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/dineshlinux/NextProjects/ag-grid-demo/components/gridPopupMenu/gridPopupMenu.js\",\n        lineNumber: 101,\n        columnNumber: 5\n    }, this);\n}\n_s(GridPopupMenu, \"mvKLDwNrWHucCHcGlS7R+/+r4Lw=\");\n_c = GridPopupMenu;\n;\nvar _c;\n$RefreshReg$(_c, \"GridPopupMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dyaWRQb3B1cE1lbnUvZ3JpZFBvcHVwTWVudS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFvRDtBQUMxQjtBQUNTO0FBRXBCLFNBQVNLLGdCQUFnQjs7SUFDdEMsTUFBTUMsV0FBV0wsNkNBQU1BO0lBQ3ZCLE1BQU0sQ0FBQ00sU0FBU0MsV0FBVyxHQUFHUiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzVDLE1BQU0sQ0FBQ1MsV0FBV0MsYUFBYSxHQUFHViwrQ0FBUUEsQ0FDeEM7UUFDRVcsT0FBTztRQUNQQyxRQUFRO0lBQ1Y7SUFHRixNQUFNQyxPQUFPLElBQU1MLFdBQVcsSUFBSTtJQUNsQyxNQUFNTSxPQUFPLElBQU1OLFdBQVcsS0FBSztJQUduQyxNQUFPTyxXQUFXO0lBRWxCLElBQUlDLGtCQUFpQkM7SUFFckIsU0FBU0MsV0FBV0MsR0FBRyxFQUFDO1FBQ3RCLElBQUdBLE9BQUssU0FBUztZQUNmVCxhQUFhO2dCQUNYQyxPQUFPO2dCQUNQQyxRQUFRO1lBQ1Y7UUFDRixPQUNLLElBQUdPLE9BQUssVUFBVTtZQUNyQlQsYUFBYTtnQkFDWEMsT0FBTztnQkFDUEMsUUFBUTtZQUNWO1FBQ0YsQ0FBQztJQUNIO0lBRUEsTUFBTVEsZ0NBQ0o7OzBCQUNBLDhEQUFDQztnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ0M7b0JBQUdELFdBQVU7O3NDQUNWLDhEQUFDRTs0QkFBR0YsV0FBVTtzQ0FDViw0RUFBQ0c7Z0NBQUVDLFNBQVNSLFdBQVc7Z0NBQVVTLE1BQUs7Z0NBQUlMLFdBQVU7MENBQ3BELDRFQUFDTTtvQ0FBSUMsT0FBTTtvQ0FBNkJDLE1BQUs7b0NBQU9DLFNBQVE7b0NBQVlDLGdCQUFhO29DQUFNQyxRQUFPO29DQUFlWCxXQUFVOzhDQUN6SCw0RUFBQ1k7d0NBQUtDLGtCQUFlO3dDQUFRQyxtQkFBZ0I7d0NBQVFDLEdBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FJN0QsOERBQUNiOzRCQUFHRixXQUFVO3NDQUNWLDRFQUFDRztnQ0FBRUMsU0FBU1IsV0FBVztnQ0FBV1MsTUFBSztnQ0FBSUwsV0FBVTtnQ0FBNkhnQixnQkFBYTswQ0FDL0wsNEVBQUNWO29DQUFJQyxPQUFNO29DQUE2QkMsTUFBSztvQ0FBT0MsU0FBUTtvQ0FBWUMsZ0JBQWE7b0NBQU1DLFFBQU87b0NBQWVYLFdBQVU7OENBQ3pILDRFQUFDWTt3Q0FBS0Msa0JBQWU7d0NBQVFDLG1CQUFnQjt3Q0FBUUMsR0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUk3RCw4REFBQ2I7NEJBQUdGLFdBQVU7c0NBQ1YsNEVBQUNHO2dDQUFFQyxTQUFTUixXQUFXO2dDQUFXUyxNQUFLO2dDQUFJTCxXQUFVOzBDQUNyRCw0RUFBQ007b0NBQUlDLE9BQU07b0NBQTZCQyxNQUFLO29DQUFPQyxTQUFRO29DQUFZQyxnQkFBYTtvQ0FBTUMsUUFBTztvQ0FBZVgsV0FBVTs4Q0FDekgsNEVBQUNZO3dDQUFLQyxrQkFBZTt3Q0FBUUMsbUJBQWdCO3dDQUFRQyxHQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNckUsOERBQUNoQjtnQkFBSUMsV0FBVyxHQUFvQixPQUFqQk4sa0JBQWlCO2dCQUE4Q3VCLG1CQUFnQjswQkFDNUYsNEVBQUNDO29CQUFFQyxPQUFNOzt3QkFBMkM7c0NBQXFDLDhEQUFDQzs0QkFBT0QsT0FBTTtzQ0FBNEM7Ozs7Ozt3QkFBeUM7Ozs7Ozs7Ozs7OzswQkFFaE0sOERBQUNwQjtnQkFBSUMsV0FBVyxHQUFxQixPQUFsQkwsbUJBQWtCO2dCQUE4Q3NCLG1CQUFnQjswQkFDL0YsNEVBQUNDO29CQUFFQyxPQUFNOzt3QkFBMkM7c0NBQXFDLDhEQUFDQzs0QkFBT0QsT0FBTTtzQ0FBNEM7Ozs7Ozt3QkFBMkM7Ozs7Ozs7Ozs7OzswQkFFbE0sOERBQUNwQjtnQkFBSW9CLE9BQU07Z0JBQW9ERixtQkFBZ0I7MEJBQzNFLDRFQUFDQztvQkFBRUMsT0FBTTs7d0JBQTJDO3NDQUFxQyw4REFBQ0M7NEJBQU9ELE9BQU07c0NBQTRDOzs7Ozs7d0JBQTBDOzs7Ozs7Ozs7Ozs7MEJBRWpNLDhEQUFDcEI7Z0JBQUlvQixPQUFNO2dCQUFvREYsbUJBQWdCOzBCQUMzRSw0RUFBQ0M7b0JBQUVDLE9BQU07O3dCQUEyQztzQ0FBcUMsOERBQUNDOzRCQUFPRCxPQUFNO3NDQUE0Qzs7Ozs7O3dCQUEwQzs7Ozs7Ozs7Ozs7Ozs7SUFNck0sTUFBTUUsaUJBQWlCLENBQUNDLFNBQVc7UUFDakM5QjtRQUNBLElBQUk4QixXQUFXLFVBQVU7WUFDdkJDLE1BQU1DLEdBQUcsQ0FBQ0MsZ0JBQWdCLENBQUM7Z0JBQ3pCQyxLQUFLO29CQUFDLENBQUM7aUJBQUU7WUFDWDtRQUNGLENBQUM7UUFDRCxJQUFJSixXQUFXLFVBQVU7WUFDdkJDLE1BQU1DLEdBQUcsQ0FBQ0MsZ0JBQWdCLENBQUM7Z0JBQUVFLFFBQVE7b0JBQUNKLE1BQU1LLElBQUk7aUJBQUM7WUFBQztRQUNwRCxDQUFDO1FBRUQsSUFBSU4sV0FBVyxRQUFRO1lBQ3JCQyxNQUFNQyxHQUFHLENBQUNLLGdCQUFnQixDQUFDO2dCQUN6QkMsVUFBVVAsTUFBTU8sUUFBUTtnQkFDeEJDLFFBQVE7WUFDVjtRQUNGLENBQUM7SUFDSDtJQUVBLHFCQUNFLDhEQUFDakQsc0RBQUtBO1FBQ0prRCxLQUFLaEQ7UUFDTGlELFNBQVNuQztRQUNUYixTQUFTQTtRQUNUaUQsZ0JBQWdCMUM7UUFDaEIyQyxXQUFXLElBQUk7UUFDZkMsT0FBTyxLQUFLO1FBQ1pDLFVBQVVDLFNBQVNDLElBQUk7UUFDdkJDLGFBQWEsSUFBSTtRQUNqQkMsV0FBVTtrQkFFViw0RUFBQ0M7WUFBTzFDLFdBQVU7WUFBa0JJLFNBQVNuQixVQUFVTyxPQUFPRCxJQUFJO3NCQUFFOzs7Ozs7Ozs7OztBQUsxRSxDQUFDO0dBaEh1QlI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ncmlkUG9wdXBNZW51L2dyaWRQb3B1cE1lbnUuanM/YjA1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUaXBweSBmcm9tICdAdGlwcHlqcy9yZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHcmlkUG9wdXBNZW51KCkge1xyXG4gIGNvbnN0IHRpcHB5UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpOyBcclxuICBjb25zdCBbYWN0aXZlVGFiLCBzZXRBY3RpdmVUYWJdID0gdXNlU3RhdGUoXHJcbiAgICB7XHJcbiAgICAgIHBhbmVsOiAnaGlkZGVuJyxcclxuICAgICAgZmlsdGVyOiAndmlzaWJsZSdcclxuICAgIH1cclxuICApXHJcblxyXG4gIGNvbnN0IHNob3cgPSAoKSA9PiBzZXRWaXNpYmxlKHRydWUpO1xyXG4gIGNvbnN0IGhpZGUgPSAoKSA9PiBzZXRWaXNpYmxlKGZhbHNlKTtcclxuXHJcblxyXG4gIGNvbnN0ICBidG5TdHlsZSA9ICdtLTEgdGV4dC13aGl0ZSBiZy1ibHVlLTcwMCBob3ZlcjpiZy1ibHVlLTgwMCBmb2N1czpyaW5nLTQgZm9jdXM6cmluZy1ibHVlLTMwMCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gcHgtNSBweS0yLjUgbXItMiBtYi0yIGRhcms6YmctYmx1ZS02MDAgZGFyazpob3ZlcjpiZy1ibHVlLTcwMCBmb2N1czpvdXRsaW5lLW5vbmUgZGFyazpmb2N1czpyaW5nLWJsdWUtODAwJ1xyXG5cclxuICBsZXQgcGFuZWxfdmlzaWJpbGl0eSxmaWx0ZXJfdmlzaWJpbGl0eVxyXG5cclxuICBmdW5jdGlvbiB0YWJDbGlja2VkKHRhYil7XHJcbiAgICBpZih0YWI9PSdwYW5lbCcpIHtcclxuICAgICAgc2V0QWN0aXZlVGFiKHtcclxuICAgICAgICBwYW5lbDogJ3Zpc2libGUnLFxyXG4gICAgICAgIGZpbHRlcjogJ2hpZGRlbidcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIGVsc2UgaWYodGFiPT0nZmlsdGVyJykge1xyXG4gICAgICBzZXRBY3RpdmVUYWIoe1xyXG4gICAgICAgIHBhbmVsOiAndmlzaWJsZScsXHJcbiAgICAgICAgZmlsdGVyOiAnaGlkZGVuJ1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZHJvcERvd25Db250ZW50ID0gKFxyXG4gICAgPD5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgdy1mdWxsIGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCBkYXJrOmJvcmRlci1ncmF5LTcwMFwiPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCAtbWItcHggdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWNlbnRlciB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXItMlwiPlxyXG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGFiQ2xpY2tlZCgncGFuZWwnKX0gaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBwLTQgYm9yZGVyLWItMiBib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZC10LWxnIGhvdmVyOnRleHQtZ3JheS02MDAgaG92ZXI6Ym9yZGVyLWdyYXktMzAwIGRhcms6aG92ZXI6dGV4dC1ncmF5LTMwMCBncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgY2xhc3NOYW1lPVwidy00IGgtNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBkPVwiTTMuNzUgNi43NWgxNi41TTMuNzUgMTJoMTYuNW0tMTYuNSA1LjI1aDE2LjVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtci0yXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0YWJDbGlja2VkKCdmaWx0ZXInKX0gaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBwLTQgdGV4dC1ibHVlLTYwMCBib3JkZXItYi0yIGJvcmRlci1ibHVlLTYwMCByb3VuZGVkLXQtbGcgYWN0aXZlIGRhcms6dGV4dC1ibHVlLTUwMCBkYXJrOmJvcmRlci1ibHVlLTUwMCBncm91cFwiIGFyaWEtY3VycmVudD1cInBhZ2VcIj5cclxuICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIGNsYXNzTmFtZT1cInctNCBoLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgZD1cIk0xMiAzYzIuNzU1IDAgNS40NTUuMjMyIDguMDgzLjY3OC41MzMuMDkuOTE3LjU1Ni45MTcgMS4wOTZ2MS4wNDRhMi4yNSAyLjI1IDAgMDEtLjY1OSAxLjU5MWwtNS40MzIgNS40MzJhMi4yNSAyLjI1IDAgMDAtLjY1OSAxLjU5MXYyLjkyN2EyLjI1IDIuMjUgMCAwMS0xLjI0NCAyLjAxM0w5Ljc1IDIxdi02LjU2OGEyLjI1IDIuMjUgMCAwMC0uNjU5LTEuNTkxTDMuNjU5IDcuNDA5QTIuMjUgMi4yNSAwIDAxMyA1LjgxOFY0Ljc3NGMwLS41NC4zODQtMS4wMDYuOTE3LTEuMDk2QTQ4LjMyIDQ4LjMyIDAgMDExMiAzelwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1yLTJcIj5cclxuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RhYkNsaWNrZWQoJ3NlbGVjdCcpfSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IHAtNCBib3JkZXItYi0yIGJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkLXQtbGcgaG92ZXI6dGV4dC1ncmF5LTYwMCBob3Zlcjpib3JkZXItZ3JheS0zMDAgZGFyazpob3Zlcjp0ZXh0LWdyYXktMzAwIGdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBjbGFzc05hbWU9XCJ3LTQgaC00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNOSA0LjV2MTVtNi0xNXYxNW0tMTAuODc1IDBoMTUuNzVjLjYyMSAwIDEuMTI1LS41MDQgMS4xMjUtMS4xMjVWNS42MjVjMC0uNjIxLS41MDQtMS4xMjUtMS4xMjUtMS4xMjVINC4xMjVDMy41MDQgNC41IDMgNS4wMDQgMyA1LjYyNXYxMi43NWMwIC42MjEuNTA0IDEuMTI1IDEuMTI1IDEuMTI1elwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cGFuZWxfdmlzaWJpbGl0eX0gcC00IHJvdW5kZWQtbGcgYmctZ3JheS01MCBkYXJrOmJnLWdyYXktODAwYH0gYXJpYS1sYWJlbGxlZGJ5PVwicHJvZmlsZS10YWJcIj5cclxuICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPlRoaXMgaXMgc29tZSBwbGFjZWhvbGRlciBjb250ZW50IHRoZSA8c3Ryb25nIGNsYXNzPVwiZm9udC1tZWRpdW0gdGV4dC1ncmF5LTgwMCBkYXJrOnRleHQtd2hpdGVcIj5Qcm9maWxlIHRhYidzIGFzc29jaWF0ZWQgY29udGVudDwvc3Ryb25nPi4gQ2xpY2tpbmcgYW5vdGhlciB0YWIgd2lsbCB0b2dnbGUgdGhlIHZpc2liaWxpdHkgb2YgdGhpcyBvbmUgZm9yIHRoZSBuZXh0LiBUaGUgdGFiIEphdmFTY3JpcHQgc3dhcHMgY2xhc3NlcyB0byBjb250cm9sIHRoZSBjb250ZW50IHZpc2liaWxpdHkgYW5kIHN0eWxpbmcuPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2ZpbHRlcl92aXNpYmlsaXR5fSBwLTQgcm91bmRlZC1sZyBiZy1ncmF5LTUwIGRhcms6YmctZ3JheS04MDBgfSBhcmlhLWxhYmVsbGVkYnk9XCJkYXNoYm9hcmQtdGFiXCI+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cInRleHQtc20gdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDBcIj5UaGlzIGlzIHNvbWUgcGxhY2Vob2xkZXIgY29udGVudCB0aGUgPHN0cm9uZyBjbGFzcz1cImZvbnQtbWVkaXVtIHRleHQtZ3JheS04MDAgZGFyazp0ZXh0LXdoaXRlXCI+RGFzaGJvYXJkIHRhYidzIGFzc29jaWF0ZWQgY29udGVudDwvc3Ryb25nPi4gQ2xpY2tpbmcgYW5vdGhlciB0YWIgd2lsbCB0b2dnbGUgdGhlIHZpc2liaWxpdHkgb2YgdGhpcyBvbmUgZm9yIHRoZSBuZXh0LiBUaGUgdGFiIEphdmFTY3JpcHQgc3dhcHMgY2xhc3NlcyB0byBjb250cm9sIHRoZSBjb250ZW50IHZpc2liaWxpdHkgYW5kIHN0eWxpbmcuPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImhpZGRlbiBwLTQgcm91bmRlZC1sZyBiZy1ncmF5LTUwIGRhcms6YmctZ3JheS04MDBcIiBhcmlhLWxhYmVsbGVkYnk9XCJzZXR0aW5ncy10YWJcIj5cclxuICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPlRoaXMgaXMgc29tZSBwbGFjZWhvbGRlciBjb250ZW50IHRoZSA8c3Ryb25nIGNsYXNzPVwiZm9udC1tZWRpdW0gdGV4dC1ncmF5LTgwMCBkYXJrOnRleHQtd2hpdGVcIj5TZXR0aW5ncyB0YWIncyBhc3NvY2lhdGVkIGNvbnRlbnQ8L3N0cm9uZz4uIENsaWNraW5nIGFub3RoZXIgdGFiIHdpbGwgdG9nZ2xlIHRoZSB2aXNpYmlsaXR5IG9mIHRoaXMgb25lIGZvciB0aGUgbmV4dC4gVGhlIHRhYiBKYXZhU2NyaXB0IHN3YXBzIGNsYXNzZXMgdG8gY29udHJvbCB0aGUgY29udGVudCB2aXNpYmlsaXR5IGFuZCBzdHlsaW5nLjwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJoaWRkZW4gcC00IHJvdW5kZWQtbGcgYmctZ3JheS01MCBkYXJrOmJnLWdyYXktODAwXCIgYXJpYS1sYWJlbGxlZGJ5PVwiY29udGFjdHMtdGFiXCI+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cInRleHQtc20gdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDBcIj5UaGlzIGlzIHNvbWUgcGxhY2Vob2xkZXIgY29udGVudCB0aGUgPHN0cm9uZyBjbGFzcz1cImZvbnQtbWVkaXVtIHRleHQtZ3JheS04MDAgZGFyazp0ZXh0LXdoaXRlXCI+Q29udGFjdHMgdGFiJ3MgYXNzb2NpYXRlZCBjb250ZW50PC9zdHJvbmc+LiBDbGlja2luZyBhbm90aGVyIHRhYiB3aWxsIHRvZ2dsZSB0aGUgdmlzaWJpbGl0eSBvZiB0aGlzIG9uZSBmb3IgdGhlIG5leHQuIFRoZSB0YWIgSmF2YVNjcmlwdCBzd2FwcyBjbGFzc2VzIHRvIGNvbnRyb2wgdGhlIGNvbnRlbnQgdmlzaWJpbGl0eSBhbmQgc3R5bGluZy48L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcblxyXG4gICk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tIYW5kbGVyID0gKG9wdGlvbikgPT4ge1xyXG4gICAgaGlkZSgpO1xyXG4gICAgaWYgKG9wdGlvbiA9PT0gJ2NyZWF0ZScpIHtcclxuICAgICAgcHJvcHMuYXBpLmFwcGx5VHJhbnNhY3Rpb24oe1xyXG4gICAgICAgIGFkZDogW3t9XSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAob3B0aW9uID09PSAnZGVsZXRlJykge1xyXG4gICAgICBwcm9wcy5hcGkuYXBwbHlUcmFuc2FjdGlvbih7IHJlbW92ZTogW3Byb3BzLmRhdGFdIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvcHRpb24gPT09ICdlZGl0Jykge1xyXG4gICAgICBwcm9wcy5hcGkuc3RhcnRFZGl0aW5nQ2VsbCh7XHJcbiAgICAgICAgcm93SW5kZXg6IHByb3BzLnJvd0luZGV4LFxyXG4gICAgICAgIGNvbEtleTogJ21ha2UnLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRpcHB5XHJcbiAgICAgIHJlZj17dGlwcHlSZWZ9XHJcbiAgICAgIGNvbnRlbnQ9e2Ryb3BEb3duQ29udGVudH1cclxuICAgICAgdmlzaWJsZT17dmlzaWJsZX1cclxuICAgICAgb25DbGlja091dHNpZGU9e2hpZGV9XHJcbiAgICAgIGFsbG93SFRNTD17dHJ1ZX1cclxuICAgICAgYXJyb3c9e2ZhbHNlfVxyXG4gICAgICBhcHBlbmRUbz17ZG9jdW1lbnQuYm9keX1cclxuICAgICAgaW50ZXJhY3RpdmU9e3RydWV9XHJcbiAgICAgIHBsYWNlbWVudD1cInJpZ2h0XCJcclxuICAgID5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXt2aXNpYmxlID8gaGlkZSA6IHNob3d9PlxyXG4gICAgICAgIEFjdGlvblxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvVGlwcHk+XHJcbiAgKTtcclxufTsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJSZWFjdCIsIlRpcHB5IiwiR3JpZFBvcHVwTWVudSIsInRpcHB5UmVmIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJhY3RpdmVUYWIiLCJzZXRBY3RpdmVUYWIiLCJwYW5lbCIsImZpbHRlciIsInNob3ciLCJoaWRlIiwiYnRuU3R5bGUiLCJwYW5lbF92aXNpYmlsaXR5IiwiZmlsdGVyX3Zpc2liaWxpdHkiLCJ0YWJDbGlja2VkIiwidGFiIiwiZHJvcERvd25Db250ZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwidWwiLCJsaSIsImEiLCJvbkNsaWNrIiwiaHJlZiIsInN2ZyIsInhtbG5zIiwiZmlsbCIsInZpZXdCb3giLCJzdHJva2Utd2lkdGgiLCJzdHJva2UiLCJwYXRoIiwic3Ryb2tlLWxpbmVjYXAiLCJzdHJva2UtbGluZWpvaW4iLCJkIiwiYXJpYS1jdXJyZW50IiwiYXJpYS1sYWJlbGxlZGJ5IiwicCIsImNsYXNzIiwic3Ryb25nIiwib25DbGlja0hhbmRsZXIiLCJvcHRpb24iLCJwcm9wcyIsImFwaSIsImFwcGx5VHJhbnNhY3Rpb24iLCJhZGQiLCJyZW1vdmUiLCJkYXRhIiwic3RhcnRFZGl0aW5nQ2VsbCIsInJvd0luZGV4IiwiY29sS2V5IiwicmVmIiwiY29udGVudCIsIm9uQ2xpY2tPdXRzaWRlIiwiYWxsb3dIVE1MIiwiYXJyb3ciLCJhcHBlbmRUbyIsImRvY3VtZW50IiwiYm9keSIsImludGVyYWN0aXZlIiwicGxhY2VtZW50IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/gridPopupMenu/gridPopupMenu.js\n"));

/***/ })

});