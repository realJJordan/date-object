(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.gregorian_en = factory());
}(this, (function () { 'use strict';

  var gregorian_en = {
    name: "gregorian_en",
    months: [
      ["January", "Jan"],
      ["February", "Feb"],
      ["March", "Mar"],
      ["April", "Apr"],
      ["May", "May"],
      ["June", "Jun"],
      ["July", "Jul"],
      ["August", "Aug"],
      ["September", "Sep"],
      ["October", "Oct"],
      ["November", "Nov"],
      ["December", "Dec"],
    ],
    weekDays: [
      ["Saturday", "Sat"],
      ["Sunday", "Sun"],
      ["Monday", "Mon"],
      ["Tuesday", "Tue"],
      ["Wednesday", "Wed"],
      ["Thursday", "Thu"],
      ["Friday", "Fri"],
    ],
    digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    meridiems: [
      ["AM", "am"],
      ["PM", "pm"],
    ],
  };

  return gregorian_en;

})));
