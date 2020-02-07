/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./schema/schema.ts":
/*!**************************!*\
  !*** ./schema/schema.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar graphql_1 = __webpack_require__(/*! graphql */ \"graphql\");\nvar graphql = __webpack_require__(/*! graphql */ \"graphql\");\nvar GraphQLObjectType = graphql.GraphQLObjectType, GraphQLFloat = graphql.GraphQLFloat, GraphQLInt = graphql.GraphQLInt, GraphQLString = graphql.GraphQLString;\nvar stations = [\n    {\n        \"name\": \"12th St. Oakland City Center\",\n        \"abbr\": \"12TH\",\n        \"gtfs_latitude\": \"37.803768\",\n        \"gtfs_longitude\": \"-122.271450\",\n        \"address\": \"1245 Broadway\",\n        \"city\": \"Oakland\",\n        \"county\": \"alameda\",\n        \"state\": \"CA\",\n        \"zipcode\": \"94612\"\n    }, {\n        \"name\": \"16th St. Mission\",\n        \"abbr\": \"16TH\",\n        \"gtfs_latitude\": \"37.765062\",\n        \"gtfs_longitude\": \"-122.419694\",\n        \"address\": \"2000 Mission Street\",\n        \"city\": \"San Francisco\",\n        \"county\": \"sanfrancisco\",\n        \"state\": \"CA\",\n        \"zipcode\": \"94110\"\n    }\n];\n// Stations: https://api.bart.gov/api/stn.aspx?cmd=stns&key=MW9S-E7SL-26DU-VV8V&json=y\nvar StationType = new GraphQLObjectType({\n    name: 'StationType',\n    fields: {\n        name: { type: GraphQLString },\n        abbr: { type: GraphQLString },\n        gtfs_latitude: { type: GraphQLFloat },\n        gtfs_longitude: { type: GraphQLFloat },\n        address: { type: GraphQLString },\n        city: { type: GraphQLString },\n        county: { type: GraphQLString },\n        state: { type: GraphQLString },\n        zipcode: { type: GraphQLInt }\n    }\n});\n// Example path: https://api.bart.gov/api/etd.aspx?cmd=etd&orig=12th&key=MW9S-E7SL-26DU-VV8V&json=y\n// const RealTimeEstimatesType = new GraphQLObjectType({\n//     name: 'RealTimeEstimates',\n//     fields: {\n//         // \"minutes\": \"35\", \"platform\": \"2\", \"direction\": \"South\", \"length\": \"6\", \"color\": \"ORANGE\", \"hexcolor\": \"#ff9933\", \"bikeflag\": \"1\", \"delay\": \"0\"\n//     }\n// });\nvar RootQuery = new GraphQLObjectType({\n    name: 'RootQueryType',\n    fields: {\n        station: {\n            type: StationType,\n            args: {\n                abbr: {\n                    type: GraphQLString\n                }\n            },\n            resolve: function (parentValue, args) {\n                for (var i = 0; i < stations.length; i++) {\n                    if (stations[i].abbr === args.abbr) {\n                        return stations[i];\n                    }\n                }\n                return null;\n            }\n        }\n    }\n});\nexports[\"default\"] = new graphql_1.GraphQLSchema({\n    query: RootQuery\n});\n\n\n//# sourceURL=webpack:///./schema/schema.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nexports.__esModule = true;\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar express_graphql_1 = __importDefault(__webpack_require__(/*! express-graphql */ \"express-graphql\"));\nvar schema_1 = __importDefault(__webpack_require__(/*! ../schema/schema */ \"./schema/schema.ts\"));\n// Bart's official API key\nvar BART_API_KEY = 'MW9S-E7SL-26DU-VV8V';\nvar BART_API_MAIN_PATH = 'https://api.bart.gov/api/';\n// const schema = buildSchema(`\n//     type Query {\n//         hello:String\n//     }\n// `);\nvar root = {\n    hello: function () {\n        return 'Hello World!';\n    }\n};\nvar app = express_1[\"default\"]();\nvar _a = process.env.PORT, PORT = _a === void 0 ? 4000 : _a;\napp.get('/', function (req, res) {\n    res.send({\n        message: 'Hello world!'\n    });\n});\napp.use('/graphql', express_graphql_1[\"default\"]({\n    schema: schema_1[\"default\"],\n    rootValue: root,\n    graphiql: true\n}));\nif (__webpack_require__.c[__webpack_require__.s] === module) {\n    app.listen(PORT, function () {\n        console.log('Server started at http://localhost:' + PORT);\n    });\n}\nexports[\"default\"] = app;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-graphql":
/*!**********************************!*\
  !*** external "express-graphql" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-graphql\");\n\n//# sourceURL=webpack:///external_%22express-graphql%22?");

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql\");\n\n//# sourceURL=webpack:///external_%22graphql%22?");

/***/ })

/******/ });