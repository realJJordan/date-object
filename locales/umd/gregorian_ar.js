(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.gregorian_ar = factory());
}(this, (function () { 'use strict';

  var gregorian_ar = {
    name: "gregorian_ar",
    months: [
      ["يناير", "ينا"],
      ["فبراير", "فبر"],
      ["مارس", "ما"],
      ["إبريل", "إبر"],
      ["مايو", "ما"],
      ["يونيو", "يو"],
      ["يوليو", "يوليو"],
      ["أغسطس", "أغس"],
      ["سبتمبر", "سب"],
      ["أكتوبر", "اک"],
      ["نوفمبر", "نو"],
      ["ديسمبر", "دس"],
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

  return gregorian_ar;

})));
