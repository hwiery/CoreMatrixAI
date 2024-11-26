/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/privacy";
exports.ids = ["pages/privacy"];
exports.modules = {

/***/ "./contexts/LanguageContext.js":
/*!*************************************!*\
  !*** ./contexts/LanguageContext.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LanguageContext\": () => (/* binding */ LanguageContext),\n/* harmony export */   \"LanguageProvider\": () => (/* binding */ LanguageProvider),\n/* harmony export */   \"useLanguage\": () => (/* binding */ useLanguage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! i18next */ \"i18next\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ \"react-i18next\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18next__WEBPACK_IMPORTED_MODULE_2__, react_i18next__WEBPACK_IMPORTED_MODULE_3__]);\n([i18next__WEBPACK_IMPORTED_MODULE_2__, react_i18next__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n// i18next 초기화\ni18next__WEBPACK_IMPORTED_MODULE_2__[\"default\"].use(react_i18next__WEBPACK_IMPORTED_MODULE_3__.initReactI18next).init({\n    resources: {},\n    lng: \"ko\",\n    fallbackLng: \"en\",\n    interpolation: {\n        escapeValue: false\n    }\n});\nconst LanguageContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst LanguageProvider = ({ children  })=>{\n    const [language, setLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"en\");\n    const [translations, setTranslations] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const savedLanguage = localStorage.getItem(\"language\");\n        if (savedLanguage) {\n            setLanguage(savedLanguage);\n        }\n        loadTranslations(savedLanguage || \"en\");\n    }, []);\n    const loadTranslations = async (lang)=>{\n        setIsLoading(true);\n        try {\n            const landingTranslations = await __webpack_require__(\"./translations lazy recursive ^\\\\.\\\\/landing_.*\\\\.json$\")(`./landing_${lang}.json`);\n            const termsTranslations = await __webpack_require__(\"./translations lazy recursive ^\\\\.\\\\/terms_.*\\\\.json$\")(`./terms_${lang}.json`);\n            const privacyTranslations = await __webpack_require__(\"./translations lazy recursive ^\\\\.\\\\/privacy_.*\\\\.json$\")(`./privacy_${lang}.json`);\n            const aboutTranslations = await __webpack_require__(\"./translations lazy recursive ^\\\\.\\\\/about_.*\\\\.json$\")(`./about_${lang}.json`);\n            const contactTranslations = await __webpack_require__(\"./translations lazy recursive ^\\\\.\\\\/contact_.*\\\\.json$\")(`./contact_${lang}.json`);\n            const careersTranslations = await __webpack_require__(\"./translations lazy recursive ^\\\\.\\\\/careers_.*\\\\.json$\")(`./careers_${lang}.json`);\n            const joinDeveloperTranslations = await __webpack_require__(\"./translations lazy recursive ^\\\\.\\\\/join_developer_.*\\\\.json$\")(`./join_developer_${lang}.json`);\n            console.log(\"Loaded translations:\", {\n                landing: landingTranslations.default,\n                terms: termsTranslations.default,\n                privacy: privacyTranslations.default,\n                about: aboutTranslations.default,\n                contact: contactTranslations.default,\n                careers: careersTranslations.default,\n                joinDeveloper: joinDeveloperTranslations.default\n            });\n            setTranslations({\n                landing: landingTranslations.default || {},\n                terms: termsTranslations.default || {},\n                privacy: privacyTranslations.default || {},\n                about: aboutTranslations.default || {},\n                contact: contactTranslations.default || {},\n                careers: careersTranslations.default || {},\n                joinDeveloper: joinDeveloperTranslations.default || {}\n            });\n        } catch (error) {\n            console.error(\"Failed to load translations:\", error);\n            setTranslations({});\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    const t = (key)=>{\n        if (!key) return \"\";\n        try {\n            const [page, ...rest] = key.split(\".\");\n            const pageTranslations = translations[page];\n            console.log(\"Translation lookup:\", {\n                key,\n                page,\n                rest,\n                pageTranslations,\n                fullTranslations: translations\n            });\n            if (!pageTranslations) {\n                console.warn(`No translations found for page: ${page}`);\n                return key;\n            }\n            let value = pageTranslations;\n            for (const k of rest){\n                value = value?.[k];\n                if (value === undefined) {\n                    console.warn(`Missing translation for key: ${key}`);\n                    return key;\n                }\n            }\n            return value;\n        } catch (error) {\n            console.error(\"Translation error:\", error);\n            return key;\n        }\n    };\n    const toggleLanguage = async ()=>{\n        const newLanguage = language === \"en\" ? \"ko\" : \"en\";\n        setLanguage(newLanguage);\n        localStorage.setItem(\"language\", newLanguage);\n        await loadTranslations(newLanguage);\n    };\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading translations...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\CoreMatrix AI (4)\\\\contexts\\\\LanguageContext.js\",\n            lineNumber: 114,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LanguageContext.Provider, {\n        value: {\n            language,\n            toggleLanguage,\n            t\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\CoreMatrix AI (4)\\\\contexts\\\\LanguageContext.js\",\n        lineNumber: 118,\n        columnNumber: 5\n    }, undefined);\n};\nconst useLanguage = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(LanguageContext);\n    if (!context) {\n        throw new Error(\"useLanguage must be used within a LanguageProvider\");\n    }\n    return context;\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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InNvdXJjZXMiOlsid2VicGFjazovL2NvcmVtYXRyaXgtYWkvLi9jb250ZXh0cy9MYW5ndWFnZUNvbnRleHQuanM/ZjMzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGkxOG5leHQgZnJvbSAnaTE4bmV4dCc7XHJcbmltcG9ydCB7IGluaXRSZWFjdEkxOG5leHQgfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuXHJcbi8vIGkxOG5leHQg7LSI6riw7ZmUXHJcbmkxOG5leHRcclxuICAudXNlKGluaXRSZWFjdEkxOG5leHQpXHJcbiAgLmluaXQoe1xyXG4gICAgcmVzb3VyY2VzOiB7fSwgIC8vIOumrOyGjOyKpOuKlCDrj5nsoIHsnLzroZwg66Gc65Oc65CY66+A66GcIOu5iCDqsJ3ssrTroZwg7Iuc7J6RXHJcbiAgICBsbmc6ICdrbycsICAgICAgLy8g6riw67O4IOyWuOyWtFxyXG4gICAgZmFsbGJhY2tMbmc6ICdlbicsXHJcbiAgICBpbnRlcnBvbGF0aW9uOiB7XHJcbiAgICAgIGVzY2FwZVZhbHVlOiBmYWxzZVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IExhbmd1YWdlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBMYW5ndWFnZVByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtsYW5ndWFnZSwgc2V0TGFuZ3VhZ2VdID0gdXNlU3RhdGUoJ2VuJyk7XHJcbiAgY29uc3QgW3RyYW5zbGF0aW9ucywgc2V0VHJhbnNsYXRpb25zXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzYXZlZExhbmd1YWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmd1YWdlJyk7XHJcbiAgICBpZiAoc2F2ZWRMYW5ndWFnZSkge1xyXG4gICAgICBzZXRMYW5ndWFnZShzYXZlZExhbmd1YWdlKTtcclxuICAgIH1cclxuICAgIGxvYWRUcmFuc2xhdGlvbnMoc2F2ZWRMYW5ndWFnZSB8fCAnZW4nKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGxvYWRUcmFuc2xhdGlvbnMgPSBhc3luYyAobGFuZykgPT4ge1xyXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgbGFuZGluZ1RyYW5zbGF0aW9ucyA9IGF3YWl0IGltcG9ydChgLi4vdHJhbnNsYXRpb25zL2xhbmRpbmdfJHtsYW5nfS5qc29uYCk7XHJcbiAgICAgIGNvbnN0IHRlcm1zVHJhbnNsYXRpb25zID0gYXdhaXQgaW1wb3J0KGAuLi90cmFuc2xhdGlvbnMvdGVybXNfJHtsYW5nfS5qc29uYCk7XHJcbiAgICAgIGNvbnN0IHByaXZhY3lUcmFuc2xhdGlvbnMgPSBhd2FpdCBpbXBvcnQoYC4uL3RyYW5zbGF0aW9ucy9wcml2YWN5XyR7bGFuZ30uanNvbmApO1xyXG4gICAgICBjb25zdCBhYm91dFRyYW5zbGF0aW9ucyA9IGF3YWl0IGltcG9ydChgLi4vdHJhbnNsYXRpb25zL2Fib3V0XyR7bGFuZ30uanNvbmApO1xyXG4gICAgICBjb25zdCBjb250YWN0VHJhbnNsYXRpb25zID0gYXdhaXQgaW1wb3J0KGAuLi90cmFuc2xhdGlvbnMvY29udGFjdF8ke2xhbmd9Lmpzb25gKTtcclxuICAgICAgY29uc3QgY2FyZWVyc1RyYW5zbGF0aW9ucyA9IGF3YWl0IGltcG9ydChgLi4vdHJhbnNsYXRpb25zL2NhcmVlcnNfJHtsYW5nfS5qc29uYCk7XHJcbiAgICAgIGNvbnN0IGpvaW5EZXZlbG9wZXJUcmFuc2xhdGlvbnMgPSBhd2FpdCBpbXBvcnQoYC4uL3RyYW5zbGF0aW9ucy9qb2luX2RldmVsb3Blcl8ke2xhbmd9Lmpzb25gKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCdMb2FkZWQgdHJhbnNsYXRpb25zOicsIHtcclxuICAgICAgICBsYW5kaW5nOiBsYW5kaW5nVHJhbnNsYXRpb25zLmRlZmF1bHQsXHJcbiAgICAgICAgdGVybXM6IHRlcm1zVHJhbnNsYXRpb25zLmRlZmF1bHQsXHJcbiAgICAgICAgcHJpdmFjeTogcHJpdmFjeVRyYW5zbGF0aW9ucy5kZWZhdWx0LFxyXG4gICAgICAgIGFib3V0OiBhYm91dFRyYW5zbGF0aW9ucy5kZWZhdWx0LFxyXG4gICAgICAgIGNvbnRhY3Q6IGNvbnRhY3RUcmFuc2xhdGlvbnMuZGVmYXVsdCxcclxuICAgICAgICBjYXJlZXJzOiBjYXJlZXJzVHJhbnNsYXRpb25zLmRlZmF1bHQsXHJcbiAgICAgICAgam9pbkRldmVsb3Blcjogam9pbkRldmVsb3BlclRyYW5zbGF0aW9ucy5kZWZhdWx0XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc2V0VHJhbnNsYXRpb25zKHtcclxuICAgICAgICBsYW5kaW5nOiBsYW5kaW5nVHJhbnNsYXRpb25zLmRlZmF1bHQgfHwge30sXHJcbiAgICAgICAgdGVybXM6IHRlcm1zVHJhbnNsYXRpb25zLmRlZmF1bHQgfHwge30sXHJcbiAgICAgICAgcHJpdmFjeTogcHJpdmFjeVRyYW5zbGF0aW9ucy5kZWZhdWx0IHx8IHt9LFxyXG4gICAgICAgIGFib3V0OiBhYm91dFRyYW5zbGF0aW9ucy5kZWZhdWx0IHx8IHt9LFxyXG4gICAgICAgIGNvbnRhY3Q6IGNvbnRhY3RUcmFuc2xhdGlvbnMuZGVmYXVsdCB8fCB7fSxcclxuICAgICAgICBjYXJlZXJzOiBjYXJlZXJzVHJhbnNsYXRpb25zLmRlZmF1bHQgfHwge30sXHJcbiAgICAgICAgam9pbkRldmVsb3Blcjogam9pbkRldmVsb3BlclRyYW5zbGF0aW9ucy5kZWZhdWx0IHx8IHt9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGxvYWQgdHJhbnNsYXRpb25zOicsIGVycm9yKTtcclxuICAgICAgc2V0VHJhbnNsYXRpb25zKHt9KTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdCA9IChrZXkpID0+IHtcclxuICAgIGlmICgha2V5KSByZXR1cm4gJyc7XHJcbiAgICBcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IFtwYWdlLCAuLi5yZXN0XSA9IGtleS5zcGxpdCgnLicpO1xyXG4gICAgICBjb25zdCBwYWdlVHJhbnNsYXRpb25zID0gdHJhbnNsYXRpb25zW3BhZ2VdO1xyXG4gICAgICBcclxuICAgICAgY29uc29sZS5sb2coJ1RyYW5zbGF0aW9uIGxvb2t1cDonLCB7XHJcbiAgICAgICAga2V5LFxyXG4gICAgICAgIHBhZ2UsXHJcbiAgICAgICAgcmVzdCxcclxuICAgICAgICBwYWdlVHJhbnNsYXRpb25zLFxyXG4gICAgICAgIGZ1bGxUcmFuc2xhdGlvbnM6IHRyYW5zbGF0aW9uc1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICghcGFnZVRyYW5zbGF0aW9ucykge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihgTm8gdHJhbnNsYXRpb25zIGZvdW5kIGZvciBwYWdlOiAke3BhZ2V9YCk7XHJcbiAgICAgICAgcmV0dXJuIGtleTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IHZhbHVlID0gcGFnZVRyYW5zbGF0aW9ucztcclxuICAgICAgZm9yIChjb25zdCBrIG9mIHJlc3QpIHtcclxuICAgICAgICB2YWx1ZSA9IHZhbHVlPy5ba107XHJcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIGNvbnNvbGUud2FybihgTWlzc2luZyB0cmFuc2xhdGlvbiBmb3Iga2V5OiAke2tleX1gKTtcclxuICAgICAgICAgIHJldHVybiBrZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdUcmFuc2xhdGlvbiBlcnJvcjonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBrZXk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlTGFuZ3VhZ2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdMYW5ndWFnZSA9IGxhbmd1YWdlID09PSAnZW4nID8gJ2tvJyA6ICdlbic7XHJcbiAgICBzZXRMYW5ndWFnZShuZXdMYW5ndWFnZSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGFuZ3VhZ2UnLCBuZXdMYW5ndWFnZSk7XHJcbiAgICBhd2FpdCBsb2FkVHJhbnNsYXRpb25zKG5ld0xhbmd1YWdlKTtcclxuICB9O1xyXG5cclxuICBpZiAoaXNMb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nIHRyYW5zbGF0aW9ucy4uLjwvZGl2PjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGFuZ3VhZ2VDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGxhbmd1YWdlLCB0b2dnbGVMYW5ndWFnZSwgdCB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9MYW5ndWFnZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VMYW5ndWFnZSA9ICgpID0+IHtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChMYW5ndWFnZUNvbnRleHQpO1xyXG4gIGlmICghY29udGV4dCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCd1c2VMYW5ndWFnZSBtdXN0IGJlIHVzZWQgd2l0aGluIGEgTGFuZ3VhZ2VQcm92aWRlcicpO1xyXG4gIH1cclxuICByZXR1cm4gY29udGV4dDtcclxufTsiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwiaTE4bmV4dCIsImluaXRSZWFjdEkxOG5leHQiLCJ1c2UiLCJpbml0IiwicmVzb3VyY2VzIiwibG5nIiwiZmFsbGJhY2tMbmciLCJpbnRlcnBvbGF0aW9uIiwiZXNjYXBlVmFsdWUiLCJMYW5ndWFnZUNvbnRleHQiLCJMYW5ndWFnZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwidHJhbnNsYXRpb25zIiwic2V0VHJhbnNsYXRpb25zIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwic2F2ZWRMYW5ndWFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsb2FkVHJhbnNsYXRpb25zIiwibGFuZyIsImxhbmRpbmdUcmFuc2xhdGlvbnMiLCJ0ZXJtc1RyYW5zbGF0aW9ucyIsInByaXZhY3lUcmFuc2xhdGlvbnMiLCJhYm91dFRyYW5zbGF0aW9ucyIsImNvbnRhY3RUcmFuc2xhdGlvbnMiLCJjYXJlZXJzVHJhbnNsYXRpb25zIiwiam9pbkRldmVsb3BlclRyYW5zbGF0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJsYW5kaW5nIiwiZGVmYXVsdCIsInRlcm1zIiwicHJpdmFjeSIsImFib3V0IiwiY29udGFjdCIsImNhcmVlcnMiLCJqb2luRGV2ZWxvcGVyIiwiZXJyb3IiLCJ0Iiwia2V5IiwicGFnZSIsInJlc3QiLCJzcGxpdCIsInBhZ2VUcmFuc2xhdGlvbnMiLCJmdWxsVHJhbnNsYXRpb25zIiwid2FybiIsInZhbHVlIiwiayIsInVuZGVmaW5lZCIsInRvZ2dsZUxhbmd1YWdlIiwibmV3TGFuZ3VhZ2UiLCJzZXRJdGVtIiwiZGl2IiwiUHJvdmlkZXIiLCJ1c2VMYW5ndWFnZSIsImNvbnRleHQiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./contexts/LanguageContext.js\n");

/***/ }),

/***/ "./pages/privacy.js":
/*!**************************!*\
  !*** ./pages/privacy.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/LanguageContext */ \"./contexts/LanguageContext.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_1__]);\n_contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst PrivacyPage = ()=>{\n    const { t , language  } = (0,_contexts_LanguageContext__WEBPACK_IMPORTED_MODULE_1__.useLanguage)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: `min-h-screen bg-black text-white py-20 ${language === \"ko\" ? \"korean\" : \"english\"}`,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-4xl mx-auto px-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-16\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-5xl font-bold mb-4\",\n                            children: \"Privacy Policy\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\CoreMatrix AI (4)\\\\pages\\\\privacy.js\",\n                            lineNumber: 10,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-gray-400\",\n                            children: t(\"privacy.privacy_policy.last_updated\")\n                        }, void 0, false, {\n                            fileName: \"D:\\\\CoreMatrix AI (4)\\\\pages\\\\privacy.js\",\n                            lineNumber: 11,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\CoreMatrix AI (4)\\\\pages\\\\privacy.js\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"mb-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-2xl font-semibold mb-4 text-emerald-500\",\n                            children: t(\"privacy.privacy_policy.sections.data_collection.title\")\n                        }, void 0, false, {\n                            fileName: \"D:\\\\CoreMatrix AI (4)\\\\pages\\\\privacy.js\",\n                            lineNumber: 16,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mb-4\",\n                            children: t(\"privacy.privacy_policy.sections.data_collection.content\")\n                        }, void 0, false, {\n                            fileName: \"D:\\\\CoreMatrix AI (4)\\\\pages\\\\privacy.js\",\n                            lineNumber: 17,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"ml-4 mb-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-xl font-medium mb-3\",\n                                    children: t(\"privacy.privacy_policy.sections.data_collection.types.user_provided.title\")\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\CoreMatrix AI (4)\\\\pages\\\\privacy.js\",\n                                    lineNumber: 20,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    className: \"list-disc list-inside space-y-2\",\n                                    children: t(\"privacy.privacy_policy.sections.data_collection.types.user_provided.items\").map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            className: \"text-gray-300\",\n                                            children: item\n                                        }, index, false, {\n                                            fileName: \"D:\\\\CoreMatrix AI (4)\\\\pages\\\\privacy.js\",\n                                            lineNumber: 23,\n                                            columnNumber: 17\n                                        }, undefined))\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\CoreMatrix AI (4)\\\\pages\\\\privacy.js\",\n                                    lineNumber: 21,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\CoreMatrix AI (4)\\\\pages\\\\privacy.js\",\n                            lineNumber: 19,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"ml-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-xl font-medium mb-3\",\n                                    children: t(\"privacy.privacy_policy.sections.data_collection.types.automatic.title\")\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\CoreMatrix AI (4)\\\\pages\\\\privacy.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    className: \"list-disc list-inside space-y-2\",\n                                    children: t(\"privacy.privacy_policy.sections.data_collection.types.automatic.items\").map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            className: \"text-gray-300\",\n                                            children: item\n                                        }, index, false, {\n                                            fileName: \"D:\\\\CoreMatrix AI (4)\\\\pages\\\\privacy.js\",\n                                            lineNumber: 32,\n                                            columnNumber: 17\n                                        }, undefined))\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\CoreMatrix AI (4)\\\\pages\\\\privacy.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\CoreMatrix AI (4)\\\\pages\\\\privacy.js\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\CoreMatrix AI (4)\\\\pages\\\\privacy.js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"mb-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-2xl font-semibold mb-4 text-emerald-500\",\n                            children: t(\"privacy.privacy_policy.sections.data_usage.title\")\n                        }, void 0, false, {\n                            fileName: \"D:\\\\CoreMatrix AI (4)\\\\pages\\\\privacy.js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mb-4\",\n                            children: t(\"privacy.privacy_policy.sections.data_usage.content\")\n                        }, void 0, false, {\n                            fileName: \"D:\\\\CoreMatrix AI (4)\\\\pages\\\\privacy.js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"list-disc list-inside space-y-2 ml-4\",\n                            children: t(\"privacy.privacy_policy.sections.data_usage.purposes\").map((purpose, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"text-gray-300\",\n                                    children: purpose\n                                }, index, false, {\n                                    fileName: \"D:\\\\CoreMatrix AI (4)\\\\pages\\\\privacy.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"D:\\\\CoreMatrix AI (4)\\\\pages\\\\privacy.js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\CoreMatrix AI (4)\\\\pages\\\\privacy.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"mb-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-2xl font-semibold mb-4 text-emerald-500\",\n                            children: t(\"privacy.privacy_policy.sections.data_sharing.title\")\n                        }, void 0, false, {\n                            fileName: \"D:\\\\CoreMatrix AI (4)\\\\pages\\\\privacy.js\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mb-4\",\n                            children: t(\"privacy.privacy_policy.sections.data_sharing.content\")\n                        }, void 0, false, {\n                            fileName: \"D:\\\\CoreMatrix AI (4)\\\\pages\\\\privacy.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"list-disc list-inside space-y-2 ml-4\",\n                            children: t(\"privacy.privacy_policy.sections.data_sharing.conditions\").map((condition, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"text-gray-300\",\n                                    children: condition\n                                }, index, false, {\n                                    fileName: \"D:\\\\CoreMatrix AI (4)\\\\pages\\\\privacy.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"D:\\\\CoreMatrix AI (4)\\\\pages\\\\privacy.js\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\CoreMatrix AI (4)\\\\pages\\\\privacy.js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"mb-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-2xl font-semibold mb-4 text-emerald-500\",\n                            children: t(\"privacy.privacy_policy.sections.security.title\")\n                        }, void 0, false, {\n                            fileName: \"D:\\\\CoreMatrix AI (4)\\\\pages\\\\privacy.js\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-gray-300\",\n                            children: t(\"privacy.privacy_policy.sections.security.content\")\n                        }, void 0, false, {\n                            fileName: \"D:\\\\CoreMatrix AI (4)\\\\pages\\\\privacy.js\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\CoreMatrix AI (4)\\\\pages\\\\privacy.js\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"mb-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-2xl font-semibold mb-4 text-emerald-500\",\n                            children: t(\"privacy.privacy_policy.sections.retention.title\")\n                        }, void 0, false, {\n                            fileName: \"D:\\\\CoreMatrix AI (4)\\\\pages\\\\privacy.js\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-gray-300\",\n                            children: t(\"privacy.privacy_policy.sections.retention.content\")\n                        }, void 0, false, {\n                            fileName: \"D:\\\\CoreMatrix AI (4)\\\\pages\\\\privacy.js\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\CoreMatrix AI (4)\\\\pages\\\\privacy.js\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"mb-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-2xl font-semibold mb-4 text-emerald-500\",\n                            children: t(\"privacy.privacy_policy.sections.user_rights.title\")\n                        }, void 0, false, {\n                            fileName: \"D:\\\\CoreMatrix AI (4)\\\\pages\\\\privacy.js\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"list-disc list-inside space-y-2 ml-4\",\n                            children: t(\"privacy.privacy_policy.sections.user_rights.rights\").map((right, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"text-gray-300\",\n                                    children: right\n                                }, index, false, {\n                                    fileName: \"D:\\\\CoreMatrix AI (4)\\\\pages\\\\privacy.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"D:\\\\CoreMatrix AI (4)\\\\pages\\\\privacy.js\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\CoreMatrix AI (4)\\\\pages\\\\privacy.js\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"mb-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-2xl font-semibold mb-4 text-emerald-500\",\n                            children: t(\"privacy.privacy_policy.sections.cookies.title\")\n                        }, void 0, false, {\n                            fileName: \"D:\\\\CoreMatrix AI (4)\\\\pages\\\\privacy.js\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-gray-300\",\n                            children: t(\"privacy.privacy_policy.sections.cookies.content\")\n                        }, void 0, false, {\n                            fileName: \"D:\\\\CoreMatrix AI (4)\\\\pages\\\\privacy.js\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\CoreMatrix AI (4)\\\\pages\\\\privacy.js\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"mb-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-2xl font-semibold mb-4 text-emerald-500\",\n                            children: t(\"privacy.privacy_policy.sections.policy_changes.title\")\n                        }, void 0, false, {\n                            fileName: \"D:\\\\CoreMatrix AI (4)\\\\pages\\\\privacy.js\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-gray-300\",\n                            children: t(\"privacy.privacy_policy.sections.policy_changes.content\")\n                        }, void 0, false, {\n                            fileName: \"D:\\\\CoreMatrix AI (4)\\\\pages\\\\privacy.js\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\CoreMatrix AI (4)\\\\pages\\\\privacy.js\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"mb-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-2xl font-semibold mb-4 text-emerald-500\",\n                            children: t(\"privacy.privacy_policy.sections.contact.title\")\n                        }, void 0, false, {\n                            fileName: \"D:\\\\CoreMatrix AI (4)\\\\pages\\\\privacy.js\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-gray-300\",\n                            children: t(\"privacy.privacy_policy.sections.contact.content\")\n                        }, void 0, false, {\n                            fileName: \"D:\\\\CoreMatrix AI (4)\\\\pages\\\\privacy.js\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-blue-400 mt-2\",\n                            children: t(\"privacy.privacy_policy.sections.contact.email\")\n                        }, void 0, false, {\n                            fileName: \"D:\\\\CoreMatrix AI (4)\\\\pages\\\\privacy.js\",\n                            lineNumber: 98,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\CoreMatrix AI (4)\\\\pages\\\\privacy.js\",\n                    lineNumber: 95,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\CoreMatrix AI (4)\\\\pages\\\\privacy.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\CoreMatrix AI (4)\\\\pages\\\\privacy.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrivacyPage);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q047b0JBQVFILFdBQVU7O3NDQUNqQiw4REFBQ0k7NEJBQUdKLFdBQVU7c0NBQWdESCxFQUFFOzs7Ozs7c0NBQ2hFLDhEQUFDSzs0QkFBRUYsV0FBVTtzQ0FBaUJILEVBQUU7Ozs7Ozs7Ozs7Ozs4QkFJbEMsOERBQUNNO29CQUFRSCxXQUFVOztzQ0FDakIsOERBQUNJOzRCQUFHSixXQUFVO3NDQUFnREgsRUFBRTs7Ozs7O3NDQUNoRSw4REFBQ0s7NEJBQUVGLFdBQVU7c0NBQWlCSCxFQUFFOzs7Ozs7Ozs7Ozs7OEJBSWxDLDhEQUFDTTtvQkFBUUgsV0FBVTs7c0NBQ2pCLDhEQUFDSTs0QkFBR0osV0FBVTtzQ0FBZ0RILEVBQUU7Ozs7OztzQ0FDaEUsOERBQUNLOzRCQUFFRixXQUFVO3NDQUFpQkgsRUFBRTs7Ozs7O3NDQUNoQyw4REFBQ0s7NEJBQUVGLFdBQVU7c0NBQXNCSCxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUsvQztBQUVBLGlFQUFlRCxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29yZW1hdHJpeC1haS8uL3BhZ2VzL3ByaXZhY3kuanM/MzQ5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VMYW5ndWFnZSB9IGZyb20gJy4uL2NvbnRleHRzL0xhbmd1YWdlQ29udGV4dCc7XHJcblxyXG5jb25zdCBQcml2YWN5UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCB7IHQsIGxhbmd1YWdlIH0gPSB1c2VMYW5ndWFnZSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2BtaW4taC1zY3JlZW4gYmctYmxhY2sgdGV4dC13aGl0ZSBweS0yMCAke2xhbmd1YWdlID09PSAna28nID8gJ2tvcmVhbicgOiAnZW5nbGlzaCd9YH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNHhsIG14LWF1dG8gcHgtNFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMTZcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBmb250LWJvbGQgbWItNFwiPlByaXZhY3kgUG9saWN5PC9oMT5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDBcIj57dCgncHJpdmFjeS5wcml2YWN5X3BvbGljeS5sYXN0X3VwZGF0ZWQnKX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgICB7Lyog642w7J207YSwIOyImOynkSDshLnshZggKi99XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWItMTJcIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIG1iLTQgdGV4dC1lbWVyYWxkLTUwMFwiPnt0KCdwcml2YWN5LnByaXZhY3lfcG9saWN5LnNlY3Rpb25zLmRhdGFfY29sbGVjdGlvbi50aXRsZScpfTwvaDI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi00XCI+e3QoJ3ByaXZhY3kucHJpdmFjeV9wb2xpY3kuc2VjdGlvbnMuZGF0YV9jb2xsZWN0aW9uLmNvbnRlbnQnKX08L3A+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtNCBtYi02XCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtbWVkaXVtIG1iLTNcIj57dCgncHJpdmFjeS5wcml2YWN5X3BvbGljeS5zZWN0aW9ucy5kYXRhX2NvbGxlY3Rpb24udHlwZXMudXNlcl9wcm92aWRlZC50aXRsZScpfTwvaDM+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWRpc2MgbGlzdC1pbnNpZGUgc3BhY2UteS0yXCI+XHJcbiAgICAgICAgICAgICAge3QoJ3ByaXZhY3kucHJpdmFjeV9wb2xpY3kuc2VjdGlvbnMuZGF0YV9jb2xsZWN0aW9uLnR5cGVzLnVzZXJfcHJvdmlkZWQuaXRlbXMnKS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMFwiPntpdGVtfTwvbGk+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTRcIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1tZWRpdW0gbWItM1wiPnt0KCdwcml2YWN5LnByaXZhY3lfcG9saWN5LnNlY3Rpb25zLmRhdGFfY29sbGVjdGlvbi50eXBlcy5hdXRvbWF0aWMudGl0bGUnKX08L2gzPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1kaXNjIGxpc3QtaW5zaWRlIHNwYWNlLXktMlwiPlxyXG4gICAgICAgICAgICAgIHt0KCdwcml2YWN5LnByaXZhY3lfcG9saWN5LnNlY3Rpb25zLmRhdGFfY29sbGVjdGlvbi50eXBlcy5hdXRvbWF0aWMuaXRlbXMnKS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMFwiPntpdGVtfTwvbGk+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgIHsvKiDrjbDsnbTthLAg7IKs7JqpIOyEueyFmCAqL31cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtYi0xMlwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgbWItNCB0ZXh0LWVtZXJhbGQtNTAwXCI+e3QoJ3ByaXZhY3kucHJpdmFjeV9wb2xpY3kuc2VjdGlvbnMuZGF0YV91c2FnZS50aXRsZScpfTwvaDI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi00XCI+e3QoJ3ByaXZhY3kucHJpdmFjeV9wb2xpY3kuc2VjdGlvbnMuZGF0YV91c2FnZS5jb250ZW50Jyl9PC9wPlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZGlzYyBsaXN0LWluc2lkZSBzcGFjZS15LTIgbWwtNFwiPlxyXG4gICAgICAgICAgICB7dCgncHJpdmFjeS5wcml2YWN5X3BvbGljeS5zZWN0aW9ucy5kYXRhX3VzYWdlLnB1cnBvc2VzJykubWFwKChwdXJwb3NlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwXCI+e3B1cnBvc2V9PC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgey8qIOuNsOydtO2EsCDqs7XsnKAg7IS57IWYICovfVxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1iLTEyXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZCBtYi00IHRleHQtZW1lcmFsZC01MDBcIj57dCgncHJpdmFjeS5wcml2YWN5X3BvbGljeS5zZWN0aW9ucy5kYXRhX3NoYXJpbmcudGl0bGUnKX08L2gyPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNFwiPnt0KCdwcml2YWN5LnByaXZhY3lfcG9saWN5LnNlY3Rpb25zLmRhdGFfc2hhcmluZy5jb250ZW50Jyl9PC9wPlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZGlzYyBsaXN0LWluc2lkZSBzcGFjZS15LTIgbWwtNFwiPlxyXG4gICAgICAgICAgICB7dCgncHJpdmFjeS5wcml2YWN5X3BvbGljeS5zZWN0aW9ucy5kYXRhX3NoYXJpbmcuY29uZGl0aW9ucycpLm1hcCgoY29uZGl0aW9uLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwXCI+e2NvbmRpdGlvbn08L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICB7Lyog67O07JWIIOyEueyFmCAqL31cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtYi0xMlwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgbWItNCB0ZXh0LWVtZXJhbGQtNTAwXCI+e3QoJ3ByaXZhY3kucHJpdmFjeV9wb2xpY3kuc2VjdGlvbnMuc2VjdXJpdHkudGl0bGUnKX08L2gyPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMFwiPnt0KCdwcml2YWN5LnByaXZhY3lfcG9saWN5LnNlY3Rpb25zLnNlY3VyaXR5LmNvbnRlbnQnKX08L3A+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICB7Lyog642w7J207YSwIOuztOycoCDquLDqsIQgKi99XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWItMTJcIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIG1iLTQgdGV4dC1lbWVyYWxkLTUwMFwiPnt0KCdwcml2YWN5LnByaXZhY3lfcG9saWN5LnNlY3Rpb25zLnJldGVudGlvbi50aXRsZScpfTwvaDI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwXCI+e3QoJ3ByaXZhY3kucHJpdmFjeV9wb2xpY3kuc2VjdGlvbnMucmV0ZW50aW9uLmNvbnRlbnQnKX08L3A+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICB7Lyog7IKs7Jqp7J6QIOq2jOumrCAqL31cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtYi0xMlwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgbWItNCB0ZXh0LWVtZXJhbGQtNTAwXCI+e3QoJ3ByaXZhY3kucHJpdmFjeV9wb2xpY3kuc2VjdGlvbnMudXNlcl9yaWdodHMudGl0bGUnKX08L2gyPlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZGlzYyBsaXN0LWluc2lkZSBzcGFjZS15LTIgbWwtNFwiPlxyXG4gICAgICAgICAgICB7dCgncHJpdmFjeS5wcml2YWN5X3BvbGljeS5zZWN0aW9ucy51c2VyX3JpZ2h0cy5yaWdodHMnKS5tYXAoKHJpZ2h0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwXCI+e3JpZ2h0fTwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgIHsvKiDsv6DtgqQg7IKs7JqpICovfVxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1iLTEyXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZCBtYi00IHRleHQtZW1lcmFsZC01MDBcIj57dCgncHJpdmFjeS5wcml2YWN5X3BvbGljeS5zZWN0aW9ucy5jb29raWVzLnRpdGxlJyl9PC9oMj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDBcIj57dCgncHJpdmFjeS5wcml2YWN5X3BvbGljeS5zZWN0aW9ucy5jb29raWVzLmNvbnRlbnQnKX08L3A+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICB7Lyog7KCV7LGFIOuzgOqyvSAqL31cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtYi0xMlwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgbWItNCB0ZXh0LWVtZXJhbGQtNTAwXCI+e3QoJ3ByaXZhY3kucHJpdmFjeV9wb2xpY3kuc2VjdGlvbnMucG9saWN5X2NoYW5nZXMudGl0bGUnKX08L2gyPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMFwiPnt0KCdwcml2YWN5LnByaXZhY3lfcG9saWN5LnNlY3Rpb25zLnBvbGljeV9jaGFuZ2VzLmNvbnRlbnQnKX08L3A+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICB7Lyog7Jew65297LKYICovfVxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1iLTEyXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZCBtYi00IHRleHQtZW1lcmFsZC01MDBcIj57dCgncHJpdmFjeS5wcml2YWN5X3BvbGljeS5zZWN0aW9ucy5jb250YWN0LnRpdGxlJyl9PC9oMj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDBcIj57dCgncHJpdmFjeS5wcml2YWN5X3BvbGljeS5zZWN0aW9ucy5jb250YWN0LmNvbnRlbnQnKX08L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwIG10LTJcIj57dCgncHJpdmFjeS5wcml2YWN5X3BvbGljeS5zZWN0aW9ucy5jb250YWN0LmVtYWlsJyl9PC9wPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJpdmFjeVBhZ2U7Il0sIm5hbWVzIjpbInVzZUxhbmd1YWdlIiwiUHJpdmFjeVBhZ2UiLCJ0IiwibGFuZ3VhZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInAiLCJzZWN0aW9uIiwiaDIiLCJoMyIsInVsIiwibWFwIiwiaXRlbSIsImluZGV4IiwibGkiLCJwdXJwb3NlIiwiY29uZGl0aW9uIiwicmlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/privacy.js\n");

/***/ }),

/***/ "./translations lazy recursive ^\\.\\/about_.*\\.json$":
/*!******************************************************************!*\
  !*** ./translations/ lazy ^\.\/about_.*\.json$ namespace object ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./about_en.json": [
		"./translations/about_en.json",
		"translations_about_en_json"
	],
	"./about_ko.json": [
		"./translations/about_ko.json",
		"translations_about_ko_json"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 3 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./translations lazy recursive ^\\.\\/about_.*\\.json$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./translations lazy recursive ^\\.\\/careers_.*\\.json$":
/*!********************************************************************!*\
  !*** ./translations/ lazy ^\.\/careers_.*\.json$ namespace object ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./careers_en.json": [
		"./translations/careers_en.json",
		"translations_careers_en_json"
	],
	"./careers_ko.json": [
		"./translations/careers_ko.json",
		"translations_careers_ko_json"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 3 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./translations lazy recursive ^\\.\\/careers_.*\\.json$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./translations lazy recursive ^\\.\\/contact_.*\\.json$":
/*!********************************************************************!*\
  !*** ./translations/ lazy ^\.\/contact_.*\.json$ namespace object ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./contact_en.json": [
		"./translations/contact_en.json",
		"translations_contact_en_json"
	],
	"./contact_ko.json": [
		"./translations/contact_ko.json",
		"translations_contact_ko_json"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 3 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./translations lazy recursive ^\\.\\/contact_.*\\.json$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./translations lazy recursive ^\\.\\/join_developer_.*\\.json$":
/*!***************************************************************************!*\
  !*** ./translations/ lazy ^\.\/join_developer_.*\.json$ namespace object ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./join_developer_en.json": [
		"./translations/join_developer_en.json",
		"translations_join_developer_en_json"
	],
	"./join_developer_ko.json": [
		"./translations/join_developer_ko.json",
		"translations_join_developer_ko_json"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 3 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./translations lazy recursive ^\\.\\/join_developer_.*\\.json$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./translations lazy recursive ^\\.\\/landing_.*\\.json$":
/*!********************************************************************!*\
  !*** ./translations/ lazy ^\.\/landing_.*\.json$ namespace object ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./landing_en.json": [
		"./translations/landing_en.json",
		"translations_landing_en_json"
	],
	"./landing_ko.json": [
		"./translations/landing_ko.json",
		"translations_landing_ko_json"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 3 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./translations lazy recursive ^\\.\\/landing_.*\\.json$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./translations lazy recursive ^\\.\\/privacy_.*\\.json$":
/*!********************************************************************!*\
  !*** ./translations/ lazy ^\.\/privacy_.*\.json$ namespace object ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./privacy_en.json": [
		"./translations/privacy_en.json",
		"translations_privacy_en_json"
	],
	"./privacy_ko.json": [
		"./translations/privacy_ko.json",
		"translations_privacy_ko_json"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 3 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./translations lazy recursive ^\\.\\/privacy_.*\\.json$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./translations lazy recursive ^\\.\\/terms_.*\\.json$":
/*!******************************************************************!*\
  !*** ./translations/ lazy ^\.\/terms_.*\.json$ namespace object ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./terms_en.json": [
		"./translations/terms_en.json",
		"translations_terms_en_json"
	],
	"./terms_ko.json": [
		"./translations/terms_ko.json",
		"translations_terms_ko_json"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 3 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./translations lazy recursive ^\\.\\/terms_.*\\.json$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "i18next":
/*!**************************!*\
  !*** external "i18next" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = import("i18next");;

/***/ }),

/***/ "react-i18next":
/*!********************************!*\
  !*** external "react-i18next" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-i18next");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/privacy.js"));
module.exports = __webpack_exports__;

})();