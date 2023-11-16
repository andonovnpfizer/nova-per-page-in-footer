/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Tool.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Tool.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  emits: ['page'],
  props: {
    page: {
      type: Number,
      required: true
    },
    pages: {
      type: Number,
      "default": 0
    },
    next: {
      type: Boolean,
      "default": false
    },
    previous: {
      type: Boolean,
      "default": false
    }
  },
  data: function data(vm) {
    return {
      linksDisabled: false
    };
  },
  mounted: function mounted() {
    Nova.$on('resources-loaded', this.listenToResourcesLoaded);
  },
  beforeUnmount: function beforeUnmount() {
    Nova.$off('resources-loaded', this.listenToResourcesLoaded);
  },
  methods: {
    /**
     * Select the page.
     */
    selectPage: function selectPage(page) {
      if (this.page != page) {
        this.linksDisabled = true;
        this.$emit('page', page);
      }
    },
    /**
     * Select the previous page.
     */
    selectPreviousPage: function selectPreviousPage() {
      this.selectPage(this.page - 1);
    },
    /**
     * Select the next page.
     */
    selectNextPage: function selectNextPage() {
      this.selectPage(this.page + 1);
    },
    listenToResourcesLoaded: function listenToResourcesLoaded() {
      this.linksDisabled = false;
    },
    findParentByName: function findParentByName(component) {
      var parent = this.$parent;
      while (parent) {
        if (parent.$options.name === component) {
          return parent;
        }
        parent = parent.$parent;
      }
    }
  },
  computed: {
    /**
     * Determine if prior pages are available.
     */
    hasPreviousPages: function hasPreviousPages() {
      return this.page > 1;
    },
    /**
     * Determine if more pages are available.
     */
    hasMorePages: function hasMorePages() {
      return this.page < this.pages;
    },
    /**
     * Get printable pages.
     */
    printPages: function printPages() {
      var middlePage = Math.min(Math.max(3, this.page), this.pages - 2),
        fromPage = Math.max(middlePage - 2, 1),
        toPage = Math.min(middlePage + 2, this.pages);
      var pages = [];
      for (var n = fromPage; n <= toPage; ++n) {
        if (n > 0) pages.push(n);
      }
      return pages;
    },
    tableComponent: function tableComponent() {
      return this.findParentByName('ResourceIndex') || this.findParentByName('Lens');
    },
    perPageOptions: function perPageOptions() {
      return this.tableComponent.perPageOptions;
    },
    currentPerPage: function currentPerPage() {
      return this.tableComponent.currentPerPage;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Tool.vue?vue&type=template&id=68ff5483":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Tool.vue?vue&type=template&id=68ff5483 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var _hoisted_1 = {
  "class": "rounded-b-lg font-bold flex items-center"
};
var _hoisted_2 = {
  "class": "flex text-sm"
};
var _hoisted_3 = ["disabled"];
var _hoisted_4 = ["disabled"];
var _hoisted_5 = ["disabled", "onClick", "dusk"];
var _hoisted_6 = ["disabled"];
var _hoisted_7 = ["disabled"];
var _hoisted_8 = {
  "class": "ml-auto flex items-center"
};
var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "lowercase text-xs"
}, "Per page:", -1 /* HOISTED */);
var _hoisted_10 = ["value"];
var _hoisted_11 = ["value", "textContent"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("nav", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" First Link "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    disabled: !$options.hasPreviousPages || _ctx.linksDisabled,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["border-r border-gray-200 dark:border-gray-700 text-xl h-9 min-w-9 px-2 rounded-bl-lg focus:outline-none focus:bg-gray-50 hover:bg-gray-50 dark:hover:bg-gray-700", _defineProperty({
      'text-gray-500': $options.hasPreviousPages
    }, "text-gray-500", !$options.hasPreviousPages || _ctx.linksDisabled)]),
    rel: "first",
    onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.selectPage(1);
    }, ["prevent"])),
    dusk: "first"
  }, " « ", 10 /* CLASS, PROPS */, _hoisted_3), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Previous Link "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    disabled: !$options.hasPreviousPages || _ctx.linksDisabled,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["border-r border-gray-200 dark:border-gray-700 text-xl h-9 min-w-9 px-2 focus:outline-none focus:bg-gray-50 hover:bg-gray-50 dark:hover:bg-gray-700", _defineProperty({
      'text-gray-500': $options.hasPreviousPages
    }, "text-gray-500", !$options.hasPreviousPages || _ctx.linksDisabled)]),
    rel: "prev",
    onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.selectPreviousPage();
    }, ["prevent"])),
    dusk: "previous"
  }, " ‹ ", 10 /* CLASS, PROPS */, _hoisted_4), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Pages Links "), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.printPages, function (n) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      disabled: _ctx.linksDisabled,
      key: n,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["border-r border-gray-200 dark:border-gray-700 h-9 min-w-9 px-2 focus:outline-none focus:bg-gray-50 hover:bg-gray-50 dark:hover:bg-gray-700", {
        'text-gray-500': $props.page !== n,
        'text-gray-500 bg-gray-50 dark:bg-gray-700': $props.page === n
      }]),
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $options.selectPage(n);
      }, ["prevent"]),
      dusk: "page:".concat(n)
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(n), 11 /* TEXT, CLASS, PROPS */, _hoisted_5);
  }), 128 /* KEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Next Link "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    disabled: !$options.hasMorePages || _ctx.linksDisabled,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["border-r border-gray-200 dark:border-gray-700 text-xl h-9 min-w-9 px-2 focus:outline-none focus:bg-gray-50 hover:bg-gray-50 dark:hover:bg-gray-700", _defineProperty({
      'text-gray-500': $options.hasMorePages
    }, "text-gray-500", !$options.hasMorePages || _ctx.linksDisabled)]),
    rel: "next",
    onClick: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.selectNextPage();
    }, ["prevent"])),
    dusk: "next"
  }, " › ", 10 /* CLASS, PROPS */, _hoisted_6), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Last Link "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    disabled: !$options.hasMorePages || _ctx.linksDisabled,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["border-r border-gray-200 dark:border-gray-700 text-xl h-9 min-w-9 px-2 focus:outline-none focus:bg-gray-50 hover:bg-gray-50 dark:hover:bg-gray-700", _defineProperty({
      'text-gray-500': $options.hasMorePages
    }, "text-gray-500", !$options.hasMorePages || _ctx.linksDisabled)]),
    rel: "last",
    onClick: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.selectPage($props.pages);
    }, ["prevent"])),
    dusk: "last"
  }, " » ", 10 /* CLASS, PROPS */, _hoisted_7)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    value: $options.currentPerPage,
    onChange: _cache[4] || (_cache[4] = function ($event) {
      return $options.tableComponent.updatePerPageChanged($event.target.value);
    }),
    "class": "ml-1 block form-control form-select form-control-sm form-select-bordered"
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.perPageOptions, function (page) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: page,
      value: page,
      textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(page)
    }, null, 8 /* PROPS */, _hoisted_11);
  }), 128 /* KEYED_FRAGMENT */))], 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_10)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")])]);
}

/***/ }),

/***/ "./resources/js/tool.js":
/*!******************************!*\
  !*** ./resources/js/tool.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Tool */ "./resources/js/components/Tool.vue");

Nova.booting(function (app, store) {
  app.component('PaginationLinks', _components_Tool__WEBPACK_IMPORTED_MODULE_0__["default"]);
});

/***/ }),

/***/ "./resources/css/tool.css":
/*!********************************!*\
  !*** ./resources/css/tool.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/vue-loader/dist/exportHelper.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
// runtime helper for setting properties on components
// in a tree-shakable way
exports["default"] = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "./resources/js/components/Tool.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Tool.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Tool_vue_vue_type_template_id_68ff5483__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tool.vue?vue&type=template&id=68ff5483 */ "./resources/js/components/Tool.vue?vue&type=template&id=68ff5483");
/* harmony import */ var _Tool_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tool.vue?vue&type=script&lang=js */ "./resources/js/components/Tool.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_nikolay_Code_newton_dashboard_nova_components_Pagination_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_nikolay_Code_newton_dashboard_nova_components_Pagination_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Tool_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Tool_vue_vue_type_template_id_68ff5483__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Tool.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Tool.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./resources/js/components/Tool.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tool_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tool_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Tool.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Tool.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Tool.vue?vue&type=template&id=68ff5483":
/*!************************************************************************!*\
  !*** ./resources/js/components/Tool.vue?vue&type=template&id=68ff5483 ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tool_vue_vue_type_template_id_68ff5483__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tool_vue_vue_type_template_id_68ff5483__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Tool.vue?vue&type=template&id=68ff5483 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Tool.vue?vue&type=template&id=68ff5483");


/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/***/ ((module) => {

module.exports = Vue;

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/tool": 0,
/******/ 			"css/tool": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunknewton_console_pagination"] = self["webpackChunknewton_console_pagination"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/tool"], () => (__webpack_require__("./resources/js/tool.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/tool"], () => (__webpack_require__("./resources/css/tool.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;