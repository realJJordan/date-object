(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.gregorian_fa = factory());
}(this, (function () { 'use strict';

  var gregorian_fa = {
    name: "gregorian_fa",
    months: [
      ["ژانویه", "ژان"],
      ["فوریه", "فور"],
      ["مارس", "ما"],
      ["آوریل", "آور"],
      ["مه", "مه"],
      ["ژوئن", "ژو"],
      ["ژوئیه", "ژوئیه"],
      ["اوت", "اوت"],
      ["سپتامبر", "سپ"],
      ["اکتبر", "اک"],
      ["نوامبر", "نو"],
      ["دسامبر", "دس"],
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

  return gregorian_fa;

})));
