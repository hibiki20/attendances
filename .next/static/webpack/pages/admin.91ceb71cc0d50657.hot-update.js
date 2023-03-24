"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin",{

/***/ "./pages/admin.js":
/*!************************!*\
  !*** ./pages/admin.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Admin; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Admin_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Admin.module.scss */ \"./styles/Admin.module.scss\");\n/* harmony import */ var _styles_Admin_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Admin_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Admin() {\n    _s();\n    const [attendanceList, setAttendanceList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedName, setSelectedName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const localStorageData = {};\n        for(let i = 0; i < localStorage.length; i++){\n            const key = localStorage.key(i);\n            const value = localStorage.getItem(key);\n            const [name, status, time] = value.split(\",\");\n            if (!localStorageData[name]) {\n                localStorageData[name] = {\n                    attendances: [],\n                    departures: []\n                };\n            }\n            if (status === \"出勤\") {\n                localStorageData[name].attendances.push(time);\n            } else if (status === \"退勤\") {\n                localStorageData[name].departures.push(time);\n            }\n        }\n        setAttendanceList(localStorageData);\n    }, []);\n    const handleClick = (name)=>{\n        setSelectedName(name);\n    };\n    const renderAttendance = ()=>{\n        if (!selectedName || !attendanceList[selectedName]) {\n            return null;\n        }\n        const attendances = [];\n        const { attendances: attendanceTimes , departures: departureTimes  } = attendanceList[selectedName];\n        for(let i = 0; i < attendanceList[selectedName].attendances.length; i++){\n            attendances.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: [\n                    \"出勤 (\",\n                    attendanceList[selectedName].attendances[i],\n                    \")\"\n                ]\n            }, \"attendance-\".concat(i), true, {\n                fileName: \"/Users/user/Desktop/thanks/pages/admin.js\",\n                lineNumber: 44,\n                columnNumber: 15\n            }, this));\n            if (attendanceList[selectedName].departures[i]) {\n                attendances.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: [\n                        \"退勤 (\",\n                        attendanceList[selectedName].departures[i],\n                        \")\"\n                    ]\n                }, \"departure-\".concat(i), true, {\n                    fileName: \"/Users/user/Desktop/thanks/pages/admin.js\",\n                    lineNumber: 50,\n                    columnNumber: 17\n                }, this));\n            }\n        }\n        let i = 0;\n        let j = 0;\n        while(i < attendanceList[selectedName].attendances.length || j < attendanceList[selectedName].departures.length){\n            if (attendanceList[selectedName].attendances[i]) {\n                attendances.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: [\n                        \"出勤 (\",\n                        attendanceList[selectedName].attendances[i],\n                        \")\"\n                    ]\n                }, \"attendance-\".concat(i), true, {\n                    fileName: \"/Users/user/Desktop/thanks/pages/admin.js\",\n                    lineNumber: 62,\n                    columnNumber: 13\n                }, this));\n                i++;\n            }\n            if (attendanceList[selectedName].departures[j]) {\n                attendances.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: [\n                        \"退勤 (\",\n                        attendanceList[selectedName].departures[j],\n                        \")\"\n                    ]\n                }, \"departure-\".concat(j), true, {\n                    fileName: \"/Users/user/Desktop/thanks/pages/admin.js\",\n                    lineNumber: 70,\n                    columnNumber: 7\n                }, this));\n                j++;\n            }\n        }\n        const latestAttendanceTime = attendanceTimes[attendanceTimes.length - 1];\n        const latestAttendanceStatus = \"出勤\";\n        let latestDepartureTime = \"\";\n        let timeDiff = \"\";\n        if (departureTimes.length > 0) {\n            latestDepartureTime = departureTimes[departureTimes.length - 1];\n            if (latestAttendanceTime) {\n                const diff = (new Date(latestDepartureTime) - new Date(latestAttendanceTime)) / (1000 * 60);\n                timeDiff = \"\".concat(Math.floor(diff / 60), \"時間 \").concat(Math.floor(diff % 60), \"分\");\n            }\n        }\n        if (latestDepartureTime) {\n            attendances.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: [\n                    selectedName,\n                    \"の退勤 (\",\n                    latestDepartureTime,\n                    \")\"\n                ]\n            }, \"departure-\".concat(departureTimes.length), true, {\n                fileName: \"/Users/user/Desktop/thanks/pages/admin.js\",\n                lineNumber: 92,\n                columnNumber: 13\n            }, this));\n        }\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: [\n                        selectedName,\n                        \"の勤務記録\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/user/Desktop/thanks/pages/admin.js\",\n                    lineNumber: 100,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: attendances\n                }, void 0, false, {\n                    fileName: \"/Users/user/Desktop/thanks/pages/admin.js\",\n                    lineNumber: 101,\n                    columnNumber: 13\n                }, this),\n                timeDiff && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        selectedName,\n                        \"の勤務時間: \",\n                        timeDiff\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/user/Desktop/thanks/pages/admin.js\",\n                    lineNumber: 103,\n                    columnNumber: 15\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/user/Desktop/thanks/pages/admin.js\",\n            lineNumber: 99,\n            columnNumber: 11\n        }, this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Admin_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/thanks\",\n                children: \"ホームに戻る\"\n            }, void 0, false, {\n                fileName: \"/Users/user/Desktop/thanks/pages/admin.js\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"出勤状況\"\n            }, void 0, false, {\n                fileName: \"/Users/user/Desktop/thanks/pages/admin.js\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: Object.keys(attendanceList).map((name, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        onClick: ()=>handleClick(name),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#\",\n                            children: name\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Desktop/thanks/pages/admin.js\",\n                            lineNumber: 118,\n                            columnNumber: 13\n                        }, this)\n                    }, index, false, {\n                        fileName: \"/Users/user/Desktop/thanks/pages/admin.js\",\n                        lineNumber: 117,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/user/Desktop/thanks/pages/admin.js\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, this),\n            renderAttendance()\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Desktop/thanks/pages/admin.js\",\n        lineNumber: 112,\n        columnNumber: 5\n    }, this);\n}\n_s(Admin, \"s1eRfOQmnmlZOS/VzyIz/Sn524s=\");\n_c = Admin;\nvar _c;\n$RefreshReg$(_c, \"Admin\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0w7MEJBQ0VNLE9BQU9DLElBQUksQ0FBQ3pDLGdCQUFnQjBDLEdBQUcsQ0FBQyxDQUFDL0IsTUFBTWdDLHNCQUN0Qyw4REFBQ3JCO3dCQUFlc0IsU0FBUyxJQUFNMUIsWUFBWVA7a0NBQ3pDLDRFQUFDa0M7NEJBQUVQLE1BQUs7c0NBQUszQjs7Ozs7O3VCQUROZ0M7Ozs7Ozs7Ozs7WUFLWnhCOzs7Ozs7O0FBR1AsQ0FBQztHQXhIdUJwQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hZG1pbi5qcz84NWMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9BZG1pbi5tb2R1bGUuc2Nzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZG1pbigpIHtcbiAgICBjb25zdCBbYXR0ZW5kYW5jZUxpc3QsIHNldEF0dGVuZGFuY2VMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbc2VsZWN0ZWROYW1lLCBzZXRTZWxlY3RlZE5hbWVdID0gdXNlU3RhdGUoJycpO1xuICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBsb2NhbFN0b3JhZ2VEYXRhID0ge307XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3Qga2V5ID0gbG9jYWxTdG9yYWdlLmtleShpKTtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgICAgICAgY29uc3QgW25hbWUsIHN0YXR1cywgdGltZV0gPSB2YWx1ZS5zcGxpdCgnLCcpO1xuICAgICAgICAgIGlmICghbG9jYWxTdG9yYWdlRGF0YVtuYW1lXSkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlRGF0YVtuYW1lXSA9IHtcbiAgICAgICAgICAgICAgYXR0ZW5kYW5jZXM6IFtdLFxuICAgICAgICAgICAgICBkZXBhcnR1cmVzOiBbXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ+WHuuWLpCcpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZURhdGFbbmFtZV0uYXR0ZW5kYW5jZXMucHVzaCh0aW1lKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gJ+mAgOWLpCcpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZURhdGFbbmFtZV0uZGVwYXJ0dXJlcy5wdXNoKHRpbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzZXRBdHRlbmRhbmNlTGlzdChsb2NhbFN0b3JhZ2VEYXRhKTtcbiAgICAgIH0sIFtdKTtcbiAgICAgIFxuICAgICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAobmFtZSkgPT4ge1xuICAgICAgICBzZXRTZWxlY3RlZE5hbWUobmFtZSk7XG4gICAgICB9O1xuICAgICAgXG4gICAgICBjb25zdCByZW5kZXJBdHRlbmRhbmNlID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXNlbGVjdGVkTmFtZSB8fCAhYXR0ZW5kYW5jZUxpc3Rbc2VsZWN0ZWROYW1lXSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgY29uc3QgYXR0ZW5kYW5jZXMgPSBbXTtcbiAgICAgICAgY29uc3QgeyBhdHRlbmRhbmNlczogYXR0ZW5kYW5jZVRpbWVzLCBkZXBhcnR1cmVzOiBkZXBhcnR1cmVUaW1lcyB9ID0gYXR0ZW5kYW5jZUxpc3Rbc2VsZWN0ZWROYW1lXTtcbiAgICAgIFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dGVuZGFuY2VMaXN0W3NlbGVjdGVkTmFtZV0uYXR0ZW5kYW5jZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGF0dGVuZGFuY2VzLnB1c2goXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2BhdHRlbmRhbmNlLSR7aX1gfT5cbiAgICAgICAgICAgICAgICDlh7rli6QgKHthdHRlbmRhbmNlTGlzdFtzZWxlY3RlZE5hbWVdLmF0dGVuZGFuY2VzW2ldfSlcbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoYXR0ZW5kYW5jZUxpc3Rbc2VsZWN0ZWROYW1lXS5kZXBhcnR1cmVzW2ldKSB7XG4gICAgICAgICAgICAgIGF0dGVuZGFuY2VzLnB1c2goXG4gICAgICAgICAgICAgICAgPGxpIGtleT17YGRlcGFydHVyZS0ke2l9YH0+XG4gICAgICAgICAgICAgICAgICDpgIDli6QgKHthdHRlbmRhbmNlTGlzdFtzZWxlY3RlZE5hbWVdLmRlcGFydHVyZXNbaV19KVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGxldCBqID0gMDtcbiAgICAgICAgICAgIHdoaWxlIChpIDwgYXR0ZW5kYW5jZUxpc3Rbc2VsZWN0ZWROYW1lXS5hdHRlbmRhbmNlcy5sZW5ndGggfHwgaiA8IGF0dGVuZGFuY2VMaXN0W3NlbGVjdGVkTmFtZV0uZGVwYXJ0dXJlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChhdHRlbmRhbmNlTGlzdFtzZWxlY3RlZE5hbWVdLmF0dGVuZGFuY2VzW2ldKSB7XG4gICAgICAgIGF0dGVuZGFuY2VzLnB1c2goXG4gICAgICAgICAgICA8bGkga2V5PXtgYXR0ZW5kYW5jZS0ke2l9YH0+XG4gICAgICAgICAgICAgICAg5Ye65YukICh7YXR0ZW5kYW5jZUxpc3Rbc2VsZWN0ZWROYW1lXS5hdHRlbmRhbmNlc1tpXX0pXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICBpKys7XG4gIH1cbiAgaWYgKGF0dGVuZGFuY2VMaXN0W3NlbGVjdGVkTmFtZV0uZGVwYXJ0dXJlc1tqXSkge1xuICAgIGF0dGVuZGFuY2VzLnB1c2goXG4gICAgICA8bGkga2V5PXtgZGVwYXJ0dXJlLSR7an1gfT5cbiAgICAgICAg6YCA5YukICh7YXR0ZW5kYW5jZUxpc3Rbc2VsZWN0ZWROYW1lXS5kZXBhcnR1cmVzW2pdfSlcbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgICBqKys7XG4gIH1cbn0gICAgICAgXG4gICAgICBcbiAgICAgICAgY29uc3QgbGF0ZXN0QXR0ZW5kYW5jZVRpbWUgPSBhdHRlbmRhbmNlVGltZXNbYXR0ZW5kYW5jZVRpbWVzLmxlbmd0aCAtIDFdO1xuICAgICAgICBjb25zdCBsYXRlc3RBdHRlbmRhbmNlU3RhdHVzID0gJ+WHuuWLpCc7XG4gICAgICAgIGxldCBsYXRlc3REZXBhcnR1cmVUaW1lID0gJyc7XG4gICAgICAgIGxldCB0aW1lRGlmZiA9ICcnO1xuICAgICAgICBpZiAoZGVwYXJ0dXJlVGltZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGxhdGVzdERlcGFydHVyZVRpbWUgPSBkZXBhcnR1cmVUaW1lc1tkZXBhcnR1cmVUaW1lcy5sZW5ndGggLSAxXTtcbiAgICAgICAgICBpZiAobGF0ZXN0QXR0ZW5kYW5jZVRpbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSAobmV3IERhdGUobGF0ZXN0RGVwYXJ0dXJlVGltZSkgLSBuZXcgRGF0ZShsYXRlc3RBdHRlbmRhbmNlVGltZSkpIC8gKDEwMDAgKiA2MCk7XG4gICAgICAgICAgICB0aW1lRGlmZiA9IGAke01hdGguZmxvb3IoZGlmZiAvIDYwKX3mmYLplpMgJHtNYXRoLmZsb29yKGRpZmYgJSA2MCl95YiGYDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICBpZiAobGF0ZXN0RGVwYXJ0dXJlVGltZSkge1xuICAgICAgICAgIGF0dGVuZGFuY2VzLnB1c2goXG4gICAgICAgICAgICA8bGkga2V5PXtgZGVwYXJ0dXJlLSR7ZGVwYXJ0dXJlVGltZXMubGVuZ3RofWB9PlxuICAgICAgICAgICAgICB7c2VsZWN0ZWROYW1lfeOBrumAgOWLpCAoe2xhdGVzdERlcGFydHVyZVRpbWV9KVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgzPntzZWxlY3RlZE5hbWV944Gu5Yuk5YuZ6KiY6YyyPC9oMz5cbiAgICAgICAgICAgIDx1bD57YXR0ZW5kYW5jZXN9PC91bD5cbiAgICAgICAgICAgIHt0aW1lRGlmZiAmJiAoXG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIHtzZWxlY3RlZE5hbWV944Gu5Yuk5YuZ5pmC6ZaTOiB7dGltZURpZmZ9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9OyAgICAgIFxuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8TGluayBocmVmPVwiL3RoYW5rc1wiPuODm+ODvOODoOOBq+aIu+OCizwvTGluaz5cbiAgICAgIDxoMj7lh7rli6Tnirbms4E8L2gyPlxuICAgICAgPHVsPlxuICAgICAgICB7T2JqZWN0LmtleXMoYXR0ZW5kYW5jZUxpc3QpLm1hcCgobmFtZSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8bGkga2V5PXtpbmRleH0gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2sobmFtZSl9PlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj57bmFtZX08L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgICAge3JlbmRlckF0dGVuZGFuY2UoKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpbmsiLCJzdHlsZXMiLCJBZG1pbiIsImF0dGVuZGFuY2VMaXN0Iiwic2V0QXR0ZW5kYW5jZUxpc3QiLCJzZWxlY3RlZE5hbWUiLCJzZXRTZWxlY3RlZE5hbWUiLCJsb2NhbFN0b3JhZ2VEYXRhIiwiaSIsImxvY2FsU3RvcmFnZSIsImxlbmd0aCIsImtleSIsInZhbHVlIiwiZ2V0SXRlbSIsIm5hbWUiLCJzdGF0dXMiLCJ0aW1lIiwic3BsaXQiLCJhdHRlbmRhbmNlcyIsImRlcGFydHVyZXMiLCJwdXNoIiwiaGFuZGxlQ2xpY2siLCJyZW5kZXJBdHRlbmRhbmNlIiwiYXR0ZW5kYW5jZVRpbWVzIiwiZGVwYXJ0dXJlVGltZXMiLCJsaSIsImoiLCJsYXRlc3RBdHRlbmRhbmNlVGltZSIsImxhdGVzdEF0dGVuZGFuY2VTdGF0dXMiLCJsYXRlc3REZXBhcnR1cmVUaW1lIiwidGltZURpZmYiLCJkaWZmIiwiRGF0ZSIsIk1hdGgiLCJmbG9vciIsImRpdiIsImgzIiwidWwiLCJwIiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaHJlZiIsImgyIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImluZGV4Iiwib25DbGljayIsImEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/admin.js\n"));

/***/ })

});