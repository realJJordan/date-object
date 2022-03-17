(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.arabic_ar = factory());
}(this, (function () { 'use strict';

  var arabic_ar = {
    name: "arabic_ar",
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

  return arabic_ar;

})));
