import {jsx as $hgUW1$jsx} from "react/jsx-runtime";
import "react";
import $hgUW1$personareact from "persona-react";
import $hgUW1$styledcomponents from "styled-components";

function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $a69491ea5a126553$exports = {};
var $897b8a7aac8d9e0e$exports = {};
var $d03a586c80f5907f$exports = {};

$parcel$export($d03a586c80f5907f$exports, "TwilioComplianceEmbed", () => $d03a586c80f5907f$export$fc241e6f86209970);




const $d03a586c80f5907f$var$PAGE_CHANGE_EVENT = "page-change";
const $d03a586c80f5907f$var$TWILIO_INQUIRY_COMPLETED_PAGE = "twilio_inquiry_completed";
const $d03a586c80f5907f$export$fc241e6f86209970 = ({ inquiryId: inquiryId, inquirySessionToken: inquirySessionToken, onComplete: onComplete = ()=>{}, onCancel: onCancel = ()=>{}, onError: onError = ()=>{}, onReady: onReady = ()=>{}, onInquirySubmitted: onInquirySubmitted = ()=>{}, widgetPadding: widgetPadding })=>{
    // The Incredible Singing Cat solution for responsive iframes
    // See https://stackoverflow.com/a/29784327
    const Container = (0, $hgUW1$styledcomponents).div`
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    padding-top: 25px;
    height: 0;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `;
    return /*#__PURE__*/ (0, $hgUW1$jsx)(Container, {
        children: /*#__PURE__*/ (0, $hgUW1$jsx)((0, $hgUW1$personareact), {
            inquiryId: inquiryId,
            sessionToken: inquirySessionToken,
            onComplete: onComplete,
            onCancel: onCancel,
            onError: onError,
            onReady: onReady,
            widgetPadding: widgetPadding,
            onEvent: (event, metaData)=>{
                if (event === $d03a586c80f5907f$var$PAGE_CHANGE_EVENT && (metaData?.name)?.startsWith($d03a586c80f5907f$var$TWILIO_INQUIRY_COMPLETED_PAGE)) onInquirySubmitted();
            }
        })
    });
};


$parcel$exportWildcard($897b8a7aac8d9e0e$exports, $d03a586c80f5907f$exports);


$parcel$exportWildcard($a69491ea5a126553$exports, $897b8a7aac8d9e0e$exports);




export {$d03a586c80f5907f$export$fc241e6f86209970 as TwilioComplianceEmbed};
//# sourceMappingURL=module.js.map
