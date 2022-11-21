/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/api/src/app/dataController.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataController = void 0;
const path = __webpack_require__("path");
const fs = __webpack_require__("fs");
class DataController {
    constructor() {
        this.basePathToData = path.join(__dirname, './data');
        this.getJsonData = (basePathToData, filename) => {
            const fname = path.join(basePathToData, filename);
            return JSON.parse(fs.readFileSync(fname, 'utf-8'));
        };
        this.getData = (request, response) => {
            const data = this.getJsonData(this.basePathToData, 'users.json');
            setTimeout(function () {
                return response.send(data);
            }, 100);
        };
    }
}
exports.DataController = DataController;


/***/ }),

/***/ "body-parser":
/***/ ((module) => {

module.exports = require("body-parser");

/***/ }),

/***/ "express":
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "fs":
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const express = __webpack_require__("express");
const bodyParser = __webpack_require__("body-parser");
const path = __webpack_require__("path");
const dataController_1 = __webpack_require__("./apps/api/src/app/dataController.ts");
const app = express();
app.use(express.static(path.join(__dirname, 'dist')));
const obj = new dataController_1.DataController();
app.get('/api/data', (req, res) => {
    obj.getData(req, res);
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// const routes = appRouter(app, fs);
const greeting = { message: 'Data Fetching from API...' };
app.get('/api', (req, res) => {
    res.send(greeting);
});
// app._router(routes);
const port = process.env.port || 3333;
const server = app.listen(port, () => {
    console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map