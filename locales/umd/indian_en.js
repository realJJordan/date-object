(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.indian_en = factory());
}(this, (function () { 'use strict';

  var indian_en = {
    name: "indian_en",
    months: [
      ["Chaitra", "Cha"],
      ["Vaishakh", "Vai"],
      ["Jyaishtha", "Jya"],
      ["Ashadha", "Ash"],
      ["Shravana", "Shr"],
      ["Bhadrapad", "Bha"],
      ["Ashwin", "Ash"],
      ["Kartik", "Kar"],
      ["Agrahayana", "Agr"],
      ["Paush", "Pau"],
      ["Magh", "Mag"],
      ["Phalgun", "Pha"],
    ],
    weekDays: [
      ["Sanivara", "San"],
      ["Ravivara", "Rav"],
      ["Somavara", "Som"],
      ["Mangalavara", "Man"],
      ["Budhavara", "Bud"],
      ["Brihaspatvara", "Bri"],
      ["Sukravara", "Suk"],
    ],
    digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    meridiems: [
      ["AM", "am"],
      ["PM", "pm"],
    ],
  };

  return indian_en;

})));
