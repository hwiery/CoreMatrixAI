/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./contexts/LanguageContext.js":
/*!*************************************!*\
  !*** ./contexts/LanguageContext.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LanguageContext\": function() { return /* binding */ LanguageContext; },\n/* harmony export */   \"LanguageProvider\": function() { return /* binding */ LanguageProvider; },\n/* harmony export */   \"useLanguage\": function() { return /* binding */ useLanguage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nconst LanguageContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst LanguageProvider = (param)=>{\n    let { children  } = param;\n    _s();\n    const [language, setLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"ko\");\n    const [translations, setTranslations] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const savedLanguage = localStorage.getItem(\"language\") || \"ko\";\n        setLanguage(savedLanguage);\n        loadTranslations(savedLanguage);\n    }, []);\n    const loadTranslations = async (lang)=>{\n        setIsLoading(true);\n        try {\n            const [landingTranslations, termsTranslations, privacyTranslations, aboutTranslations, contactTranslations, careersTranslations, joinDeveloperTranslations] = await Promise.all([\n                __webpack_require__(\"./translations lazy recursive ^\\\\.\\\\/landing_.*\\\\.json$\")(\"./landing_\".concat(lang, \".json\")),\n                __webpack_require__(\"./translations lazy recursive ^\\\\.\\\\/terms_.*\\\\.json$\")(\"./terms_\".concat(lang, \".json\")),\n                __webpack_require__(\"./translations lazy recursive ^\\\\.\\\\/privacy_.*\\\\.json$\")(\"./privacy_\".concat(lang, \".json\")),\n                __webpack_require__(\"./translations lazy recursive ^\\\\.\\\\/about_.*\\\\.json$\")(\"./about_\".concat(lang, \".json\")),\n                __webpack_require__(\"./translations lazy recursive ^\\\\.\\\\/contact_.*\\\\.json$\")(\"./contact_\".concat(lang, \".json\")),\n                __webpack_require__(\"./translations lazy recursive ^\\\\.\\\\/careers_.*\\\\.json$\")(\"./careers_\".concat(lang, \".json\")),\n                __webpack_require__(\"./translations lazy recursive ^\\\\.\\\\/join\\\\-developer_.*\\\\.json$\")(\"./join-developer_\".concat(lang, \".json\"))\n            ]);\n            setTranslations({\n                landing: landingTranslations.default,\n                terms: termsTranslations.default,\n                privacy: privacyTranslations.default,\n                about: aboutTranslations.default,\n                contact: contactTranslations.default,\n                careers: careersTranslations.default,\n                joinDeveloper: joinDeveloperTranslations.default\n            });\n        } catch (error) {\n            console.error(\"Failed to load translations:\", error);\n            setTranslations({});\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    const t = (key)=>{\n        if (!key) return \"\";\n        try {\n            const [page, ...rest] = key.split(\".\");\n            const pageTranslations = translations[page];\n            if (!pageTranslations) {\n                console.warn(\"No translations found for page: \".concat(page));\n                return key;\n            }\n            let value = pageTranslations;\n            for (const k of rest){\n                value = value === null || value === void 0 ? void 0 : value[k];\n                if (value === undefined) {\n                    console.warn(\"Missing translation for key: \".concat(key));\n                    return key;\n                }\n            }\n            return value;\n        } catch (error) {\n            console.error(\"Translation error:\", error);\n            return key;\n        }\n    };\n    const toggleLanguage = async ()=>{\n        const newLanguage = language === \"en\" ? \"ko\" : \"en\";\n        setLanguage(newLanguage);\n        localStorage.setItem(\"language\", newLanguage);\n        await loadTranslations(newLanguage);\n    };\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading translations...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\CoreMatrix AI (4)\\\\contexts\\\\LanguageContext.js\",\n            lineNumber: 90,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LanguageContext.Provider, {\n        value: {\n            language,\n            toggleLanguage,\n            t\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\CoreMatrix AI (4)\\\\contexts\\\\LanguageContext.js\",\n        lineNumber: 94,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LanguageProvider, \"CWHNDde4LY9gKh2jMOCEKrdQjAM=\");\n_c = LanguageProvider;\nconst useLanguage = ()=>{\n    _s1();\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(LanguageContext);\n    if (!context) {\n        throw new Error(\"useLanguage must be used within a LanguageProvider\");\n    }\n    return context;\n};\n_s1(useLanguage, \"b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=\");\nvar _c;\n$RefreshReg$(_c, \"LanguageProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztJQUNkLENBQUM7SUFFRCxxQkFDRSw4REFBQzlDLGdCQUFnQitDLFFBQVE7UUFBQ1AsT0FBTztZQUFFckM7WUFBVXdDO1lBQWdCVjtRQUFFO2tCQUM1RC9COzs7Ozs7QUFHUCxFQUFFO0dBN0ZXRDtLQUFBQTtBQStGTixNQUFNK0MsY0FBYyxJQUFNOztJQUMvQixNQUFNQyxVQUFVbkQsaURBQVVBLENBQUNFO0lBQzNCLElBQUksQ0FBQ2lELFNBQVM7UUFDWixNQUFNLElBQUlDLE1BQU0sc0RBQXNEO0lBQ3hFLENBQUM7SUFDRCxPQUFPRDtBQUNULEVBQUU7SUFOV0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dHMvTGFuZ3VhZ2VDb250ZXh0LmpzP2YzMzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgTGFuZ3VhZ2VDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IExhbmd1YWdlUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW2xhbmd1YWdlLCBzZXRMYW5ndWFnZV0gPSB1c2VTdGF0ZSgna28nKTtcclxuICBjb25zdCBbdHJhbnNsYXRpb25zLCBzZXRUcmFuc2xhdGlvbnNdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHNhdmVkTGFuZ3VhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ3VhZ2UnKSB8fCAna28nO1xyXG4gICAgc2V0TGFuZ3VhZ2Uoc2F2ZWRMYW5ndWFnZSk7XHJcbiAgICBsb2FkVHJhbnNsYXRpb25zKHNhdmVkTGFuZ3VhZ2UpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgbG9hZFRyYW5zbGF0aW9ucyA9IGFzeW5jIChsYW5nKSA9PiB7XHJcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBbXHJcbiAgICAgICAgbGFuZGluZ1RyYW5zbGF0aW9ucyxcclxuICAgICAgICB0ZXJtc1RyYW5zbGF0aW9ucyxcclxuICAgICAgICBwcml2YWN5VHJhbnNsYXRpb25zLFxyXG4gICAgICAgIGFib3V0VHJhbnNsYXRpb25zLFxyXG4gICAgICAgIGNvbnRhY3RUcmFuc2xhdGlvbnMsXHJcbiAgICAgICAgY2FyZWVyc1RyYW5zbGF0aW9ucyxcclxuICAgICAgICBqb2luRGV2ZWxvcGVyVHJhbnNsYXRpb25zXHJcbiAgICAgIF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgaW1wb3J0KGAuLi90cmFuc2xhdGlvbnMvbGFuZGluZ18ke2xhbmd9Lmpzb25gKSxcclxuICAgICAgICBpbXBvcnQoYC4uL3RyYW5zbGF0aW9ucy90ZXJtc18ke2xhbmd9Lmpzb25gKSxcclxuICAgICAgICBpbXBvcnQoYC4uL3RyYW5zbGF0aW9ucy9wcml2YWN5XyR7bGFuZ30uanNvbmApLFxyXG4gICAgICAgIGltcG9ydChgLi4vdHJhbnNsYXRpb25zL2Fib3V0XyR7bGFuZ30uanNvbmApLFxyXG4gICAgICAgIGltcG9ydChgLi4vdHJhbnNsYXRpb25zL2NvbnRhY3RfJHtsYW5nfS5qc29uYCksXHJcbiAgICAgICAgaW1wb3J0KGAuLi90cmFuc2xhdGlvbnMvY2FyZWVyc18ke2xhbmd9Lmpzb25gKSxcclxuICAgICAgICBpbXBvcnQoYC4uL3RyYW5zbGF0aW9ucy9qb2luLWRldmVsb3Blcl8ke2xhbmd9Lmpzb25gKVxyXG4gICAgICBdKTtcclxuXHJcbiAgICAgIHNldFRyYW5zbGF0aW9ucyh7XHJcbiAgICAgICAgbGFuZGluZzogbGFuZGluZ1RyYW5zbGF0aW9ucy5kZWZhdWx0LFxyXG4gICAgICAgIHRlcm1zOiB0ZXJtc1RyYW5zbGF0aW9ucy5kZWZhdWx0LFxyXG4gICAgICAgIHByaXZhY3k6IHByaXZhY3lUcmFuc2xhdGlvbnMuZGVmYXVsdCxcclxuICAgICAgICBhYm91dDogYWJvdXRUcmFuc2xhdGlvbnMuZGVmYXVsdCxcclxuICAgICAgICBjb250YWN0OiBjb250YWN0VHJhbnNsYXRpb25zLmRlZmF1bHQsXHJcbiAgICAgICAgY2FyZWVyczogY2FyZWVyc1RyYW5zbGF0aW9ucy5kZWZhdWx0LFxyXG4gICAgICAgIGpvaW5EZXZlbG9wZXI6IGpvaW5EZXZlbG9wZXJUcmFuc2xhdGlvbnMuZGVmYXVsdFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBsb2FkIHRyYW5zbGF0aW9uczonLCBlcnJvcik7XHJcbiAgICAgIHNldFRyYW5zbGF0aW9ucyh7fSk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHQgPSAoa2V5KSA9PiB7XHJcbiAgICBpZiAoIWtleSkgcmV0dXJuICcnO1xyXG4gICAgXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBbcGFnZSwgLi4ucmVzdF0gPSBrZXkuc3BsaXQoJy4nKTtcclxuICAgICAgY29uc3QgcGFnZVRyYW5zbGF0aW9ucyA9IHRyYW5zbGF0aW9uc1twYWdlXTtcclxuICAgICAgXHJcbiAgICAgIGlmICghcGFnZVRyYW5zbGF0aW9ucykge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihgTm8gdHJhbnNsYXRpb25zIGZvdW5kIGZvciBwYWdlOiAke3BhZ2V9YCk7XHJcbiAgICAgICAgcmV0dXJuIGtleTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IHZhbHVlID0gcGFnZVRyYW5zbGF0aW9ucztcclxuICAgICAgZm9yIChjb25zdCBrIG9mIHJlc3QpIHtcclxuICAgICAgICB2YWx1ZSA9IHZhbHVlPy5ba107XHJcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIGNvbnNvbGUud2FybihgTWlzc2luZyB0cmFuc2xhdGlvbiBmb3Iga2V5OiAke2tleX1gKTtcclxuICAgICAgICAgIHJldHVybiBrZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdUcmFuc2xhdGlvbiBlcnJvcjonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBrZXk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlTGFuZ3VhZ2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdMYW5ndWFnZSA9IGxhbmd1YWdlID09PSAnZW4nID8gJ2tvJyA6ICdlbic7XHJcbiAgICBzZXRMYW5ndWFnZShuZXdMYW5ndWFnZSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGFuZ3VhZ2UnLCBuZXdMYW5ndWFnZSk7XHJcbiAgICBhd2FpdCBsb2FkVHJhbnNsYXRpb25zKG5ld0xhbmd1YWdlKTtcclxuICB9O1xyXG5cclxuICBpZiAoaXNMb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nIHRyYW5zbGF0aW9ucy4uLjwvZGl2PjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGFuZ3VhZ2VDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGxhbmd1YWdlLCB0b2dnbGVMYW5ndWFnZSwgdCB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9MYW5ndWFnZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VMYW5ndWFnZSA9ICgpID0+IHtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChMYW5ndWFnZUNvbnRleHQpO1xyXG4gIGlmICghY29udGV4dCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCd1c2VMYW5ndWFnZSBtdXN0IGJlIHVzZWQgd2l0aGluIGEgTGFuZ3VhZ2VQcm92aWRlcicpO1xyXG4gIH1cclxuICByZXR1cm4gY29udGV4dDtcclxufTsiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwiTGFuZ3VhZ2VDb250ZXh0IiwiTGFuZ3VhZ2VQcm92aWRlciIsImNoaWxkcmVuIiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsInRyYW5zbGF0aW9ucyIsInNldFRyYW5zbGF0aW9ucyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInNhdmVkTGFuZ3VhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibG9hZFRyYW5zbGF0aW9ucyIsImxhbmciLCJsYW5kaW5nVHJhbnNsYXRpb25zIiwidGVybXNUcmFuc2xhdGlvbnMiLCJwcml2YWN5VHJhbnNsYXRpb25zIiwiYWJvdXRUcmFuc2xhdGlvbnMiLCJjb250YWN0VHJhbnNsYXRpb25zIiwiY2FyZWVyc1RyYW5zbGF0aW9ucyIsImpvaW5EZXZlbG9wZXJUcmFuc2xhdGlvbnMiLCJQcm9taXNlIiwiYWxsIiwibGFuZGluZyIsImRlZmF1bHQiLCJ0ZXJtcyIsInByaXZhY3kiLCJhYm91dCIsImNvbnRhY3QiLCJjYXJlZXJzIiwiam9pbkRldmVsb3BlciIsImVycm9yIiwiY29uc29sZSIsInQiLCJrZXkiLCJwYWdlIiwicmVzdCIsInNwbGl0IiwicGFnZVRyYW5zbGF0aW9ucyIsIndhcm4iLCJ2YWx1ZSIsImsiLCJ1bmRlZmluZWQiLCJ0b2dnbGVMYW5ndWFnZSIsIm5ld0xhbmd1YWdlIiwic2V0SXRlbSIsImRpdiIsIlByb3ZpZGVyIiwidXNlTGFuZ3VhZ2UiLCJjb250ZXh0IiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contexts/LanguageContext.js\n"));

/***/ }),

/***/ "./translations lazy recursive ^\\.\\/join\\-developer_.*\\.json$":
/*!****************************************************************************!*\
  !*** ./translations/ lazy ^\.\/join\-developer_.*\.json$ namespace object ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./translations lazy recursive ^\\.\\/join\\-developer_.*\\.json$";
module.exports = webpackEmptyAsyncContext;

/***/ })

});