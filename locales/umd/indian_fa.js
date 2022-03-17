(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.indian_fa = factory());
}(this, (function () { 'use strict';

  var indian_fa = {
    name: "indian_fa",
    months: [
      ["چیتره", "چیت"],
      ["ویشاکهه", "ویش"],
      ["جییشته", "جیش"],
      ["آشادهه", "آشا"],
      ["شراونه", "شرا"],
      ["بهادره", "بها"],
      ["آشوین", "آشو"],
      ["کارتیکه", "کار"],
      ["اگرهینه", "اگر"],
      ["پاوشه", "پاو"],
      ["ماگهه", "ماگ"],
      ["پهالگونه", "پها"],
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

  return indian_fa;

})));
