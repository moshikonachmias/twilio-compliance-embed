var $8zHUo$reactjsxruntime = require("react/jsx-runtime");
require("react");
var $8zHUo$persona = require("persona");
var $8zHUo$styledcomponents = require("styled-components");

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
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $5dcc767f924b770d$exports = {};
var $89ba01afe3b1ad87$exports = {};
var $967b7369315e4395$exports = {};

$parcel$export($967b7369315e4395$exports, "TwilioComplianceEmbed", () => $967b7369315e4395$export$fc241e6f86209970);




const $967b7369315e4395$export$fc241e6f86209970 = ({ inquiryId: inquiryId, inquirySessionToken: inquirySessionToken, onComplete: onComplete = ()=>{}, onCancel: onCancel = ()=>{}, onError: onError = ()=>{}, onReady: onReady = ()=>{} })=>{
    // The Incredible Singing Cat solution for responsive iframes
    // See https://stackoverflow.com/a/29784327
    const Container = (0, ($parcel$interopDefault($8zHUo$styledcomponents))).div`
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
    return /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)(Container, {
        children: /*#__PURE__*/ (0, $8zHUo$reactjsxruntime.jsx)((0, $8zHUo$persona.Inquiry), {
            inquiryId: inquiryId,
            sessionToken: inquirySessionToken,
            onComplete: onComplete,
            onCancel: onCancel,
            onError: onError,
            onReady: onReady
        })
    });
};


$parcel$exportWildcard($89ba01afe3b1ad87$exports, $967b7369315e4395$exports);


$parcel$exportWildcard($5dcc767f924b770d$exports, $89ba01afe3b1ad87$exports);


$parcel$exportWildcard(module.exports, $5dcc767f924b770d$exports);


//# sourceMappingURL=main.js.map
