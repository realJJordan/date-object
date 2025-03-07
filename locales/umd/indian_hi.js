(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.indian_hi = factory());
}(this, (function () { 'use strict';

  var indian_hi = {
    name: "indian_hi",
    months: [
      ["चैत्र", "चैत्र"],
      ["वैशाख", "वैशाख"],
      ["ज्येष्ठ", "ज्येष्ठ"],
      ["आषाढ़", "आषाढ़"],
      ["श्रावण", "श्रावण"],
      ["भाद्रपद", "भाद्रपद"],
      ["आश्विन", "आश्विन"],
      ["कार्तिक", "कार्तिक"],
      ["अग्रहायण", "अग्रहायण"],
      ["पौष", "पौष"],
      ["माघ", "माघ"],
      ["फाल्गुन", "फाल्गुन"],
    ],
    weekDays: [
      ["शनिवार", "शनि"],
      ["रविवार", "रवि"],
      ["सोमवार", "सोम"],
      ["मंगलवार", "मंगल"],
      ["बुधवार", "बुध"],
      ["गुरुवार", "गुरु"],
      ["शुक्रवार", "शुक्र"],
    ],
    digits: ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"],
    meridiems: [
      ["दोपहर से पहले", "पूर्वाह्न"],
      ["मध्याह्न के बाद", "अपराह्न"],
    ],
  };

  return indian_hi;

})));
