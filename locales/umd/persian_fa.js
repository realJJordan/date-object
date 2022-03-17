(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.persian_fa = factory());
}(this, (function () { 'use strict';

  var persian_fa = {
    name: "persian_fa",
    months: [
      ["فروردین", "فر"],
      ["اردیبهشت", "ار"],
      ["خرداد", "خرد"],
      ["تیر", "تیر"],
      ["مرداد", "مر"],
      ["شهریور", "شه"],
      ["مهر", "مه"],
      ["آبان", "آبا"],
      ["آذر", "آذ"],
      ["دی", "دی"],
      ["بهمن", "بهم"],
      ["اسفند", "اسف"],
    ],
    weekDays: [
      ["شنبه", "شن"],
      ["یکشنبه", "یک"],
      ["دوشنبه", "دو"],
      ["سه شنبه", "سه"],
      ["چهارشنبه", "چهار"],
      ["پنجشنبه", "پنج"],
      ["جمعه", "جم"],
    ],
    digits: ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"],
    meridiems: [
      ["قبل از ظهر", "ق.ظ"],
      ["بعد از ظهر", "ب.ظ"],
    ],
  };

  return persian_fa;

})));
