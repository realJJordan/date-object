(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.persian_en = factory());
}(this, (function () { 'use strict';

  var persian_en = {
    name: "persian_en",
    months: [
      ["Farvardin", "Far"],
      ["Ordibehesht", "Ord"],
      ["Khordad", "Kho"],
      ["Tir", "Tir"],
      ["Mordad", "Mor"],
      ["Shahrivar", "Sha"],
      ["Mehr", "Meh"],
      ["Aban", "Aba"],
      ["Azar", "Aza"],
      ["Dey", "Dey"],
      ["Bahman", "Bah"],
      ["Esfand", "Esf"],
    ],
    weekDays: [
      ["Shanbeh", "Sha"],
      ["YekShanbeh", "Yek"],
      ["Doshanbeh", "Do"],
      ["Seshanbeh", "Se"],
      ["Chaharshanbeh", "Cha"],
      ["Panjshanbeh", "Pan"],
      ["Jom'eh", "Jom"],
    ],
    digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    meridiems: [
      ["AM", "am"],
      ["PM", "pm"],
    ],
  };

  return persian_en;

})));
