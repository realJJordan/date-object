'use strict';

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toArray(arr) {
  return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");

  return _classApplyDescriptorGet(receiver, descriptor);
}

function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");

  _classApplyDescriptorSet(receiver, descriptor, value);

  return value;
}

function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to " + action + " private field on non-instance");
  }

  return privateMap.get(receiver);
}

function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }

  return descriptor.value;
}

function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }

    descriptor.value = value;
  }
}

var gregorian_en = {
  name: "gregorian_en",
  months: [["January", "Jan"], ["February", "Feb"], ["March", "Mar"], ["April", "Apr"], ["May", "May"], ["June", "Jun"], ["July", "Jul"], ["August", "Aug"], ["September", "Sep"], ["October", "Oct"], ["November", "Nov"], ["December", "Dec"]],
  weekDays: [["Saturday", "Sat"], ["Sunday", "Sun"], ["Monday", "Mon"], ["Tuesday", "Tue"], ["Wednesday", "Wed"], ["Thursday", "Thu"], ["Friday", "Fri"]],
  digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  meridiems: [["AM", "am"], ["PM", "pm"]]
};

var gregorian$1 = {
  name: "gregorian",
  startYear: 1,
  yearLength: 365,
  epoch: 1721424,
  century: 20,
  weekStartDayIndex: 1,
  getMonthLengths: function getMonthLengths(isLeap) {
    return [31, isLeap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  },
  isLeap: function isLeap(year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
  },
  getLeaps: function getLeaps(currentYear) {
    if (currentYear === 0) return;
    var year = currentYear > 0 ? 1 : -1;

    var leaps = [],
        condition = function condition() {
      return currentYear > 0 ? year <= currentYear : currentYear <= year;
    },
        increase = function increase() {
      return currentYear > 0 ? year++ : year--;
    };

    while (condition()) {
      if (this.isLeap(year)) leaps.push(year);
      increase();
    }

    return leaps;
  },
  getDayOfYear: function getDayOfYear(_ref) {
    var year = _ref.year,
        month = _ref.month,
        day = _ref.day;
    var monthLengths = this.getMonthLengths(this.isLeap(year));

    for (var i = 0; i < month.index; i++) {
      day += monthLengths[i];
    }

    return day;
  },
  getAllDays: function getAllDays(date) {
    var year = date.year;
    return this.yearLength * (year - 1) + this.leapsLength(year) + this.getDayOfYear(date);
  },
  leapsLength: function leapsLength(year) {
    return ((year - 1) / 4 | 0) + (-((year - 1) / 100) | 0) + ((year - 1) / 400 | 0);
  },
  guessYear: function guessYear(days, currentYear) {
    var year = ~~(days / 365.24);
    return year + (currentYear > 0 ? 1 : -1);
  }
};
var gregorian_1 = gregorian$1;

var en = gregorian_en;
var gregorian = gregorian_1;

function isObject(object) {
  return object && object.constructor === Object;
}

function toNumber(value) {
  if (!isNaN(value)) return parseInt(value);
}

function isArray(value) {
  return Array.isArray(value);
}

function notInRange(value, min, max) {
  return value === undefined || value < min || value > max;
}

var _year = /*#__PURE__*/new WeakMap();

var _month = /*#__PURE__*/new WeakMap();

var _day = /*#__PURE__*/new WeakMap();

var _hour = /*#__PURE__*/new WeakMap();

var _minute = /*#__PURE__*/new WeakMap();

var _second = /*#__PURE__*/new WeakMap();

var _millisecond = /*#__PURE__*/new WeakMap();

var _format = /*#__PURE__*/new WeakMap();

var _locale = /*#__PURE__*/new WeakMap();

var _calendar = /*#__PURE__*/new WeakMap();

var _isUTC = /*#__PURE__*/new WeakMap();

var _custom = /*#__PURE__*/new WeakMap();

var _isoDate = /*#__PURE__*/new WeakMap();

var _ignoreList = /*#__PURE__*/new WeakMap();

var _mustFix = /*#__PURE__*/new WeakMap();

var _getKeyValue = /*#__PURE__*/new WeakMap();

var _mustJumpFromZero = /*#__PURE__*/new WeakMap();

var _fix = /*#__PURE__*/new WeakMap();

var _getWeekDays = /*#__PURE__*/new WeakMap();

var DateObject = /*#__PURE__*/function () {
  function DateObject(object) {
    var _this = this;

    _classCallCheck(this, DateObject);

    _year.set(this, {
      writable: true,
      value: void 0
    });

    _month.set(this, {
      writable: true,
      value: void 0
    });

    _day.set(this, {
      writable: true,
      value: void 0
    });

    _hour.set(this, {
      writable: true,
      value: void 0
    });

    _minute.set(this, {
      writable: true,
      value: void 0
    });

    _second.set(this, {
      writable: true,
      value: void 0
    });

    _millisecond.set(this, {
      writable: true,
      value: void 0
    });

    _format.set(this, {
      writable: true,
      value: void 0
    });

    _locale.set(this, {
      writable: true,
      value: en
    });

    _calendar.set(this, {
      writable: true,
      value: gregorian
    });

    _isUTC.set(this, {
      writable: true,
      value: false
    });

    _custom.set(this, {
      writable: true,
      value: {}
    });

    _isoDate.set(this, {
      writable: true,
      value: /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d\.\d\d\dZ$/
    });

    _ignoreList.set(this, {
      writable: true,
      value: []
    });

    _mustFix.set(this, {
      writable: true,
      value: true
    });

    _getKeyValue.set(this, {
      writable: true,
      value: function value(token, string) {
        switch (token) {
          case "YYYY":
            return ["year", string];

          case "YY":
            return ["year", "".concat(_classPrivateFieldGet(_this, _calendar).century).concat(string)];

          case "MMMM":
          case "MMM":
            return ["month", _this.months.findIndex(function (_ref) {
              var name = _ref.name,
                  shortName = _ref.shortName;
              return new RegExp(string, "i").test(name + shortName);
            }) + 1];

          case "MM":
          case "M":
            return ["month", string];

          case "DD":
          case "D":
            return ["day", string];

          case "HH":
          case "H":
            return ["hour", string];

          case "hh":
          case "h":
            var hour = toNumber(string);
            return ["hour", hour > 12 ? hour - 12 : hour];

          case "mm":
          case "m":
            return ["minute", string];

          case "ss":
          case "s":
            return ["second", string];

          case "SSS":
          case "SS":
          case "S":
            return ["millisecond", string];

          default:
            return [];
        }
      }
    });

    _mustJumpFromZero.set(this, {
      writable: true,
      value: function value() {
        /**
         * All supported calendars in this library (except Indian calendar) start at
         * year:1, month:1, day:1 (Indian date start at year:0, month:1, day:1)
         * so the year before year 1 is year -1
         * @see https://en.wikipedia.org/w/index.php?title=Indian_national_calendar&oldid=360117718
         */
        return _classPrivateFieldGet(_this, _year) === 0 && _classPrivateFieldGet(_this, _calendar).startYear !== 0;
      }
    });

    _fix.set(this, {
      writable: true,
      value: function value() {
        if (!_classPrivateFieldGet(_this, _mustFix) || !_this.isValid) return;

        var floor = Math.floor,
            getCoefficient = function getCoefficient(number) {
          return number < 0 ? -1 : 1;
        },
            isIncorrect = function isIncorrect(value, maximum) {
          return value >= maximum || value < 0;
        },
            num = function num(val1, val2) {
          return val1 < 0 && floor(val1 % val2) !== -0 ? val2 : 0;
        },
            getCurrectValue = function getCurrectValue(value, maximum) {
          return [getCoefficient(value) * Math.abs(floor(value / maximum)), num(value, maximum) + floor(value % maximum)];
        },
            setMonth = function setMonth() {
          if (_classPrivateFieldGet(_this, _month) < 0 || _classPrivateFieldGet(_this, _month) > 11) {
            var startYear = _classPrivateFieldGet(_this, _month) < 0 ? -1 : 1;

            var _getCurrectValue = getCurrectValue(_classPrivateFieldGet(_this, _month), 12),
                _getCurrectValue2 = _slicedToArray(_getCurrectValue, 2),
                extraAmount = _getCurrectValue2[0],
                month = _getCurrectValue2[1];

            _classPrivateFieldSet(_this, _year, _classPrivateFieldGet(_this, _year) + extraAmount);

            _classPrivateFieldSet(_this, _month, month);

            if (_classPrivateFieldGet(_this, _mustJumpFromZero).call(_this)) _classPrivateFieldSet(_this, _year, startYear);
          }
        },
            properties = [["millisecond", "second", 1000], ["second", "minute", 60], ["minute", "hour", 60], ["hour", "day", 24]];
        /**
         * In order to fixing some incorrect values and
         * to prevent from running the nested #fix() method,
         * we set the #mustFix to false.
         */


        _classPrivateFieldSet(_this, _mustFix, false);

        properties.forEach(function (_ref2) {
          var _ref3 = _slicedToArray(_ref2, 3),
              currentProperty = _ref3[0],
              nextProperty = _ref3[1],
              maximum = _ref3[2];

          if (isIncorrect(_this[currentProperty], maximum)) {
            var _getCurrectValue3 = getCurrectValue(_this[currentProperty], maximum),
                _getCurrectValue4 = _slicedToArray(_getCurrectValue3, 2),
                extraAmount = _getCurrectValue4[0],
                value = _getCurrectValue4[1];

            _this[nextProperty] += extraAmount;
            _this[currentProperty] = value;
          }
        });

        _classPrivateFieldSet(_this, _mustFix, true);

        setMonth();

        while (_classPrivateFieldGet(_this, _day) < -_classPrivateFieldGet(_this, _calendar).yearLength || _classPrivateFieldGet(_this, _day) > _classPrivateFieldGet(_this, _calendar).yearLength) {
          if (_classPrivateFieldGet(_this, _month) > 0) {
            var months = _classPrivateFieldGet(_this, _calendar).getMonthLengths(_this.isLeap);

            for (var i = 0; i < _classPrivateFieldGet(_this, _month); i++) {
              _classPrivateFieldSet(_this, _day, _classPrivateFieldGet(_this, _day) + months[i]);
            }

            _classPrivateFieldSet(_this, _month, 0);
          }

          var yearLength = _this.isLeap ? _this.calendar.yearLength + 1 : _this.calendar.yearLength;

          _classPrivateFieldSet(_this, _day, _classPrivateFieldGet(_this, _day) + yearLength * (_classPrivateFieldGet(_this, _day) < 0 ? 1 : -1));

          _classPrivateFieldSet(_this, _year, _classPrivateFieldGet(_this, _year) + (_classPrivateFieldGet(_this, _day) < 0 ? -1 : 1));
        }

        while (true) {

          setMonth();

          while (_classPrivateFieldGet(_this, _day) < 1) {
            _classPrivateFieldSet(_this, _month, _classPrivateFieldGet(_this, _month) - 1);

            setMonth();

            _classPrivateFieldSet(_this, _day, _this.month.length + _classPrivateFieldGet(_this, _day));
          }

          if (_classPrivateFieldGet(_this, _day) <= _this.month.length || isNaN(_classPrivateFieldGet(_this, _day))) break;

          _classPrivateFieldSet(_this, _day, _classPrivateFieldGet(_this, _day) - _this.month.length);

          _classPrivateFieldSet(_this, _month, (+_classPrivateFieldGet(_this, _month)) + 1);
        }

        if (!_classPrivateFieldGet(_this, _hour)) _classPrivateFieldSet(_this, _hour, 0);
        if (!_classPrivateFieldGet(_this, _minute)) _classPrivateFieldSet(_this, _minute, 0);
        if (!_classPrivateFieldGet(_this, _second)) _classPrivateFieldSet(_this, _second, 0);
        if (!_classPrivateFieldGet(_this, _millisecond)) _classPrivateFieldSet(_this, _millisecond, 0);
      }
    });

    _getWeekDays.set(this, {
      writable: true,
      value: function value() {
        return (_classPrivateFieldGet(_this, _custom).weekDays || _classPrivateFieldGet(_this, _locale).weekDays).map(function (_ref4, i) {
          var _ref5 = _slicedToArray(_ref4, 2),
              name = _ref5[0],
              shortName = _ref5[1];

          var index = i - _this.weekStartDayIndex;
          if (index < 0) index += 7;
          return {
            name: name,
            shortName: shortName,
            index: index,
            number: index + 1,
            toString: function toString() {
              return this.number.toString();
            },
            valueOf: function valueOf() {
              return this.number;
            }
          };
        });
      }
    });

    var obj = isObject(object) ? _objectSpread2({}, object) : object;
    var mustFix = true;
    if (!obj || typeof obj === "boolean") obj = {
      date: new Date()
    };
    if (!isObject(obj)) obj = {
      date: obj
    };
    if (Object.keys(obj).length === 0) return;
    if (isObject(obj.calendar)) _classPrivateFieldSet(this, _calendar, obj.calendar);
    if (isObject(obj.locale)) _classPrivateFieldSet(this, _locale, obj.locale);

    if (isNaN(obj.year) && isNaN(obj.month) && isNaN(obj.day) && !obj.date) {
      obj.date = new Date();
    }

    if (obj.date) {
      if (typeof obj.date === "string" && obj.format) _classPrivateFieldSet(this, _format, obj.format);
      this.setDate(obj.date);
      if (obj.calendar) this.convert(obj.calendar);
      mustFix = false;
    }

    delete obj.calendar;
    delete obj.locale;
    delete obj.date;

    for (var key in obj) {
      this.set(key, obj[key]);
    }

    if (_classPrivateFieldGet(this, _mustJumpFromZero).call(this)) _classPrivateFieldSet(this, _year, -1);
    if (mustFix) _classPrivateFieldGet(this, _fix).call(this);
  }

  _createClass(DateObject, [{
    key: "parse",
    value: function parse(date) {
      if (!date) return this;

      var format = _classPrivateFieldGet(this, _format);

      var digits = _classPrivateFieldGet(this, _locale).digits; //converting current digits to english


      var _iterator = _createForOfIteratorHelper(digits),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var digit = _step.value;
          date = date.replace(new RegExp(digit, "g"), digits.indexOf(digit));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (!format) {
        var regex = /(-?\d{2,4})?\W?([A-z]{3,9}|\d{1,2})?\W?(\d{1,2})?\W?(\d{1,2})?\W?(\d{1,2})?\W?(\d{1,2})?\W?(\d{1,3})?\W?(am|pm)?/;

        var _date$match = date.match(regex),
            _date$match2 = _toArray(_date$match),
            array = _date$match2.slice(1);

        var month = array[1];

        if (month) {
          if (/\d+/.test(month)) {
            month = toNumber(month) - 1;
          } else {
            month = this.months.findIndex(function ($month) {
              return new RegExp(month, "i").test($month.name);
            });
          }
        }

        array[1] = month;

        var _array$map = array.map(toNumber),
            _array$map2 = _slicedToArray(_array$map, 7),
            year = _array$map2[0],
            $month = _array$map2[1],
            day = _array$map2[2],
            hour = _array$map2[3],
            minute = _array$map2[4],
            second = _array$map2[5],
            millisecond = _array$map2[6];

        _classPrivateFieldSet(this, _year, year);

        _classPrivateFieldSet(this, _month, $month);

        _classPrivateFieldSet(this, _day, day);

        _classPrivateFieldSet(this, _hour, hour);

        _classPrivateFieldSet(this, _minute, minute);

        _classPrivateFieldSet(this, _second, second);

        _classPrivateFieldSet(this, _millisecond, millisecond);
      } else {
        var tokens = format.split(/[^\w\u0600-\u06FF]/),
            values = date.split(/[^\w\u0600-\u06FF]/);

        for (var i = 0; i < tokens.length; i++) {
          this.set.apply(this, _toConsumableArray(_classPrivateFieldGet(this, _getKeyValue).call(this, tokens[i], values[i])));
        }
      }

      var _classPrivateFieldGet2 = _slicedToArray(_classPrivateFieldGet(this, _locale).meridiems[1], 2),
          PM = _classPrivateFieldGet2[0],
          pm = _classPrivateFieldGet2[1];

      if (_classPrivateFieldGet(this, _hour) < 12 && (date.includes(PM) || date.includes(pm))) {
        _classPrivateFieldSet(this, _hour, _classPrivateFieldGet(this, _hour) + 12);
      }

      _classPrivateFieldGet(this, _fix).call(this);

      return this;
    }
  }, {
    key: "convert",
    value: function convert() {
      var calendar = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : gregorian;
      var locale = arguments.length > 1 ? arguments[1] : undefined;
      if (isObject(locale)) _classPrivateFieldSet(this, _locale, locale);

      if (!isObject(calendar) || calendar.name === _classPrivateFieldGet(this, _calendar).name) {
        return this;
      }

      var days = this.toJulianDay() - calendar.epoch;
      var target = new DateObject({
        calendar: calendar,
        year: calendar.guessYear(days, _classPrivateFieldGet(this, _year)),
        month: 1,
        day: 1
      });
      target.day += days - target.toDays();

      _classPrivateFieldSet(this, _year, target.year);

      _classPrivateFieldSet(this, _month, target.month.index);

      _classPrivateFieldSet(this, _day, target.day);

      _classPrivateFieldSet(this, _calendar, calendar);

      return this;
    }
  }, {
    key: "format",
    value: function format(_format2, ignoreList) {
      if (!this.isValid || _format2 && typeof _format2 !== "string") return "";
      if (!_format2) _format2 = _classPrivateFieldGet(this, _format) || "YYYY/MM/DD";
      if (!isArray(ignoreList)) ignoreList = [];
      ignoreList = ignoreList.concat(_classPrivateFieldGet(this, _ignoreList));
      ignoreList = ignoreList.filter(function (item) {
        if (typeof item !== "string") {
          console.warn("type of all items in the ignore list must be string, found", _typeof(item));
          return false;
        }

        return true;
      }).map(function (string) {
        return string.replace(/[*/+\-()[\]{}\s$^]/g, function (w) {
          return "\\" + w;
        });
      });
      var regex = new RegExp("".concat(ignoreList.join("|")).concat(ignoreList.length > 0 ? "|" : "", "YYYY|YY|MMMM|MMM|MM|M|WW|W|DDDD|DDD|DD|D|dddd|ddd|dd|d|HH|H|hh|h|mm|m|ss|s|SSS|SS|S|A|a|."), "g"),
          array = _format2.match(regex) || [],
          result = "";

      var _iterator2 = _createForOfIteratorHelper(array),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var item = _step2.value;
          var value = this.getValue(item);
          result += ignoreList.includes(item) ? item : value === 0 ? value : value || item;
        } //converting to locale digits

      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var digits = this.digits;
      return result.replace(/[0-9]/g, function (w) {
        return digits[w];
      });
    }
    /**
     * @deprecated
     */

  }, {
    key: "getProperty",
    value: function getProperty(key) {
      return this.getValue(key);
    }
  }, {
    key: "getValue",
    value: function getValue(key) {
      var pad = function pad(number) {
        return number < 10 ? "0" + number : number;
      };

      switch (key) {
        case "YYYY":
          return this.year;

        case "YY":
          return this.year.toString().substring(2, 4);

        case "MMMM":
          return this.month.name;

        case "MMM":
          return this.month.shortName;

        case "MM":
          return pad(this.month.number);

        case "M":
          return this.month.number;

        case "WW":
          return pad(this.weekOfYear);

        case "W":
          return this.weekOfYear;

        case "DDDD":
        case "DDD":
          return this.dayOfYear;

        case "DD":
          return pad(this.day);

        case "D":
          return this.day;

        case "HH":
          return pad(this.hour);

        case "H":
          return this.hour;

        case "dddd":
          return this.weekDay.name;

        case "ddd":
          return this.weekDay.shortName;

        case "dd":
          return pad(this.weekDay.number);

        case "d":
          return this.weekDay.number;

        case "hh":
          return pad(this.hour > 12 ? this.hour - 12 : this.hour || 12);

        case "h":
          return this.hour > 12 ? this.hour - 12 : this.hour || 12;

        case "mm":
          return pad(this.minute);

        case "m":
          return this.minute;

        case "ss":
          return pad(this.second);

        case "s":
          return this.second;

        case "SSS":
          return _classPrivateFieldGet(this, _millisecond) < 10 ? "00".concat(_classPrivateFieldGet(this, _millisecond)) : _classPrivateFieldGet(this, _millisecond) < 100 ? "0".concat(_classPrivateFieldGet(this, _millisecond)) : _classPrivateFieldGet(this, _millisecond);

        case "SS":
          return _classPrivateFieldGet(this, _millisecond) < 10 ? "00" : _classPrivateFieldGet(this, _millisecond) < 100 ? ("0" + _classPrivateFieldGet(this, _millisecond)).substring(2, 0) : _classPrivateFieldGet(this, _millisecond).toString().substring(0, 2);

        case "S":
          return _classPrivateFieldGet(this, _millisecond) < 10 ? "0" : _classPrivateFieldGet(this, _millisecond) < 100 ? "0" : _classPrivateFieldGet(this, _millisecond).toString().substring(0, 1);

        case "a":
          return this.hour >= 12 ? _classPrivateFieldGet(this, _locale).meridiems[1][1] : _classPrivateFieldGet(this, _locale).meridiems[0][1];

        case "A":
          return this.hour >= 12 ? _classPrivateFieldGet(this, _locale).meridiems[1][0] : _classPrivateFieldGet(this, _locale).meridiems[0][0];

        default:
          return "";
      }
    }
  }, {
    key: "setYear",
    value: function setYear(number) {
      this.year = number;
      return this;
    }
  }, {
    key: "setMonths",
    value: function setMonths(value) {
      this.months = value;
      return this;
    }
  }, {
    key: "setMonth",
    value: function setMonth(number) {
      this.month = number;
      return this;
    }
  }, {
    key: "setWeekDays",
    value: function setWeekDays(value) {
      this.weekDays = value;
      return this;
    }
  }, {
    key: "setDigits",
    value: function setDigits(value) {
      this.digits = value;
      return this;
    }
  }, {
    key: "setDay",
    value: function setDay(number) {
      this.day = number;
      return this;
    }
  }, {
    key: "setHour",
    value: function setHour(number) {
      this.hour = number;
      return this;
    }
  }, {
    key: "setMinute",
    value: function setMinute(number) {
      this.minute = number;
      return this;
    }
  }, {
    key: "setSecond",
    value: function setSecond(number) {
      this.second = number;
      return this;
    }
  }, {
    key: "setMillisecond",
    value: function setMillisecond(number) {
      this.millisecond = number;
      return this;
    }
  }, {
    key: "setFormat",
    value: function setFormat(format) {
      _classPrivateFieldSet(this, _format, format);

      return this;
    }
  }, {
    key: "setLocale",
    value: function setLocale(locale) {
      this.locale = locale;
      return this;
    }
  }, {
    key: "setCalendar",
    value: function setCalendar(calendar) {
      this.calendar = calendar;
      return this;
    }
  }, {
    key: "setDate",
    value: function setDate(date) {
      if (typeof date === "string") {
        if (_classPrivateFieldGet(this, _isoDate).test(date)) {
          date = new Date(date);
        } else {
          return this.parse(date);
        }
      }

      if (typeof date === "number") date = new Date(date);

      if (date instanceof Date) {
        _classPrivateFieldSet(this, _calendar, gregorian);

        _classPrivateFieldSet(this, _year, date.getFullYear());

        _classPrivateFieldSet(this, _month, date.getMonth());

        _classPrivateFieldSet(this, _day, date.getDate());

        _classPrivateFieldSet(this, _hour, date.getHours());

        _classPrivateFieldSet(this, _minute, date.getMinutes());

        _classPrivateFieldSet(this, _second, date.getSeconds());

        _classPrivateFieldSet(this, _millisecond, date.getMilliseconds());

        _classPrivateFieldSet(this, _isUTC, false);
      }

      if (date instanceof DateObject) {
        _classPrivateFieldSet(this, _year, date.year);

        _classPrivateFieldSet(this, _month, date.month.index);

        _classPrivateFieldSet(this, _day, date.day);

        _classPrivateFieldSet(this, _hour, date.hour);

        _classPrivateFieldSet(this, _minute, date.minute);

        _classPrivateFieldSet(this, _second, date.second);

        _classPrivateFieldSet(this, _millisecond, date.millisecond);

        _classPrivateFieldSet(this, _locale, date.locale);

        _classPrivateFieldSet(this, _format, date._format);

        _classPrivateFieldSet(this, _calendar, date.calendar);

        _classPrivateFieldSet(this, _isUTC, date.isUTC);

        _classPrivateFieldSet(this, _ignoreList, date.ignoreList);

        _classPrivateFieldSet(this, _custom, date.custom);
      }

      return this;
    }
  }, {
    key: "setIgnoreList",
    value: function setIgnoreList(ignoreList) {
      this.ignoreList = ignoreList;
      return this;
    }
  }, {
    key: "set",
    value: function set(key, value) {
      if (key === undefined || key === null) return this;

      if (isObject(key)) {
        var object = _objectSpread2({}, key);

        if (object.date) {
          this.setDate(object.date);
          delete object.date;
        }

        if (object.calendar) {
          this.convert(object.calendar);
          delete object.calendar;
        }

        if (object.locale) {
          this.setLocale(object.locale);
          delete object.locale;
        }

        _classPrivateFieldSet(this, _mustFix, false);

        for (var _key in object) {
          this.set(_key, object[_key]);
        }

        _classPrivateFieldSet(this, _mustFix, true);

        _classPrivateFieldGet(this, _fix).call(this);

        return this;
      }

      if (key === "format") key = "_format";

      try {
        this[key] = value;
      } catch (_unused) {}

      return this;
    }
  }, {
    key: "add",
    value: function add(duration, type) {
      duration = toNumber(duration);
      if (!duration || !type) return this;

      switch (type) {
        case "years":
        case "y":
          type = "year";
          break;

        case "months":
        case "M":
          type = "month";
          break;

        case "days":
        case "d":
          type = "day";
          break;

        case "hours":
        case "h":
          type = "hour";
          break;

        case "minutes":
        case "m":
          type = "minute";
          break;

        case "seconds":
        case "s":
          type = "second";
          break;

        case "milliseconds":
        case "ms":
          type = "millisecond";
          break;
      }

      this[type] += duration;
      return this;
    }
  }, {
    key: "subtract",
    value: function subtract(duration, type) {
      return this.add(-duration, type);
    }
  }, {
    key: "toFirstOfYear",
    value: function toFirstOfYear() {
      this.month = 1;
      this.day = 1;
      return this;
    }
  }, {
    key: "toLastOfYear",
    value: function toLastOfYear() {
      if (this.day >= 29) this.day = 29;
      this.month = 12;
      this.toLastOfMonth();
      return this;
    }
  }, {
    key: "toFirstOfMonth",
    value: function toFirstOfMonth() {
      _classPrivateFieldSet(this, _day, 1);

      return this;
    }
  }, {
    key: "toLastOfMonth",
    value: function toLastOfMonth() {
      _classPrivateFieldSet(this, _day, 0);

      _classPrivateFieldSet(this, _month, _classPrivateFieldGet(this, _month) + 1);

      _classPrivateFieldGet(this, _fix).call(this);

      return this;
    }
  }, {
    key: "toFirstOfWeek",
    value: function toFirstOfWeek() {
      this.day -= this.weekDay.index;
      return this;
    }
  }, {
    key: "toLastOfWeek",
    value: function toLastOfWeek() {
      this.day += 6 - this.weekDay.index;
      return this;
    }
  }, {
    key: "toFirstWeekOfYear",
    value: function toFirstWeekOfYear() {
      this.toFirstOfYear();
      if (this.weekDay.index === 0) return this;
      return this.toLastOfWeek().setDay(this.day + 1);
    }
  }, {
    key: "toLastWeekOfYear",
    value: function toLastWeekOfYear() {
      return this.toLastOfYear().toFirstOfWeek();
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.format();
    }
  }, {
    key: "toDate",
    value: function toDate() {
      var date = new DateObject(this);
      if (_classPrivateFieldGet(this, _calendar).name !== "gregorian") date.convert(gregorian);
      return new Date(date.year, date.month.index, date.day, date.hour, date.minute, date.second, date.millisecond);
    }
  }, {
    key: "toUTC",
    value: function toUTC() {
      if (!_classPrivateFieldGet(this, _isUTC)) {
        this.minute += this.toDate().getTimezoneOffset();

        _classPrivateFieldSet(this, _isUTC, true);
      }

      return this;
    }
  }, {
    key: "toUnix",
    value: function toUnix() {
      return this.unix;
    }
  }, {
    key: "toJulianDay",
    value: function toJulianDay() {
      return this.toDays() + _classPrivateFieldGet(this, _calendar).epoch;
    }
  }, {
    key: "toObject",
    value: function toObject() {
      return {
        year: _classPrivateFieldGet(this, _year),
        month: this.month,
        day: _classPrivateFieldGet(this, _day),
        weekDay: this.weekDay,
        hour: _classPrivateFieldGet(this, _hour),
        minute: _classPrivateFieldGet(this, _minute),
        second: _classPrivateFieldGet(this, _second),
        millisecond: _classPrivateFieldGet(this, _millisecond),
        weekOfYear: this.weekOfYear,
        dayOfYear: this.dayOfYear,
        daysLeft: this.daysLeft,
        calendar: _classPrivateFieldGet(this, _calendar),
        locale: _classPrivateFieldGet(this, _locale),
        format: _classPrivateFieldGet(this, _format) || "YYYY/MM/DD",
        ignoreList: _classPrivateFieldGet(this, _ignoreList)
      };
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.valueOf();
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      return this.toDate().valueOf();
    }
  }, {
    key: "toDays",
    value: function toDays() {
      if (!this.isValid) return;
      return _classPrivateFieldGet(this, _calendar).getAllDays(this);
    }
    /**
     * @deprecated
     */

  }, {
    key: "dayOfBeginning",
    get: function get() {
      return this.toDays();
    }
  }, {
    key: "dayOfYear",
    get: function get() {
      if (!this.isValid) return;
      return _classPrivateFieldGet(this, _calendar).getDayOfYear(this);
    }
  }, {
    key: "weekOfYear",
    get: function get() {
      if (!this.isValid) return;
      return ~~(this.dayOfYear / 7) + 1;
    }
  }, {
    key: "daysLeft",
    get: function get() {
      if (!this.isValid) return;

      var yearLength = _classPrivateFieldGet(this, _calendar).yearLength,
          days = this.isLeap ? yearLength + 1 : yearLength;

      return days - this.dayOfYear;
    }
  }, {
    key: "year",
    get: function get() {
      return _classPrivateFieldGet(this, _year);
    },
    set: function set(value) {
      _classPrivateFieldSet(this, _year, toNumber(value));

      _classPrivateFieldGet(this, _fix).call(this);
    }
  }, {
    key: "month",
    get: function get() {
      return this.months[_classPrivateFieldGet(this, _month)] || {};
    },
    set: function set(value) {
      var _ref6;

      value = (_ref6 = toNumber(value.valueOf()) - 1) !== null && _ref6 !== void 0 ? _ref6 : undefined;

      _classPrivateFieldSet(this, _month, value);

      if (notInRange(value, 0, 11)) _classPrivateFieldGet(this, _fix).call(this);
    }
  }, {
    key: "monthIndex",
    get: function get() {
      return _classPrivateFieldGet(this, _month);
    }
  }, {
    key: "day",
    get: function get() {
      return _classPrivateFieldGet(this, _day);
    },
    set: function set(value) {
      value = toNumber(value);

      _classPrivateFieldSet(this, _day, value);

      if (notInRange(value, 1, 28)) _classPrivateFieldGet(this, _fix).call(this);
    }
  }, {
    key: "weekDay",
    get: function get() {
      if (!this.isValid) return {};
      var index = (this.toJulianDay() + 3) % 7;
      return _classPrivateFieldGet(this, _getWeekDays).call(this)[index];
    }
  }, {
    key: "hour",
    get: function get() {
      return _classPrivateFieldGet(this, _hour);
    },
    set: function set(value) {
      value = toNumber(value);

      _classPrivateFieldSet(this, _hour, value);

      if (notInRange(value, 0, 23)) _classPrivateFieldGet(this, _fix).call(this);
    }
  }, {
    key: "minute",
    get: function get() {
      return _classPrivateFieldGet(this, _minute);
    },
    set: function set(value) {
      value = toNumber(value);

      _classPrivateFieldSet(this, _minute, value);

      if (notInRange(value, 0, 59)) _classPrivateFieldGet(this, _fix).call(this);
    }
  }, {
    key: "second",
    get: function get() {
      return _classPrivateFieldGet(this, _second);
    },
    set: function set(value) {
      value = toNumber(value);

      _classPrivateFieldSet(this, _second, value);

      if (notInRange(value, 0, 59)) _classPrivateFieldGet(this, _fix).call(this);
    }
  }, {
    key: "millisecond",
    get: function get() {
      return _classPrivateFieldGet(this, _millisecond);
    },
    set: function set(value) {
      value = toNumber(value);

      _classPrivateFieldSet(this, _millisecond, value);

      if (notInRange(value, 0, 999)) _classPrivateFieldGet(this, _fix).call(this);
    }
  }, {
    key: "months",
    get: function get() {
      var monthLengths = _classPrivateFieldGet(this, _calendar).getMonthLengths(this.isLeap);

      var months = (_classPrivateFieldGet(this, _custom).months || _classPrivateFieldGet(this, _locale).months).map(function (_ref7, index) {
        var _ref8 = _slicedToArray(_ref7, 2),
            name = _ref8[0],
            shortName = _ref8[1];

        return {
          name: name,
          shortName: shortName,
          length: monthLengths[index],
          index: index,
          number: index + 1,
          toString: function toString() {
            return this.number.toString();
          },
          valueOf: function valueOf() {
            return this.number;
          }
        };
      });

      return months;
    },
    set: function set(value) {
      if (!value) return delete _classPrivateFieldGet(this, _custom).months;
      var isValidValue = isArray(value) && value.length === 12 && value.every(function (array) {
        return isArray(array) && array.length === 2 && array.every(function (string) {
          return typeof string === "string";
        });
      });
      if (!isValidValue) return;
      _classPrivateFieldGet(this, _custom).months = value;
    }
  }, {
    key: "weekDays",
    get: function get() {
      return _classPrivateFieldGet(this, _getWeekDays).call(this).sort(function (a, b) {
        return a.index - b.index;
      });
    },
    set: function set(value) {
      if (!value) return delete _classPrivateFieldGet(this, _custom).weekDays;
      var isValidValue = isArray(value) && value.length === 7 && value.every(function (array) {
        return isArray(array) && array.length === 2 && array.every(function (string) {
          return typeof string === "string";
        });
      });
      if (!isValidValue) return;
      _classPrivateFieldGet(this, _custom).weekDays = value;
    }
  }, {
    key: "leaps",
    get: function get() {
      return _classPrivateFieldGet(this, _calendar).getLeaps(_classPrivateFieldGet(this, _year));
    }
  }, {
    key: "calendar",
    get: function get() {
      return _classPrivateFieldGet(this, _calendar);
    },
    set: function set(calendar) {
      this.convert(calendar);
    }
  }, {
    key: "locale",
    get: function get() {
      return _classPrivateFieldGet(this, _locale);
    },
    set: function set(locale) {
      if (locale === void 0) {
        locale = en;
      }

      if (isObject(locale)) _classPrivateFieldSet(this, _locale, locale);
    }
  }, {
    key: "custom",
    get: function get() {
      return _classPrivateFieldGet(this, _custom);
    }
  }, {
    key: "meridiems",
    get: function get() {
      return _classPrivateFieldGet(this, _locale).meridiems;
    }
  }, {
    key: "digits",
    get: function get() {
      return _classPrivateFieldGet(this, _custom).digits || _classPrivateFieldGet(this, _locale).digits;
    },
    set: function set(value) {
      if (!value) return delete _classPrivateFieldGet(this, _custom).digits;
      var isValidValue = isArray(value) && value.length === 10;
      if (!isValidValue) return;
      _classPrivateFieldGet(this, _custom).digits = value;
    }
  }, {
    key: "_format",
    get: function get() {
      return _classPrivateFieldGet(this, _format);
    },
    set: function set(format) {
      if (typeof format === "string") _classPrivateFieldSet(this, _format, format);
    }
  }, {
    key: "isLeap",
    get: function get() {
      return _classPrivateFieldGet(this, _calendar).isLeap(_classPrivateFieldGet(this, _year));
    }
  }, {
    key: "isValid",
    get: function get() {
      return !isNaN(_classPrivateFieldGet(this, _year)) && !isNaN(_classPrivateFieldGet(this, _month)) && !isNaN(_classPrivateFieldGet(this, _day));
    }
  }, {
    key: "isUTC",
    get: function get() {
      return _classPrivateFieldGet(this, _isUTC);
    }
  }, {
    key: "unix",
    get: function get() {
      return (this.valueOf() - this.millisecond) / 1000;
    }
  }, {
    key: "ignoreList",
    get: function get() {
      return _classPrivateFieldGet(this, _ignoreList);
    },
    set: function set(ignoreList) {
      if (isArray(ignoreList)) _classPrivateFieldSet(this, _ignoreList, ignoreList);
    }
  }, {
    key: "weekStartDayIndex",
    get: function get() {
      return _classPrivateFieldGet(this, _calendar).weekStartDayIndex;
    },
    set: function set(index) {
      index = toNumber(index);
      if (index === undefined) return;
      _classPrivateFieldGet(this, _calendar).weekStartDayIndex = Math.abs(index) % 7;
    }
  }, {
    key: "date",
    set: function set(date) {
      this.setDate(date);
    }
  }]);

  return DateObject;
}();

var Date_Object = DateObject;

module.exports = Date_Object;
