"use strict";
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
exports.id = "pages/api/contact";
exports.ids = ["pages/api/contact"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = process.env.MONGODB_URI;\nconst options = {\n    useUnifiedTopology: true,\n    useNewUrlParser: true\n};\nlet client;\nlet clientPromise;\nif (!process.env.MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable inside .env.local\");\n}\nif (true) {\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMsTUFBTUMsTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxXQUFXO0FBQ25DLE1BQU1DLFVBQVU7SUFDZEMsb0JBQW9CLElBQUk7SUFDeEJDLGlCQUFpQixJQUFJO0FBQ3ZCO0FBRUEsSUFBSUM7QUFDSixJQUFJQztBQUVKLElBQUksQ0FBQ1AsUUFBUUMsR0FBRyxDQUFDQyxXQUFXLEVBQUU7SUFDNUIsTUFBTSxJQUFJTSxNQUFNLHdFQUF3RTtBQUMxRixDQUFDO0FBRUQsSUFBSVIsSUFBeUIsRUFBZTtJQUMxQyxJQUFJLENBQUNVLE9BQU9DLG1CQUFtQixFQUFFO1FBQy9CTCxTQUFTLElBQUlSLGdEQUFXQSxDQUFDQyxLQUFLSTtRQUM5Qk8sT0FBT0MsbUJBQW1CLEdBQUdMLE9BQU9NLE9BQU87SUFDN0MsQ0FBQztJQUNETCxnQkFBZ0JHLE9BQU9DLG1CQUFtQjtBQUM1QyxPQUFPLEVBR047QUFFRCxpRUFBZUosYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvcmVtYXRyaXgtYWkvLi9saWIvbW9uZ29kYi5qcz9kOTIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7XHJcblxyXG5jb25zdCB1cmkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcclxuY29uc3Qgb3B0aW9ucyA9IHtcclxuICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXHJcbiAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG59O1xyXG5cclxubGV0IGNsaWVudDtcclxubGV0IGNsaWVudFByb21pc2U7XHJcblxyXG5pZiAoIXByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgZGVmaW5lIHRoZSBNT05HT0RCX1VSSSBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbnNpZGUgLmVudi5sb2NhbCcpO1xyXG59XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICBpZiAoIWdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlKSB7XHJcbiAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcclxuICAgIGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKTtcclxuICB9XHJcbiAgY2xpZW50UHJvbWlzZSA9IGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlO1xyXG59IGVsc2Uge1xyXG4gIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpO1xyXG4gIGNsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGllbnRQcm9taXNlOyJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsIm9wdGlvbnMiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJ1c2VOZXdVcmxQYXJzZXIiLCJjbGllbnQiLCJjbGllbnRQcm9taXNlIiwiRXJyb3IiLCJOT0RFX0VOViIsImdsb2JhbCIsIl9tb25nb0NsaWVudFByb21pc2UiLCJjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.js\n");

/***/ }),

/***/ "(api)/./pages/api/contact.js":
/*!******************************!*\
  !*** ./pages/api/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/mongodb */ \"(api)/./lib/mongodb.js\");\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n            const db = client.db(\"CoreMatrix\");\n            const contactsCollection = db.collection(\"contacts\");\n            const contactData = {\n                ...req.body,\n                createdAt: new Date()\n            };\n            const result = await contactsCollection.insertOne(contactData);\n            res.status(201).json({\n                message: \"문의가 성공적으로 제출되었습니다.\",\n                contactId: result.insertedId\n            });\n        } catch (error) {\n            console.error(\"MongoDB 저장 중 오류:\", error);\n            res.status(500).json({\n                message: \"문의 제출 중 서버 오류가 발생했습니다.\",\n                error: error.message\n            });\n        }\n    } else {\n        res.setHeader(\"Allow\", [\n            \"POST\"\n        ]);\n        res.status(405).end(`Method ${req.method} Not Allowed`);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29udGFjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE4QztBQUUvQixlQUFlQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN6QixJQUFJO1lBQ0YsTUFBTUMsU0FBUyxNQUFNTCxvREFBYUE7WUFDbEMsTUFBTU0sS0FBS0QsT0FBT0MsRUFBRSxDQUFDO1lBQ3JCLE1BQU1DLHFCQUFxQkQsR0FBR0UsVUFBVSxDQUFDO1lBRXpDLE1BQU1DLGNBQWM7Z0JBQ2xCLEdBQUdQLElBQUlRLElBQUk7Z0JBQ1hDLFdBQVcsSUFBSUM7WUFDakI7WUFFQSxNQUFNQyxTQUFTLE1BQU1OLG1CQUFtQk8sU0FBUyxDQUFDTDtZQUVsRE4sSUFBSVksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFDbkJDLFNBQVM7Z0JBQ1RDLFdBQVdMLE9BQU9NLFVBQVU7WUFDOUI7UUFDRixFQUFFLE9BQU9DLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLG9CQUFvQkE7WUFDbENqQixJQUFJWSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUNuQkMsU0FBUztnQkFDVEcsT0FBT0EsTUFBTUgsT0FBTztZQUN0QjtRQUNGO0lBQ0YsT0FBTztRQUNMZCxJQUFJbUIsU0FBUyxDQUFDLFNBQVM7WUFBQztTQUFPO1FBQy9CbkIsSUFBSVksTUFBTSxDQUFDLEtBQUtRLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRXJCLElBQUlFLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDeEQsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3JlbWF0cml4LWFpLy4vcGFnZXMvYXBpL2NvbnRhY3QuanM/MzQ5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tICcuLi8uLi9saWIvbW9uZ29kYic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgY2xpZW50UHJvbWlzZTtcclxuICAgICAgY29uc3QgZGIgPSBjbGllbnQuZGIoJ0NvcmVNYXRyaXgnKTtcclxuICAgICAgY29uc3QgY29udGFjdHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignY29udGFjdHMnKTtcclxuXHJcbiAgICAgIGNvbnN0IGNvbnRhY3REYXRhID0ge1xyXG4gICAgICAgIC4uLnJlcS5ib2R5LFxyXG4gICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY29udGFjdHNDb2xsZWN0aW9uLmluc2VydE9uZShjb250YWN0RGF0YSk7XHJcblxyXG4gICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IFxyXG4gICAgICAgIG1lc3NhZ2U6ICfrrLjsnZjqsIAg7ISx6rO17KCB7Jy866GcIOygnOy2nOuQmOyXiOyKteuLiOuLpC4nLCBcclxuICAgICAgICBjb250YWN0SWQ6IHJlc3VsdC5pbnNlcnRlZElkIFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ01vbmdvREIg7KCA7J6lIOykkSDsmKTrpZg6JywgZXJyb3IpO1xyXG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IFxyXG4gICAgICAgIG1lc3NhZ2U6ICfrrLjsnZgg7KCc7LacIOykkSDshJzrsoQg7Jik66WY6rCAIOuwnOyDne2WiOyKteuLiOuLpC4nLCBcclxuICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZSBcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcy5zZXRIZWFkZXIoJ0FsbG93JywgWydQT1NUJ10pO1xyXG4gICAgcmVzLnN0YXR1cyg0MDUpLmVuZChgTWV0aG9kICR7cmVxLm1ldGhvZH0gTm90IEFsbG93ZWRgKTtcclxuICB9XHJcbn0iXSwibmFtZXMiOlsiY2xpZW50UHJvbWlzZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJjbGllbnQiLCJkYiIsImNvbnRhY3RzQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJjb250YWN0RGF0YSIsImJvZHkiLCJjcmVhdGVkQXQiLCJEYXRlIiwicmVzdWx0IiwiaW5zZXJ0T25lIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJjb250YWN0SWQiLCJpbnNlcnRlZElkIiwiZXJyb3IiLCJjb25zb2xlIiwic2V0SGVhZGVyIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/contact.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/contact.js"));
module.exports = __webpack_exports__;

})();