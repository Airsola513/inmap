(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("inMap", [], factory);
	else if(typeof exports === 'object')
		exports["inMap"] = factory();
	else
		root["inMap"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.isFunction = isFunction;
exports.isNumber = isNumber;
exports.isString = isString;
exports.isDefined = isDefined;
exports.isObject = isObject;
exports.isArray = isArray;
exports.getBlen = getBlen;
exports.captureMouse = captureMouse;
exports.setDevicePixelRatio = setDevicePixelRatio;
exports.encodeHTML = encodeHTML;
exports.deepCopy = deepCopy;
exports.isPolyContains = isPolyContains;
exports.forEach = forEach;
/**
 * 是否是函数
 * @param {Mix}
 * @returns {Boolean}
 */
function isFunction(func) {
    return typeof func == "function";
}
/**
 * 是否是数字
 * @param {Mix}
 * @returns {Boolean}
 */
function isNumber(number) {
    return typeof number == "number";
}
/**
 * 是否是字符串
 * @param {Mix}
 * @returns {Boolean}
 */
function isString(string) {
    return typeof string == "string";
}
/**
 * 是否定义
 * @param {Mix}
 * @returns {Boolean}
 */
function isDefined(object) {
    return typeof object != "undefined";
}
/**
 * 是否为对象类型
 * @param {Mix}
 * @returns {Boolean}
 */
function isObject(object) {
    return (typeof object === "undefined" ? "undefined" : _typeof(object)) == 'object';
}
/**
 * 判断目标参数是否Array对象
 * @param {Mix} 
 * @returns {boolean} 类型判断结果
 */
function isArray(source) {
    return '[object Array]' == Object.prototype.toString.call(source);
};
/**
 * 判断字符串长度英文占1个字符，中文汉字占2个字符
 * @param {Object} str
 */
function getBlen(str) {
    return str.replace(/[^\x00-\xff]/g, "01").length;
}

/*
 *获取鼠标相对于canvas 的距离
 */
function captureMouse(element) {
    var mouse = {
        x: 0,
        y: 0,
        event: null
    };

    element.addEventListener('mousemove', function (event) {
        var bounding = element.getBoundingClientRect();
        var offsetLeft = bounding.left;
        var offsetTop = bounding.top;
        var body_scrollTop = document.body.scrollTop;
        var body_scrollLeft = document.body.scrollLeft;
        var x, y;
        x = event.pageX - offsetLeft - body_scrollLeft;
        y = event.pageY - offsetTop - body_scrollTop;
        mouse.x = x;
        mouse.y = y;
        mouse.event = event;
    }, false);

    return mouse;
};
var extend = exports.extend = function extend(target, source) {

    if (target && source && (typeof source === "undefined" ? "undefined" : _typeof(source)) == "object") {
        for (var p in source) {
            target[p] = source[p];
        }

        var prototype_fields = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

        for (var j = 0, key; j < prototype_fields.length; j++) {
            key = prototype_fields[j];
            if (Object.prototype.constructor.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
function setDevicePixelRatio(context) {
    var devicePixelRatio = window.devicePixelRatio;
    context.canvas.width = context.canvas.width * devicePixelRatio;
    context.canvas.height = context.canvas.height * devicePixelRatio;
    context.canvas.style.width = context.canvas.width / devicePixelRatio + 'px';
    context.canvas.style.height = context.canvas.height / devicePixelRatio + 'px';
    //debugger
    context.scale(devicePixelRatio, devicePixelRatio);
}
function encodeHTML(source) {
    return String(source).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
};
function deepCopy(data) {
    var t = typeOf(data);
    var o = void 0;

    if (t === 'array') {
        o = [];
    } else if (t === 'object') {
        o = {};
    } else {
        return data;
    }

    if (t === 'array') {
        for (var i = 0; i < data.length; i++) {
            o.push(deepCopy(data[i]));
        }
    } else if (t === 'object') {
        for (var _i in data) {
            o[_i] = deepCopy(data[_i]);
        }
    }
    return o;
}
function isPolyContains(lng, lat, pointLat, pointLng) {
    var ret = false;
    var latMin = 90.0;
    var latMax = -90.0;
    var lngMin = 180.0;
    var lngMax = -180.0;
    for (var i = 0; i < lat.length; i++) {
        if (lat[i] > latMax) latMax = lat[i];
        if (lat[i] < latMin) latMin = lat[i];
        if (lng[i] > lngMax) lngMax = lng[i];
        if (lng[i] < lngMin) lngMin = lng[i];
    }
    if (!(pointLat < latMin || pointLat > latMax || pointLng < lngMin || pointLng > lngMax)) {

        for (var i = 0; i < lat.length; i++) {
            var j = (i + 1) % lat.length;
            if (lat[i] < pointLat != lat[j] < pointLat && pointLng < (lng[j] - lng[i]) * (pointLat - lat[i]) / (lat[j] - lat[i]) + lng[i]) {
                ret = !ret;
            }
        }
    }
    return ret;
}
function forEach(arr, fn) {
    for (var i = 0; i < arr.length; i++) {
        if (fn(arr[i], i) === false) break;
    }
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Point = Point;

var _util = __webpack_require__(0);

/**
 * @fileoverview 关于地理点坐标类文件.
 */

//Include("BMap.baidu.lang.Class");


/**
 * 基本点类,代表地理点坐标;
 * 坐标支持base64编码
 * @param {Object} lng 墨卡托X(经度).
 * @param {Object} lat 墨卡托Y(纬度);.
 * @return {Point} 返回一个地理点坐标对象.
 */
function Point(lng, lat) {
    // 新增base64支持 - by jz
    if (isNaN(lng)) {

        lng = isNaN(lng) ? 0 : lng;
    }
    if ((0, _util.isString)(lng)) {
        lng = parseFloat(lng);
    }
    if (isNaN(lat)) {

        lat = isNaN(lat) ? 0 : lat;
    }
    if ((0, _util.isString)(lat)) {
        lat = parseFloat(lat);
    }
    this.lng = lng;
    this.lat = lat;
}
Point.isInRange = function (pt) {
    return pt && pt.lng <= 180 && pt.lng >= -180 && pt.lat <= 74 && pt.lat >= -74;
};
Point.prototype.equals = function (other) {
    return other && this.lat == other.lat && this.lng == other.lng;
};
exports.default = Point;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Parameter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _deepmerge = __webpack_require__(11);

var _deepmerge2 = _interopRequireDefault(_deepmerge);

var _parameterConfig = __webpack_require__(14);

var _parameterConfig2 = _interopRequireDefault(_parameterConfig);

var _mapStyle = __webpack_require__(13);

var _CanvasOverlay2 = __webpack_require__(16);

var _Color = __webpack_require__(31);

var _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 接头定义 参数解析类
 */
var Parameter = exports.Parameter = function (_CanvasOverlay) {
    _inherits(Parameter, _CanvasOverlay);

    function Parameter(ops) {
        _classCallCheck(this, Parameter);

        var _this = _possibleConstructorReturn(this, (Parameter.__proto__ || Object.getPrototypeOf(Parameter)).call(this));

        _this._setOptionStyle(_parameterConfig2.default, ops);
        _this.points = ops.data;
        _this.multiSelect = ops.multiSelect;
        _this.selectItem = []; //选中
        _this.overItem = null; //悬浮
        _this.workerData = []; //缓存woker 转换后的数据

        _this.tooltipDom = null; //悬浮弹层
        _this.legendDom = null; //图例
        _this.tooltipTemplate = null;

        _this.selectedExp = {
            show: false,
            exp: null
        };
        return _this;
    }

    _createClass(Parameter, [{
        key: '_setOptionStyle',
        value: function _setOptionStyle(config, ops) {
            // debugger
            var opstion = _deepmerge2.default.all([config, {
                event: this.event || {}
            }, ops || {}]);
            this.tooltip = opstion.tooltip;
            this.legend = opstion.legend;
            this.labelStyle = opstion.label;
            this.event = opstion.event;
            this.style = opstion.style;

            //设置皮肤
            if (opstion.skin && this.map) {
                var setStyle = opstion.skin == 'Blueness' ? _mapStyle.Blueness : _mapStyle.WhiteLover;
                // debugger
                this.map.setMapStyle({
                    styleJson: setStyle
                });
            }
        }
    }, {
        key: 'setOptionStyle',
        value: function setOptionStyle(ops) {
            this._setOptionStyle(ops);
            this.TInit();
            this._dataRender();
        }

        /**
         * 根据用户配置，设置用户绘画样式
         * @param {*} item 
         */

    }, {
        key: 'setDrawStyle',
        value: function setDrawStyle(item) {
            var normal = this.style.normal,
                //正常样式
            mouseOverStyle = this.style.mouseOver,
                //悬浮样式
            selectedStyle = this.style.selected; //选中样式
            var result = {};
            Object.assign(result, normal);
            //区间样式
            var splitList = this.style.splitList;
            for (var i = 0; i < splitList.length; i++) {
                var condition = splitList[i];
                if (condition.end == null) {
                    if (item.count >= condition.start) {
                        Object.assign(result, normal, condition);
                        break;
                    }
                } else if (item.count >= condition.start && item.count < condition.end) {
                    Object.assign(result, normal, condition);
                    break;
                }
            }
            var size = result.size;
            var shadowColor = {};

            if (mouseOverStyle && this.overItem == item) {
                if (mouseOverStyle.shadowBlur != null && mouseOverStyle.shadowColor == null) {
                    //  debugger
                    shadowColor["shadowColor"] = this.brightness(result.backgroundColor, 50);
                }
                // debugger
                Object.assign(result, normal, mouseOverStyle, {
                    size: size * mouseOverStyle.scale,
                    backgroundColor: mouseOverStyle.backgroundColor || this.brightness(result.backgroundColor, 0.1)
                }, shadowColor);
            }
            if (selectedStyle && this.selectItemContains(item)) {
                if (selectedStyle.shadowBlur != null && selectedStyle.shadowColor == null) {
                    shadowColor["shadowColor"] = this.brightness(selectedStyle.backgroundColor, 0.1);
                }
                Object.assign(result, normal, selectedStyle, {
                    size: size * mouseOverStyle.scale
                }, shadowColor);
            }
            //  debugger
            if (this.labelStyle.show) {
                result = _deepmerge2.default.all([{
                    label: this.labelStyle
                }, result]);
            }
            return result;
        }
        /**
         * 亮度效果
         */

    }, {
        key: 'brightness',
        value: function brightness(rgba, delta) {
            // debugger
            var color = new _Color.Color(rgba);
            color.r += delta;
            color.g += delta;
            color.b += delta;
            return color.getStyle();
        }
        /**
         * 选中的数据集里面是否包含
         * @param {*} item 
         */

    }, {
        key: 'selectItemContains',
        value: function selectItemContains(item) {
            return this.findIndexSelectItem(item) > -1;
        }
        /**
         * 查询选中列表的索引
         * @param {*} item 
         */

    }, {
        key: 'findIndexSelectItem',
        value: function findIndexSelectItem(item) {
            //这个需要子类去实现  
            //原因 点 线  面 的数据结构不同  判断依据也不相同
            return -1;
        }
    }, {
        key: 'deleteSelectItem',
        value: function deleteSelectItem(item) {
            var index = this.findIndexSelectItem(item);
            index > -1 && this.selectItem.splice(index, 1);
        }
    }, {
        key: 'compileTemplate',
        value: function compileTemplate(formatter) {
            formatter = "`" + formatter.replace(/\{/g, '${overItem.') + "`";
            this.tooltipTemplate = new Function('overItem', 'return ' + formatter);
        }
    }, {
        key: 'TInit',
        value: function TInit() {

            if (this.style.colors.length > 0) {
                this.compileSplitList(this.points);
            } else {
                this.setlegend(this.legend, this.style.splitList);
            }
        }
    }, {
        key: 'getColorOpacity',
        value: function getColorOpacity(color) {
            var arr = color.split(',');
            arr.length = 3;
            return arr.join(',') + ',1)';
        }
    }, {
        key: 'compileSplitList',
        value: function compileSplitList(data) {
            var colors = this.style.colors;
            if (colors.length < 0) return;
            //  debugger
            data = data.sort(function (a, b) {
                return parseFloat(a.count) - parseFloat(b.count);
            });
            var splitCount = data.length / colors.length;
            var colorIndex = 0;
            var split = [];
            var star = 0,
                end = 0;
            //debugger
            for (var i = 0; i < data.length; i++) {

                if (i > splitCount * (colorIndex + 1)) {
                    if (split.length == 0) {
                        star = data[0].count;
                    }
                    // debugger
                    end = data[i].count;
                    // debugger
                    split.push({
                        start: star,
                        end: end,
                        backgroundColor: colors[colorIndex],
                        borderColor: this.style.normal.borderColor || this.getColorOpacity(colors[colorIndex])
                    });
                    colorIndex++;
                    star = data[i].count;
                }
            }
            //去除最后判断区间，防止区间遗漏
            if (split.length > 0) {
                split.push({
                    start: star,
                    end: null,
                    backgroundColor: colors[colorIndex],
                    borderColor: this.style.normal.borderColor || this.getColorOpacity(colors[colorIndex])
                });
            }

            this.style.splitList = split;
            this.setlegend(this.legend, this.style.splitList);
        }
    }, {
        key: 'setWorkerData',
        value: function setWorkerData(val) {
            this.workerData = val;
            if (this.filterFun) {
                this.selectItem = this.workerData.filter(this.filterFun);
            }
        }
    }, {
        key: 'parserExp',
        value: function parserExp(exp) {
            this.cancerExp();
            if (exp) {
                this.selectedExp.show = true;
                this.selectedExp.exp = exp;
                this.filterFun = new Function('item', 'with(item){ return ' + exp + ' }');
            }
        }
    }, {
        key: 'cancerExp',
        value: function cancerExp() {
            this.selectedExp.show = false;
            this.selectedExp.exp = null;
            this.filterFun = null;
        }
    }, {
        key: 'setCenter',
        value: function setCenter() {}
    }, {
        key: 'setCenterAndZoom',
        value: function setCenterAndZoom() {}
        /**
         抽象方法子类去实现
         */

        /**
         * 设置选中
         * @param {*} exp  表达式
         */

    }, {
        key: 'setSelectd',
        value: function setSelectd(exp, scale) {
            // debugger
            if (this.points.length > 0) {
                var filterFun = new Function('item', 'with(item){ return ' + exp + ' }');
                var temp = this.points.filter(filterFun);
                //  debugger
                if (temp.length > 0) {
                    this.setCenterAndZoom(temp[0].geo, exp, scale); //default first
                }
            }
        }
        /**
         * 取消选中
         */

    }, {
        key: 'cancerSelectd',
        value: function cancerSelectd() {
            this.cancerExp();
            this.selectItem = [];
            this._dataRender();
        }
        /**
         * 设置悬浮信息
         */

    }, {
        key: 'setTooltip',
        value: function setTooltip(event) {
            // debugger
            if (this.tooltipDom == null) {
                this.tooltipDom = document.createElement('div');
                this.tooltipDom.classList.add('tooltip');
                this.map._inmapOption.toolDom.appendChild(this.tooltipDom);
            }
            if (!this.tooltip.show) {
                this.tooltipDom.style.display = 'none';
                return;
            };
            if (this.overItem) {
                var formatter = this.tooltip.formatter;
                var overItem = this.overItem;
                if ((0, _util.isFunction)(formatter)) {
                    this.tooltipDom.innerHTML = formatter(overItem);
                } else if ((0, _util.isString)(formatter)) {
                    if (!this.tooltipTemplate) {
                        //编译
                        this.compileTemplate(formatter);
                    }
                    // debugger
                    this.tooltipDom.innerHTML = this.tooltipTemplate(overItem);
                }
                this.tooltipDom.style.left = event.clientX + 'px';
                this.tooltipDom.style.top = event.clientY + 'px';
                this.tooltipDom.style.display = 'block';
            } else {
                this.tooltipDom.style.display = 'none';
            }
        }
    }, {
        key: 'Tclear',
        value: function Tclear() {
            if (this.tooltipDom) {
                this.tooltipDom.parentNode.removeChild(this.tooltipDom);
                this.tooltipDom = null;
            }
            if (this.legendDom) {
                this.legendDom.parentNode.removeChild(this.legendDom);
                this.legendDom = null;
            }
        }
        /**
         * 设置图例
         */

    }, {
        key: 'setlegend',
        value: function setlegend(legend, splitList) {
            //  debugger
            if (legend == null || legend.show == false) {
                if (this.legendDom) {
                    this.legendDom.style.display = 'none';
                }
                return;
            }

            var legendData = legend.data;
            if (this.legendDom == null) {
                var ul = document.createElement('ul');
                ul.classList.add('legend');
                this.map._inmapOption.toolDom.appendChild(ul);
                this.legendDom = ul;
            }

            var str = "";
            if (legend.title) {
                str = '<li class=\'title\'>' + legend.title + '</li>';
            }
            var legendFunc = this.legend.formatter; //回调 设置复杂显示
            var me = this;
            splitList.forEach(function (val, index, arr) {
                var text = null;
                if (legendData) {
                    text = (0, _util.isFunction)(legendFunc) ? legendFunc(me.toFixed(val.start), me.toFixed(val.end)) : legendData[index];
                } else {
                    text = me.toFixed(val.start) + ' ~ ' + (val.end == null ? "<span class='infinity'>∞</span>" : me.toFixed(val.end));
                }
                str += '\n            <li class=\'item\'>\n                <span class=\'bg\' style="background: ' + val.backgroundColor + ';"></span>\n                <span>' + text + '</span>\n            </li>';
            });
            this.legendDom.style.display = splitList.length == 0 ? 'none' : 'block';
            this.legendDom.innerHTML = str;
        }
    }, {
        key: 'toFixed',
        value: function toFixed(num) {
            return parseFloat(num).toFixed(this.legend.toFixed);
        }
        /**
         * 判断触发源
         */

    }, {
        key: 'getTarget',
        value: function getTarget(x, y) {
            //需要子类去实现 
            return {
                item: null,
                index: -1
            };
        }
        /**
         * 绘画
         */

    }, {
        key: '_dataRender',
        value: function _dataRender() {
            //抽象方法需要子类去实现
        }
    }, {
        key: 'swopData',
        value: function swopData(index, item) {
            if (index > -1) {
                this.workerData[index] = this.workerData[this.workerData.length - 1];
                this.workerData[this.workerData.length - 1] = item;
            }
        }
    }, {
        key: 'tMouseleave',
        value: function tMouseleave() {
            if (this.tooltipDom) {
                this.tooltipDom.style.display = 'none';
            }
        }
    }, {
        key: 'tMousemove',
        value: function tMousemove(event) {
            //debugger
            var result = this.getTarget(event.pixel.x, event.pixel.y);
            var temp = result.item;
            if (temp != this.overItem) {
                //防止过度重新绘画
                this.overItem = temp;
                if (temp) {
                    this.swopData(result.index, result.item);
                }
                this._dataRender();
            }
            if (temp) {
                this.map.setDefaultCursor("pointer");
            } else {
                this.map.setDefaultCursor("default");
            }
            this.setTooltip(event);
        }
    }, {
        key: 'triggerClick',
        value: function triggerClick() {
            //  debugger
            this.event.onMouseClick && this.event.onMouseClick(this.selectItem, {
                x: event.clientX,
                y: event.clientY
            });
        }
    }, {
        key: 'tMouseClick',
        value: function tMouseClick(event) {

            var result = this.getTarget(event.pixel.x, event.pixel.y);
            if (result.index == -1) {
                return;
            }
            // debugger
            var item = result.item;
            if (this.multiSelect) {
                if (this.selectItemContains(item)) {
                    this.deleteSelectItem(item); //二次点击取消选中
                } else {
                    this.selectItem.push(result.item);
                }
            } else {
                this.selectItem = [result.item];
            }

            this.swopData(result.index, item);
            this.triggerClick();
            this.cancerExp();
            this._dataRender();
        }
    }]);

    return Parameter;
}(_CanvasOverlay2.CanvasOverlay);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pixel = exports.Pixel = function () {
    function Pixel(x, y) {
        _classCallCheck(this, Pixel);

        this.x = x || 0;
        this.y = y || 0;
    }

    _createClass(Pixel, [{
        key: "Pixel",
        value: function Pixel(other) {
            return other && other.x == this.x && other.y == this.y;
        }
    }]);

    return Pixel;
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.geo = undefined;

var _MercatorProjection = __webpack_require__(9);

var geo = exports.geo = {
    pointToPixel: function pointToPixel(point, zoom, center, size) {
        return this.projection.pointToPixel(point, zoom, center, size);
    },
    pixelToPoint: function pixelToPoint(piexl) {}
    /**
     * 经纬度变换至墨卡托坐标
     * @param Point 经纬度
     * @return Point 墨卡托
     */

    ,
    lngLatToMercator: function lngLatToMercator() {
        return this.projection.convertLL2MC(point);
    },

    projection: new _MercatorProjection.MercatorProjection()
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pointToPixel = pointToPixel;
exports.pointsToPixels = pointsToPixels;
exports.pointToPixelWorker = pointToPixelWorker;
exports.pointsToPixelsWoker = pointsToPixelsWoker;

var _geo = __webpack_require__(4);

var _util = __webpack_require__(0);

function pointToPixel(point, map) {
    var zoom = map.getZoom();
    var center = map.getCenter();
    var size = map.getSize();
    return _geo.geo.pointToPixel(point, zoom, center, size);
}

function pointsToPixels(points, map) {
    var data = points;
    points = (0, _util.isArray)(data) ? data : data.request.data;
    map = map || data.request.map;
    var pixels = [];
    for (var i = 0, len = points.length; i < len; i++) {
        pixels.push(pointToPixel(points[i], map));
    }
    return pixels;
}

function pointToPixelWorker(point, map) {
    var zoom = map.zoom;
    var center = map.center;
    var size = map.size;
    return _geo.geo.pointToPixel(point, zoom, center, size);
}

function pointsToPixelsWoker(points, map) {
    var data = points;
    points = (0, _util.isArray)(data) ? data : data.request.data;
    map = map || data.request.map;
    var pixels = [];
    for (var i = 0, len = points.length; i < len; i++) {
        pixels.push(pointToPixelWorker(points[i], map));
    }
    return pixels;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var instances = {};
var workerContent = "[workerContentString]";

var WorkerMrg = function () {
    function WorkerMrg() {
        _classCallCheck(this, WorkerMrg);
    }

    _createClass(WorkerMrg, [{
        key: "create",
        value: function create(workerPath) {
            var workerUrl = workerContent.length == 21 ? URL.createObjectURL(new Blob(["importScripts('" + workerPath + "');"])) : URL.createObjectURL(new Blob([workerContent], {
                type: 'application/javascript'
            }));
            this.worker = new Worker(workerUrl);
            this.worker.addEventListener('message', this.message);
            this.worker.onerror = function (e) {
                console.log('worker.onerror', e);
            };
        }
    }, {
        key: "message",
        value: function message(e) {
            var data = e.data;
            var hashCode = data.request.hashCode;
            var msgId = data.request.msgId;
            var classPath = data.request.classPath;
            if (instances[classPath + '_' + hashCode] && instances[classPath + '_' + hashCode] == hashCode + '_' + msgId) {
                instances[hashCode + '_' + msgId](data.response.data);
            } else {
                instances[hashCode + '_' + msgId] = null;
            }
        }
        /**
         * 发送消息到worker
         * @param {JSON} data 发送的数据
         * @param {Function} callback 返回的回调
         */

    }, {
        key: "postMessage",
        value: function postMessage(data, callback) {
            var hashCode = data.request.hashCode;
            var msgId = data.request.msgId;
            var classPath = data.request.classPath;
            instances[hashCode + '_' + msgId] = callback;
            //worker队列唯一性判断，
            instances[classPath + '_' + hashCode] = hashCode + '_' + msgId;
            this.worker.postMessage(data);
        }
    }]);

    return WorkerMrg;
}();

var workerMrg = exports.workerMrg = new WorkerMrg();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = polylabel;

var _tinyqueue = __webpack_require__(8);

var _tinyqueue2 = _interopRequireDefault(_tinyqueue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Cell(x, y, h, polygon) {
    this.x = x; // 中心点x
    this.y = y; // 中心点y
    this.h = h; // 中心点到网格的距离，相当于格网大小的1/2
    this.d = pointToPolygonDist(x, y, polygon); // 中心点到多边形的距离
    this.max = this.d + this.h * Math.SQRT2; // 网格内部区域到多边形的最大距离
}

function distSqr(p, a) {
    var dx = p.x - a.x,
        dy = p.y - a.y;
    return dx * dx + dy * dy;
}

function sub(a, p) {
    a.x -= p.x;
    a.y -= p.y;
    return a;
}

function mult(a, k) {
    a.x *= k;
    a.y *= k;
    return a;
}

function add(a, p) {
    a.x += p.x;
    a.y += p.y;
    return a;
}

function distToSegmentSquared(p, v, w) {
    var l2 = distSqr(w, v);
    if (l2 === 0) return distSqr(v, p);
    var t = ((p.x - v.x) * (w.x - v.x) + (p.y - v.y) * (w.y - v.y)) / l2;
    if (t < 0) return distSqr(v, p);
    if (t > 1) return distSqr(w, p);
    return distSqr(and(mult(sub(w, v), t), v), p);
    // return p.distSqr(w.sub(v)._mult(t)._add(v), p);
}
// signed distance from point to polygon outline (negative if point is outside)
function pointToPolygonDist(p, polygon) {
    var inside = false;
    var minDistSq = Infinity;

    for (var k = 0; k < polygon.length; k++) {
        var ring = polygon[k];

        for (var i = 0, len = ring.length, j = len - 1; i < len; j = i++) {
            var a = ring[i];
            var b = ring[j];

            if (a.y > p.y !== b.y > p.y && p.x < (b.x - a.x) * (p.y - a.y) / (b.y - a.y) + a.x) inside = !inside;
            // debugger
            minDistSq = Math.min(minDistSq, distToSegmentSquared(p, a, b));
        }
    }

    return (inside ? 1 : -1) * Math.sqrt(minDistSq);
}

function getCentroid(polygon) {
    var totalArea = 0;
    var totalX = 0;
    var totalY = 0;
    var points = polygon[0];
    for (var i = 0; i < points.length - 1; ++i) {
        // a、b以及原点构成一个三角形
        // debugger
        var a = points[i + 1];
        var b = points[i];
        var area = 0.5 * (a[0] * b[1] - b[0] * a[1]); // 计算面积
        var x = (a[0] + b[0]) / 3; // 计算x方向质心
        var y = (a[1] + b[1]) / 3; // 计算y方向质心
        totalArea += area;
        totalX += area * x;
        totalY += area * y;
    }
    return new Cell(totalX / totalArea, totalY / totalArea);
}

function polylabel(polygon) {
    // 计算bbox，为切分网格做准备
    var minX, minY, maxX, maxY;
    for (var i = 0; i < polygon[0].length; i++) {
        var p = polygon[0][i];
        if (!i || p[0] < minX) minX = p[0];
        if (!i || p[1] < minY) minY = p[1];
        if (!i || p[0] > maxX) maxX = p[0];
        if (!i || p[1] > maxY) maxY = p[1];
    }
    if (minX == maxX || minY == maxY) {
        //直线问题
        return null;
    }
    // 计算长和宽，初始格网大小和高度
    var width = maxX - minX;
    var height = maxY - minY;
    var cellSize = Math.min(width, height);
    var h = cellSize / 2;
    // 初始化一个存储Cell的优先级队列，按距离从大到小排列
    var cellQueue = new _tinyqueue2.default(null, function (a, b) {
        return b.max - a.max;
    });
    // 将多边形切分
    for (var x = minX; x < maxX; x += cellSize) {
        for (var y = minY; y < maxY; y += cellSize) {
            cellQueue.push(new Cell(x + h, y + h, h, polygon));
        }
    }
    // 取对首为最优格网
    var bestCell = getCentroid(polygon);
    while (cellQueue.length) {
        var cell = cellQueue.pop();
        if (cell.d > bestCell.d) bestCell = cell;
        // 最大距离小于最优格网的距离，直接淘汰
        if (cell.max <= bestCell.d) continue;
        // 将格网裂为4个小格网
        h = cell.h / 2;
        cellQueue.push(new Cell(cell.x - h, cell.y - h, h, polygon));
        cellQueue.push(new Cell(cell.x + h, cell.y - h, h, polygon));
        cellQueue.push(new Cell(cell.x - h, cell.y + h, h, polygon));
        cellQueue.push(new Cell(cell.x + h, cell.y + h, h, polygon));
    }
    return bestCell;
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = TinyQueue;
/**
 * The smallest and simplest binary heap priority queue in JavaScript.
 */

function TinyQueue(data, compare) {
    if (!(this instanceof TinyQueue)) return new TinyQueue(data, compare);

    this.data = data || [];
    this.length = this.data.length;
    this.compare = compare || defaultCompare;

    if (this.length > 0) {
        for (var i = this.length >> 1; i >= 0; i--) {
            this._down(i);
        }
    }
}

function defaultCompare(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}

TinyQueue.prototype = {

    push: function push(item) {
        this.data.push(item);
        this.length++;
        this._up(this.length - 1);
    },

    pop: function pop() {
        if (this.length === 0) return undefined;

        var top = this.data[0];
        this.length--;

        if (this.length > 0) {
            this.data[0] = this.data[this.length];
            this._down(0);
        }
        this.data.pop();

        return top;
    },

    peek: function peek() {
        return this.data[0];
    },

    _up: function _up(pos) {
        var data = this.data;
        var compare = this.compare;
        var item = data[pos];

        while (pos > 0) {
            var parent = pos - 1 >> 1;
            var current = data[parent];
            if (compare(item, current) >= 0) break;
            data[pos] = current;
            pos = parent;
        }

        data[pos] = item;
    },

    _down: function _down(pos) {
        var data = this.data;
        var compare = this.compare;
        var halfLength = this.length >> 1;
        var item = data[pos];

        while (pos < halfLength) {
            var left = (pos << 1) + 1;
            var right = left + 1;
            var best = data[left];

            if (right < this.length && compare(data[right], best) < 0) {
                left = right;
                best = data[right];
            }
            if (compare(best, item) >= 0) break;

            data[pos] = best;
            pos = left;
        }

        data[pos] = item;
    }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MercatorProjection = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Projection2 = __webpack_require__(10);

var _Point = __webpack_require__(1);

var _Pixel = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MercatorProjection = exports.MercatorProjection = function (_Projection) {
    _inherits(MercatorProjection, _Projection);

    function MercatorProjection() {
        _classCallCheck(this, MercatorProjection);

        var _this = _possibleConstructorReturn(this, (MercatorProjection.__proto__ || Object.getPrototypeOf(MercatorProjection)).call(this));

        _this.EARTHRADIUS = 6370996.81, _this.MCBAND = [12890594.86, 8362377.87, 5591021, 3481989.83, 1678043.12, 0], _this.LLBAND = [75, 60, 45, 30, 15, 0], _this.MC2LL = [[1.410526172116255e-008, 8.983055096488720e-006, -1.99398338163310, 2.009824383106796e+002, -1.872403703815547e+002, 91.60875166698430, -23.38765649603339, 2.57121317296198, -0.03801003308653, 1.733798120000000e+007], [-7.435856389565537e-009, 8.983055097726239e-006, -0.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 1.026014486000000e+007], [-3.030883460898826e-008, 8.983055099835780e-006, 0.30071316287616, 59.74293618442277, 7.35798407487100, -25.38371002664745, 13.45380521110908, -3.29883767235584, 0.32710905363475, 6.856817370000000e+006], [-1.981981304930552e-008, 8.983055099779535e-006, 0.03278182852591, 40.31678527705744, 0.65659298677277, -4.44255534477492, 0.85341911805263, 0.12923347998204, -0.04625736007561, 4.482777060000000e+006], [3.091913710684370e-009, 8.983055096812155e-006, 0.00006995724062, 23.10934304144901, -0.00023663490511, -0.63218178102420, -0.00663494467273, 0.03430082397953, -0.00466043876332, 2.555164400000000e+006], [2.890871144776878e-009, 8.983055095805407e-006, -0.00000003068298, 7.47137025468032, -0.00000353937994, -0.02145144861037, -0.00001234426596, 0.00010322952773, -0.00000323890364, 8.260885000000000e+005]], _this.LL2MC = [[-0.00157021024440, 1.113207020616939e+005, 1.704480524535203e+015, -1.033898737604234e+016, 2.611266785660388e+016, -3.514966917665370e+016, 2.659570071840392e+016, -1.072501245418824e+016, 1.800819912950474e+015, 82.5], [8.277824516172526e-004, 1.113207020463578e+005, 6.477955746671608e+008, -4.082003173641316e+009, 1.077490566351142e+010, -1.517187553151559e+010, 1.205306533862167e+010, -5.124939663577472e+009, 9.133119359512032e+008, 67.5], [0.00337398766765, 1.113207020202162e+005, 4.481351045890365e+006, -2.339375119931662e+007, 7.968221547186455e+007, -1.159649932797253e+008, 9.723671115602145e+007, -4.366194633752821e+007, 8.477230501135234e+006, 52.5], [0.00220636496208, 1.113207020209128e+005, 5.175186112841131e+004, 3.796837749470245e+006, 9.920137397791013e+005, -1.221952217112870e+006, 1.340652697009075e+006, -6.209436990984312e+005, 1.444169293806241e+005, 37.5], [-3.441963504368392e-004, 1.113207020576856e+005, 2.782353980772752e+002, 2.485758690035394e+006, 6.070750963243378e+003, 5.482118345352118e+004, 9.540606633304236e+003, -2.710553267466450e+003, 1.405483844121726e+003, 22.5], [-3.218135878613132e-004, 1.113207020701615e+005, 0.00369383431289, 8.237256402795718e+005, 0.46104986909093, 2.351343141331292e+003, 1.58060784298199, 8.77738589078284, 0.37238884252424, 7.45]];

        return _this;
    }

    _createClass(MercatorProjection, [{
        key: 'getDistanceByMC',
        value: function getDistanceByMC(point1, point2) {
            if (!point1 || !point2) return 0;
            var x1, y1, x2, y2;
            point1 = this.convertMC2LL(point1);
            if (!point1) return 0;
            x1 = this.toRadians(point1.lng);
            y1 = this.toRadians(point1.lat);
            point2 = this.convertMC2LL(point2);
            if (!point2) return 0;
            x2 = this.toRadians(point2.lng);
            y2 = this.toRadians(point2.lat);
            return this.getDistance(x1, x2, y1, y2);
        }
        /**
         * 根据经纬度坐标计算两点间距离;
         * @param {Point} point1 经纬度点坐标1
         * @param {Point} point2 经纬度点坐标2;
         * @return {Number} 返回两点间的距离
         */

    }, {
        key: 'getDistanceByLL',
        value: function getDistanceByLL(point1, point2) {
            if (!point1 || !point2) return 0;
            point1.lng = this.getLoop(point1.lng, -180, 180);
            point1.lat = this.getRange(point1.lat, -74, 74);
            point2.lng = this.getLoop(point2.lng, -180, 180);
            point2.lat = this.getRange(point2.lat, -74, 74);
            var x1, x2, y1, y2;
            x1 = this.toRadians(point1.lng);
            y1 = this.toRadians(point1.lat);
            x2 = this.toRadians(point2.lng);
            y2 = this.toRadians(point2.lat);
            return this.getDistance(x1, x2, y1, y2);
        }
        /**
         * 平面直角坐标转换成经纬度坐标;
         * @param {Point} point 平面直角坐标
         * @return {Point} 返回经纬度坐标
         */

    }, {
        key: 'convertMC2LL',
        value: function convertMC2LL(point) {
            var temp, factor;
            temp = new _Point.Point(Math.abs(point.lng), Math.abs(point.lat));
            for (var i = 0; i < this.MCBAND.length; i++) {
                if (temp.lat >= this.MCBAND[i]) {
                    factor = this.MC2LL[i];
                    break;
                }
            };
            var lnglat = this.convertor(point, factor);
            var point = new _Point.Point(lnglat.lng.toFixed(6), lnglat.lat.toFixed(6));
            return point;
        }

        /**
         * 经纬度坐标转换成平面直角坐标;
         * @param {Point} point 经纬度坐标
         * @return {Point} 返回平面直角坐标
         */

    }, {
        key: 'convertLL2MC',
        value: function convertLL2MC(point) {
            var temp, factor;
            point.lng = this.getLoop(point.lng, -180, 180);
            point.lat = this.getRange(point.lat, -74, 74);
            temp = new _Point.Point(point.lng, point.lat);
            for (var i = 0; i < this.LLBAND.length; i++) {
                if (temp.lat >= this.LLBAND[i]) {
                    factor = this.LL2MC[i];
                    break;
                }
            }
            if (!factor) {
                for (var i = this.LLBAND.length - 1; i >= 0; i--) {
                    if (temp.lat <= -this.LLBAND[i]) {
                        factor = this.LL2MC[i];
                        break;
                    }
                }
            }
            var mc = this.convertor(point, factor);
            var point = new _Point.Point(mc.lng.toFixed(2), mc.lat.toFixed(2));
            return point;
        }
    }, {
        key: 'convertor',
        value: function convertor(fromPoint, factor) {
            if (!fromPoint || !factor) {
                return;
            }
            var x = factor[0] + factor[1] * Math.abs(fromPoint.lng);
            var temp = Math.abs(fromPoint.lat) / factor[9];
            var y = factor[2] + factor[3] * temp + factor[4] * temp * temp + factor[5] * temp * temp * temp + factor[6] * temp * temp * temp * temp + factor[7] * temp * temp * temp * temp * temp + factor[8] * temp * temp * temp * temp * temp * temp;
            x *= fromPoint.lng < 0 ? -1 : 1;
            y *= fromPoint.lat < 0 ? -1 : 1;
            return new _Point.Point(x, y);
        }
    }, {
        key: 'getDistance',
        value: function getDistance(x1, x2, y1, y2) {
            return this.EARTHRADIUS * Math.acos(Math.sin(y1) * Math.sin(y2) + Math.cos(y1) * Math.cos(y2) * Math.cos(x2 - x1));
        }
    }, {
        key: 'toRadians',
        value: function toRadians(angdeg) {
            return Math.PI * angdeg / 180;
        }
    }, {
        key: 'toDegrees',
        value: function toDegrees(angrad) {
            return 180 * angrad / Math.PI;
        }
    }, {
        key: 'getRange',
        value: function getRange(v, a, b) {
            if (a != null) {
                v = Math.max(v, a);
            }
            if (b != null) {
                v = Math.min(v, b);
            }
            return v;
        }
    }, {
        key: 'getLoop',
        value: function getLoop(v, a, b) {
            while (v > b) {
                v -= b - a;
            }
            while (v < a) {
                v += b - a;
            }
            return v;
        }

        /**
         * 经纬度变换至墨卡托坐标
         * @param Point 经纬度
         * @return Point 墨卡托
         */

    }, {
        key: 'lngLatToMercator',
        value: function lngLatToMercator(point) {
            return this.convertLL2MC(point);
        }
        /**
         * 球面到平面坐标
         * @param Point 球面坐标
         * @return Pixel 平面坐标
         */

    }, {
        key: 'lngLatToPoint',
        value: function lngLatToPoint(point) {
            var mercator = this.convertLL2MC(point);
            return new _Pixel.Pixel(mercator.lng, mercator.lat);
        }
        /**
         * 墨卡托变换至经纬度
         * @param Point 墨卡托
         * @returns Point 经纬度
         */

    }, {
        key: 'mercatorToLngLat',
        value: function mercatorToLngLat(point) {
            return this.convertMC2LL(point);
        }
        /**
         * 平面到球面坐标
         * @param Pixel 平面坐标
         * @returns Point 球面坐标
         */

    }, {
        key: 'pointToLngLat',
        value: function pointToLngLat(point) {
            var mercator = new _Point.Point(point.x, point.y);
            return this.convertMC2LL(mercator);
        }
        /**
         * 地理坐标转换至像素坐标
         * @param Point 地理坐标
         * @param Number 级别
         * @param Point 地图中心点，注意为了保证没有误差，这里需要传递墨卡托坐标
         * @param Size 地图容器大小
         * @return Pixel 像素坐标
         */

    }, {
        key: 'pointToPixel',
        value: function pointToPixel(point, zoom, mapCenter, mapSize, curCity) {
            if (!point) {
                return;
            }
            point = this.lngLatToMercator(point, curCity);
            mapCenter = this.lngLatToMercator(mapCenter);
            var zoomUnits = this.getZoomUnits(zoom);
            var x = Math.round((point.lng - mapCenter.lng) / zoomUnits + mapSize.width / 2);
            var y = Math.round((mapCenter.lat - point.lat) / zoomUnits + mapSize.height / 2);
            return new _Pixel.Pixel(x, y);
        }
        /**
         * 像素坐标转换至地理坐标
         * @param Pixel 像素坐标
         * @param Number 级别
         * @param Point 地图中心点，注意为了保证没有误差，这里需要传递墨卡托坐标
         * @param Size 地图容器大小
         * @return Point 地理坐标
         */

    }, {
        key: 'pixelToPoint',
        value: function pixelToPoint(pixel, zoom, mapCenter, mapSize, curCity) {
            if (!pixel) {
                return;
            }
            var zoomUnits = this.getZoomUnits(zoom);
            var lng = mapCenter.lng + zoomUnits * (pixel.x - mapSize.width / 2);
            var lat = mapCenter.lat - zoomUnits * (pixel.y - mapSize.height / 2);
            var point = new _Point.Point(lng, lat);
            return this.mercatorToLngLat(point, curCity);
        }
    }, {
        key: 'getZoomUnits',
        value: function getZoomUnits(zoom) {
            return Math.pow(2, 18 - zoom);
        }
    }]);

    return MercatorProjection;
}(_Projection2.Projection);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Projection = exports.Projection = function () {
    function Projection() {
        _classCallCheck(this, Projection);
    }

    _createClass(Projection, [{
        key: "lngLatToPoint",
        value: function lngLatToPoint() {
            throw "lngLatToPoint方法未实现";
        }
    }, {
        key: "pointToLngLat",
        value: function pointToLngLat() {
            throw "pointToLngLat方法未实现";
        }
    }]);

    return Projection;
}();

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var index$2 = function isMergeableObject(value) {
	return isNonNullObject(value) && isNotSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isNotSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue !== '[object RegExp]'
		&& stringValue !== '[object Date]'
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
}

function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true;
    return (clone && index$2(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}

function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice();
    source.forEach(function(e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
        } else if (index$2(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
        }
    });
    return destination
}

function mergeObject(target, source, optionsArgument) {
    var destination = {};
    if (index$2(target)) {
        Object.keys(target).forEach(function(key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
        });
    }
    Object.keys(source).forEach(function(key) {
        if (!index$2(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
        }
    });
    return destination
}

function deepmerge(target, source, optionsArgument) {
    var sourceIsArray = Array.isArray(source);
    var targetIsArray = Array.isArray(target);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

    if (!sourceAndTargetTypesMatch) {
        return cloneIfNecessary(source, optionsArgument)
    } else if (sourceIsArray) {
        var arrayMerge = options.arrayMerge || defaultArrayMerge;
        return arrayMerge(target, source, optionsArgument)
    } else {
        return mergeObject(target, source, optionsArgument)
    }
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements')
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, optionsArgument)
    })
};

var index = deepmerge;

module.exports = index;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    tooltip: {
        show: true,
        position: 'top',
        // formatter: function (params) {
        //     return params.count;
        // }
        formatter: "{count}"
    },
    label: {
        show: false, // 是否显示
        font: "12px sans-serif",
        shadowBlur: 0,
        lineWidth: 1,
        color: "rgba(75,80,86,1)"
    },
    legend: {
        show: true,
        title: "图例"

    },
    style: {
        colors: ["rgba(156,200,249,0.7)", "rgba(93,158,247,0.7)", "rgba(134,207,55,0.7)", "rgba(252,198,10,0.7)", "rgba(255,144,0,0.7)", "rgba(255,72,0,0.7)", "rgba(255,0,0,0.7)"],
        normal: {
            backgroundColor: 'rgba(200, 200, 200, 0.5)',
            borderWidth: 3,
            size: 50
        },
        mouseOver: {
            backgroundColor: 'rgba(200, 200, 200, 1)',
            scale: 1
        },
        selected: {
            backgroundColor: 'rgba(184,0,0,1)',
            borderColor: "rgba(255,255,255,1)"
        }

    }
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var WhiteLover = exports.WhiteLover = [{
    "featureType": "water",
    "elementType": "all",
    "stylers": {
        "color": "#dbe0e7"
    }
}, {
    "featureType": "land",
    "elementType": "all",
    "stylers": {
        "color": "#f1f3f5"
    }
}, {
    "featureType": "green",
    "elementType": "all",
    "stylers": {
        "color": "#e9ecf2"
    }
}, {
    "featureType": "manmade",
    "elementType": "all",
    "stylers": {
        "color": "#dde1e8"
    }
}, {
    "featureType": "building",
    "elementType": "all",
    "stylers": {
        "color": "#dde1e8"
    }
}, {
    "featureType": "boundary",
    "elementType": "geometry",
    "stylers": {
        "color": "#d7dadf"
    }
}, {
    "featureType": "railway",
    "elementType": "geometry",
    "stylers": {
        "hue": "#3d85c6",
        "lightness": 63,
        "saturation": 21,
        "visibility": "on"
    }
}, {
    "featureType": "local",
    "elementType": "all",
    "stylers": {
        "color": "#e7ebf2",
        "visibility": "off"
    }
}, {
    "featureType": "local",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#b5bfc7",
        "visibility": "off"
    }
}, {
    "featureType": "subway",
    "elementType": "all",
    "stylers": {
        "color": "#73b1df"
    }
}, {
    "featureType": "poi",
    "elementType": "all",
    "stylers": {
        "color": "#b5bfc7",
        "visibility": "off"
    }
}, {
    "featureType": "subway",
    "elementType": "all",
    "stylers": {
        "color": "#d9e3ea",
        "visibility": "off"
    }
}, {
    "featureType": "highway",
    "elementType": "labels",
    "stylers": {
        "color": "#c6d4df",
        "visibility": "off"
    }
}, {
    "featureType": "highway",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#c1c9d5"
    }
}, {
    "featureType": "highway",
    "elementType": "geometry.fill",
    "stylers": {
        "color": "#d3d8e1",
        "visibility": "on"
    }
}, {
    "featureType": "arterial",
    "elementType": "labels",
    "stylers": {
        "visibility": "on"
    }
}, {
    "featureType": "administrative",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "background",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "arterial",
    "elementType": "geometry.fill",
    "stylers": {
        "color": "#e9ecf2"
    }
}, {
    "featureType": "arterial",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#d9dce3"
    }
}, {
    "featureType": "arterial",
    "elementType": "labels.text.fill",
    "stylers": {
        "visibility": "off"
    }
}];
var Blueness = exports.Blueness = [{
    "featureType": "water",
    "elementType": "all",
    "stylers": {
        "color": "#566382"
    }
}, {
    "featureType": "land",
    "elementType": "all",
    "stylers": {
        "color": "#172137"
    }
}, {
    "featureType": "green",
    "elementType": "all",
    "stylers": {
        "color": "#282f57"
    }
}, {
    "featureType": "manmade",
    "elementType": "all",
    "stylers": {
        "color": "#3f4b8c"
    }
}, {
    "featureType": "building",
    "elementType": "all",
    "stylers": {
        "color": "#3f4b8c"
    }
}, {
    "featureType": "boundary",
    "elementType": "geometry",
    "stylers": {
        "color": "#4f6b9e"
    }
}, {
    "featureType": "railway",
    "elementType": "geometry",
    "stylers": {
        "color": "#4f6b9e"
    }
}, {
    "featureType": "highway",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#202749",
        "visibility": "off"
    }
}, {
    "featureType": "arterial",
    "elementType": "geometry.fill",
    "stylers": {
        "color": "#4f6b9e",
        "visibility": "off"
    }
}, {
    "featureType": "local",
    "elementType": "geometry.fill",
    "stylers": {
        "color": "#303a6d"
    }
}, {
    "featureType": "local",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#2d3667",
        "visibility": "off"
    }
}, {
    "featureType": "subway",
    "elementType": "all",
    "stylers": {
        "color": "#445195",
        "visibility": "off"
    }
}, {
    "featureType": "all",
    "elementType": "labels.text.stroke",
    "stylers": {
        "color": "#141831"
    }
}, {
    "featureType": "all",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#5564b2"
    }
}, {
    "featureType": "poi",
    "elementType": "all",
    "stylers": {
        "color": "#141831",
        "visibility": "off"
    }
}, {
    "featureType": "subway",
    "elementType": "all",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "arterial",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#181e3e"
    }
}, {
    "featureType": "highway",
    "elementType": "geometry",
    "stylers": {
        "color": "#324160",
        "weight": "0.9"
    }
}, {
    "featureType": "highway",
    "elementType": "labels",
    "stylers": {
        "color": "#172137",
        "visibility": "off"
    }
}, {
    "featureType": "label",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": {}
}];

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 默认点、围栏参数结构
 */

module.exports = {
    tooltip: {
        show: false
    },
    legend: {
        show: false,
        toFixed: 2 //保留两位小数
    },
    label: {
        // show: false, // 是否显示
        // font: "12px sans-serif",
        // shadowBlur: 0,
        // lineWidth: 1,
        // color: "rgba(75,80,86,1)",
        normal: {
            show: false,
            textStyle: {
                color: '#fff',
                fontSize: 12
            }
        }
    },
    style: {
        normal: {
            borderWidth: 0.1,
            backgroundColor: 'rgba(200, 200, 200, 0.5)',
            label: {},
            scale: 1
        },
        mouseOver: {
            scale: 1,
            label: {}
        },
        selected: {
            scale: 1,
            label: {}

        },
        colors: [],
        splitList: []

    },
    data: [],
    multiSelect: false, //是否支持多选
    event: {}
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _workerMrg = __webpack_require__(6);

var baseClassCounter = 0;
var inmap_instances = {};
var _count = 0; //消息ID key
/**
 * 父类继承
 * @param {Object} parentClass
 * @param {Object} className
 */
Function.prototype.inherits = function (parentClass, className) {
    var i = void 0,
        p = void 0,
        op = this.prototype,
        C = function C() {};
    C.prototype = parentClass.prototype;
    p = this.prototype = new C();
    if (typeof className == "string") {
        p.className = className;
    }
    for (i in op) {
        p[i] = op[i];
    }
    this.prototype.constructor = op.constructor;
    op = C = null;
    return p;
};
var Instance = function Instance(hashCode) {
    return inmap_instances[hashCode];
};

/**
 * TD框架的基类
 * @namespace
 * @name BaseClass
 */
var BaseClass = function BaseClass(hc) {
    inmap_instances[this.hashCode = hc || BaseClass.guid()] = this;
};

/** @ignore */
BaseClass.guid = function () {
    return "td_" + (baseClassCounter++).toString(36);
};

/**
 * 释放对象所持有的资源。
 * 主要是自定义事件。
 * 好像没有将_listeners中绑定的事件剔除掉..
 */
BaseClass.prototype.dispose = function () {
    if (this.hashCode) {
        inmap_instances[this.hashCode] = null;
    }

    for (var i in this) {
        if (typeof this[i] != "function") {
            this[i] = null;
        }
    }
};

/**
 * 返回对象的hashCode，如果没有的话，添加一个新的hashCode并将其返回
 * @return {String} 对象的hashCode
 */
BaseClass.prototype.getHashCode = function () {
    if (!this.hashCode) {
        inmap_instances[this.hashCode = BaseClass.guid()] = this;
    }
    return this.hashCode;
};

/**
 * 从inmap_instances数组中将对象的引用删除掉。
 * 删除之后就无法使用I()函数获取对象了。
 */
BaseClass.prototype.decontrol = function () {
    inmap_instances[this.hashCode] = null;
};

var baidu = BMap || {};
BaseClass.inherits(baidu.Overlay, "BaseClass");

/**
 * push消息，
 * @param {string} workerClassPath worker请求的path
 * @param {json} data提交的json数据
 * @param {Function} callback
 */
BaseClass.prototype.postMessage = function (workerClassPath, data, callback) {
    var map = this.map;
    var center = map.getCenter();
    var size = map.getSize();
    var msgId = this.setMsgId();
    var request = {
        'type': 'web',
        'data': data,
        'hashCode': this.hashCode,
        'className': this.className,
        'classPath': workerClassPath,
        'msgId': msgId,
        'map': {
            'center': {
                lng: center.lng,
                lat: center.lat
            },
            'size': {
                width: size.width,
                height: size.height
            },
            'zoom': map.getZoom(),
            'margin': this.margin
        }
    };
    _workerMrg.workerMrg.postMessage({
        request: request
    }, callback);
};
BaseClass.prototype.getMsgId = function () {
    return "msgId_" + _count.toString(36);
};
BaseClass.prototype.setMsgId = function () {
    _count++;
    return "msgId_" + _count.toString(36);
};

exports.default = BaseClass;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CanvasOverlay = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseClass2 = __webpack_require__(15);

var _BaseClass3 = _interopRequireDefault(_BaseClass2);

var _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var zIndex = 1;

var CanvasOverlay = exports.CanvasOverlay = function (_BaseClass) {
    _inherits(CanvasOverlay, _BaseClass);

    function CanvasOverlay() {
        _classCallCheck(this, CanvasOverlay);

        var _this = _possibleConstructorReturn(this, (CanvasOverlay.__proto__ || Object.getPrototypeOf(CanvasOverlay)).call(this));

        _this.ctx = null; //canvas对象
        _this.eventType = 'moveend';
        _this.map = null;
        _this.tOnResize = _this.tOnResize.bind(_this);
        _this.tOnMoveend = _this.tOnMoveend.bind(_this);
        _this.tOnZoomstart = _this.tOnZoomstart.bind(_this);
        _this.tOnZoomend = _this.tOnZoomend.bind(_this);
        _this.tOnMoving = _this.tOnMoving.bind(_this);
        _this.tMousemove = _this.tMousemove.bind(_this);
        _this.tMouseleave = _this.tMouseleave.bind(_this);
        _this.tMouseClick = _this.tMouseClick.bind(_this);
        _this.devicePixelRatio = window.devicePixelRatio;
        _this.first = true; //只触发一次

        return _this;
    }

    _createClass(CanvasOverlay, [{
        key: 'initialize',
        value: function initialize(map) {
            // debugger
            var me = this;
            this.map = map;
            this.container = document.createElement('canvas');
            this.ctx = this.container.getContext('2d');
            this.container.style.cssText = 'position:absolute;left:0;top:0;z-index:' + zIndex++ + ';';
            map.getPanes().mapPane.appendChild(this.container);
            this.setCanvasSize();
            map.addEventListener('resize', me.tOnResize);
            map.addEventListener("moveend", me.tOnMoveend);
            map.addEventListener("zoomstart", me.tOnZoomstart);
            map.addEventListener("zoomend", me.tOnZoomend);
            map.addEventListener("moving", me.tOnMoving);
            map.addEventListener("mousemove", me.tMousemove);
            this.container.addEventListener('mouseleave', me.tMouseleave);
            map.addEventListener("click", me.tMouseClick);
            return this.container;
        }
    }, {
        key: 'tOnResize',
        value: function tOnResize(event) {
            //  debugger
            this.setCanvasSize();
            this.tDraw(this, event);
        }
    }, {
        key: 'tOnMoveend',
        value: function tOnMoveend(event) {
            // debugger
            console.log(this.hashCode, event.type);
            this.eventType = event.type;
            this.tDraw(this, event);
        }
    }, {
        key: 'tOnZoomstart',
        value: function tOnZoomstart() {
            this.clearCanvas();
        }
    }, {
        key: 'tOnZoomend',
        value: function tOnZoomend(e) {
            // debugger
            this.tDraw(this, e);
        }
    }, {
        key: 'tOnMoving',
        value: function tOnMoving(e) {
            this.eventType = e.type;
        }
    }, {
        key: 'tMouseleave',
        value: function tMouseleave() {
            //debugger
            //抽象方法 子类去实现
        }
    }, {
        key: 'tMousemove',
        value: function tMousemove() {
            //debugger
            //抽象方法 子类去实现
        }
    }, {
        key: 'TInit',
        value: function TInit() {

            //抽象方法 子类去实现
        }
    }, {
        key: 'draw',
        value: function draw() {
            // debugger
            if (this.first) {
                this.first = false;
                this.resize();
                this.TInit();
            }
        }
    }, {
        key: 'tMouseClick',
        value: function tMouseClick() {
            // debugger
            //抽象方法 子类去实现

        }
    }, {
        key: 'tDraw',
        value: function tDraw(me, event) {
            var me = this || me;
            this.eventType = event.type;
            me.resize();
            if (!me.keysss) {}
            me.keysss = true;
        }
    }, {
        key: 'resize',
        value: function resize() {

            //  抽象方法 子类去实现
        }
    }, {
        key: 'canvasResize',
        value: function canvasResize() {
            // debugger
            var me = this;
            var map = this.map;
            var container = this.container;
            var point = map.getCenter();
            var size = map.getSize();
            var pixel = map.pointToOverlayPixel(point);
            container.style.left = pixel.x - size.width / 2 + 'px';
            container.style.top = pixel.y - size.height / 2 + 'px';
        }
    }, {
        key: 'clearCanvas',
        value: function clearCanvas() {
            var size = this.map.getSize();
            this.getContext().clearRect(0, 0, size.width, size.height); //调整画布
        }
    }, {
        key: 'setCanvasSize',
        value: function setCanvasSize() {
            var size = this.map.getSize();
            this.container.width = size.width;
            this.container.height = size.height;
            (0, _util.setDevicePixelRatio)(this.ctx);
        }
    }, {
        key: 'getContext',
        value: function getContext() {
            return this.ctx;
        }
        /**
         * 设置overlay z-index
         */

    }, {
        key: 'setZIndex',
        value: function setZIndex(_zIndex) {
            this.container.style.zIndex = _zIndex;
        }
        /**
         * 清除缓存
         */

    }, {
        key: 'Tclear',
        value: function Tclear() {}
        /**
         * 对象销毁
         */

    }, {
        key: 'dispose',
        value: function dispose() {
            //debugger
            this.map.removeEventListener('resize', this.tOnResize);
            this.map.removeEventListener("moveend", this.tOnMoveend);
            this.map.removeEventListener("zoomstart", this.tOnZoomstart);
            this.map.removeEventListener("zoomend", this.tOnZoomend);
            this.map.removeEventListener("moving", this.tOnMoving);
            this.map.removeEventListener("mousemove", this.tMousemove);
            this.container.removeEventListener('mouseleave', this.tMouseleave);
            this.map.removeEventListener("click", this.tMouseClick);
            this.Tclear();
            this.map.removeOverlay(this);
        }
    }]);

    return CanvasOverlay;
}(_BaseClass3.default);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Map = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

var _mapStyle = __webpack_require__(13);

var _mapZoom = __webpack_require__(36);

var _inmapConfig = __webpack_require__(34);

var _inmapConfig2 = _interopRequireDefault(_inmapConfig);

__webpack_require__(43);

var _deepmerge = __webpack_require__(11);

var _deepmerge2 = _interopRequireDefault(_deepmerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Map = exports.Map = function () {
    function Map(ops) {
        _classCallCheck(this, Map);

        this.map = null;
        // debugger
        this.option = _deepmerge2.default.all([_inmapConfig2.default, ops]);
        this.create();
    }

    _createClass(Map, [{
        key: 'create',
        value: function create() {
            var id = this.option.id;
            //debugger
            var mapDom = (0, _util.isString)(id) ? document.getElementById(id) : id;
            var bmap = new BMap.Map(mapDom, {
                enableMapClick: false
            });
            bmap.disableScrollWheelZoom(); // 启用滚轮放大缩小
            bmap.disableDoubleClickZoom();
            bmap.enableKeyboard();

            //设置皮肤
            if (this.option.skin) {
                var setStyle = this.option.skin == 'Blueness' ? _mapStyle.Blueness : _mapStyle.WhiteLover;
                bmap.setMapStyle({
                    styleJson: setStyle
                });
            }

            //设置 地图工具容器
            var toolDom = this.crtateContainer(mapDom);
            var _inmapOption = {};
            Object.assign(_inmapOption, this.option, {
                mapDom: mapDom,
                toolDom: toolDom
            });

            bmap._inmapOption = _inmapOption;
            var center = this.option.center;
            //  debugger
            bmap.centerAndZoom(new BMap.Point(center[0], center[1]), this.option.zoom.value);
            // debugger
            if (this.option.zoom.show) {
                // debugger
                //添加地图级别工具条
                new _mapZoom.MapZoom(bmap);
            }

            this.map = bmap;
        }
    }, {
        key: 'crtateContainer',
        value: function crtateContainer(mapDom) {
            var parent = mapDom;
            var div = document.createElement("div");
            div.classList.add('td-map-container');
            parent.appendChild(div);
            return div;
        }
    }, {
        key: 'add',
        value: function add(overlay) {
            this.map.addOverlay(overlay);
        }
    }, {
        key: 'remove',
        value: function remove(overlay) {
            overlay.dispose();
        }
    }]);

    return Map;
}();

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BoundaryOverlay = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Parameter2 = __webpack_require__(2);

var _polylabel = __webpack_require__(7);

var _polylabel2 = _interopRequireDefault(_polylabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BoundaryOverlay = exports.BoundaryOverlay = function (_Parameter) {
    _inherits(BoundaryOverlay, _Parameter);

    function BoundaryOverlay(ops) {
        _classCallCheck(this, BoundaryOverlay);

        return _possibleConstructorReturn(this, (BoundaryOverlay.__proto__ || Object.getPrototypeOf(BoundaryOverlay)).call(this, ops));

        // this.setStyle(ops);
    }
    // setStyle(ops) {
    //     this.labelStyle = ops.label;
    //     this.style = ops.style || {};
    //     this.drawMap();
    // }

    _createClass(BoundaryOverlay, [{
        key: 'resize',
        value: function resize() {
            this.drawMap();
        }
    }, {
        key: 'getGeoCenter',
        value: function getGeoCenter(geo) {
            var minX = geo[0][0];
            var minY = geo[0][1];
            var maxX = geo[0][0];
            var maxY = geo[0][1];
            for (var i = 1; i < geo.length; i++) {
                minX = Math.min(minX, geo[i][0]);
                maxX = Math.max(maxX, geo[i][0]);
                minY = Math.min(minY, geo[i][1]);
                maxY = Math.max(maxY, geo[i][1]);
            }
            return [minX + (maxX - minX) / 2, minY + (maxY - minY) / 2];
        }
    }, {
        key: 'setMapCenter',
        value: function setMapCenter(geo, exp) {
            var me = this;
            this.parserExp(exp);
            // debugger
            // this.map.panTo(this.getGeoCenter);
            if (me.workerData.length > 0) {
                me.selectItem = me.workerData.filter(me.filterFun);
                me._dataRender();
            }
        }
    }, {
        key: 'setMapCenterAndZoom',
        value: function setMapCenterAndZoom(geo, exp) {
            var arr = [];
            geo.forEach(function (val) {
                arr.push(new BMap.Point(val[0], val[1]));
            });
            // debugger
            var view = this.map.getViewport(arr);
            var me = this;

            function zoomEnd() {
                // debugger
                me.map.removeEventListener("zoomend", zoomEnd);
                me.map.panTo(view.center);
            }

            function moveend() {
                // debugger
                me.map.removeEventListener("moveend", moveend);
                me.parserExp(exp);
                if (me.workerData.length > 0) {
                    me.selectItem = me.workerData.filter(me.filterFun);
                    me._dataRender();
                }
            }
            // debugger

            var scale = view.zoom - 1;
            this.map.addEventListener("zoomend", zoomEnd);
            this.map.addEventListener("moveend", moveend);
            if (this.map.getZoom() == scale) {
                zoomEnd();
            } else {
                this.map.setZoom(scale);
            }
        }
    }, {
        key: 'setCenterAndZoom',
        value: function setCenterAndZoom(geo, exp, isScale) {
            if (isScale) {
                this.setMapCenterAndZoom(geo, exp);
            } else {
                this.setMapCenter(geo, exp);
            }
        }
    }, {
        key: 'getMaxWidth',
        value: function getMaxWidth(geo) {
            var minX = geo[0][0];
            var minY = geo[0][1];
            var maxX = geo[0][0];
            var maxY = geo[0][1];
            for (var i = 1; i < geo.length; i++) {
                minX = Math.min(minX, geo[i][0]);
                maxX = Math.max(maxX, geo[i][0]);
                minY = Math.min(minY, geo[i][1]);
                maxY = Math.max(maxY, geo[i][1]);
            }
            return maxX - minX;
        }
    }, {
        key: 'findIndexSelectItem',
        value: function findIndexSelectItem(item) {
            var index = -1;
            if (item) {
                // debugger
                index = this.selectItem.findIndex(function (val) {
                    return val && val.name == item.name;
                });
            }

            return index;
        }
    }, {
        key: '_dataRender',
        value: function _dataRender() {
            // console.log("_dataRender")
            //  debugger
            this.clearCanvas();
            this.drawLine(this.workerData);
        }
    }, {
        key: 'drawMap',
        value: function drawMap() {
            // console.log("drawMap")
            var me = this;
            // debugger
            this.postMessage('BoundaryOverlay.calculatePixel', this.points, function (pixels) {
                if (me.eventType == 'onmoving') {
                    return;
                }
                // debugger
                me.clearCanvas();
                me.canvasResize();
                me.overItem = null;
                // me.workerData = pixels;
                me.setWorkerData(pixels);
                //  debugger
                //me.setSelectd();
                //debugger
                me.drawLine(pixels);
            });
        }
    }, {
        key: 'setPoints',
        value: function setPoints(points) {
            if (!points) {
                return;
            }
            this.cancerSelectd();
            this.points = points;
            // debugger
            if (this.style.colors.length > 0) {
                this.compileSplitList(this.points);
            }
            this.drawMap();
        }
    }, {
        key: 'getTarget',
        value: function getTarget(x, y) {

            var data = this.workerData;
            //   console.log('getTarget')
            this.ctx.beginPath();
            for (var i = 0, len = data.length; i < len; i++) {
                var item = data[i];
                var geo = item.pgeo;
                this.ctx.beginPath();
                this.ctx.moveTo(geo[0][0], geo[0][1]);
                for (var j = 1; j < geo.length; j++) {
                    this.ctx.lineTo(geo[j][0], geo[j][1]);
                }
                this.ctx.closePath();
                if (this.ctx.isPointInPath(x * this.devicePixelRatio, y * this.devicePixelRatio)) {
                    return {
                        index: i,
                        item: item
                    };
                }
            }
            return {
                index: -1,
                item: null
            };
        }
    }, {
        key: 'drawLine',
        value: function drawLine(data) {
            // debugger
            //console.log('drawLine')
            this.ctx.lineCap = "round";
            this.ctx.lineJoin = 'round';
            this.ctx.miterLimit = 4;
            for (var i = 0, len = data.length; i < len; i++) {
                var item = data[i];
                var geo = item.pgeo;
                // points[j]['bestCell'] = polylabel([tmp]);
                // debugger

                this.ctx.beginPath();
                this.ctx.moveTo(geo[0][0], geo[0][1]);
                for (var j = 1; j < geo.length; j++) {
                    this.ctx.lineTo(geo[j][0], geo[j][1]);
                }
                this.ctx.closePath();
                var style = this.setDrawStyle(item);
                this.ctx.shadowColor = style.shadowColor || 'transparent';
                this.ctx.shadowBlur = style.shadowBlur || 10;
                this.ctx.shadowOffsetX = 0;
                this.ctx.shadowOffsetY = 0;
                //debugger 'rgba(150,150,150,1)' 
                this.ctx.fillStyle = style.backgroundColor;
                this.ctx.fill();
                this.ctx.strokeStyle = style.borderColor;
                this.ctx.lineWidth = style.borderWidth;
                this.ctx.stroke();
            }
            for (var _i = 0, _len = data.length; _i < _len; _i++) {
                var _item = data[_i];
                var _geo = _item.pgeo;
                var bestCell = _item.bestCell;
                // let bestCell = polylabel([geo]);

                var label = this.labelStyle;
                if (bestCell && label.show) {
                    //    debugger
                    var _style = this.setDrawStyle(_item).label;
                    this.ctx.shadowBlur = 0;
                    this.ctx.lineWidth = _style.lineWidth;
                    this.ctx.font = _style.font;
                    this.ctx.fillStyle = _style.color;
                    if (label.selected && this.selectItemContains(_item)) {
                        this.ctx.fillStyle = label.selected.color;
                    }
                    var width = this.ctx.measureText(_item.name).width;
                    if (this.getMaxWidth(_geo) > width) {
                        this.ctx.fillText(_item.name, bestCell.x - width / 2, bestCell.y);
                    }
                }
            }
            this.ctx.closePath();
        }
    }]);

    return BoundaryOverlay;
}(_Parameter2.Parameter);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Circuit = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CanvasOverlay2 = __webpack_require__(16);

var _index = __webpack_require__(5);

var _Point = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * draw cireuit
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Circuit = exports.Circuit = function (_CanvasOverlay) {
    _inherits(Circuit, _CanvasOverlay);

    function Circuit(ops) {
        _classCallCheck(this, Circuit);

        var _this = _possibleConstructorReturn(this, (Circuit.__proto__ || Object.getPrototypeOf(Circuit)).call(this));

        _this.points = ops.data;
        _this.style = ops.style;
        return _this;
    }

    _createClass(Circuit, [{
        key: "resize",
        value: function resize() {
            this.drawMap();
        }
    }, {
        key: "setPoints",
        value: function setPoints(points) {
            if (!points) {
                return;
            }
            this.points = points;
            this.coordinates(this.points);
            this.drawMap();
        }
    }, {
        key: "drawMap",
        value: function drawMap() {
            var me = this;
            var zoomUnit = Math.pow(2, 18 - this.map.getZoom());
            var projection = this.map.getMapType().getProjection();
            var mcCenter = projection.lngLatToPoint(this.map.getCenter());
            var nwMc = new BMap.Pixel(mcCenter.x - this.map.getSize().width / 2 * zoomUnit, mcCenter.y + this.map.getSize().height / 2 * zoomUnit); //左上角墨卡托坐标
            var params = {
                points: me.points,
                nwMc: nwMc,
                zoomUnit: zoomUnit
            };
            this.postMessage('Circuit.calculatePixel', params, function (pixels) {
                if (me.eventType == 'onmoving') {
                    return;
                };
                me.clearCanvas();
                me.canvasResize();
                me.drawLine(pixels);
            });
            // });
        }
    }, {
        key: "coordinates",
        value: function coordinates(data) {
            var projection = this.map.getMapType().getProjection();
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                item['_coordinates'] = item.geo.map(function (item) {
                    // debugger
                    var pixel = projection.lngLatToPoint({
                        lng: item[0],
                        lat: item[1]
                    });
                    return [pixel.x, pixel.y];
                });
            }
        }
    }, {
        key: "transferCoordinate",
        value: function transferCoordinate(_coordinates, nwMc, zoomUnit) {
            var map = this.map;
            return _coordinates.map(function (item) {
                // debugger
                var x = (item[0] - nwMc.x) / zoomUnit;
                var y = (nwMc.y - item[1]) / zoomUnit;
                return [x, y];
            });
        }
    }, {
        key: "lngLatToPoints",
        value: function lngLatToPoints(data, nwMc, zoomUnit) {
            if (data.length > 0) {
                return this.transferCoordinate(data, nwMc, zoomUnit);
            } else {
                return [];
            }

            // let map = this.map;
            // return data.map(function (item) {
            //     // debugger
            //     var x = (item[0] - nwMc.x) / zoomUnit;
            //     var y = (nwMc.y - item[1]) / zoomUnit;
            //     return [x, y];
            // });
        }
    }, {
        key: "drawLine",
        value: function drawLine(data) {
            //debugger
            // console.log('drawLine')s
            var normal = this.style.normal;
            this.ctx.shadowBlur = 0;
            this.ctx.shadowOffsetX = 0;
            this.ctx.shadowOffsetY = 0;
            this.ctx.lineCap = "butt";
            this.ctx.lineJoin = "miter";
            this.ctx.globalCompositeOperation = "lighter";
            this.ctx.miterLimit = 10;
            this.ctx.strokeStyle = normal.borderColor;
            this.ctx.lineWidth = normal.borderWidth;
            this.ctx.beginPath();

            for (var i = 0; i < data.length - 1500; i++) {
                var item = data[i];
                // debugger
                var pixels = item.pixels;

                // debugger
                this.ctx.moveTo(pixels[0][0], pixels[0][1]);
                for (var j = 1; j < pixels.length; j++) {
                    this.ctx.lineTo(pixels[j][0], pixels[j][1]);
                }
                this.ctx.stroke();
            }
        }
    }]);

    return Circuit;
}(_CanvasOverlay2.CanvasOverlay);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DotOverlay = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Parameter2 = __webpack_require__(2);

var _LabelRender = __webpack_require__(37);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 点的绘制
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var DotOverlay = exports.DotOverlay = function (_Parameter) {
    _inherits(DotOverlay, _Parameter);

    function DotOverlay(opts) {
        _classCallCheck(this, DotOverlay);

        var _this = _possibleConstructorReturn(this, (DotOverlay.__proto__ || Object.getPrototypeOf(DotOverlay)).call(this, opts));

        _this.labelRender = new _LabelRender.LabelRender(opts);
        // debugger
        _this.polyme = opts.type == 'polyme';
        return _this;
    }

    _createClass(DotOverlay, [{
        key: 'resize',
        value: function resize() {
            this.drawMap();
        }
    }, {
        key: 'drawMap',
        value: function drawMap() {
            // debugger
            var me = this;
            var path = me.polyme ? 'polymeOverlay.mergePoint' : 'HeatOverlay.pointsToPixels';
            var data = me.polyme ? {
                points: this.points,
                mergeCount: this.style.normal.mergeCount,
                size: this.style.normal.size
            } : this.points;

            this.postMessage(path, data, function (pixels) {
                if (me.eventType == 'onmoving') {
                    return;
                };
                // debugger
                // me.workerData = pixels;
                me.setWorkerData(pixels);
                me._dataRender();
            });
        }
    }, {
        key: 'setPoints',
        value: function setPoints(points) {
            if (!points) {
                return;
            }
            this.cancerSelectd();
            this.points = points;
            if (this.style.colors.length > 0) {
                this.compileSplitList(this.points);
            }
            this.drawMap();
        }
    }, {
        key: 'getTarget',
        value: function getTarget(x, y) {
            var pixels = this.workerData,
                ctx = this.ctx;
            for (var i = 0, len = pixels.length; i < len; i++) {
                var item = pixels[i];
                var pixel = item.pixel;
                var style = this.setDrawStyle(item);
                ctx.beginPath();
                ctx.arc(pixel.x, pixel.y, style.size, 0, 2 * Math.PI, true);
                ctx.lineWidth = style.lineWidth;
                if (ctx.isPointInPath(x * this.devicePixelRatio, y * this.devicePixelRatio)) {
                    return {
                        index: i,
                        item: item
                    };
                }
            }
            return {
                index: -1,
                item: null
            };
        }
    }, {
        key: 'findIndexSelectItem',
        value: function findIndexSelectItem(item) {
            var index = -1;
            if (item) {
                // debugger
                index = this.selectItem.findIndex(function (val) {
                    return val && val.lat == item.lat && val.lng == item.lng;
                });
            }

            return index;
        }
    }, {
        key: '_dataRender',
        value: function _dataRender() {
            this.clearCanvas();
            this.canvasResize();
            this._loopDraw(this.ctx, this.workerData);
            this._drawLabel(this.ctx, this.workerData);
        }
    }, {
        key: '_loopDraw',
        value: function _loopDraw(ctx, pixels) {
            for (var i = 0, len = pixels.length; i < len; i++) {
                var item = pixels[i];
                var pixel = item.pixel;
                // debugger
                var style = this.polyme ? this.style.normal : this.setDrawStyle(item);
                if (style.shadowBlur) {
                    ctx.shadowBlur = style.shadowBlur;
                }
                if (style.shadowColor) {
                    ctx.shadowColor = style.shadowColor;
                }
                if (style.globalCompositeOperation) {
                    ctx.globalCompositeOperation = style.globalCompositeOperation;
                }
                var size = this.polyme ? pixel.radius : style.size;
                this._drawCircle(ctx, pixel.x, pixel.y, size, style.backgroundColor, style.borderWidth, style.borderColor);
            }
        }
    }, {
        key: '_drawLabel',
        value: function _drawLabel(ctx, pixels) {
            var labelRender = this.labelRender;

            labelRender.drawLabel(ctx, pixels);

            // pixels.forEach(function(item) {
            //     let pixel = item.pixel;

            //     // ctx.fillText(item.name, pixel.x, pixel.y)
            // })
        }
    }, {
        key: '_drawCircle',
        value: function _drawCircle(ctx, x, y, radius, color, lineWidth, strokeStyle) {
            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
            ctx.fill();
            if (lineWidth) {
                ctx.lineWidth = lineWidth;
                if (strokeStyle) {
                    ctx.strokeStyle = strokeStyle;
                }
                ctx.stroke();
            }
        }
    }]);

    return DotOverlay;
}(_Parameter2.Parameter);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GriddingOverlay = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Parameter2 = __webpack_require__(2);

var _griddingConfig = __webpack_require__(12);

var _griddingConfig2 = _interopRequireDefault(_griddingConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GriddingOverlay = exports.GriddingOverlay = function (_Parameter) {
    _inherits(GriddingOverlay, _Parameter);

    function GriddingOverlay(ops) {
        _classCallCheck(this, GriddingOverlay);

        var _this = _possibleConstructorReturn(this, (GriddingOverlay.__proto__ || Object.getPrototypeOf(GriddingOverlay)).call(this, ops));

        _this.delteOption();
        _this.compileColor = {};
        // debugger
        _this._setOptionStyle(_griddingConfig2.default, ops);
        return _this;
    }

    _createClass(GriddingOverlay, [{
        key: 'delteOption',
        value: function delteOption() {
            this.style["selected"] = null;
        }
    }, {
        key: 'resize',
        value: function resize() {
            this.drawMap();
        }
    }, {
        key: 'drawMap',
        value: function drawMap() {
            var me = this;
            var style = this.style.normal;
            var zoom = me.map.getZoom();
            var zoomUnit = Math.pow(2, 18 - zoom);
            var mercatorProjection = me.map.getMapType().getProjection();
            var mcCenter = mercatorProjection.lngLatToPoint(me.map.getCenter());
            var size = style.size * zoomUnit;
            var nwMcX = mcCenter.x - me.map.getSize().width / 2 * zoomUnit;
            var nwMc = new BMap.Pixel(nwMcX, mcCenter.y + me.map.getSize().height / 2 * zoomUnit);

            var params = {
                points: me.points,
                size: size,
                nwMc: nwMc,
                zoomUnit: zoomUnit,
                mapSize: me.map.getSize(),
                mapCenter: me.map.getCenter(),
                zoom: zoom
            };
            //   debugger
            this.postMessage("GriddingOverlay.toRecGrids", params, function (gridsObj) {
                if (me.eventType == 'onmoving') {
                    return;
                };
                var grids = gridsObj.grids;
                var max = gridsObj.max;
                var min = gridsObj.min;
                //清除
                me.clearCanvas();
                me.canvasResize();

                me.setWorkerData({
                    size: size,
                    zoomUnit: zoomUnit,
                    max: max,
                    min: min,
                    grids: []
                });
                me.createColorSplit(grids);
                me.drawRec(size, zoomUnit, max, min, grids);
            });
        }
    }, {
        key: 'TInit',
        value: function TInit() {
            //覆盖方法
        }
    }, {
        key: 'setPoints',
        value: function setPoints(points) {
            if (!points) {
                return;
            }
            this.points = points;

            this.drawMap();
        }
    }, {
        key: 'getTarget',
        value: function getTarget(x, y) {
            // debugger
            var data = this.workerData;
            var size = data.size;
            var zoomUnit = data.zoomUnit;
            var max = data.max;
            var min = data.min;
            var grids = data.grids || [];
            var gridStep = size / zoomUnit;
            var step = (max - min + 1) / 10;
            var style = this.style.normal;
            var width = gridStep - style.borderWidth;
            for (var i = 0; i < grids.length; i++) {
                var item = grids[i];

                var x1 = parseFloat(item.pixels[0]);
                var y1 = parseFloat(item.pixels[1]);
                //debugger
                this.ctx.beginPath();
                this.ctx.moveTo(x1, y1);
                this.ctx.lineTo(x1 + width, y1);
                this.ctx.lineTo(x1 + width, y1 + width);
                this.ctx.lineTo(x1, y1 + width);
                // this.ctx.fillRect(x, y, gridStep - style.borderWidth, gridStep - style.borderWidth);
                this.ctx.closePath();
                if (this.ctx.isPointInPath(x, y)) {
                    return {
                        index: i,
                        item: item
                    };
                }
            }

            return {
                index: -1,
                item: null
            };
        }
    }, {
        key: 'createColorSplit',
        value: function createColorSplit(grids) {
            var data = [];
            for (var key in grids) {
                var count = grids[key];
                //debugger
                if (count > 0) {
                    data.push({
                        name: key,
                        count: count
                    });
                }
            }

            if (this.style.colors.length > 0) {
                this.compileSplitList(data);
            }
        }
    }, {
        key: 'setlegendParams',
        value: function setlegendParams() {}
    }, {
        key: 'getColor',
        value: function getColor(count) {
            var color = null;
            if (count == 0) {
                color = "rgba(255,255,255,0)";
            } else {
                var style = this.setDrawStyle({
                    count: count
                });
                color = style.backgroundColor;
                // color = this.compileColor[count];
            }
            return color;
        }
    }, {
        key: 'drawRec',
        value: function drawRec(size, zoomUnit, max, min, grids) {
            this.workerData.grids = [];
            var gridStep = size / zoomUnit;
            var step = (max - min + 1) / 10;
            var style = this.style.normal;
            for (var i in grids) {
                var sp = i.split('_');
                var x = sp[0];
                var y = sp[1];
                var count = grids[i];
                var color = this.getColor(count);
                this.ctx.fillStyle = color;
                this.ctx.fillRect(x, y, gridStep - style.borderWidth, gridStep - style.borderWidth);
                if (count > 0) {
                    this.workerData.grids.push({
                        pixels: [x, y],
                        count: count
                    });
                }
            }
        }
    }]);

    return GriddingOverlay;
}(_Parameter2.Parameter);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HeatOverlay = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Parameter2 = __webpack_require__(2);

var _heatConfig = __webpack_require__(32);

var _heatConfig2 = _interopRequireDefault(_heatConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeatOverlay = exports.HeatOverlay = function (_Parameter) {
    _inherits(HeatOverlay, _Parameter);

    function HeatOverlay(ops) {
        _classCallCheck(this, HeatOverlay);

        var _this = _possibleConstructorReturn(this, (HeatOverlay.__proto__ || Object.getPrototypeOf(HeatOverlay)).call(this, ops));

        _this.delteOption();

        _this.gradient = {
            0.25: "rgb(0,0,255)",
            0.55: "rgb(0,255,0)",
            0.85: "yellow",
            1.0: "rgb(255,0,0)"
        };
        _this.minValue = 0; // 最小权重
        _this.maxValue = 0; // 最大权重
        _this._setOptionStyle(_heatConfig2.default, ops);
        return _this;
    }

    _createClass(HeatOverlay, [{
        key: 'resize',
        value: function resize() {
            this.drawMap();
        }
        /**
         * 屏蔽参数
         */

    }, {
        key: 'delteOption',
        value: function delteOption() {
            this.tooltip = {
                show: false
            };
            this.legend = {
                show: false
            };
            this.style["mouseOver"] = null;
            this.style["selected"] = null;
            this.style["splitList"] = null;
        }
    }, {
        key: 'setPoints',
        value: function setPoints(points) {
            if (!points) {
                return;
            }
            this.points = points;
            this.drawMap();
        }
    }, {
        key: 'getMax',
        value: function getMax() {
            this.maxValue = 0;
            for (var i = 0, len = this.points.length; i < len; i++) {
                if (this.points[i].count > this.maxValue) {
                    this.maxValue = this.points[i].count;
                }
            }
        }
    }, {
        key: 'drawMap',
        value: function drawMap() {
            var me = this;
            this.postMessage('HeatOverlay.pointsToPixels', this.points, function (pixels) {

                if (me.eventType == 'onmoving') {
                    return;
                };
                me.clearCanvas();
                me.canvasResize();
                me.setWorkerData(pixels);
                me._dataRender();
            });
        }
    }, {
        key: '_dataRender',
        value: function _dataRender() {
            // debugger
            if (this.maxValue == 0) {
                this.getMax();
            }

            var normal = this.style.normal;
            var ctx = this.ctx;
            for (var i = 0, _len = this.workerData.length; i < _len; i++) {
                var item = this.workerData[i];
                var opacity = (item.count - this.minValue) / (this.maxValue - this.minValue);
                this.drawPoint(item.pixel.x, item.pixel.y, normal.radius, opacity);
            }

            var palette = this.getColorPaint();
            var container = this.container;
            var img = ctx.getImageData(0, 0, container.width, container.height);
            var imgData = img.data;

            var max_opacity = normal.maxOpacity * 255;
            var min_opacity = normal.minOpacity * 255;
            //权重区间
            var max_scope = (normal.maxScope > 1 ? 1 : normal.maxScope) * 255;
            var min_scope = (normal.minScope < 0 ? 0 : normal.minScope) * 255;
            var len = imgData.length;
            for (var _i = 3; _i < len; _i += 4) {
                var alpha = imgData[_i];
                var offset = alpha * 4;
                if (!offset) {
                    continue;
                }
                imgData[_i - 3] = palette[offset];
                imgData[_i - 2] = palette[offset + 1];
                imgData[_i - 1] = palette[offset + 2];

                // 范围区间
                if (imgData[_i] > max_scope) {
                    imgData[_i] = 0;
                }
                if (imgData[_i] < min_scope) {
                    imgData[_i] = 0;
                }

                // 透明度
                if (imgData[_i] > max_opacity) {
                    imgData[_i] = max_opacity;
                }
                if (imgData[_i] < min_opacity) {
                    imgData[_i] = min_opacity;
                }
            }

            // img.data = imgData;

            ctx.putImageData(img, 0, 0, 0, 0, container.width, container.height);
        }
    }, {
        key: 'drawPoint',
        value: function drawPoint(x, y, radius, opacity) {
            var ctx = this.ctx;
            ctx.beginPath();
            var gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
            gradient.addColorStop(0, 'rgba(0,0,0,1)');
            gradient.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = gradient;
            ctx.arc(x, y, radius, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fill();
            ctx.globalAlpha = opacity;
        }
    }, {
        key: 'getColorPaint',
        value: function getColorPaint() {
            var gradientConfig = this.gradient;
            var paletteCanvas = document.createElement('canvas');
            var paletteCtx = paletteCanvas.getContext('2d');

            paletteCanvas.width = 256;
            paletteCanvas.height = 1;

            var gradient = paletteCtx.createLinearGradient(0, 0, 256, 1);
            for (var key in gradientConfig) {
                gradient.addColorStop(key, gradientConfig[key]);
            }

            paletteCtx.fillStyle = gradient;
            paletteCtx.fillRect(0, 0, 256, 1);
            return paletteCtx.getImageData(0, 0, 256, 1).data;;
        }
    }]);

    return HeatOverlay;
}(_Parameter2.Parameter);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HoneycombOverlay = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Parameter2 = __webpack_require__(2);

var _griddingConfig = __webpack_require__(12);

var _griddingConfig2 = _interopRequireDefault(_griddingConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HoneycombOverlay = exports.HoneycombOverlay = function (_Parameter) {
    _inherits(HoneycombOverlay, _Parameter);

    function HoneycombOverlay(ops) {
        _classCallCheck(this, HoneycombOverlay);

        var _this = _possibleConstructorReturn(this, (HoneycombOverlay.__proto__ || Object.getPrototypeOf(HoneycombOverlay)).call(this, ops));

        _this.delteOption();
        _this.compileColor = {};
        _this._setOptionStyle(_griddingConfig2.default, ops);
        return _this;
    }

    _createClass(HoneycombOverlay, [{
        key: 'delteOption',
        value: function delteOption() {
            this.style["selected"] = null;
        }
    }, {
        key: 'resize',
        value: function resize() {
            this.drawMap();
        }
    }, {
        key: 'setPoints',
        value: function setPoints(points) {
            if (!points) {
                return;
            }
            this.points = points;
            this.drawMap();
        }
    }, {
        key: 'drawMap',
        value: function drawMap() {
            var me = this;
            var style = this.style.normal;
            var zoom = me.map.getZoom();
            var zoomUnit = Math.pow(2, 18 - zoom);
            var mercatorProjection = me.map.getMapType().getProjection();
            var mcCenter = mercatorProjection.lngLatToPoint(me.map.getCenter());
            var size = style.size * zoomUnit;
            var nwMcX = mcCenter.x - me.map.getSize().width / 2 * zoomUnit;
            var nwMc = new BMap.Pixel(nwMcX, mcCenter.y + me.map.getSize().height / 2 * zoomUnit);
            // debugger
            var params = {
                points: me.points,
                size: size,
                nwMc: nwMc,
                zoomUnit: zoomUnit,
                mapSize: me.map.getSize(),
                mapCenter: me.map.getCenter(),
                zoom: zoom
            };
            this.postMessage("HoneycombOverlay.toRecGrids", params, function (gridsObj) {
                if (me.eventType == 'onmoving') {
                    return;
                };
                me.clearCanvas();
                me.canvasResize();

                var grids = gridsObj.grids;
                var max = gridsObj.max;
                var min = gridsObj.min;

                var obj = {
                    size: size,
                    zoomUnit: zoomUnit,
                    max: max,
                    min: min,
                    grids: grids,
                    margin: me.margin
                };
                me.setWorkerData(obj);
                me.drawRec(obj);
            });
        }
    }, {
        key: 'getColor',
        value: function getColor(count) {
            var color = null;
            if (count == 0) {
                color = "rgba(255,255,255,0)";
            } else {
                var style = this.setDrawStyle({
                    count: count
                });
                color = style.backgroundColor;
            }
            return color;
        }
    }, {
        key: 'getTarget',
        value: function getTarget(x, y) {
            // debugger
            var data = this.workerData;
            var size = data.size;
            var zoomUnit = data.zoomUnit;
            var max = data.max;
            var min = data.min;
            var grids = data.grids || [];
            var gridStep = size / zoomUnit;
            var step = (max - min + 1) / 10;
            var style = this.style.normal;
            var width = gridStep - style.borderWidth;
            for (var i = 0; i < grids.length; i++) {
                var item = grids[i];

                var x1 = parseFloat(item.pixels[0]);
                var y1 = parseFloat(item.pixels[1]);
                //debugger
                this.ctx.beginPath();
                this.ctx.moveTo(x1, y1);
                this.ctx.lineTo(x1 + width, y1);
                this.ctx.lineTo(x1 + width, y1 + width);
                this.ctx.lineTo(x1, y1 + width);
                // this.ctx.fillRect(x, y, gridStep - style.borderWidth, gridStep - style.borderWidth);
                this.ctx.closePath();
                if (this.ctx.isPointInPath(x, y)) {
                    return {
                        index: i,
                        item: item
                    };
                }
            }

            return {
                index: -1,
                item: null
            };
        }
    }, {
        key: 'drawRec',
        value: function drawRec(_ref) {
            var size = _ref.size,
                zoomUnit = _ref.zoomUnit,
                max = _ref.max,
                min = _ref.min,
                grids = _ref.grids;

            this.workerData.grids = [];
            var gridsW = size / zoomUnit;
            for (var i in grids) {
                var x = grids[i].x;
                var y = grids[i].y;
                var count = grids[i].len;
                if (count > 0) {
                    var color = this.getColor(count);
                    this.drawLine(x, y, gridsW - 1, color, this.ctx);
                }
            }
        }
    }, {
        key: 'drawLine',
        value: function drawLine(x, y, gridStep, color, ctx) {
            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.moveTo(x, y - gridStep / 2);
            ctx.lineTo(x + gridStep / 2, y - gridStep / 4);
            ctx.lineTo(x + gridStep / 2, y + gridStep / 4);
            ctx.lineTo(x, y + gridStep / 2);
            ctx.lineTo(x - gridStep / 2, y + gridStep / 4);
            ctx.lineTo(x - gridStep / 2, y - gridStep / 4);
            ctx.fill();
            ctx.closePath();
        }
    }]);

    return HoneycombOverlay;
}(_Parameter2.Parameter);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ImgOverlay = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Parameter2 = __webpack_require__(2);

var _imgConfig = __webpack_require__(33);

var _imgConfig2 = _interopRequireDefault(_imgConfig);

var _util = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * 点的绘制
 */
var ImgOverlay = exports.ImgOverlay = function (_Parameter) {
    _inherits(ImgOverlay, _Parameter);

    function ImgOverlay(opts) {
        _classCallCheck(this, ImgOverlay);

        var _this = _possibleConstructorReturn(this, (ImgOverlay.__proto__ || Object.getPrototypeOf(ImgOverlay)).call(this, opts));

        _this._setOptionStyle(_imgConfig2.default, opts);
        _this.cacheImg = {}; //缓存图片对象
        return _this;
    }

    _createClass(ImgOverlay, [{
        key: 'resize',
        value: function resize() {
            this.drawMap();
        }
    }, {
        key: 'drawMap',
        value: function drawMap() {
            var me = this;
            this.postMessage('HeatOverlay.pointsToPixels', this.points, function (pixels) {
                if (me.eventType == 'onmoving') {
                    return;
                };
                me.setWorkerData(pixels);
                me._dataRender();
            });
        }
    }, {
        key: 'setPoints',
        value: function setPoints(points) {
            if (!points) {
                return;
            }
            this.cancerSelectd();
            this.points = points;
            this.drawMap();
        }
    }, {
        key: '_isMouseOver',
        value: function _isMouseOver(x, y, imgX, imgY, imgW, imgH) {
            return !(x < imgX || x > imgX + imgW || y < imgY || y > imgY + imgH);
        }
    }, {
        key: 'getTarget',
        value: function getTarget(x, y) {
            var pixels = this.workerData,
                ctx = this.ctx;
            for (var i = 0, len = pixels.length; i < len; i++) {
                var item = pixels[i];
                var pixel = item.pixel;
                var style = this.setDrawStyle(item);
                ctx.beginPath();
                var img = this.cacheImg[style.icon];

                if (style.width && style.height) {
                    var xy = this._getDrawXY(pixel, style.offsets.left, style.offsets.top, img.width, img.height, 1);
                    if (this._isMouseOver(x, y, xy.x, xy.y, img.width, img.height)) {
                        // debugger
                        return {
                            index: i,
                            item: item
                        };
                    }
                } else {
                    var _xy = this._getDrawXY(pixel, style.offsets.left, style.offsets.top, style.width, style.height, style.scale);
                    if (this._isMouseOver(x, y, _xy.x, _xy.y, style.width * style.scale, style.height * style.scale)) {
                        return {
                            index: i,
                            item: item
                        };
                    }
                }
            }
            return {
                index: -1,
                item: null
            };
        }
    }, {
        key: 'findIndexSelectItem',
        value: function findIndexSelectItem(item) {
            var index = -1;
            if (item) {
                // debugger
                index = this.selectItem.findIndex(function (val) {
                    return val && val.lat == item.lat && val.lng == item.lng;
                });
            }

            return index;
        }
    }, {
        key: '_dataRender',
        value: function _dataRender() {
            this.clearCanvas();
            this.canvasResize();
            this._loopDraw(this.ctx, this.workerData);
        }
    }, {
        key: 'loadImg',
        value: function loadImg(img, fun) {
            var me = this;
            if ((0, _util.isString)(img)) {
                var image = me.cacheImg[img];
                if (!image) {
                    var _image = new Image();
                    _image.src = img;
                    _image.onload = function () {
                        // debugger
                        me.cacheImg[img] = _image;
                        fun(_image);
                    };
                } else {
                    fun(image);
                }
            } else {
                fun(img);
            }
        }
    }, {
        key: 'isPercent',
        value: function isPercent(val) {
            if (val.toString().indexOf('%') > -1) {
                return true;
            } else {
                return false;
            }
        }
    }, {
        key: '_getDrawXY',
        value: function _getDrawXY(pixel, offsetL, offsetT, width, height, scale) {
            var x = 0,
                y = 0;
            var scaleW = width * scale;
            var scaleH = height * scale;
            var offsetLeft = parseFloat(offsetL);
            var offsetTop = parseFloat(offsetT);

            if (this.isPercent(offsetL)) {
                x = pixel.x + scaleW * offsetLeft / 100;
            } else {
                x = pixel.x + offsetLeft;
            }
            if (this.isPercent(offsetT)) {
                y = pixel.y + scaleH * offsetTop / 100;
            } else {
                y = pixel.y + offsetTop;
            }
            return {
                x: x,
                y: y
            };
        }
        /**
         * 根据用户配置，设置用户绘画样式
         * @param {*} item 
         */

    }, {
        key: 'setDrawStyle',
        value: function setDrawStyle(item) {
            var normal = this.style.normal,
                //正常样式
            mouseOverStyle = this.style.mouseOver,
                //悬浮样式
            selectedStyle = this.style.selected; //选中样式
            var result = {};
            Object.assign(result, normal);
            //区间样式
            // debugger
            var splitList = this.style.splitList;
            for (var i = 0; i < splitList.length; i++) {
                var condition = splitList[i];
                if (condition.end == null) {
                    if (item.count >= condition.start) {
                        Object.assign(result, normal, condition);
                        break;
                    }
                } else if (item.count >= condition.start && item.count < condition.end) {
                    Object.assign(result, normal, condition);
                    break;
                }
            }
            var size = result.size;
            var shadowColor = {};

            if (mouseOverStyle && this.overItem == item) {
                // debugger
                Object.assign(result, normal, result, mouseOverStyle);
            }
            if (selectedStyle && this.selectItemContains(item)) {
                Object.assign(result, normal, selectedStyle);
            }

            return result;
        }
    }, {
        key: '_loopDraw',
        value: function _loopDraw(ctx, pixels) {
            var _this2 = this;

            var _loop = function _loop() {
                var item = pixels[i];
                var pixel = item.pixel;
                var style = _this2.setDrawStyle(item);

                _this2.loadImg(style.icon, function (img) {
                    if (style.width && style.height) {
                        var xy = _this2._getDrawXY(pixel, style.offsets.left, style.offsets.top, style.width, style.height, style.scale);
                        _this2._drawImage(_this2.ctx, img, xy.x, xy.y, style.width * style.scale, style.height * style.scale);
                    } else {
                        var _xy2 = _this2._getDrawXY(pixel, style.offsets.left, style.offsets.top, img.width, img.height, 1);
                        _this2._drawImage(_this2.ctx, img, _xy2.x, _xy2.y, img.width, img.height);
                    }
                });
            };

            for (var i = 0, len = pixels.length; i < len; i++) {
                _loop();
            }
        }
    }, {
        key: '_drawImage',
        value: function _drawImage(ctx, img, x, y, width, height) {
            ctx.drawImage(img, x, y, width, height);
        }
    }]);

    return ImgOverlay;
}(_Parameter2.Parameter);

/***/ }),
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Daniel zhen.wang
 * wangzhen422@gmal.com
 */
var ColorKeywords = {
    'aliceblue': 0xF0F8FF,
    'antiquewhite': 0xFAEBD7,
    'aqua': 0x00FFFF,
    'aquamarine': 0x7FFFD4,
    'azure': 0xF0FFFF,
    'beige': 0xF5F5DC,
    'bisque': 0xFFE4C4,
    'black': 0x000000,
    'blanchedalmond': 0xFFEBCD,
    'blue': 0x0000FF,
    'blueviolet': 0x8A2BE2,
    'brown': 0xA52A2A,
    'burlywood': 0xDEB887,
    'cadetblue': 0x5F9EA0,
    'chartreuse': 0x7FFF00,
    'chocolate': 0xD2691E,
    'coral': 0xFF7F50,
    'cornflowerblue': 0x6495ED,
    'cornsilk': 0xFFF8DC,
    'crimson': 0xDC143C,
    'cyan': 0x00FFFF,
    'darkblue': 0x00008B,
    'darkcyan': 0x008B8B,
    'darkgoldenrod': 0xB8860B,
    'darkgray': 0xA9A9A9,
    'darkgreen': 0x006400,
    'darkgrey': 0xA9A9A9,
    'darkkhaki': 0xBDB76B,
    'darkmagenta': 0x8B008B,
    'darkolivegreen': 0x556B2F,
    'darkorange': 0xFF8C00,
    'darkorchid': 0x9932CC,
    'darkred': 0x8B0000,
    'darksalmon': 0xE9967A,
    'darkseagreen': 0x8FBC8F,
    'darkslateblue': 0x483D8B,
    'darkslategray': 0x2F4F4F,
    'darkslategrey': 0x2F4F4F,
    'darkturquoise': 0x00CED1,
    'darkviolet': 0x9400D3,
    'deeppink': 0xFF1493,
    'deepskyblue': 0x00BFFF,
    'dimgray': 0x696969,
    'dimgrey': 0x696969,
    'dodgerblue': 0x1E90FF,
    'firebrick': 0xB22222,
    'floralwhite': 0xFFFAF0,
    'forestgreen': 0x228B22,
    'fuchsia': 0xFF00FF,
    'gainsboro': 0xDCDCDC,
    'ghostwhite': 0xF8F8FF,
    'gold': 0xFFD700,
    'goldenrod': 0xDAA520,
    'gray': 0x808080,
    'green': 0x008000,
    'greenyellow': 0xADFF2F,
    'grey': 0x808080,
    'honeydew': 0xF0FFF0,
    'hotpink': 0xFF69B4,
    'indianred': 0xCD5C5C,
    'indigo': 0x4B0082,
    'ivory': 0xFFFFF0,
    'khaki': 0xF0E68C,
    'lavender': 0xE6E6FA,
    'lavenderblush': 0xFFF0F5,
    'lawngreen': 0x7CFC00,
    'lemonchiffon': 0xFFFACD,
    'lightblue': 0xADD8E6,
    'lightcoral': 0xF08080,
    'lightcyan': 0xE0FFFF,
    'lightgoldenrodyellow': 0xFAFAD2,
    'lightgray': 0xD3D3D3,
    'lightgreen': 0x90EE90,
    'lightgrey': 0xD3D3D3,
    'lightpink': 0xFFB6C1,
    'lightsalmon': 0xFFA07A,
    'lightseagreen': 0x20B2AA,
    'lightskyblue': 0x87CEFA,
    'lightslategray': 0x778899,
    'lightslategrey': 0x778899,
    'lightsteelblue': 0xB0C4DE,
    'lightyellow': 0xFFFFE0,
    'lime': 0x00FF00,
    'limegreen': 0x32CD32,
    'linen': 0xFAF0E6,
    'magenta': 0xFF00FF,
    'maroon': 0x800000,
    'mediumaquamarine': 0x66CDAA,
    'mediumblue': 0x0000CD,
    'mediumorchid': 0xBA55D3,
    'mediumpurple': 0x9370DB,
    'mediumseagreen': 0x3CB371,
    'mediumslateblue': 0x7B68EE,
    'mediumspringgreen': 0x00FA9A,
    'mediumturquoise': 0x48D1CC,
    'mediumvioletred': 0xC71585,
    'midnightblue': 0x191970,
    'mintcream': 0xF5FFFA,
    'mistyrose': 0xFFE4E1,
    'moccasin': 0xFFE4B5,
    'navajowhite': 0xFFDEAD,
    'navy': 0x000080,
    'oldlace': 0xFDF5E6,
    'olive': 0x808000,
    'olivedrab': 0x6B8E23,
    'orange': 0xFFA500,
    'orangered': 0xFF4500,
    'orchid': 0xDA70D6,
    'palegoldenrod': 0xEEE8AA,
    'palegreen': 0x98FB98,
    'paleturquoise': 0xAFEEEE,
    'palevioletred': 0xDB7093,
    'papayawhip': 0xFFEFD5,
    'peachpuff': 0xFFDAB9,
    'peru': 0xCD853F,
    'pink': 0xFFC0CB,
    'plum': 0xDDA0DD,
    'powderblue': 0xB0E0E6,
    'purple': 0x800080,
    'red': 0xFF0000,
    'rosybrown': 0xBC8F8F,
    'royalblue': 0x4169E1,
    'saddlebrown': 0x8B4513,
    'salmon': 0xFA8072,
    'sandybrown': 0xF4A460,
    'seagreen': 0x2E8B57,
    'seashell': 0xFFF5EE,
    'sienna': 0xA0522D,
    'silver': 0xC0C0C0,
    'skyblue': 0x87CEEB,
    'slateblue': 0x6A5ACD,
    'slategray': 0x708090,
    'slategrey': 0x708090,
    'snow': 0xFFFAFA,
    'springgreen': 0x00FF7F,
    'steelblue': 0x4682B4,
    'tan': 0xD2B48C,
    'teal': 0x008080,
    'thistle': 0xD8BFD8,
    'tomato': 0xFF6347,
    'turquoise': 0x40E0D0,
    'violet': 0xEE82EE,
    'wheat': 0xF5DEB3,
    'white': 0xFFFFFF,
    'whitesmoke': 0xF5F5F5,
    'yellow': 0xFFFF00,
    'yellowgreen': 0x9ACD32
};

function Color(r, g, b) {

    if (g === undefined && b === undefined) {

        // r is THREE.Color, hex or string
        return this.set(r);
    }

    return this.setRGB(r, g, b);
};

Color.prototype = {

    constructor: Color,

    isColor: true,

    r: 1,
    g: 1,
    b: 1,

    set: function set(value) {

        if (value && value.isColor) {

            this.copy(value);
        } else if (typeof value === 'number') {

            this.setHex(value);
        } else if (typeof value === 'string') {

            this.setStyle(value);
        }

        return this;
    },

    setScalar: function setScalar(scalar) {

        this.r = scalar;
        this.g = scalar;
        this.b = scalar;
    },

    setHex: function setHex(hex) {

        hex = Math.floor(hex);

        this.r = (hex >> 16 & 255) / 255;
        this.g = (hex >> 8 & 255) / 255;
        this.b = (hex & 255) / 255;

        return this;
    },

    setRGB: function setRGB(r, g, b) {

        this.r = r;
        this.g = g;
        this.b = b;

        return this;
    },

    setHSL: function () {

        function hue2rgb(p, q, t) {

            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * 6 * (2 / 3 - t);
            return p;
        }
    }(),

    setStyle: function setStyle(style) {

        function handleAlpha(string) {

            if (string === undefined) return;

            if (parseFloat(string) < 1) {}
        }

        var m;

        if (m = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(style)) {

            // rgb / hsl

            var color;
            var name = m[1];
            var components = m[2];

            switch (name) {

                case 'rgb':
                case 'rgba':

                    if (color = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(components)) {

                        // rgb(255,0,0) rgba(255,0,0,0.5)
                        this.r = Math.min(255, parseInt(color[1], 10)) / 255;
                        this.g = Math.min(255, parseInt(color[2], 10)) / 255;
                        this.b = Math.min(255, parseInt(color[3], 10)) / 255;

                        handleAlpha(color[5]);

                        return this;
                    }

                    if (color = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(components)) {

                        // rgb(100%,0%,0%) rgba(100%,0%,0%,0.5)
                        this.r = Math.min(100, parseInt(color[1], 10)) / 100;
                        this.g = Math.min(100, parseInt(color[2], 10)) / 100;
                        this.b = Math.min(100, parseInt(color[3], 10)) / 100;

                        handleAlpha(color[5]);

                        return this;
                    }

                    break;

                case 'hsl':
                case 'hsla':

                    if (color = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(components)) {

                        // hsl(120,50%,50%) hsla(120,50%,50%,0.5)
                        var h = parseFloat(color[1]) / 360;
                        var s = parseInt(color[2], 10) / 100;
                        var l = parseInt(color[3], 10) / 100;

                        handleAlpha(color[5]);

                        return this.setHSL(h, s, l);
                    }

                    break;

            }
        } else if (m = /^\#([A-Fa-f0-9]+)$/.exec(style)) {

            // hex color

            var hex = m[1];
            var size = hex.length;

            if (size === 3) {

                // #ff0
                this.r = parseInt(hex.charAt(0) + hex.charAt(0), 16) / 255;
                this.g = parseInt(hex.charAt(1) + hex.charAt(1), 16) / 255;
                this.b = parseInt(hex.charAt(2) + hex.charAt(2), 16) / 255;

                return this;
            } else if (size === 6) {

                // #ff0000
                this.r = parseInt(hex.charAt(0) + hex.charAt(1), 16) / 255;
                this.g = parseInt(hex.charAt(2) + hex.charAt(3), 16) / 255;
                this.b = parseInt(hex.charAt(4) + hex.charAt(5), 16) / 255;

                return this;
            }
        }

        if (style && style.length > 0) {

            // color keywords
            var hex = ColorKeywords[style];

            if (hex !== undefined) {

                // red
                this.setHex(hex);
            } else {

                // unknown color


            }
        }

        return this;
    },

    clone: function clone() {

        return new this.constructor(this.r, this.g, this.b);
    },

    copy: function copy(color) {

        this.r = color.r;
        this.g = color.g;
        this.b = color.b;

        return this;
    },

    copyGammaToLinear: function copyGammaToLinear(color, gammaFactor) {

        if (gammaFactor === undefined) gammaFactor = 2.0;

        this.r = Math.pow(color.r, gammaFactor);
        this.g = Math.pow(color.g, gammaFactor);
        this.b = Math.pow(color.b, gammaFactor);

        return this;
    },

    copyLinearToGamma: function copyLinearToGamma(color, gammaFactor) {

        if (gammaFactor === undefined) gammaFactor = 2.0;

        var safeInverse = gammaFactor > 0 ? 1.0 / gammaFactor : 1.0;

        this.r = Math.pow(color.r, safeInverse);
        this.g = Math.pow(color.g, safeInverse);
        this.b = Math.pow(color.b, safeInverse);

        return this;
    },

    convertGammaToLinear: function convertGammaToLinear() {

        var r = this.r,
            g = this.g,
            b = this.b;

        this.r = r * r;
        this.g = g * g;
        this.b = b * b;

        return this;
    },

    convertLinearToGamma: function convertLinearToGamma() {

        this.r = Math.sqrt(this.r);
        this.g = Math.sqrt(this.g);
        this.b = Math.sqrt(this.b);

        return this;
    },

    getHex: function getHex() {

        return this.r * 255 << 16 ^ this.g * 255 << 8 ^ this.b * 255 << 0;
    },

    getHexString: function getHexString() {

        return ('000000' + this.getHex().toString(16)).slice(-6);
    },

    getHSL: function getHSL(optionalTarget) {

        // h,s,l ranges are in 0.0 - 1.0

        var hsl = optionalTarget || {
            h: 0,
            s: 0,
            l: 0
        };

        var r = this.r,
            g = this.g,
            b = this.b;

        var max = Math.max(r, g, b);
        var min = Math.min(r, g, b);

        var hue, saturation;
        var lightness = (min + max) / 2.0;

        if (min === max) {

            hue = 0;
            saturation = 0;
        } else {

            var delta = max - min;

            saturation = lightness <= 0.5 ? delta / (max + min) : delta / (2 - max - min);

            switch (max) {

                case r:
                    hue = (g - b) / delta + (g < b ? 6 : 0);
                    break;
                case g:
                    hue = (b - r) / delta + 2;
                    break;
                case b:
                    hue = (r - g) / delta + 4;
                    break;

            }

            hue /= 6;
        }

        hsl.h = hue;
        hsl.s = saturation;
        hsl.l = lightness;

        return hsl;
    },

    getStyle: function getStyle() {

        return 'rgb(' + (this.r * 255 | 0) + ',' + (this.g * 255 | 0) + ',' + (this.b * 255 | 0) + ')';
    },

    offsetHSL: function offsetHSL(h, s, l) {

        var hsl = this.getHSL();

        hsl.h += h;
        hsl.s += s;
        hsl.l += l;

        this.setHSL(hsl.h, hsl.s, hsl.l);

        return this;
    },

    add: function add(color) {

        this.r += color.r;
        this.g += color.g;
        this.b += color.b;

        return this;
    },

    addColors: function addColors(color1, color2) {

        this.r = color1.r + color2.r;
        this.g = color1.g + color2.g;
        this.b = color1.b + color2.b;

        return this;
    },

    addScalar: function addScalar(s) {

        this.r += s;
        this.g += s;
        this.b += s;

        return this;
    },

    sub: function sub(color) {

        this.r = Math.max(0, this.r - color.r);
        this.g = Math.max(0, this.g - color.g);
        this.b = Math.max(0, this.b - color.b);

        return this;
    },

    multiply: function multiply(color) {

        this.r *= color.r;
        this.g *= color.g;
        this.b *= color.b;

        return this;
    },

    multiplyScalar: function multiplyScalar(s) {

        this.r *= s;
        this.g *= s;
        this.b *= s;

        return this;
    },

    lerp: function lerp(color, alpha) {

        this.r += (color.r - this.r) * alpha;
        this.g += (color.g - this.g) * alpha;
        this.b += (color.b - this.b) * alpha;

        return this;
    },

    equals: function equals(c) {

        return c.r === this.r && c.g === this.g && c.b === this.b;
    },

    fromArray: function fromArray(array, offset) {

        if (offset === undefined) offset = 0;

        this.r = array[offset];
        this.g = array[offset + 1];
        this.b = array[offset + 2];

        return this;
    },

    toArray: function toArray(array, offset) {

        if (array === undefined) array = [];
        if (offset === undefined) offset = 0;

        array[offset] = this.r;
        array[offset + 1] = this.g;
        array[offset + 2] = this.b;

        return array;
    }

};
var Color = exports.Color = Color;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    tooltip: {
        show: false
    },
    label: {
        show: false // 是否显示
    },
    legend: {
        show: false
    },
    style: {
        normal: {
            radius: 15, // 半径
            minOpacity: 0, // 最小透明度
            maxOpacity: 0.8, // 最大透明度
            minScope: 0, // 最小区间,小于此区间的不显示
            maxScope: 1 // 最大区间,大于此区间的不显示
        },
        colors: []
    }

};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    tooltip: {
        show: true,
        position: 'top',
        formatter: "{count}~<br/>{count}"
    },
    label: {
        show: false // 是否显示
    },
    legend: {
        show: true,
        title: "标题",
        data: ["描述1", "描述2", "描述3", "描述4"]
    },
    style: {
        normal: {
            icon: null,
            width: 0,
            height: 0,
            scale: 1,
            offsets: {
                top: 0,
                left: 0
            }
        },
        mouseOver: {
            scale: 1
        },
        selected: {
            scale: 1
        },
        colors: [],
        splitList: []
    },
    data: [],
    event: {}
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 默认inmap 默认
 */
module.exports = {
    center: [],
    id: null,
    skin: null, //Blueness WhiteLover
    zoom: {
        value: 5,
        show: true,
        max: 18,
        min: 5
    }
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ImgOverlay = exports.workerMrg = exports.HoneycombOverlay = exports.Circuit = exports.HeatOverlay = exports.BoundaryOverlay = exports.GriddingOverlay = exports.DotOverlay = exports.Map = exports.utils = undefined;

var _DotOverlay = __webpack_require__(20);

var _GriddingOverlay = __webpack_require__(21);

var _BoundaryOverlay = __webpack_require__(18);

var _HeatOverlay = __webpack_require__(22);

var _Circuit = __webpack_require__(19);

var _HoneycombOverlay = __webpack_require__(23);

var _ImgOverlay = __webpack_require__(24);

var _index = __webpack_require__(17);

var _util = __webpack_require__(0);

var utils = _interopRequireWildcard(_util);

var _workerMrg = __webpack_require__(6);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.utils = utils;
exports.Map = _index.Map;
exports.DotOverlay = _DotOverlay.DotOverlay;
exports.GriddingOverlay = _GriddingOverlay.GriddingOverlay;
exports.BoundaryOverlay = _BoundaryOverlay.BoundaryOverlay;
exports.HeatOverlay = _HeatOverlay.HeatOverlay;
exports.Circuit = _Circuit.Circuit;
exports.HoneycombOverlay = _HoneycombOverlay.HoneycombOverlay;
exports.workerMrg = _workerMrg.workerMrg;
exports.ImgOverlay = _ImgOverlay.ImgOverlay;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MapZoom = exports.MapZoom = function () {
    function MapZoom(map) {
        _classCallCheck(this, MapZoom);

        this.map = map;
        this.dom = map._inmapOption.toolDom;
        this.zoom = map._inmapOption.zoom;
        this.createDom();
    }

    _createClass(MapZoom, [{
        key: 'createDom',
        value: function createDom() {
            var div = document.createElement('div');
            div.classList.add('scale-group');
            div.innerHTML = '<a>+</a > <a>-</a >';
            this.dom.appendChild(div);
            this.event(div);
        }
    }, {
        key: 'event',
        value: function event(div) {
            var _this = this;

            // debugger
            var doms = div.querySelectorAll('a');
            doms[0].addEventListener('click', function (e) {
                var zoom = _this.map.getZoom();
                if (zoom < _this.zoom.max) {
                    _this.map.zoomIn();
                }
            });
            doms[1].addEventListener('click', function (e) {
                var zoom = _this.map.getZoom();
                if (zoom > _this.zoom.min) {
                    _this.map.zoomOut();
                }
            });
        }
    }]);

    return MapZoom;
}();

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.LabelRender = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _deepmerge = __webpack_require__(11);

var _deepmerge2 = _interopRequireDefault(_deepmerge);

var _BaseClass2 = __webpack_require__(15);

var _BaseClass3 = _interopRequireDefault(_BaseClass2);

var _parameterConfig = __webpack_require__(14);

var _parameterConfig2 = _interopRequireDefault(_parameterConfig);

var _util = __webpack_require__(0);

var _workerMrg = __webpack_require__(6);

var _TextRender = __webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 绘制Marker的Label
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * author zhenjia.hao
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * date 20170725
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var LabelRender = exports.LabelRender = function (_BaseClass) {
	_inherits(LabelRender, _BaseClass);

	function LabelRender(opts) {
		_classCallCheck(this, LabelRender);

		opts = (0, _deepmerge2.default)({}, _parameterConfig2.default, opts);

		var _this = _possibleConstructorReturn(this, (LabelRender.__proto__ || Object.getPrototypeOf(LabelRender)).call(this, opts));

		_this.labelStyle = opts.label;
		_this.textRender = null;
		_this.ctx = null;
		_this.pixels = [];
		_this.pixelsGroup = [];
		_this.pixelsMap = {};
		_this.offset = 5;

		_this.setTextRender();
		return _this;
	}
	/**
  * 设置TextRender，用于label标注
  * @param {String} type [description]
  */


	_createClass(LabelRender, [{
		key: 'setTextRender',
		value: function setTextRender() {
			var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'normal';

			var textRender = this.textRender,
			    labelStyle = this.labelStyle[type];

			if (!textRender) {
				textRender = this.textRender = new _TextRender.TextRender(labelStyle);
			} else {
				textRender.setOption(labelStyle);
			}

			return textRender;
		}
		/**
   * 重写BaseClass的postMessage方法，因为该子类不需要this.map
   * @param  {[type]}   workerClassPath [description]
   * @param  {[type]}   data            [description]
   * @param  {Function} callback        [description]
   * @return {[type]}                   [description]
   */

	}, {
		key: 'postMessage',
		value: function postMessage(workerClassPath, data, callback) {
			var msgId = this.setMsgId();
			var request = {
				'type': 'web',
				'data': data,
				'hashCode': this.hashCode,
				'className': this.className,
				'classPath': workerClassPath,
				'msgId': msgId
			};
			_workerMrg.workerMrg.postMessage({
				request: request
			}, callback);
		}
		/**
   * 渲染label
   * @param  {[type]} ctx    [description]
   * @param  {[type]} pixels [description]
   * @return {[type]}        [description]
   */

	}, {
		key: 'drawLabel',
		value: function drawLabel(ctx, pixels) {
			var that = this;

			if (!this.textRender.isShow()) return;

			this.ctx = ctx;
			this.pixels = pixels;
			this.reset();
			this.setPixelsMap();
			this.groupPixelsByDistance();
			this.drawByGroup();
		}
		/**
   * 清空缓存的坐标点信息
   * @return {[type]} [description]
   */

	}, {
		key: 'reset',
		value: function reset() {
			this.pixelsGroup = [];
			this.pixelsMap = {};
		}
		/**
   * 将所有的点按照距离分类，找出可能相交的点
   * @return {[type]} [description]
   */

	}, {
		key: 'groupPixelsByDistance',
		value: function groupPixelsByDistance() {
			var that = this,
			    pixels = this.pixels,
			    pixelsGroup = this.pixelsGroup,
			    isNear = void 0,
			    item = void 0,
			    i = 0;

			this.sortPixels(pixels);

			while (i < pixels.length) {
				item = pixels[i];
				isNear = false;
				(0, _util.forEach)(pixelsGroup, function (groupItem) {
					(0, _util.forEach)(groupItem, function (pixel) {
						isNear = that.isNear(item, pixel);

						if (isNear && item != pixel) {
							groupItem.push(item);
							return false;
						}
					});
					return !isNear;
				});
				//都不靠近的话，pixelsGroup增加一条
				!isNear && pixelsGroup.push([item]);
				i++;
			}
		}
		/**
   * 将所有的点排序，排序规则x值从小到大，x值相等时，按照y值从小到大的顺序排排列
   * @param  {[type]} pixels [description]
   * @return {[type]}        [description]
   */

	}, {
		key: 'sortPixels',
		value: function sortPixels(pixels) {
			pixels.sort(function (a, b) {
				var result = void 0;

				b = b.pixel;
				a = a.pixel;

				result = a.x - b.x;

				if (result === 0) {
					result = b.y - a.y;
				}

				return result;
			});
		}
		/**
   * 将所有的点以x,y坐标值为id缓存到map中，以保证标注label过程中，不污染源数据
   */

	}, {
		key: 'setPixelsMap',
		value: function setPixelsMap() {
			var pixels = this.pixels,
			    map = this.pixelsMap,
			    item = void 0,
			    key = void 0,
			    mapItem = void 0;

			for (var i = pixels.length - 1; i >= 0; i--) {
				item = pixels[i];
				key = this.getPixelsId(item);
				mapItem = map[key] = {
					isShow: 1,
					text: item.name,
					pixel: item.pixel,
					labelBounds: null,
					labelPixel: null,
					labelPosition: 'right'
				};
				this.setLabelPixelAndBounds(mapItem);
			}
		}
		/**
   * 按照ID或者源数据中的pixel，取得pixelsMap对应的item
   * @param  {[type]} pixel [description]
   * @return {[type]}       [description]
   */

	}, {
		key: 'getPixelsMapItem',
		value: function getPixelsMapItem(pixel) {
			var map = this.pixelsMap,
			    key = (0, _util.isObject)(pixel) ? this.getPixelsId(pixel) : pixel;

			return map[key];
		}
		/**
   * 设置Label标注后占据的区域，及Label文案的起始点
   * @param {[type]} item [description]
   */

	}, {
		key: 'setLabelPixelAndBounds',
		value: function setLabelPixelAndBounds(item) {
			var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : item.labelPosition;

			var ctx = this.ctx,
			    pixel = item.pixel,
			    textRender = this.textRender,
			    textWidth = textRender.getTextWidth(ctx, item.text),
			    textHeight = textRender.getTextHeight(),
			    offset = this.offset,
			    boundsWidth = void 0,
			    boundsHeight = void 0,
			    boundsMinX = void 0,
			    boundsMaxX = void 0,
			    boundsMinY = void 0,
			    boundsMaxY = void 0,
			    labelPixel = {};

			item.labelPosition = position;

			switch (position) {
				case 'top':
					boundsWidth = textWidth;
					boundsHeight = textHeight + offset;
					boundsMinX = pixel.x - textWidth * 0.5;
					boundsMinY = pixel.y - boundsHeight;
					labelPixel = {
						x: boundsMinX,
						y: pixel.y - offset
					};
					break;
				case 'topRight':
					boundsWidth = textWidth + offset;
					boundsHeight = textHeight + offset;
					boundsMinX = pixel.x;
					boundsMinY = pixel.y - boundsHeight;
					labelPixel = {
						x: pixel.x + offset,
						y: pixel.y - offset
					};
					break;
				case 'right':
					boundsWidth = textWidth + offset;
					boundsHeight = textHeight;
					boundsMinX = pixel.x;
					boundsMinY = pixel.y - textHeight * 0.5;
					labelPixel = {
						x: pixel.x + offset,
						y: boundsMinY + boundsHeight
					};
					break;
				case 'bottomRight':
					boundsWidth = textWidth + offset;
					boundsHeight = textHeight + offset;
					boundsMinX = pixel.x;
					boundsMinY = pixel.y;
					labelPixel = {
						x: pixel.x + offset,
						y: pixel.y + offset
					};
					break;
				case 'bottom':
					boundsWidth = textWidth;
					boundsHeight = textHeight + offset;
					boundsMinX = pixel.x - textWidth * 0.5;
					boundsMinY = pixel.y;
					labelPixel = {
						x: boundsMinX,
						y: boundsMinY + boundsHeight
					};

					break;
				case 'bottomLeft':
					boundsWidth = textWidth + offset;
					boundsHeight = textHeight + offset;
					boundsMinX = pixel.x - boundsWidth;
					boundsMinY = pixel.y;
					labelPixel = {
						x: boundsMinX,
						y: boundsMinY + boundsHeight
					};
					break;
				case 'left':
					boundsWidth = textWidth + offset;
					boundsHeight = textHeight;
					boundsMinX = pixel.x - boundsWidth;
					boundsMinY = pixel.y - textHeight * 0.5;
					labelPixel = {
						x: boundsMinX,
						y: boundsMinY + boundsHeight
					};
					break;
				case 'topLeft':
					boundsWidth = textWidth + offset;
					boundsHeight = textHeight + offset;
					boundsMinX = pixel.x - boundsWidth;
					boundsMinY = pixel.y - boundsHeight;
					labelPixel = {
						x: boundsMinX,
						y: pixel.y - offset
					};
					break;
				case 'none':
					item.isShow = 0;
					boundsWidth = boundsHeight = 1;
					boundsMinX = pixel.x;
					boundsMinY = pixel.y;
					labelPixel = pixel;
					break;
			}

			item.labelPixel = labelPixel;
			item.labelBounds = {
				width: boundsWidth,
				height: boundsHeight,
				minX: boundsMinX,
				minY: boundsMinY,
				maxX: boundsMinX + boundsWidth,
				maxY: boundsMinY + boundsHeight
			};
		}
		/**
   * 按照分组绘制Label，每组只有一个点时直接标注，两个点时，将左侧的点label设置为左侧，三个以上点时自动避让
   * @return {[type]} [description]
   */

	}, {
		key: 'drawByGroup',
		value: function drawByGroup() {
			var that = this,
			    group = this.pixelsGroup,
			    mapItem = void 0;

			(0, _util.forEach)(group, function (item) {
				if (item.length > 1) {
					that.avoidLabelByGroup(item);
				}

				that.drawPixels(item);
			});
		}
		/**
   * 按照组将重叠的Label避让标注
   * @param  {[type]} pixels [description]
   * @return {[type]}        [description]
   */

	}, {
		key: 'avoidLabelByGroup',
		value: function avoidLabelByGroup(pixels) {
			var group = this.setGroupBounds(pixels),
			    overlappedPixels = void 0;

			this.setGirdMatrix(group);
			this.setPixelsToGird(group);
			this._avoidLabel(group);

			// this._drawGird(group.matrix);
		}
		/**
   * 自动避让该组中，重叠的Label
   * @param  {[type]} group [description]
   * @return {[type]}       [description]
   */

	}, {
		key: '_avoidLabel',
		value: function _avoidLabel(group) {
			var _this2 = this;

			var overlappedPixels = this._getOverlappedPixels(group);

			(0, _util.forEach)(overlappedPixels, function (pixel) {
				var positions = ['top', 'left', 'bottom', 'topRight', 'topLeft', 'bottomLeft', 'bottomRight', 'none'];
				(0, _util.forEach)(positions, function (position) {
					var overlapped = _this2._getOverlappedPixels(group, 'map'),
					    mapItem = void 0;

					if (overlapped[pixel]) {
						mapItem = _this2.getPixelsMapItem(pixel);
						_this2.setLabelPixelAndBounds(mapItem, position);
						_this2.setPixelsToGird(group);
					} else {
						return false;
					}
				});
			});
		}
		/**
   * 获取该组中Label重叠的点
   * @param  {[type]} group [description]
   * @return {[type]}       [description]
   */

	}, {
		key: '_getOverlappedPixels',
		value: function _getOverlappedPixels(group) {
			var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'array';

			var matrix = group.matrix,
			    overlappedPixels = [],
			    pixelsMap = {},
			    result = void 0;

			(0, _util.forEach)(matrix, function (row) {
				(0, _util.forEach)(row, function (item) {
					var pixels = item.pixels;

					if (pixels.length > 1) {
						(0, _util.forEach)(pixels, function (pixel) {
							if (!pixelsMap[pixel]) {
								overlappedPixels.push(pixel);
								pixelsMap[pixel] = true;
							}
						});
					}
				});
			});

			result = {
				array: overlappedPixels,
				map: pixelsMap
			};

			return result[type];
		}
	}, {
		key: 'setGroupBounds',
		value: function setGroupBounds(pixels) {
			var that = this,
			    i = 0,
			    group = {
				pixels: [],
				bounds: {}
			},
			    offset = this.offset,
			    item = void 0,
			    pixel = void 0,
			    textHeight = this.textRender.getTextHeight(),
			    left = void 0,
			    right = void 0,
			    minX = void 0,
			    maxX = void 0,
			    minY = void 0,
			    maxY = void 0;

			//确定所有点中的最大，最小x,y坐标
			while (i < pixels.length) {
				item = that.getPixelsMapItem(pixels[i]);
				pixel = item.pixel;
				group.pixels.push(that.getPixelsId(pixels[i]));

				minY = !minY || minY > pixel.y ? pixel.y : minY;
				maxY = !maxY || maxY < pixel.y ? pixel.y : maxY;

				if (!minX || minX > pixel.x) {
					left = item;
					minX = pixel.x;
				}
				if (!maxX || maxX < pixel.x) {
					right = item;
					maxX = pixel.x;
				}

				i++;
			}

			group.bounds = {
				minX: minX - left.labelBounds.width,
				maxX: maxX + right.labelBounds.width,
				minY: minY - textHeight - offset, //区域上下要留出offset的区域
				maxY: maxY + textHeight + offset
			};

			return group;
		}
	}, {
		key: 'setGirdMatrix',
		value: function setGirdMatrix(group) {
			var matrix = [],
			    i = 0,
			    row = void 0,
			    item = void 0,
			    girdSize = this.textRender.getFontSize() / 2,
			    bounds = group.bounds,
			    x = void 0,
			    y = bounds.minY;

			while (y < bounds.maxY) {
				if (!matrix[i]) {
					matrix[i] = [];
				}
				row = matrix[i];
				x = bounds.minX;
				while (x < bounds.maxX) {
					row.push({
						bounds: {
							minX: x,
							maxX: x + girdSize > bounds.maxX ? bounds.maxX : x + girdSize,
							minY: y,
							maxY: y + girdSize > bounds.maxY ? bounds.maxY : y + girdSize
						},
						pixels: []
					});

					x += girdSize;
				}
				y += girdSize;
				i++;
			}

			group.matrix = matrix;
			group.girdSize = girdSize;
		}
	}, {
		key: 'setPixelsToGird',
		value: function setPixelsToGird(group) {
			var that = this,
			    pixels = group.pixels,
			    girdSize = group.girdSize,
			    matrix = group.matrix,
			    groupBounds = group.bounds;

			this.clearPixelsGird(group);
			//当组内pixels的个数大于等于3时才微移label标注，两个点简单的调整就能达到避让的效果
			// pixels.length > 2 && this.nudgeLabelByGird(group);

			(0, _util.forEach)(pixels, function (item) {
				var pixelItem = that.getPixelsMapItem(item),
				    labelBounds = pixelItem.labelBounds,
				    startCol = Math.floor((labelBounds.minX - groupBounds.minX) / girdSize),
				    endCol = Math.ceil((labelBounds.maxX - groupBounds.minX) / girdSize),
				    startRow = Math.floor((labelBounds.minY - groupBounds.minY) / girdSize),
				    endRow = Math.ceil((labelBounds.maxY - groupBounds.minY) / girdSize),
				    x = startRow,
				    //行, 从0开始
				y = void 0; //列, 从0开始

				while (pixelItem.isShow && x < endRow) {
					y = startCol;
					while (y < endCol) {
						matrix[x][y] && matrix[x][y].pixels.push(pixelItem);
						y++;
					}
					x++;
				}
			});
		}
	}, {
		key: 'clearPixelsGird',
		value: function clearPixelsGird(group) {
			(0, _util.forEach)(group.matrix, function (row) {
				(0, _util.forEach)(row, function (item) {
					item.pixels = [];
				});
			});
		}
	}, {
		key: 'getIndex',
		value: function getIndex(max, min, size) {
			return Math.floor((max - min) / size);
		}
	}, {
		key: '_drawGird',
		value: function _drawGird(matrix) {
			var that = this,
			    ctx = this.ctx,
			    tl = void 0,
			    tr = void 0,
			    bl = void 0,
			    br = void 0;

			(0, _util.forEach)(matrix, function (row) {
				(0, _util.forEach)(row, function (item) {
					var bounds = item.bounds;
					ctx.beginPath();
					ctx.lineWidth = "1";
					ctx.strokeStyle = "white";
					ctx.rect(bounds.minX, bounds.minY, bounds.maxX - bounds.minX, bounds.maxY - bounds.minY);
					ctx.stroke();

					item.pixels.length && that.drawText(item.pixels.length, { x: bounds.minX, y: bounds.maxY }, 'red');
				});
			});
		}
	}, {
		key: 'getPixelsId',
		value: function getPixelsId(pixel) {
			pixel = pixel.pixel;

			return 'x' + pixel.x + 'y' + pixel.y;
		}
	}, {
		key: 'isNear',
		value: function isNear(target, point) {
			var targetPixel, pointPixel, boundary;

			target = this.getPixelsMapItem(target);
			point = this.getPixelsMapItem(point);

			targetPixel = target.labelPixel;
			pointPixel = point.labelPixel;
			boundary = target.labelBounds;

			return Math.abs(targetPixel.x - pointPixel.x) < 2 * boundary.width || Math.abs(targetPixel.y - pointPixel.y) < 2 * boundary.height;
		}
	}, {
		key: '_dataRender',
		value: function _dataRender() {
			var pixels = this.workData,
			    ctx = this.ctx;

			for (var i = 0, len = pixels.length; i < len; i++) {
				var _pixels = _pixels[i];

				this.drawText(ctx, _pixels);
			}
		}
	}, {
		key: 'drawPixels',
		value: function drawPixels(pixels) {
			var that = this,
			    item = void 0;

			(0, _util.forEach)(pixels, function (pixel, index) {
				item = that.getPixelsMapItem(pixel);

				item.isShow && that.drawText(item.text, item.labelPixel);
			});
		}
	}, {
		key: 'drawText',
		value: function drawText(text, position, color) {
			var ctx = this.ctx,
			    textRender = this.textRender;

			textRender.draw(ctx, text, position, color);
		}
	}]);

	return LabelRender;
}(_BaseClass3.default);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 在地图中绘制文本
 *
 * author zhenjia.hao
 * date 20170725
 */

var TextRender = exports.TextRender = function () {
	function TextRender(opts) {
		_classCallCheck(this, TextRender);

		var CONFIG = {
			show: false,
			formatter: null, //支持字符串模板，和回调函数
			textStyle: {
				color: '#fff',
				fontStyle: 'normal',
				fontWeight: 'normal',
				fontFamily: 'sans-serif',
				fontSize: 12
			}
		};

		var option = Object.assign({}, CONFIG, opts);

		this.opt = null;
		this.style = null;
		this._isShow = false;

		this.setOption(option);
	}

	_createClass(TextRender, [{
		key: 'setOption',
		value: function setOption(option) {
			this.opt = option;
			this.style = option.textStyle;
			this._isShow = option.show;
		}
	}, {
		key: 'isShow',
		value: function isShow() {
			return this._isShow;
		}
	}, {
		key: '_getFontStyle',
		value: function _getFontStyle() {
			var style = this.style;

			return [style.fontStyle, style.fontWeight, style.fontSize + 'px', style.fontFamily].join(' ');
		}
	}, {
		key: 'getTextHeight',
		value: function getTextHeight() {
			return this.getFontSize();
		}
	}, {
		key: 'getFontSize',
		value: function getFontSize() {
			return this.style.fontSize;
		}
	}, {
		key: 'getTextWidth',
		value: function getTextWidth(ctx, text) {
			return ctx.measureText(text).width;
		}
	}, {
		key: 'draw',
		value: function draw(ctx, text, position, textColor) {
			var color = this.style.color,
			    fontStyle = this._getFontStyle();

			ctx.font = fontStyle;
			ctx.fillStyle = textColor || color;
			ctx.fillText(text, position.x, position.y);
		}
	}]);

	return TextRender;
}();

/***/ }),
/* 39 */,
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(41)();
// imports


// module
exports.push([module.i, ".td-map-container {\n  display: -webkit-box;\n  opacity: 1;\n  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;\n}\n.td-map-container .scale-group {\n  position: absolute;\n  right: 10px;\n  bottom: 35px;\n  z-index: 999999;\n  opacity: 1;\n}\n.td-map-container .scale-group a {\n  display: block;\n  width: 24px;\n  height: 24px;\n  font-size: 17px;\n  line-height: 22px;\n  text-align: center;\n  background: #fff;\n  margin-top: 5px;\n  color: #666;\n  cursor: pointer;\n}\n.td-map-container ul.legend {\n  position: absolute;\n  list-style: none;\n  opacity: 1;\n  height: auto;\n  font-size: 12px;\n  padding: 10px;\n  left: 35px;\n  bottom: 35px;\n  text-align: center;\n  background: rgba(255, 255, 255, 0.7);\n  box-shadow: rgba(8, 16, 34, 0.3) 2px 0px 7px;\n  border-radius: 5px;\n  z-index: 9999;\n}\n.td-map-container .legend li {\n  text-align: start;\n  position: relative;\n}\n.td-map-container .legend li.title {\n  min-height: auto;\n  width: auto;\n  float: none;\n  padding: 0;\n  padding-bottom: 5px;\n}\n.td-map-container .legend li.item {\n  height: 20px;\n  min-height: auto;\n  width: auto;\n  float: none;\n  padding: 0;\n}\n.td-map-container .legend li .bg {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  background: #c8c832;\n  vertical-align: sub;\n  position: relative;\n}\n.td-map-container .legend li .bg:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: #fff;\n  z-index: -1;\n}\n.td-map-container .legend li .infinity {\n  font-size: 18px;\n  position: absolute;\n  top: -6px;\n  padding-left: 2px;\n}\n.td-map-container .tooltip {\n  position: fixed;\n  opacity: 1;\n  display: none;\n  pointer-events: none;\n  border-style: solid;\n  white-space: nowrap;\n  z-index: 9999999;\n  transition: left 0.4s cubic-bezier(0.23, 1, 0.32, 1), top 0.4s cubic-bezier(0.23, 1, 0.32, 1);\n  background-color: rgba(50, 50, 50, 0.7);\n  border-width: 0px;\n  border-color: #333333;\n  border-radius: 4px;\n  color: #ffffff;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: normal;\n  font-stretch: normal;\n  font-size: 14px;\n  font-family: sans-serif;\n  line-height: 21px;\n  padding: 5px;\n  left: 323px;\n  top: 451px;\n}\n", ""]);

// exports


/***/ }),
/* 41 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(42)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!./map.less", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!./map.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })
/******/ ]);
});