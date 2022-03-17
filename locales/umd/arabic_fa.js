(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.arabic_fa = factory());
}(this, (function () { 'use strict';

  var arabic_fa = {
    name: "arabic_fa",
    months: [
      ["محرم", "محرم"],
      ["صفر", "صفر"],
      ["ربیع الاول", "ربیع الاول"],
      ["ربیع الثانی", "ربیع الثانی"],
      ["جمادی الاول", "جمادی الاول"],
      ["جمادی الثانی", "جمادی الثانی"],
      ["رجب", "رجب"],
      ["شعبان", "شعبان"],
      ["رمضان", "رمضان"],
      ["شوال", "شوال"],
      ["ذیقعده ", "ذیقعده"],
      ["ذیحجه", "ذیحجه"],
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

  return arabic_fa;

})));
