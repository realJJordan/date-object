(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.persian_hi = factory());
}(this, (function () { 'use strict';

  var persian_hi = {
    name: "persian_hi",
    months: [
      ["फर्वादिन", "फर्वादिन"],
      ["ओर्दिवेहेस्ट", "ओर्दिवेहेस्ट"],
      ["खोरर्दाद", "खोरर्दाद"],
      ["टिर", "टिर"],
      ["मोरदाद", "मोरदाद"],
      ["शाहरीवर्", "शाहरीवर्"],
      ["मेहर", "मेहर"],
      ["अवन", "अवन"],
      ["अज़र", "अज़र"],
      ["डे", "डे"],
      ["बहमन", "बहमन"],
      ["ईस्फन्द्", "ईस्फन्द्"],
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

  return persian_hi;

})));
