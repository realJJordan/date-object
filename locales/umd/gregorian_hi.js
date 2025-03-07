(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.gregorian_hi = factory());
}(this, (function () { 'use strict';

  var gregorian_hi = {
    name: "gregorian_hi",
    months: [
      ["जनवरी", "जन"],
      ["फ़रवरी", "फ़र"],
      ["मार्च", "मार्च"],
      ["अप्रैल", "अप्रैल"],
      ["मई", "मई"],
      ["जून", "जून"],
      ["जुलाई", "जुल"],
      ["अगस्त", "अग"],
      ["सितंबर", "सित"],
      ["अक्तूबर", "अक्तू"],
      ["नवंबर", "नव"],
      ["दिसंबर", "दिस"],
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

  return gregorian_hi;

})));
