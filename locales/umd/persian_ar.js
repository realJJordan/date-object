(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.persian_ar = factory());
}(this, (function () { 'use strict';

  var persian_ar = {
    name: "persian_ar",
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
      ["السّبت", "سب"],
      ["الأحد", "اح"],
      ["الإثنينِ", "ثن"],
      ["الثلاثاء", "ثل"],
      ["الأربعاء", "ار"],
      ["الخميس", "خم"],
      ["الجمعة", "جم"],
    ],
    digits: ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"],
    meridiems: [
      ["قبل الظهر", "ق.ظ"],
      ["بعد الظهر", "ب.ظ"],
    ],
  };

  return persian_ar;

})));
