(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.arabic_hi = factory());
}(this, (function () { 'use strict';

  var arabic_hi = {
    name: "arabic_hi",
    months: [
      ["मुहर्रम", "मुहर्रम"],
      ["सफर", "सफर"],
      ["राबी प्रथम", "राबी प्रथम"],
      ["राबी द्वितीय", "राबी द्वितीय"],
      ["जुम्डा प्रथम", "जुम्डा प्रथम"],
      ["जुम्डा द्वितीय", "जुम्डा द्वितीय"],
      ["रजब", "रजब"],
      ["शावन", "शावन"],
      ["रमजान", "रमजान"],
      ["शव्व्ल", "शव्व्ल"],
      ["जिल-क्दाह ", "जिल-क्दाह"],
      ["जिल्-हिज्जाह", "जिल्-हिज्जाह"],
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

  return arabic_hi;

})));
