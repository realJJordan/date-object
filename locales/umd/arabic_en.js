(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.arabic_en = factory());
}(this, (function () { 'use strict';

  var arabic_en = {
    name: "arabic_en",
    months: [
      ["Muharram", "Mu"],
      ["Safar", "Sa"],
      ["Rabi`al-Awwal", "RI"],
      ["Rabi`ath-Thani", "RII"],
      ["Jumada l-Ula", "JI"],
      ["Jumada t-Tania", "JII"],
      ["Rajab", "Ra"],
      ["Sha`ban", "Sh"],
      ["Ramadan", "Ra"],
      ["Shawwal", "Sh"],
      ["Dhu l-Qa`da ", "DhQ"],
      ["Dhu l-Hijja", "DhH"],
    ],
    weekDays: [
      ["as-sabt", "Sab"],
      ["al-'ahad", "Aha"],
      ["al-'ithnayn", "Ith"],
      ["ath-thalatha", "Tha"],
      ["al-'arb`a'", "Arb"],
      ["al-khamis", "Kha"],
      ["al-jum`a", "Jum"],
    ],
    digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    meridiems: [
      ["AM", "am"],
      ["PM", "pm"],
    ],
  };

  return arabic_en;

})));
