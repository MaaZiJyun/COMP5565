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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./config/web3.ts":
/*!************************!*\
  !*** ./config/web3.ts ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   chains: () => (/* binding */ chains),\n/* harmony export */   config: () => (/* binding */ config)\n/* harmony export */ });\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wagmi/chains */ \"wagmi/chains\");\n/* harmony import */ var _web3modal_wagmi_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3modal/wagmi/react */ \"@web3modal/wagmi/react\");\n/* harmony import */ var wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi/connectors/walletConnect */ \"wagmi/connectors/walletConnect\");\n/* harmony import */ var wagmi_connectors_injected__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi/connectors/injected */ \"wagmi/connectors/injected\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/providers/public */ \"wagmi/providers/public\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([wagmi__WEBPACK_IMPORTED_MODULE_0__, wagmi_chains__WEBPACK_IMPORTED_MODULE_1__, _web3modal_wagmi_react__WEBPACK_IMPORTED_MODULE_2__, wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_3__, wagmi_connectors_injected__WEBPACK_IMPORTED_MODULE_4__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__]);\n([wagmi__WEBPACK_IMPORTED_MODULE_0__, wagmi_chains__WEBPACK_IMPORTED_MODULE_1__, _web3modal_wagmi_react__WEBPACK_IMPORTED_MODULE_2__, wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_3__, wagmi_connectors_injected__WEBPACK_IMPORTED_MODULE_4__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n// 配置本地 Hardhat 链\nconst hardhatChain = {\n    id: 1337,\n    name: \"Hardhat\",\n    network: \"hardhat\",\n    nativeCurrency: {\n        decimals: 18,\n        name: \"Ether\",\n        symbol: \"ETH\"\n    },\n    rpcUrls: {\n        default: {\n            http: [\n                \"http://127.0.0.1:8545\"\n            ]\n        },\n        public: {\n            http: [\n                \"http://127.0.0.1:8545\"\n            ]\n        }\n    },\n    blockExplorers: {\n        default: {\n            name: \"Hardhat\",\n            url: \"http://localhost:8545\"\n        }\n    },\n    testnet: true\n};\nconst chains = [\n    hardhatChain,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_1__.goerli\n];\nconst projectId = \"d1de14b0939083454d2185bcb505f7b0\" || 0;\n// 配置 providers 和 chains\nconst { publicClient, webSocketPublicClient } = (0,wagmi__WEBPACK_IMPORTED_MODULE_0__.configureChains)(chains, [\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__.publicProvider)()\n]);\n// 配置连接器\nconst connectors = [\n    new wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_3__.WalletConnectConnector({\n        chains,\n        options: {\n            projectId\n        }\n    }),\n    new wagmi_connectors_injected__WEBPACK_IMPORTED_MODULE_4__.InjectedConnector({\n        chains,\n        options: {\n            name: \"Injected\",\n            shimDisconnect: true\n        }\n    })\n];\n// 创建 wagmi 配置\nconst config = (0,wagmi__WEBPACK_IMPORTED_MODULE_0__.createConfig)({\n    autoConnect: true,\n    connectors,\n    publicClient,\n    webSocketPublicClient\n});\n// 创建 Web3Modal 实例\n(0,_web3modal_wagmi_react__WEBPACK_IMPORTED_MODULE_2__.createWeb3Modal)({\n    wagmiConfig: config,\n    projectId,\n    chains,\n    defaultChain: hardhatChain\n});\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvd2ViMy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFxRDtBQUNQO0FBQ1U7QUFDZTtBQUNWO0FBQ047QUFFdkQsaUJBQWlCO0FBQ2pCLE1BQU1PLGVBQWU7SUFDbkJDLElBQUk7SUFDSkMsTUFBTTtJQUNOQyxTQUFTO0lBQ1RDLGdCQUFnQjtRQUNkQyxVQUFVO1FBQ1ZILE1BQU07UUFDTkksUUFBUTtJQUNWO0lBQ0FDLFNBQVM7UUFDUEMsU0FBUztZQUFFQyxNQUFNO2dCQUFDO2FBQXdCO1FBQUM7UUFDM0NDLFFBQVE7WUFBRUQsTUFBTTtnQkFBQzthQUF3QjtRQUFDO0lBQzVDO0lBQ0FFLGdCQUFnQjtRQUNkSCxTQUFTO1lBQUVOLE1BQU07WUFBV1UsS0FBSztRQUF3QjtJQUMzRDtJQUNBQyxTQUFTO0FBQ1g7QUFFQSxNQUFNQyxTQUFTO0lBQUNkO0lBQWNMLGdEQUFNQTtDQUFDO0FBQ3JDLE1BQU1vQixZQUFZQyxrQ0FBaUQsSUFBSTtBQUV2RSx3QkFBd0I7QUFDeEIsTUFBTSxFQUFFRyxZQUFZLEVBQUVDLHFCQUFxQixFQUFFLEdBQUcxQixzREFBZUEsQ0FDN0RvQixRQUNBO0lBQUNmLHNFQUFjQTtDQUFHO0FBR3BCLFFBQVE7QUFDUixNQUFNc0IsYUFBYTtJQUNqQixJQUFJeEIsa0ZBQXNCQSxDQUFDO1FBQ3pCaUI7UUFDQVEsU0FBUztZQUNQUDtRQUNGO0lBQ0Y7SUFDQSxJQUFJakIsd0VBQWlCQSxDQUFDO1FBQ3BCZ0I7UUFDQVEsU0FBUztZQUNQcEIsTUFBTTtZQUNOcUIsZ0JBQWdCO1FBQ2xCO0lBQ0Y7Q0FDRDtBQUVELGNBQWM7QUFDUCxNQUFNQyxTQUFTL0IsbURBQVlBLENBQUM7SUFDakNnQyxhQUFhO0lBQ2JKO0lBQ0FGO0lBQ0FDO0FBQ0YsR0FBRTtBQUVGLGtCQUFrQjtBQUNsQnhCLHVFQUFlQSxDQUFDO0lBQ2Q4QixhQUFhRjtJQUNiVDtJQUNBRDtJQUNBYSxjQUFjM0I7QUFDaEI7QUFFaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2NvbmZpZy93ZWIzLnRzPzg2OTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29uZmlnLCBjb25maWd1cmVDaGFpbnMgfSBmcm9tICd3YWdtaSdcclxuaW1wb3J0IHsgbWFpbm5ldCwgZ29lcmxpIH0gZnJvbSAnd2FnbWkvY2hhaW5zJ1xyXG5pbXBvcnQgeyBjcmVhdGVXZWIzTW9kYWwgfSBmcm9tICdAd2ViM21vZGFsL3dhZ21pL3JlYWN0J1xyXG5pbXBvcnQgeyBXYWxsZXRDb25uZWN0Q29ubmVjdG9yIH0gZnJvbSAnd2FnbWkvY29ubmVjdG9ycy93YWxsZXRDb25uZWN0J1xyXG5pbXBvcnQgeyBJbmplY3RlZENvbm5lY3RvciB9IGZyb20gJ3dhZ21pL2Nvbm5lY3RvcnMvaW5qZWN0ZWQnXHJcbmltcG9ydCB7IHB1YmxpY1Byb3ZpZGVyIH0gZnJvbSAnd2FnbWkvcHJvdmlkZXJzL3B1YmxpYydcclxuXHJcbi8vIOmFjee9ruacrOWcsCBIYXJkaGF0IOmTvlxyXG5jb25zdCBoYXJkaGF0Q2hhaW4gPSB7XHJcbiAgaWQ6IDEzMzcsXHJcbiAgbmFtZTogJ0hhcmRoYXQnLFxyXG4gIG5ldHdvcms6ICdoYXJkaGF0JyxcclxuICBuYXRpdmVDdXJyZW5jeToge1xyXG4gICAgZGVjaW1hbHM6IDE4LFxyXG4gICAgbmFtZTogJ0V0aGVyJyxcclxuICAgIHN5bWJvbDogJ0VUSCcsXHJcbiAgfSxcclxuICBycGNVcmxzOiB7XHJcbiAgICBkZWZhdWx0OiB7IGh0dHA6IFsnaHR0cDovLzEyNy4wLjAuMTo4NTQ1J10gfSxcclxuICAgIHB1YmxpYzogeyBodHRwOiBbJ2h0dHA6Ly8xMjcuMC4wLjE6ODU0NSddIH0sXHJcbiAgfSxcclxuICBibG9ja0V4cGxvcmVyczoge1xyXG4gICAgZGVmYXVsdDogeyBuYW1lOiAnSGFyZGhhdCcsIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODU0NScgfSxcclxuICB9LFxyXG4gIHRlc3RuZXQ6IHRydWUsXHJcbn1cclxuXHJcbmNvbnN0IGNoYWlucyA9IFtoYXJkaGF0Q2hhaW4sIGdvZXJsaV1cclxuY29uc3QgcHJvamVjdElkID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfV0FMTEVUX0NPTk5FQ1RfUFJPSkVDVF9JRCB8fCAnJ1xyXG5cclxuLy8g6YWN572uIHByb3ZpZGVycyDlkowgY2hhaW5zXHJcbmNvbnN0IHsgcHVibGljQ2xpZW50LCB3ZWJTb2NrZXRQdWJsaWNDbGllbnQgfSA9IGNvbmZpZ3VyZUNoYWlucyhcclxuICBjaGFpbnMsXHJcbiAgW3B1YmxpY1Byb3ZpZGVyKCldXHJcbilcclxuXHJcbi8vIOmFjee9rui/nuaOpeWZqFxyXG5jb25zdCBjb25uZWN0b3JzID0gW1xyXG4gIG5ldyBXYWxsZXRDb25uZWN0Q29ubmVjdG9yKHtcclxuICAgIGNoYWlucyxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgcHJvamVjdElkLFxyXG4gICAgfSxcclxuICB9KSxcclxuICBuZXcgSW5qZWN0ZWRDb25uZWN0b3Ioe1xyXG4gICAgY2hhaW5zLFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICBuYW1lOiAnSW5qZWN0ZWQnLFxyXG4gICAgICBzaGltRGlzY29ubmVjdDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfSksXHJcbl1cclxuXHJcbi8vIOWIm+W7uiB3YWdtaSDphY3nva5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IGNyZWF0ZUNvbmZpZyh7XHJcbiAgYXV0b0Nvbm5lY3Q6IHRydWUsXHJcbiAgY29ubmVjdG9ycyxcclxuICBwdWJsaWNDbGllbnQsXHJcbiAgd2ViU29ja2V0UHVibGljQ2xpZW50LFxyXG59KVxyXG5cclxuLy8g5Yib5bu6IFdlYjNNb2RhbCDlrp7kvotcclxuY3JlYXRlV2ViM01vZGFsKHtcclxuICB3YWdtaUNvbmZpZzogY29uZmlnLFxyXG4gIHByb2plY3RJZCxcclxuICBjaGFpbnMsXHJcbiAgZGVmYXVsdENoYWluOiBoYXJkaGF0Q2hhaW4sXHJcbn0pXHJcblxyXG5leHBvcnQgeyBjaGFpbnMgfSAiXSwibmFtZXMiOlsiY3JlYXRlQ29uZmlnIiwiY29uZmlndXJlQ2hhaW5zIiwiZ29lcmxpIiwiY3JlYXRlV2ViM01vZGFsIiwiV2FsbGV0Q29ubmVjdENvbm5lY3RvciIsIkluamVjdGVkQ29ubmVjdG9yIiwicHVibGljUHJvdmlkZXIiLCJoYXJkaGF0Q2hhaW4iLCJpZCIsIm5hbWUiLCJuZXR3b3JrIiwibmF0aXZlQ3VycmVuY3kiLCJkZWNpbWFscyIsInN5bWJvbCIsInJwY1VybHMiLCJkZWZhdWx0IiwiaHR0cCIsInB1YmxpYyIsImJsb2NrRXhwbG9yZXJzIiwidXJsIiwidGVzdG5ldCIsImNoYWlucyIsInByb2plY3RJZCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19XQUxMRVRfQ09OTkVDVF9QUk9KRUNUX0lEIiwicHVibGljQ2xpZW50Iiwid2ViU29ja2V0UHVibGljQ2xpZW50IiwiY29ubmVjdG9ycyIsIm9wdGlvbnMiLCJzaGltRGlzY29ubmVjdCIsImNvbmZpZyIsImF1dG9Db25uZWN0Iiwid2FnbWlDb25maWciLCJkZWZhdWx0Q2hhaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./config/web3.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var _config_web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/web3 */ \"./config/web3.ts\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"react-hot-toast\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([wagmi__WEBPACK_IMPORTED_MODULE_1__, _config_web3__WEBPACK_IMPORTED_MODULE_2__, react_hot_toast__WEBPACK_IMPORTED_MODULE_3__]);\n([wagmi__WEBPACK_IMPORTED_MODULE_1__, _config_web3__WEBPACK_IMPORTED_MODULE_2__, react_hot_toast__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_1__.WagmiConfig, {\n        config: _config_web3__WEBPACK_IMPORTED_MODULE_2__.config,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"D:\\\\COMP5565_project\\\\jewelry_tracing\\\\frontend\\\\pages\\\\_app.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.Toaster, {\n                position: \"bottom-right\"\n            }, void 0, false, {\n                fileName: \"D:\\\\COMP5565_project\\\\jewelry_tracing\\\\frontend\\\\pages\\\\_app.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\COMP5565_project\\\\jewelry_tracing\\\\frontend\\\\pages\\\\_app.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDb0M7QUFDSTtBQUNFO0FBQ1g7QUFFL0IsU0FBU0csTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBWTtJQUMvQyxxQkFDRSw4REFBQ0wsOENBQVdBO1FBQUNDLFFBQVFBLGdEQUFNQTs7MEJBQ3pCLDhEQUFDRztnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7MEJBQ3hCLDhEQUFDSCxvREFBT0E7Z0JBQUNJLFVBQVM7Ozs7Ozs7Ozs7OztBQUd4QjtBQUVBLGlFQUFlSCxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCB7IFdhZ21pQ29uZmlnIH0gZnJvbSAnd2FnbWknO1xyXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuLi9jb25maWcvd2ViMyc7XHJcbmltcG9ydCB7IFRvYXN0ZXIgfSBmcm9tICdyZWFjdC1ob3QtdG9hc3QnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxXYWdtaUNvbmZpZyBjb25maWc9e2NvbmZpZ30+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPFRvYXN0ZXIgcG9zaXRpb249XCJib3R0b20tcmlnaHRcIiAvPlxyXG4gICAgPC9XYWdtaUNvbmZpZz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDsgIl0sIm5hbWVzIjpbIldhZ21pQ29uZmlnIiwiY29uZmlnIiwiVG9hc3RlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicG9zaXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@web3modal/wagmi/react":
/*!*****************************************!*\
  !*** external "@web3modal/wagmi/react" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@web3modal/wagmi/react");;

/***/ }),

/***/ "react-hot-toast":
/*!**********************************!*\
  !*** external "react-hot-toast" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-hot-toast");;

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi");;

/***/ }),

/***/ "wagmi/chains":
/*!*******************************!*\
  !*** external "wagmi/chains" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/chains");;

/***/ }),

/***/ "wagmi/connectors/injected":
/*!********************************************!*\
  !*** external "wagmi/connectors/injected" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/connectors/injected");;

/***/ }),

/***/ "wagmi/connectors/walletConnect":
/*!*************************************************!*\
  !*** external "wagmi/connectors/walletConnect" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/connectors/walletConnect");;

/***/ }),

/***/ "wagmi/providers/public":
/*!*****************************************!*\
  !*** external "wagmi/providers/public" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/providers/public");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();