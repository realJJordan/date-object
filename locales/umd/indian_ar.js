(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.indian_ar = factory());
}(this, (function () { 'use strict';

  var indian_ar = {
    name: "indian_ar",
    months: [
      ["شيترا", "شیت"],
      ["فيشاخ", "فیش"],
      ["جیشتا", "جیش"],
      ["أشاد", "أشا"],
      ["شرافان", "شرا"],
      ["بهادرابادا", "بها"],
      ["اشوين", "اشو"],
      ["كارتيك", "کار"],
      ["أجراهيان", "اجر"],
      ["بوش", "بوش"],
      ["ماک", "ماک"],
      ["فالغون", "فال"],
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

  return indian_ar;

})));
