"use weex:vue";
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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/*!***************************************************!*\
  !*** D:/inWdm/uni_wz/main.js?{"type":"appStyle"} ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!***************************************************************!*\
  !*** D:/inWdm/uni_wz/App.vue?vue&type=style&index=0&lang=css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/inWdm/uni_wz/App.vue?vue&type=style&index=0&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---';
      } catch (e) {
        v = '[object object]';
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/*!****************************************************************!*\
  !*** D:/inWdm/uni_wz/main.js?{"page":"pages%2Fvideo%2Fvideo"} ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_video_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/video/video.nvue?mpType=page */ 22);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            var promise = this.constructor\n            return this.then(function(value) {\n              return promise.resolve(callback()).then(function() {\n                return value\n              })\n            }, function(reason) {\n              return promise.resolve(callback()).then(function() {\n                throw reason\n              })\n            })\n          }\n        }\n        _pages_video_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_video_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/video/video'\n        _pages_video_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_video_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQThEO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLFFBQVEsMkVBQUc7QUFDWCxRQUFRLDJFQUFHO0FBQ1gsUUFBUSwyRUFBRztBQUNYLGdCQUFnQiwyRUFBRyIsImZpbGUiOiIyMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICBcbiAgICAgICAgaW1wb3J0ICd1bmktYXBwLXN0eWxlJ1xuICAgICAgICBpbXBvcnQgQXBwIGZyb20gJy4vcGFnZXMvdmlkZW8vdmlkZW8ubnZ1ZT9tcFR5cGU9cGFnZSdcbiAgICAgICAgaWYgKHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJyAmJiAhUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSkge1xuICAgICAgICAgIFByb21pc2UucHJvdG90eXBlLmZpbmFsbHkgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIHByb21pc2UgPSB0aGlzLmNvbnN0cnVjdG9yXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgcmVhc29uXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBBcHAubXBUeXBlID0gJ3BhZ2UnXG4gICAgICAgIEFwcC5yb3V0ZSA9ICdwYWdlcy92aWRlby92aWRlbydcbiAgICAgICAgQXBwLmVsID0gJyNyb290J1xuICAgICAgICBuZXcgVnVlKEFwcClcbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///21\n");

/***/ }),
/* 22 */
/*!**********************************************************!*\
  !*** D:/inWdm/uni_wz/pages/video/video.nvue?mpType=page ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _video_nvue_vue_type_template_id_683755b0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video.nvue?vue&type=template&id=683755b0&scoped=true&mpType=page */ 23);\n/* harmony import */ var _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video.nvue?vue&type=script&lang=js&mpType=page */ 32);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./video.nvue?vue&type=style&index=0&id=683755b0&scoped=true&lang=css&mpType=page */ 36).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./video.nvue?vue&type=style&index=0&id=683755b0&scoped=true&lang=css&mpType=page */ 36).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _video_nvue_vue_type_template_id_683755b0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _video_nvue_vue_type_template_id_683755b0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"683755b0\",\n  \"688f61af\",\n  false,\n  _video_nvue_vue_type_template_id_683755b0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/video/video.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEk7QUFDMUk7QUFDcUU7QUFDTDtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDBGQUFrRjtBQUN0SSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsMEZBQWtGO0FBQzNJOztBQUVBOztBQUVBO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSx3R0FBTTtBQUNSLEVBQUUsaUhBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNEdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIyMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdmlkZW8ubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02ODM3NTViMCZzY29wZWQ9dHJ1ZSZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdmlkZW8ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi92aWRlby5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi92aWRlby5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjgzNzU1YjAmc2NvcGVkPXRydWUmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vdmlkZW8ubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY4Mzc1NWIwJnNjb3BlZD10cnVlJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFFOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNjgzNzU1YjBcIixcbiAgXCI2ODhmNjFhZlwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy92aWRlby92aWRlby5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///22\n");

/***/ }),
/* 23 */
/*!****************************************************************************************************!*\
  !*** D:/inWdm/uni_wz/pages/video/video.nvue?vue&type=template&id=683755b0&scoped=true&mpType=page ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_683755b0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./video.nvue?vue&type=template&id=683755b0&scoped=true&mpType=page */ 24);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_683755b0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_683755b0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_683755b0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_683755b0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 24 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/inWdm/uni_wz/pages/video/video.nvue?vue&type=template&id=683755b0&scoped=true&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components = {
  chunleiVideo: __webpack_require__(/*! @/components/chunlei-video/chunlei-video.nvue */ 25).default
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true"
      }
    },
    [
      _c(
        "div",
        { staticClass: ["page"], style: { height: _vm.height } },
        [
          _c(
            "swiper",
            {
              staticClass: ["swiper"],
              attrs: { vertical: true, current: _vm.index },
              on: { change: _vm.changeCurrent }
            },
            _vm._l(_vm.videoList, function(item, idx) {
              return _c(
                "swiper-item",
                { key: idx, staticClass: ["swiper-item"] },
                [
                  Math.abs(_vm.index - idx) <= 1
                    ? _c(
                        "div",
                        { staticClass: ["video-box"] },
                        [
                          Math.abs(_vm.index - idx) <= 1
                            ? _c("chunlei-video", {
                                staticClass: ["video"],
                                attrs: {
                                  src: item.src,
                                  height: _vm.height,
                                  width: _vm.width,
                                  play: item.flag,
                                  gDuration: item.duration,
                                  initialTime: item.initialTime,
                                  objectFit: item.objectFit
                                },
                                on: { pause: _vm.pauseVideo }
                              })
                            : _vm._e(),
                          _c(
                            "cover-view",
                            { staticClass: ["cover-view-left"] },
                            [
                              _c("cover-view", { staticClass: ["left-view"] }, [
                                _c("u-text", { staticClass: ["left-text"] }, [
                                  _vm._v("@" + _vm._s(item.at))
                                ])
                              ]),
                              _c("cover-view", { staticClass: ["left-view"] }, [
                                _c("u-text", { staticClass: ["left-text"] }, [
                                  _vm._v(_vm._s(item.content))
                                ])
                              ])
                            ],
                            1
                          ),
                          _c(
                            "cover-view",
                            { staticClass: ["cover-view-right"] },
                            [
                              _c("cover-image", {
                                staticClass: ["avater", "img"],
                                attrs: { src: item.avater },
                                on: { click: _vm.tapAvater }
                              }),
                              _c(
                                "u-text",
                                { staticClass: ["right-text-avater"] },
                                [_vm._v("+")]
                              ),
                              _c("u-text", { staticClass: ["right-text"] }),
                              _c("cover-image", {
                                staticClass: ["img"],
                                attrs: {
                                  src: item.check
                                    ? "../../static/aixinRed.png"
                                    : "../../static/aixin.png"
                                },
                                on: { click: _vm.tapLove }
                              }),
                              _c("u-text", { staticClass: ["right-text"] }, [
                                _vm._v(_vm._s(item.like))
                              ]),
                              _c("cover-image", {
                                staticClass: ["img"],
                                attrs: { src: "../../static/xiaoxi.png" },
                                on: {
                                  click: function($event) {
                                    _vm.tapMsg(item)
                                  }
                                }
                              }),
                              _c("u-text", { staticClass: ["right-text"] }, [
                                _vm._v(_vm._s(item.comment))
                              ]),
                              _c("cover-image", {
                                staticClass: ["img"],
                                attrs: { src: "../../static/share-fill.png" },
                                on: { click: _vm.tapShare }
                              }),
                              _c("u-text", { staticClass: ["right-text"] }, [
                                _vm._v("分享")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e()
                ]
              )
            }),
            1
          )
        ],
        1
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 25 */
/*!*******************************************************************!*\
  !*** D:/inWdm/uni_wz/components/chunlei-video/chunlei-video.nvue ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chunlei_video_nvue_vue_type_template_id_bc70e9d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunlei-video.nvue?vue&type=template&id=bc70e9d0&scoped=true& */ 26);\n/* harmony import */ var _chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunlei-video.nvue?vue&type=script&lang=js& */ 28);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./chunlei-video.nvue?vue&type=style&index=0&id=bc70e9d0&scoped=true&lang=css& */ 30).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./chunlei-video.nvue?vue&type=style&index=0&id=bc70e9d0&scoped=true&lang=css& */ 30).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _chunlei_video_nvue_vue_type_template_id_bc70e9d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _chunlei_video_nvue_vue_type_template_id_bc70e9d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"bc70e9d0\",\n  \"3b5206ed\",\n  false,\n  _chunlei_video_nvue_vue_type_template_id_bc70e9d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"components/chunlei-video/chunlei-video.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUk7QUFDdkk7QUFDa0U7QUFDTDtBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHVGQUErRTtBQUNuSSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsdUZBQStFO0FBQ3hJOztBQUVBOztBQUVBO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLG9GQUFNO0FBQ1IsRUFBRSxxR0FBTTtBQUNSLEVBQUUsOEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUseUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIyNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vY2h1bmxlaS12aWRlby5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWJjNzBlOWQwJnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY2h1bmxlaS12aWRlby5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9jaHVubGVpLXZpZGVvLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9jaHVubGVpLXZpZGVvLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1iYzcwZTlkMCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vY2h1bmxlaS12aWRlby5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YmM3MGU5ZDAmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFFOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiYmM3MGU5ZDBcIixcbiAgXCIzYjUyMDZlZFwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL2NodW5sZWktdmlkZW8vY2h1bmxlaS12aWRlby5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///25\n");

/***/ }),
/* 26 */
/*!**************************************************************************************************************!*\
  !*** D:/inWdm/uni_wz/components/chunlei-video/chunlei-video.nvue?vue&type=template&id=bc70e9d0&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_template_id_bc70e9d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chunlei-video.nvue?vue&type=template&id=bc70e9d0&scoped=true& */ 27);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_template_id_bc70e9d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_template_id_bc70e9d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_template_id_bc70e9d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_template_id_bc70e9d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 27 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/inWdm/uni_wz/components/chunlei-video/chunlei-video.nvue?vue&type=template&id=bc70e9d0&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: ["video"] },
    [
      _c("u-video", {
        ref: "`video_${src}`",
        staticClass: ["video"],
        style: { height: _vm.height },
        attrs: {
          src: _vm.src,
          controls: _vm.controls,
          showPlayBtn: false,
          loop: true,
          enableProgressGesture: false,
          objectFit: _vm.objectFit,
          id: "video_" + _vm.src
        },
        on: { waiting: _vm.waiting, timeupdate: _vm.timeupdate }
      }),
      !_vm.play && !_vm.playFirst
        ? _c("cover-view", { staticClass: ["icon-view"] }, [
            _c(
              "u-text",
              { staticClass: ["icon"], staticStyle: { color: "#FFF" } },
              [_vm._v("")]
            )
          ])
        : _vm._e(),
      _vm.poster != "" && _vm.playFirst
        ? _c("cover-image", {
            staticClass: ["img"],
            style: { height: _vm.height },
            attrs: { src: _vm.poster }
          })
        : _vm._e(),
      _c("cover-view", { staticClass: ["top"] }),
      _c("cover-view", { staticClass: ["bottom"] }),
      _c("cover-view", {
        staticClass: ["progressBar"],
        style: { width: _vm.barWidth }
      })
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 28 */
/*!********************************************************************************************!*\
  !*** D:/inWdm/uni_wz/components/chunlei-video/chunlei-video.nvue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chunlei-video.nvue?vue&type=script&lang=js& */ 29);\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRhLENBQWdCLHdkQUFHLEVBQUMiLCJmaWxlIjoiMjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRTpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2h1bmxlaS12aWRlby5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRTpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2h1bmxlaS12aWRlby5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///28\n");

/***/ }),
/* 29 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/inWdm/uni_wz/components/chunlei-video/chunlei-video.nvue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  props: {\n    controls: {\n      type: Boolean,\n      default: false },\n\n    src: {\n      type: String,\n      default: '' },\n\n    play: {\n      type: Boolean,\n      default: false },\n\n    height: {\n      type: String,\n      default: '' },\n\n    width: {\n      type: String,\n      default: '' },\n\n    initialTime: {\n      type: Number,\n      default: 0 },\n\n    gDuration: {\n      type: Number,\n      default: 999 },\n    //大概时长使进度条更准确\n    objectFit: {\n      type: String,\n      default: 'contain' },\n\n    poster: { //视频封面的图片\n      type: String,\n      default: '' } },\n\n\n  data: function data() {\n    return {\n      time: 0,\n      duration: 0,\n      playFirst: true };\n\n  },\n  beforeCreate: function beforeCreate() {\n\n    var domModule = weex.requireModule('dom');\n    domModule.addRule('fontFace', {\n      'fontFamily': \"texticons\",\n      'src': \"url('/static/chunlei-video/text-icon.ttf')\" });\n\n\n  },\n  mounted: function mounted() {\n    this.videoCtx = uni.createVideoContext(\"video_\".concat(this.src), this);\n\n  },\n  methods: {\n    timeupdate: function timeupdate(event) {\n      this.duration = event.detail.duration;\n      if (!this.play) return;\n      if (this.time >= this.duration) this.time = 0;\n      this.time = event.detail.currentTime;\n    },\n    videoPlay: function videoPlay() {\n      if (this.play) {\n        this.videoCtx.play();\n        if (this.playFirst) {\n          this.videoCtx.seek(this.startTime);\n          this.playFirst = false;\n        }\n      } else {\n        this.videoCtx.pause();\n        this.$emit('pause', this.time);\n      }\n\n    },\n    waiting: function waiting() {\n\n    } },\n\n  watch: {\n    play: function play(newVal, oldVal) {\n      this.videoPlay();\n    },\n    startTime: {\n      immediate: true,\n      handler: function handler(newVal, oldVal) {\n\n        this.time = newVal;\n      } },\n\n    gDuration: {\n      immediate: true,\n      handler: function handler(newVal, oldVal) {\n\n        this.duration = newVal;\n      } } },\n\n\n  computed: {\n    barWidth: function barWidth() {\n\n      var width = this.time / this.duration * parseInt(this.width);\n\n      return \"\".concat(width, \"px\");\n    },\n    startTime: function startTime() {\n      return this.initialTime;\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9jaHVubGVpLXZpZGVvL2NodW5sZWktdmlkZW8ubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBQ0E7QUFDQTtBQUNBLG1CQURBO0FBRUEsb0JBRkEsRUFEQTs7QUFLQTtBQUNBLGtCQURBO0FBRUEsaUJBRkEsRUFMQTs7QUFTQTtBQUNBLG1CQURBO0FBRUEsb0JBRkEsRUFUQTs7QUFhQTtBQUNBLGtCQURBO0FBRUEsaUJBRkEsRUFiQTs7QUFpQkE7QUFDQSxrQkFEQTtBQUVBLGlCQUZBLEVBakJBOztBQXFCQTtBQUNBLGtCQURBO0FBRUEsZ0JBRkEsRUFyQkE7O0FBeUJBO0FBQ0Esa0JBREE7QUFFQSxrQkFGQSxFQXpCQTtBQTRCQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSx3QkFGQSxFQTdCQTs7QUFpQ0E7QUFDQSxrQkFEQTtBQUVBLGlCQUZBLEVBakNBLEVBREE7OztBQXVDQSxNQXZDQSxrQkF1Q0E7QUFDQTtBQUNBLGFBREE7QUFFQSxpQkFGQTtBQUdBLHFCQUhBOztBQUtBLEdBN0NBO0FBOENBLGNBOUNBLDBCQThDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBREE7QUFFQSx5REFGQTs7O0FBS0EsR0F0REE7QUF1REEsU0F2REEscUJBdURBO0FBQ0E7O0FBRUEsR0ExREE7QUEyREE7QUFDQSxjQURBLHNCQUNBLEtBREEsRUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FOQTtBQU9BLGFBUEEsdUJBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQU5BLE1BTUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FuQkE7QUFvQkEsV0FwQkEscUJBb0JBOztBQUVBLEtBdEJBLEVBM0RBOztBQW1GQTtBQUNBLFFBREEsZ0JBQ0EsTUFEQSxFQUNBLE1BREEsRUFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBO0FBQ0EscUJBREE7QUFFQSxhQUZBLG1CQUVBLE1BRkEsRUFFQSxNQUZBLEVBRUE7O0FBRUE7QUFDQSxPQUxBLEVBSkE7O0FBV0E7QUFDQSxxQkFEQTtBQUVBLGFBRkEsbUJBRUEsTUFGQSxFQUVBLE1BRkEsRUFFQTs7QUFFQTtBQUNBLE9BTEEsRUFYQSxFQW5GQTs7O0FBc0dBO0FBQ0EsWUFEQSxzQkFDQTs7QUFFQTs7QUFFQTtBQUNBLEtBTkE7QUFPQSxhQVBBLHVCQU9BO0FBQ0E7QUFDQSxLQVRBLEVBdEdBLEUiLCJmaWxlIjoiMjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJ2aWRlb1wiPlxyXG5cdFx0PHZpZGVvIDpzcmM9XCJzcmNcIiA6Y29udHJvbHM9XCJjb250cm9sc1wiIDpzaG93LXBsYXktYnRuPVwiZmFsc2VcIiBcclxuXHRcdFx0OnN0eWxlPVwieyBoZWlnaHQ6IGhlaWdodCB9XCIgOmxvb3A9XCJ0cnVlXCIgQHdhaXRpbmc9XCJ3YWl0aW5nXCJcclxuXHRcdFx0OmVuYWJsZS1wcm9ncmVzcy1nZXN0dXJlPVwiZmFsc2VcIiA6b2JqZWN0Rml0PVwib2JqZWN0Rml0XCJcclxuXHRcdFx0OmlkPVwiYHZpZGVvXyR7c3JjfWBcIiByZWY9XCJgdmlkZW9fJHtzcmN9YFwiIGNsYXNzPVwidmlkZW9cIiBAdGltZXVwZGF0ZT1cInRpbWV1cGRhdGVcIj5cclxuXHRcdDwvdmlkZW8+XHJcblx0XHQ8Y292ZXItdmlldyBjbGFzcz1cImljb24tdmlld1wiIHYtaWY9XCIhcGxheSYmIXBsYXlGaXJzdFwiPjx0ZXh0IGNsYXNzPVwiaWNvblwiIHN0eWxlPVwiY29sb3I6I0ZGRlwiPiYjeGU4OTY7PC90ZXh0PjwvY292ZXItdmlldz5cclxuXHRcdDxjb3Zlci1pbWFnZSBjbGFzcz1cImltZ1wiIDpzdHlsZT1cInsgaGVpZ2h0OiBoZWlnaHQgfVwiIDpzcmM9XCJwb3N0ZXJcIiB2LWlmPVwicG9zdGVyIT0nJyYmcGxheUZpcnN0XCI+PC9jb3Zlci1pbWFnZT5cclxuXHRcdDxjb3Zlci12aWV3IGNsYXNzPVwidG9wXCI+PC9jb3Zlci12aWV3PlxyXG5cdFx0PGNvdmVyLXZpZXcgY2xhc3M9XCJib3R0b21cIj48L2NvdmVyLXZpZXc+XHJcblx0XHQ8Y292ZXItdmlldyBjbGFzcz1cInByb2dyZXNzQmFyXCIgOnN0eWxlPVwieyB3aWR0aDogYmFyV2lkdGggfVwiPjwvY292ZXItdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGV4cG9ydCBkZWZhdWx0eyBcclxuXHRcdHByb3BzOntcclxuXHRcdFx0Y29udHJvbHM6e1xyXG5cdFx0XHRcdHR5cGU6Qm9vbGVhbixcclxuXHRcdFx0XHRkZWZhdWx0OmZhbHNlXHJcblx0XHRcdH0sXHJcblx0XHRcdHNyYzp7XHJcblx0XHRcdFx0dHlwZTpTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDonJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRwbGF5OntcclxuXHRcdFx0XHR0eXBlOkJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDpmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRoZWlnaHQ6e1xyXG5cdFx0XHRcdHR5cGU6U3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6JydcclxuXHRcdFx0fSxcclxuXHRcdFx0d2lkdGg6e1xyXG5cdFx0XHRcdHR5cGU6U3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6JydcclxuXHRcdFx0fSxcclxuXHRcdFx0aW5pdGlhbFRpbWU6e1xyXG5cdFx0XHRcdHR5cGU6TnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6MFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRnRHVyYXRpb246e1xyXG5cdFx0XHRcdHR5cGU6TnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6OTk5XHJcblx0XHRcdH0sIC8v5aSn5qaC5pe26ZW/5L2/6L+b5bqm5p2h5pu05YeG56GuXHJcblx0XHRcdG9iamVjdEZpdDp7XHJcblx0XHRcdFx0dHlwZTpTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDonY29udGFpbidcclxuXHRcdFx0fSxcclxuXHRcdFx0cG9zdGVyOnsgLy/op4bpopHlsIHpnaLnmoTlm77niYdcclxuXHRcdFx0XHR0eXBlOlN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OicnXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRkYXRhKCl7XHJcblx0XHRcdHJldHVybntcclxuXHRcdFx0XHR0aW1lOjAsXHJcblx0XHRcdFx0ZHVyYXRpb246MCxcclxuXHRcdFx0XHRwbGF5Rmlyc3Q6dHJ1ZVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0YmVmb3JlQ3JlYXRlKCkge1xyXG5cdFx0XHQvLyAjaWZkZWYgQVBQLU5WVUVcclxuXHRcdFx0dmFyIGRvbU1vZHVsZSA9IHdlZXgucmVxdWlyZU1vZHVsZSgnZG9tJyk7XHJcblx0XHRcdGRvbU1vZHVsZS5hZGRSdWxlKCdmb250RmFjZScsIHtcclxuXHRcdFx0XHQnZm9udEZhbWlseSc6IFwidGV4dGljb25zXCIsXHJcblx0XHRcdFx0J3NyYyc6IFwidXJsKCcvc3RhdGljL2NodW5sZWktdmlkZW8vdGV4dC1pY29uLnR0ZicpXCJcclxuXHRcdFx0fSk7XHJcblx0XHRcdC8vICNlbmRpZlxyXG5cdFx0fSxcclxuXHRcdG1vdW50ZWQoKSB7XHJcblx0XHRcdHRoaXMudmlkZW9DdHggPSB1bmkuY3JlYXRlVmlkZW9Db250ZXh0KGB2aWRlb18ke3RoaXMuc3JjfWAsdGhpcylcclxuXHRcdFx0XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczp7XHJcblx0XHRcdHRpbWV1cGRhdGUoZXZlbnQpe1xyXG5cdFx0XHRcdHRoaXMuZHVyYXRpb24gPSBldmVudC5kZXRhaWwuZHVyYXRpb25cclxuXHRcdFx0XHRpZighdGhpcy5wbGF5KSByZXR1cm5cclxuXHRcdFx0XHRpZih0aGlzLnRpbWU+PXRoaXMuZHVyYXRpb24pIHRoaXMudGltZT0wXHJcblx0XHRcdFx0dGhpcy50aW1lID0gZXZlbnQuZGV0YWlsLmN1cnJlbnRUaW1lXHJcblx0XHRcdH0sXHJcblx0XHRcdHZpZGVvUGxheSgpe1xyXG5cdFx0XHRcdGlmKHRoaXMucGxheSl7XHJcblx0XHRcdFx0XHR0aGlzLnZpZGVvQ3R4LnBsYXkoKTtcclxuXHRcdFx0XHRcdGlmKHRoaXMucGxheUZpcnN0KXtcclxuXHRcdFx0XHRcdFx0dGhpcy52aWRlb0N0eC5zZWVrKHRoaXMuc3RhcnRUaW1lKVxyXG5cdFx0XHRcdFx0XHR0aGlzLnBsYXlGaXJzdCA9IGZhbHNlXHJcblx0XHRcdFx0XHR9IFxyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0dGhpcy52aWRlb0N0eC5wYXVzZSgpO1xyXG5cdFx0XHRcdFx0dGhpcy4kZW1pdCgncGF1c2UnLHRoaXMudGltZSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdHdhaXRpbmcoKXtcclxuXHRcdFx0XHRcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdHdhdGNoOntcclxuXHRcdFx0cGxheShuZXdWYWwsb2xkVmFsKXtcclxuXHRcdFx0XHR0aGlzLnZpZGVvUGxheSgpXHJcblx0XHRcdH0sXHJcblx0XHRcdHN0YXJ0VGltZTp7XHJcblx0XHRcdFx0aW1tZWRpYXRlOiB0cnVlLFxyXG5cdFx0XHRcdGhhbmRsZXIobmV3VmFsLG9sZFZhbCl7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHRoaXMudGltZSA9IG5ld1ZhbFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Z0R1cmF0aW9uOntcclxuXHRcdFx0XHRpbW1lZGlhdGU6IHRydWUsXHJcblx0XHRcdFx0aGFuZGxlcihuZXdWYWwsb2xkVmFsKXtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dGhpcy5kdXJhdGlvbiA9IG5ld1ZhbFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNvbXB1dGVkOntcclxuXHRcdFx0YmFyV2lkdGgoKXtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRsZXQgd2lkdGggPSB0aGlzLnRpbWUvdGhpcy5kdXJhdGlvbipwYXJzZUludCh0aGlzLndpZHRoKVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHJldHVybiBgJHt3aWR0aH1weGBcclxuXHRcdFx0fSxcclxuXHRcdFx0c3RhcnRUaW1lKCl7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuaW5pdGlhbFRpbWVcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cdC8qICNpZm5kZWYgQVBQLVBMVVMtTlZVRSAqL1xyXG5cdEBmb250LWZhY2Uge1xyXG5cdFx0Zm9udC1mYW1pbHk6IFwidGV4dGljb25zXCI7XHJcblx0XHRzcmM6IHVybCgnfkAvc3RhdGljL2NodW5sZWktdmlkZW8vdGV4dC1pY29uLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuXHR9XHJcblx0LyogI2VuZGlmKi9cclxuXHQudmlkZW97XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHR3aWR0aDogNzUwcnB4O1xyXG5cdFx0XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cdC5pbWd7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcclxuXHRcdHdpZHRoOiA3NTBycHg7XHJcblx0fVxyXG5cdC5pY29uLXZpZXd7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0fVxyXG5cdC50b3B7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6MDtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgLCByZ2JhKDAsMCwwLDApICwgcmdiYSgwLDAsMCwwLjcpKTtcclxuXHRcdHdpZHRoOiA3NTBycHg7XHJcblx0XHRoZWlnaHQ6IDMwMHJweDtcclxuXHR9XHJcblx0Lmljb257XHJcblx0XHRvcGFjaXR5OiAwLjY7XHJcblx0XHRmb250LXNpemU6IDQycHg7XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdC8qICNpZm5kZWYgQVBQLVBMVVMtTlZVRSAqL1xyXG5cdFx0Zm9udC1mYW1pbHk6IFwidGV4dGljb25zXCI7XHJcblx0XHQvKiAjZW5kaWYqL1xyXG5cdFx0Zm9udC1mYW1pbHk6IHRleHRpY29ucztcclxuXHR9XHJcblx0LmJvdHRvbXtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgLCByZ2JhKDAsMCwwLDAuNykgLCByZ2JhKDAsMCwwLDApKTtcclxuXHRcdHdpZHRoOiA3NTBycHg7XHJcblx0XHRoZWlnaHQ6IDMwMHJweDtcclxuXHR9XHJcblx0LnByb2dyZXNzQmFye1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMnVweDtcclxuXHRcdGhlaWdodDogNHVweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0XHR6LWluZGV4OiA5OTk5OTk7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0Ym90dG9tOiA0MHVweDtcclxuXHRcdC8vI2lmbmRlZiBBUFAtUExVUy1OVlVFXHJcblx0XHRhbmltYXRpb246IGZsaWNrZXIgNHMgbGluZWFyIGluZmluaXRlO1xyXG5cdFx0YW5pbWF0aW9uLWRpcmVjdGlvbjphbHRlcm5hdGU7XHJcblx0XHQvLyNlbmRpZlxyXG5cdH1cclxuXHQvLyNpZm5kZWYgQVBQLVBMVVMtTlZVRVxyXG5cdEBrZXlmcmFtZXMgZmxpY2tlciB7XHJcblx0XHQwJSB7IGJveC1zaGFkb3c6MCAwIDAgI0ZGRkZGRjsgfVxyXG5cdCAgICAgLyoqIOaaguWBnOaViOaenCAqL1xyXG5cdFx0MTAlIHsgYm94LXNoYWRvdzowIDAgMnVweCAjRkZGRkZGOyB9XHJcblx0ICAgIDUwJSB7IGJveC1zaGFkb3c6MCAwIDEwdXB4ICNGRkZGRkY7IH1cclxuXHQgICAgNjAlIHsgYm94LXNoYWRvdzowIDAgMTJ1cHggI0ZGRkZGRjsgfVxyXG5cdCAgICA5MCUgeyBib3gtc2hhZG93OjAgMCAxOHVweCAjRkZGRkZGOyB9XHJcblx0ICAgIDEwMCUgeyBib3gtc2hhZG93OjAgMCAyMHVweCAjRkZGRkZGOyB9XHJcblx0XHJcblx0fVxyXG5cdC8vI2VuZGlmXHJcbjwvc3R5bGU+XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///29\n");

/***/ }),
/* 30 */
/*!****************************************************************************************************************************!*\
  !*** D:/inWdm/uni_wz/components/chunlei-video/chunlei-video.nvue?vue&type=style&index=0&id=bc70e9d0&scoped=true&lang=css& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_style_index_0_id_bc70e9d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chunlei-video.nvue?vue&type=style&index=0&id=bc70e9d0&scoped=true&lang=css& */ 31);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_style_index_0_id_bc70e9d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_style_index_0_id_bc70e9d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_style_index_0_id_bc70e9d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_style_index_0_id_bc70e9d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_style_index_0_id_bc70e9d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 31 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/inWdm/uni_wz/components/chunlei-video/chunlei-video.nvue?vue&type=style&index=0&id=bc70e9d0&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "video": {
    "width": "750rpx",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "img": {
    "position": "absolute",
    "width": "750rpx"
  },
  "icon-view": {
    "position": "absolute"
  },
  "top": {
    "position": "absolute",
    "top": 0,
    "backgroundImage": "linear-gradient(to top , rgba(0,0,0,0) , rgba(0,0,0,0.7))",
    "width": "750rpx",
    "height": "300rpx"
  },
  "icon": {
    "opacity": 0.6,
    "fontSize": "42",
    "color": "#ffffff",
    "fontFamily": "texticons"
  },
  "bottom": {
    "position": "absolute",
    "bottom": 0,
    "backgroundImage": "linear-gradient(to top , rgba(0,0,0,0.7) , rgba(0,0,0,0))",
    "width": "750rpx",
    "height": "300rpx"
  },
  "progressBar": {
    "borderRadius": "2upx",
    "height": "4upx",
    "backgroundColor": "#FFFFFF",
    "zIndex": 999999,
    "position": "absolute",
    "left": 0,
    "bottom": "40upx"
  }
}

/***/ }),
/* 32 */
/*!**********************************************************************************!*\
  !*** D:/inWdm/uni_wz/pages/video/video.nvue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./video.nvue?vue&type=script&lang=js&mpType=page */ 33);\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQSthLENBQWdCLDJkQUFHLEVBQUMiLCJmaWxlIjoiMzIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRTpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdmlkZW8ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS00LTEhRTpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdmlkZW8ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///32\n");

/***/ }),
/* 33 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/inWdm/uni_wz/pages/video/video.nvue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator */ 34));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _chunleiVideo = _interopRequireDefault(__webpack_require__(/*! ../../components/chunlei-video/chunlei-video */ 25));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");}function _iterableToArray(iter) {if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _createForOfIteratorHelper(o) {if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) {if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) {var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e) {throw _e;}, f: F };}throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");}var it,normalCompletion = true,didErr = false,err;return { s: function s() {it = o[Symbol.iterator]();}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e2) {didErr = true;err = _e2;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === \"Object\" && o.constructor) n = o.constructor.name;if (n === \"Map\" || n === \"Set\") return Array.from(n);if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}var _default =\n{\n  components: {\n    chunleiVideo: _chunleiVideo.default },\n\n  data: function data() {\n    return {\n      sysheight: 0,\n      playCount: 2, //剩余多少视频加载视频列表\n      videoList: [],\n\n\n      height: '667px',\n      index: 0,\n      width: '',\n      oldIndex: 0 };\n\n  },\n  created: function created() {\n\n    plus.screen.lockOrientation(\"portrait-primary\");\n    //隐藏subnvue\n    uni.getSubNVueById('comment').hide();\n    uni.getSubNVueById('input-box').hide();\n\n    this.sysheight = uni.getSystemInfoSync().windowHeight;\n    this.height = \"\".concat(this.sysheight, \"px\");\n    var width = uni.getSystemInfoSync().windowWidth;\n    this.width = \"\".concat(width, \"px\");\n    this.videoList.length = 300;\n    this.videoList.fill({ src: '' });\n\n  },\n  mounted: function mounted() {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (\n\n                _this.pushVideoList());case 2:\n              _this.videoPlay(_this.index);case 3:case \"end\":return _context.stop();}}}, _callee);}))();\n  },\n  onHide: function onHide() {var _iterator = _createForOfIteratorHelper(\n    this.videoList),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var item = _step.value;\n        item.flag = false;\n      }} catch (err) {_iterator.e(err);} finally {_iterator.f();}\n  },\n  onShow: function onShow() {\n    __f__(\"log\", \" at pages/video/video.nvue:125\");\n    this.videoPlay(this.index);\n  },\n  methods: {\n    changeCurrent: function changeCurrent(e) {\n      this.index = e.detail.current;var _iterator2 = _createForOfIteratorHelper(\n      this.videoList),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var item = _step2.value;\n          item.flag = false;\n        }} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}\n      this.videoList[this.index].flag = !this.videoList[this.index].flag;\n    },\n    pushVideoList: function pushVideoList() {var _this2 = this;\n      var promise = new Promise(function (resolve, reject) {\n        uni.request({\n          url: 'https://api.apiopen.top/videoRecommend?id=127397',\n          success: function success(res) {\n            var videoGroup = [];var _iterator3 = _createForOfIteratorHelper(\n            res.data.result),_step3;try {for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {var item = _step3.value;\n                if (item.type == 'videoSmallCard') {\n                  videoGroup.push({\n                    // src:item.data.playUrl,\n                    src: 'https://ergouzi.oss-ap-southeast-2.aliyuncs.com/f64934b023f14ef4265ba686e8999199.mp4',\n                    content: item.data.title,\n                    flag: false,\n                    check: false,\n                    like: '7w',\n                    comment: '1045',\n                    at: item.data.author.name,\n                    avater: item.data.author.icon,\n                    initialTime: 0,\n                    duration: item.data.duration });\n\n                }\n              }} catch (err) {_iterator3.e(err);} finally {_iterator3.f();}\n\n            var len = _this2.videoList.filter(function (item) {return item.src;}).length;\n            for (var i = len; i < len + videoGroup.length; i++) {\n              _this2.$set(_this2.videoList, i, videoGroup[i - len]);\n\n            }\n            __f__(\"log\", _this2.videoList, \" at pages/video/video.nvue:165\");\n            resolve();\n          } });\n\n      });\n      return promise;\n    },\n    tapLove: function tapLove() {\n      this.videoList[this.index].check = !this.videoList[this.index].check;\n      this.videoList = _toConsumableArray(this.videoList);\n\n    },\n    tapAvater: function tapAvater() {\n      uni.showToast({\n        icon: 'none',\n        title: \"\\u70B9\\u51FB\\u7D22\\u5F15\\u4E3A\".concat(this.index, \"\\u7684\\u5934\\u50CF\") });\n\n    },\n    tapMsg: function tapMsg(item) {\n\n\n\n\n\n\n\n      uni.getSubNVueById('comment').show('none', 0, function () {\n        uni.$emit('showComment', item.content);\n      });\n\n    },\n    tapShare: function tapShare() {\n      uni.showToast({\n        icon: 'none',\n        title: \"\\u5206\\u4EAB\\u7D22\\u5F15\\u4E3A\".concat(this.index, \"\\u7684\\u89C6\\u9891\") });\n\n    },\n    videoPlay: function videoPlay(index) {var _this3 = this;\n      var promise = new Promise(function (resolve, reject) {\n        resolve();\n      });\n      promise.then(function (res) {\n        _this3.$set(_this3.videoList[index], 'flag', !_this3.videoList[index].flag);\n\n      });\n    },\n    pauseVideo: function pauseVideo(val) {\n      if (typeof this.videoList[this.oldIndex].initialTime != 'undefined') this.videoList[this.oldIndex].initialTime = val;\n    },\n    clickVideo: function clickVideo() {\n      this.videoList[this.index].flag = !this.videoList[this.index].flag;\n    } },\n\n  watch: {\n    index: function index(newVal, oldVal) {\n      var len = this.videoList.filter(function (item) {return item.src;}).length;\n      //加载视频\n      if (len - this.index - 1 <= this.playCount) {\n        this.pushVideoList();\n      }\n      this.oldIndex = oldVal;\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 9)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdmlkZW8vdmlkZW8ubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdGQSx3SDtBQUNBO0FBQ0E7QUFDQSx1Q0FEQSxFQURBOztBQUlBLE1BSkEsa0JBSUE7QUFDQTtBQUNBLGtCQURBO0FBRUEsa0JBRkEsRUFFQTtBQUNBLG1CQUhBOzs7QUFNQSxxQkFOQTtBQU9BLGNBUEE7QUFRQSxlQVJBO0FBU0EsaUJBVEE7O0FBV0EsR0FoQkE7QUFpQkEsU0FqQkEscUJBaUJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQS9CQTtBQWdDQSxTQWhDQSxxQkFnQ0E7O0FBRUEscUNBRkE7QUFHQSwyQ0FIQTtBQUlBLEdBcENBO0FBcUNBLFFBckNBLG9CQXFDQTtBQUNBLGtCQURBLGFBQ0E7QUFDQTtBQUNBLE9BSEE7QUFJQSxHQXpDQTtBQTBDQSxRQTFDQSxvQkEwQ0E7QUFDQTtBQUNBO0FBQ0EsR0E3Q0E7QUE4Q0E7QUFDQSxpQkFEQSx5QkFDQSxDQURBLEVBQ0E7QUFDQSxvQ0FEQTtBQUVBLG9CQUZBLGNBRUE7QUFDQTtBQUNBLFNBSkE7QUFLQTtBQUNBLEtBUEE7QUFRQSxpQkFSQSwyQkFRQTtBQUNBO0FBQ0E7QUFDQSxpRUFEQTtBQUVBO0FBQ0EsZ0NBREE7QUFFQSwyQkFGQSxjQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0dBRkE7QUFHQSw0Q0FIQTtBQUlBLCtCQUpBO0FBS0EsZ0NBTEE7QUFNQSw4QkFOQTtBQU9BLG1DQVBBO0FBUUEsNkNBUkE7QUFTQSxpREFUQTtBQVVBLGtDQVZBO0FBV0EsZ0RBWEE7O0FBYUE7QUFDQSxlQWxCQTs7QUFvQkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBN0JBOztBQStCQSxPQWhDQTtBQWlDQTtBQUNBLEtBM0NBO0FBNENBLFdBNUNBLHFCQTRDQTtBQUNBO0FBQ0E7O0FBRUEsS0FoREE7QUFpREEsYUFqREEsdUJBaURBO0FBQ0E7QUFDQSxvQkFEQTtBQUVBLHdGQUZBOztBQUlBLEtBdERBO0FBdURBLFVBdkRBLGtCQXVEQSxJQXZEQSxFQXVEQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0EsT0FGQTs7QUFJQSxLQW5FQTtBQW9FQSxZQXBFQSxzQkFvRUE7QUFDQTtBQUNBLG9CQURBO0FBRUEsd0ZBRkE7O0FBSUEsS0F6RUE7QUEwRUEsYUExRUEscUJBMEVBLEtBMUVBLEVBMEVBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFHQTtBQUNBOztBQUVBLE9BSEE7QUFJQSxLQWxGQTtBQW1GQSxjQW5GQSxzQkFtRkEsR0FuRkEsRUFtRkE7QUFDQTtBQUNBLEtBckZBO0FBc0ZBLGNBdEZBLHdCQXNGQTtBQUNBO0FBQ0EsS0F4RkEsRUE5Q0E7O0FBd0lBO0FBQ0EsU0FEQSxpQkFDQSxNQURBLEVBQ0EsTUFEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FSQSxFQXhJQSxFIiwiZmlsZSI6IjMzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cInBhZ2VcIiA6c3R5bGU9XCJ7IGhlaWdodDogaGVpZ2h0IH1cIj5cclxuXHRcdDxzd2lwZXJcclxuXHRcdFx0Y2xhc3M9XCJzd2lwZXJcIlxyXG5cdFx0XHQ6dmVydGljYWw9XCJ0cnVlXCJcclxuXHRcdFx0QGNoYW5nZT1cImNoYW5nZUN1cnJlbnRcIlxyXG5cdFx0XHQ6Y3VycmVudD1cImluZGV4XCI+XHJcblx0XHRcdDxzd2lwZXItaXRlbSB2LWZvcj1cIihpdGVtLCBpZHgpIGluIHZpZGVvTGlzdFwiIDprZXk9XCJpZHhcIiBjbGFzcz1cInN3aXBlci1pdGVtXCI+XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDxkaXYgdi1pZj1cIk1hdGguYWJzKGluZGV4LWlkeCk8PTFcIiBjbGFzcz1cInZpZGVvLWJveFwiPlxyXG5cdFx0XHRcdFx0XHQ8Y2h1bmxlaS12aWRlbyBjbGFzcz1cInZpZGVvXCIgOnNyYz1cIml0ZW0uc3JjXCIgIDpoZWlnaHQ9XCJoZWlnaHRcIiA6d2lkdGg9XCJ3aWR0aFwiIFxyXG5cdFx0XHRcdFx0XHRcdDpwbGF5PVwiaXRlbS5mbGFnXCIgdi1pZj1cIk1hdGguYWJzKGluZGV4LWlkeCk8PTFcIiA6Z0R1cmF0aW9uPVwiaXRlbS5kdXJhdGlvblwiXHJcblx0XHRcdFx0XHRcdFx0OmluaXRpYWxUaW1lPVwiaXRlbS5pbml0aWFsVGltZVwiIEBwYXVzZT1cInBhdXNlVmlkZW9cIiA6b2JqZWN0Rml0PVwiaXRlbS5vYmplY3RGaXRcIlxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDwvY2h1bmxlaS12aWRlbz5cclxuXHRcdFx0XHJcblx0XHRcdFx0XHRcdDxjb3Zlci12aWV3IGNsYXNzPVwiY292ZXItdmlldy1sZWZ0XCI+XHJcblx0XHRcdFx0XHRcdFx0PGNvdmVyLXZpZXcgY2xhc3M9XCJsZWZ0LXZpZXdcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDwhLS0gI2lmZGVmIEFQUC1QTFVTLU5WVUUgLS0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImxlZnQtdGV4dFwiPkB7e2l0ZW0uYXR9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdDwhLS0gI2VuZGlmIC0tPlxyXG5cdFx0XHRcdFx0XHRcdFx0PCEtLSAjaWZuZGVmIEFQUC1QTFVTLU5WVUUgLS0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Y292ZXItdmlldyBjbGFzcz1cImxlZnQtdGV4dFwiPkB7e2l0ZW0uYXR9fTwvY292ZXItdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDwhLS0gI2VuZGlmIC0tPlxyXG5cdFx0XHRcdFx0XHRcdDwvY292ZXItdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8Y292ZXItdmlldyBjbGFzcz1cImxlZnQtdmlld1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PCEtLSAjaWZkZWYgQVBQLVBMVVMtTlZVRSAtLT5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwibGVmdC10ZXh0XCI+e3tpdGVtLmNvbnRlbnR9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdDwhLS0gI2VuZGlmIC0tPlxyXG5cdFx0XHRcdFx0XHRcdFx0PCEtLSAjaWZuZGVmIEFQUC1QTFVTLU5WVUUgLS0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Y292ZXItdmlldyBjbGFzcz1cImxlZnQtdGV4dFwiPnt7aXRlbS5jb250ZW50fX08L2NvdmVyLXZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8IS0tICNlbmRpZiAtLT5cclxuXHRcdFx0XHRcdFx0XHQ8L2NvdmVyLXZpZXc+XHJcblx0XHRcdFx0XHRcdDwvY292ZXItdmlldz5cclxuXHRcdFx0XHRcdFx0PGNvdmVyLXZpZXcgY2xhc3M9XCJjb3Zlci12aWV3LXJpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdFx0PGNvdmVyLWltYWdlIDpzcmM9XCJpdGVtLmF2YXRlclwiIGNsYXNzPVwiYXZhdGVyIGltZ1wiIEBjbGljay5zdG9wPVwidGFwQXZhdGVyXCI+PC9jb3Zlci1pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8IS0tICNpZmRlZiBBUFAtUExVUy1OVlVFIC0tPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwicmlnaHQtdGV4dC1hdmF0ZXJcIj4rPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwicmlnaHQtdGV4dFwiPjwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8IS0tICNlbmRpZiAtLT5cclxuXHRcdFx0XHRcdFx0XHQ8IS0tICNpZm5kZWYgQVBQLVBMVVMtTlZVRSAtLT5cclxuXHRcdFx0XHRcdFx0XHQ8Y292ZXItdmlldyBjbGFzcz1cInJpZ2h0LXRleHQtYXZhdGVyXCI+KzwvY292ZXItdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8Y292ZXItdmlldyBjbGFzcz1cInJpZ2h0LXRleHRcIj48L2NvdmVyLXZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PCEtLSAjZW5kaWYgLS0+XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0PGNvdmVyLWltYWdlIDpzcmM9XCJpdGVtLmNoZWNrPycuLi8uLi9zdGF0aWMvYWl4aW5SZWQucG5nJzonLi4vLi4vc3RhdGljL2FpeGluLnBuZydcIiBjbGFzcz1cImltZ1wiIEBjbGljay5zdG9wPVwidGFwTG92ZVwiPjwvY292ZXItaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0PCEtLSAjaWZkZWYgQVBQLVBMVVMtTlZVRSAtLT5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInJpZ2h0LXRleHRcIj57e2l0ZW0ubGlrZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0gI2VuZGlmIC0tPlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0gI2lmbmRlZiBBUFAtUExVUy1OVlVFIC0tPlxyXG5cdFx0XHRcdFx0XHRcdDxjb3Zlci12aWV3IGNsYXNzPVwicmlnaHQtdGV4dFwiPnt7aXRlbS5saWtlfX08L2NvdmVyLXZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PCEtLSAjZW5kaWYgLS0+XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0PGNvdmVyLWltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy94aWFveGkucG5nXCIgY2xhc3M9XCJpbWdcIiBAY2xpY2suc3RvcD1cInRhcE1zZyhpdGVtKVwiPjwvY292ZXItaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0PCEtLSAjaWZkZWYgQVBQLVBMVVMtTlZVRSAtLT5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInJpZ2h0LXRleHRcIj57e2l0ZW0uY29tbWVudH19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0gI2VuZGlmIC0tPlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0gI2lmbmRlZiBBUFAtUExVUy1OVlVFIC0tPlxyXG5cdFx0XHRcdFx0XHRcdDxjb3Zlci12aWV3IGNsYXNzPVwicmlnaHQtdGV4dFwiPnt7aXRlbS5jb21tZW50fX08L2NvdmVyLXZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PCEtLSAjZW5kaWYgLS0+XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0PGNvdmVyLWltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9zaGFyZS1maWxsLnBuZ1wiIGNsYXNzPVwiaW1nXCIgQGNsaWNrLnN0b3A9XCJ0YXBTaGFyZVwiPjwvY292ZXItaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0PCEtLSAjaWZkZWYgQVBQLVBMVVMtTlZVRSAtLT5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInJpZ2h0LXRleHRcIj7liIbkuqs8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PCEtLSAjZW5kaWYgLS0+XHJcblx0XHRcdFx0XHRcdFx0PCEtLSAjaWZuZGVmIEFQUC1QTFVTLU5WVUUgLS0+XHJcblx0XHRcdFx0XHRcdFx0PGNvdmVyLXZpZXcgY2xhc3M9XCJyaWdodC10ZXh0XCI+5YiG5LqrPC9jb3Zlci12aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0gI2VuZGlmIC0tPlxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8L2NvdmVyLXZpZXc+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcclxuXHRcdFx0PC9zd2lwZXItaXRlbT5cclxuXHRcdDwvc3dpcGVyPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IGNodW5sZWlWaWRlbyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NodW5sZWktdmlkZW8vY2h1bmxlaS12aWRlbydcclxuICAgIGV4cG9ydCBkZWZhdWx0IHsgXHJcblx0XHRjb21wb25lbnRzOntcclxuXHRcdFx0Y2h1bmxlaVZpZGVvXHJcblx0XHR9LFxyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcblx0XHRcdFx0c3lzaGVpZ2h0OjAsXHJcblx0XHRcdFx0cGxheUNvdW50OjIsLy/liankvZnlpJrlsJHop4bpopHliqDovb3op4bpopHliJfooahcclxuXHRcdFx0XHR2aWRlb0xpc3Q6W1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRoZWlnaHQ6JzY2N3B4JyxcclxuXHRcdFx0XHRpbmRleDowLFxyXG5cdFx0XHRcdHdpZHRoOicnLFxyXG5cdFx0XHRcdG9sZEluZGV4OjBcclxuXHRcdFx0fVxyXG4gICAgICAgIH0sXHJcblx0XHRjcmVhdGVkKCl7XHJcblx0XHRcdC8vI2lmZGVmIEFQUC1QTFVTXHJcblx0XHRcdHBsdXMuc2NyZWVuLmxvY2tPcmllbnRhdGlvbihcInBvcnRyYWl0LXByaW1hcnlcIilcclxuXHRcdFx0Ly/pmpDol49zdWJudnVlXHJcblx0XHRcdHVuaS5nZXRTdWJOVnVlQnlJZCgnY29tbWVudCcpLmhpZGUoKVxyXG5cdFx0XHR1bmkuZ2V0U3ViTlZ1ZUJ5SWQoJ2lucHV0LWJveCcpLmhpZGUoKVxyXG5cdFx0XHQvLyNlbmRpZlxyXG5cdFx0XHR0aGlzLnN5c2hlaWdodCA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodFxyXG5cdFx0XHR0aGlzLmhlaWdodCA9IGAke3RoaXMuc3lzaGVpZ2h0fXB4YCBcclxuXHRcdFx0bGV0IHdpZHRoID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93V2lkdGggXHJcblx0XHRcdHRoaXMud2lkdGggPSBgJHt3aWR0aH1weGAgXHJcblx0XHRcdHRoaXMudmlkZW9MaXN0Lmxlbmd0aCA9IDMwMFxyXG5cdFx0XHR0aGlzLnZpZGVvTGlzdC5maWxsKHtzcmM6Jyd9KVxyXG5cclxuXHRcdH0sXHJcblx0XHRhc3luYyBtb3VudGVkKCkge1xyXG5cdFx0XHJcblx0XHRcdGF3YWl0IHRoaXMucHVzaFZpZGVvTGlzdCgpXHJcblx0XHRcdHRoaXMudmlkZW9QbGF5KHRoaXMuaW5kZXgpXHJcblx0XHR9LFxyXG5cdFx0b25IaWRlKCl7XHJcblx0XHRcdGZvciAobGV0IGl0ZW0gb2YgdGhpcy52aWRlb0xpc3QpIHtcclxuXHRcdFx0XHRpdGVtLmZsYWcgPSBmYWxzZVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25TaG93KCl7XHJcblx0XHRcdGNvbnNvbGUubG9nKClcclxuXHRcdFx0dGhpcy52aWRlb1BsYXkodGhpcy5pbmRleClcclxuXHRcdH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG5cdFx0XHRjaGFuZ2VDdXJyZW50KGUpe1xyXG5cdFx0XHRcdHRoaXMuaW5kZXggPSBlLmRldGFpbC5jdXJyZW50O1xyXG5cdFx0XHRcdGZvciAobGV0IGl0ZW0gb2YgdGhpcy52aWRlb0xpc3QpIHtcclxuXHRcdFx0XHRcdGl0ZW0uZmxhZyA9IGZhbHNlXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMudmlkZW9MaXN0W3RoaXMuaW5kZXhdLmZsYWcgPSAhdGhpcy52aWRlb0xpc3RbdGhpcy5pbmRleF0uZmxhZ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRwdXNoVmlkZW9MaXN0KCl7XHJcblx0XHRcdFx0bGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XHJcblx0XHRcdFx0XHR1bmkucmVxdWVzdCh7XHJcblx0XHRcdFx0XHRcdHVybDogJ2h0dHBzOi8vYXBpLmFwaW9wZW4udG9wL3ZpZGVvUmVjb21tZW5kP2lkPTEyNzM5NycsXHJcblx0XHRcdFx0XHRcdHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRsZXQgdmlkZW9Hcm91cCA9IFtdXHJcblx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgaXRlbSBvZiByZXMuZGF0YS5yZXN1bHQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmKGl0ZW0udHlwZSA9PSAndmlkZW9TbWFsbENhcmQnKXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmlkZW9Hcm91cC5wdXNoKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBzcmM6aXRlbS5kYXRhLnBsYXlVcmwsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjOidodHRwczovL2VyZ291emkub3NzLWFwLXNvdXRoZWFzdC0yLmFsaXl1bmNzLmNvbS9mNjQ5MzRiMDIzZjE0ZWY0MjY1YmE2ODZlODk5OTE5OS5tcDQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6aXRlbS5kYXRhLnRpdGxlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZsYWc6ZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hlY2s6ZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGlrZTonN3cnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbW1lbnQ6JzEwNDUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGF0Oml0ZW0uZGF0YS5hdXRob3IubmFtZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhdmF0ZXI6aXRlbS5kYXRhLmF1dGhvci5pY29uLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGluaXRpYWxUaW1lOjAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246aXRlbS5kYXRhLmR1cmF0aW9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGxldCBsZW4gPSB0aGlzLnZpZGVvTGlzdC5maWx0ZXIoaXRlbT0+aXRlbS5zcmMpLmxlbmd0aFxyXG5cdFx0XHRcdFx0XHRcdGZvcihsZXQgaSA9IGxlbjtpPGxlbit2aWRlb0dyb3VwLmxlbmd0aDtpKyspe1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMudmlkZW9MaXN0LGksdmlkZW9Hcm91cFtpLWxlbl0pXHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2codGhpcy52aWRlb0xpc3QpXHJcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZSgpXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSkgXHJcblx0XHRcdFx0cmV0dXJuIHByb21pc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0dGFwTG92ZSgpe1xyXG5cdFx0XHRcdHRoaXMudmlkZW9MaXN0W3RoaXMuaW5kZXhdLmNoZWNrID0gIXRoaXMudmlkZW9MaXN0W3RoaXMuaW5kZXhdLmNoZWNrXHJcblx0XHRcdFx0dGhpcy52aWRlb0xpc3QgPSBbLi4udGhpcy52aWRlb0xpc3RdXHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdHRhcEF2YXRlcigpe1xyXG5cdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0aWNvbjonbm9uZScsXHJcblx0XHRcdFx0XHR0aXRsZTpg54K55Ye757Si5byV5Li6JHt0aGlzLmluZGV4feeahOWktOWDj2BcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0YXBNc2coaXRlbSl7XHJcblx0XHRcdFx0Ly8jaWZuZGVmIEFQUC1OVlVFXHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRpY29uOidub25lJyxcclxuXHRcdFx0XHRcdHRpdGxlOmDmn6XnnIvntKLlvJXkuLoke3RoaXMuaW5kZXh955qE6K+E6K66YFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0Ly8jZW5kaWZcclxuXHRcdFx0XHQvLyNpZmRlZiBBUFAtTlZVRVxyXG5cdFx0XHRcdHVuaS5nZXRTdWJOVnVlQnlJZCgnY29tbWVudCcpLnNob3coJ25vbmUnLDAsKCk9PntcclxuXHRcdFx0XHRcdHVuaS4kZW1pdCgnc2hvd0NvbW1lbnQnLGl0ZW0uY29udGVudClcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHQvLyNlbmRpZlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0YXBTaGFyZSgpe1xyXG5cdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0aWNvbjonbm9uZScsXHJcblx0XHRcdFx0XHR0aXRsZTpg5YiG5Lqr57Si5byV5Li6JHt0aGlzLmluZGV4feeahOinhumikWBcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR2aWRlb1BsYXkoaW5kZXgpe1xyXG5cdFx0XHRcdGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xyXG5cdFx0XHRcdFx0cmVzb2x2ZSgpXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRwcm9taXNlLnRoZW4ocmVzPT57XHJcblx0XHRcdFx0XHR0aGlzLiRzZXQodGhpcy52aWRlb0xpc3RbaW5kZXhdLCdmbGFnJywhdGhpcy52aWRlb0xpc3RbaW5kZXhdLmZsYWcpXHJcblx0XHRcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwYXVzZVZpZGVvKHZhbCl7XHJcblx0XHRcdFx0aWYodHlwZW9mIHRoaXMudmlkZW9MaXN0W3RoaXMub2xkSW5kZXhdLmluaXRpYWxUaW1lICE9J3VuZGVmaW5lZCcpIHRoaXMudmlkZW9MaXN0W3RoaXMub2xkSW5kZXhdLmluaXRpYWxUaW1lID0gdmFsXHJcblx0XHRcdH0sXHJcblx0XHRcdGNsaWNrVmlkZW8oKXtcclxuXHRcdFx0XHR0aGlzLnZpZGVvTGlzdFt0aGlzLmluZGV4XS5mbGFnID0gIXRoaXMudmlkZW9MaXN0W3RoaXMuaW5kZXhdLmZsYWdcclxuXHRcdFx0fVxyXG4gICAgICAgIH0sXHJcblx0XHR3YXRjaDp7XHJcblx0XHRcdGluZGV4KG5ld1ZhbCxvbGRWYWwpe1xyXG5cdFx0XHRcdGxldCBsZW4gPSB0aGlzLnZpZGVvTGlzdC5maWx0ZXIoaXRlbT0+aXRlbS5zcmMpLmxlbmd0aFxyXG5cdFx0XHRcdC8v5Yqg6L296KeG6aKRXHJcblx0XHRcdFx0aWYobGVuIC0gdGhpcy5pbmRleCAtIDEgPD0gdGhpcy5wbGF5Q291bnQpe1xyXG5cdFx0XHRcdFx0dGhpcy5wdXNoVmlkZW9MaXN0KClcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5vbGRJbmRleCA9IG9sZFZhbFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgc2NvcGVkPlxyXG5cdC5zd2lwZXJ7XHJcblx0XHRmbGV4OiAxOyAgXHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG5cdH1cclxuXHQuc3dpcGVyLWl0ZW0ge1xyXG5cdCAgICBmbGV4OiAxO1xyXG5cdH1cclxuICAgIC52aWRlbyB7XHJcblx0XHRmbGV4OiAxO1xyXG4gICAgfVxyXG5cdC52aWRlby1ib3h7XHJcblx0XHRmbGV4OiAxO1xyXG5cdH1cclxuXHQuY292ZXItdmlldy1jZW50ZXJ7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRvcGFjaXR5OiAwLjE7XHJcblx0XHR6LWluZGV4OiA5OTk7XHJcblx0fVxyXG5cdC5jb3Zlci12aWV3LWxlZnR7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRtYXJnaW4tbGVmdDogMTB1cHg7XHJcblx0XHR3aWR0aDogNTAwdXB4O1xyXG5cdFx0Ym90dG9tOiAxMjB1cHg7XHJcblx0XHR6LWluZGV4OiA5OTk5O1xyXG5cdFx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1QTFVTICovXHJcblx0XHR3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcblx0XHR0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO1xyXG5cdFx0b3ZlcmZsb3c6aGlkZGVuO1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0fVxyXG5cdC5sZWZ0LXZpZXd7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAyMHVweDtcclxuXHR9XHJcblx0LmxlZnQtdGV4dHtcclxuXHRcdGZvbnQtc2l6ZTogMTZweDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdH1cclxuXHQuYXZhdGVye1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTB1cHg7XHJcblx0XHRib3JkZXItY29sb3I6ICNmZmY7XHJcblx0XHRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG5cdFx0Ym9yZGVyLXdpZHRoOiAycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5jb3Zlci12aWV3LXJpZ2h0e1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0Ym90dG9tOiAxNjB1cHg7XHJcblx0XHRyaWdodDogMjB1cHg7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1QTFVTLU5WVUUgKi9cclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHR6LWluZGV4OiA5OTk5O1xyXG5cdH1cclxuXHRcclxuXHQucmlnaHQtdGV4dC1hdmF0ZXJ7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHR0b3A6IDgwdXB4O1xyXG5cdFx0bGVmdDogMzB1cHg7XHJcblx0XHRoZWlnaHQ6IDQwdXB4O1xyXG5cdFx0d2lkdGg6IDQwdXB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0RENTI0RDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDQwdXB4O1xyXG5cdFx0ei1pbmRleDogOTk5O1xyXG5cdH1cclxuXHQuYXZhdGVyLWljb257XHJcblx0XHRoZWlnaHQ6IDQwdXB4O1xyXG5cdFx0d2lkdGg6IDQwdXB4O1xyXG5cdFx0XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNERDUyNEQ7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRsZWZ0OiAzMHVweDtcclxuXHRcdHRvcDotMjB1cHg7XHJcblx0fVxyXG5cdFxyXG5cdC5yaWdodC10ZXh0e1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRtYXJnaW4tYm90dG9tOiA1MHVweDtcclxuXHRcdGhlaWdodDogMjBweDtcclxuXHR9XHJcblx0LmltZ3tcclxuXHRcdGhlaWdodDogMTAwdXB4O1xyXG5cdFx0d2lkdGg6IDEwMHVweDtcclxuXHRcdG9wYWNpdHk6IDAuOTtcclxuXHR9XHJcblx0LnBhZ2V7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1QTFVTLU5WVUUgKi9cclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRmbGV4OiAxOyBcclxuXHR9XHJcblx0XHJcbjwvc3R5bGU+Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///33\n");

/***/ }),
/* 34 */
/*!*********************************************************************************************!*\
  !*** ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 35);

/***/ }),
/* 35 */
/*!****************************************************************************************!*\
  !*** ./node_modules/@vue/babel-preset-app/node_modules/regenerator-runtime/runtime.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
  NativeIteratorPrototype !== Op &&
  hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
  Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
  GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ?
    ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" :
    false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function (arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
        typeof value === "object" &&
        hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(
      callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) :
      callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
    wrap(innerFn, outerFn, self, tryLocsList),
    PromiseImpl);


    return exports.isGeneratorFunction(outerFn) ?
    iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ?
          GenStateCompleted :
          GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done };


        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
        "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
          hasOwn.call(this, name) &&
          !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function stop() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
        hasOwn.call(entry, "finallyLoc") &&
        this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (
      type === "break" ||
      type === "continue") &&
      finallyEntry.tryLoc <= arg &&
      arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
      record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc };


      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    } };


  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 true ? module.exports : undefined);


try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

/***/ }),
/* 36 */
/*!******************************************************************************************************************!*\
  !*** D:/inWdm/uni_wz/pages/video/video.nvue?vue&type=style&index=0&id=683755b0&scoped=true&lang=css&mpType=page ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_id_683755b0_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./video.nvue?vue&type=style&index=0&id=683755b0&scoped=true&lang=css&mpType=page */ 37);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_id_683755b0_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_id_683755b0_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_id_683755b0_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_id_683755b0_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_id_683755b0_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 37 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/inWdm/uni_wz/pages/video/video.nvue?vue&type=style&index=0&id=683755b0&scoped=true&lang=css&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "swiper": {
    "flex": 1,
    "backgroundColor": "#000000"
  },
  "swiper-item": {
    "flex": 1
  },
  "video": {
    "flex": 1
  },
  "video-box": {
    "flex": 1
  },
  "cover-view-center": {
    "position": "absolute",
    "justifyContent": "center",
    "alignItems": "center",
    "opacity": 0.1,
    "zIndex": 999
  },
  "cover-view-left": {
    "position": "absolute",
    "marginLeft": "10upx",
    "width": "500upx",
    "bottom": "120upx",
    "zIndex": 9999,
    "fontSize": "16",
    "color": "#FFFFFF"
  },
  "left-view": {
    "marginBottom": "20upx"
  },
  "left-text": {
    "fontSize": "16",
    "color": "#FFFFFF"
  },
  "avater": {
    "borderRadius": "50upx",
    "borderColor": "#ffffff",
    "borderStyle": "solid",
    "borderWidth": "2"
  },
  "cover-view-right": {
    "position": "absolute",
    "bottom": "160upx",
    "right": "20upx",
    "zIndex": 9999
  },
  "right-text-avater": {
    "position": "absolute",
    "fontSize": "14",
    "top": "80upx",
    "left": "30upx",
    "height": "40upx",
    "width": "40upx",
    "backgroundColor": "#DD524D",
    "color": "#FFFFFF",
    "borderRadius": 50,
    "textAlign": "center",
    "lineHeight": "40upx",
    "zIndex": 999
  },
  "avater-icon": {
    "height": "40upx",
    "width": "40upx",
    "color": "#ffffff",
    "backgroundColor": "#DD524D",
    "borderRadius": 50,
    "position": "absolute",
    "left": "30upx",
    "top": "-20upx"
  },
  "right-text": {
    "textAlign": "center",
    "fontSize": "14",
    "color": "#FFFFFF",
    "marginBottom": "50upx",
    "height": "20"
  },
  "img": {
    "height": "100upx",
    "width": "100upx",
    "opacity": 0.9
  },
  "page": {
    "flex": 1
  }
}

/***/ })
/******/ ]);