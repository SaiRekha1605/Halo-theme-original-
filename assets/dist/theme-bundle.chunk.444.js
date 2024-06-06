"use strict";(self.webpackChunkHalo_One=self.webpackChunkHalo_One||[]).push([[444],{66755:function(t,e,r){function i(t){return"string"==typeof t&&0!==t.length}r.d(e,{Z:function(){return i}})},99706:function(t,e,r){r.d(e,{M:function(){return a}});var i="translations",n=function(t){return!!Object.keys(t[i]).length},a=function(t){var e=function(){for(var t=0;t<arguments.length;t++){var e=JSON.parse(t<0||arguments.length<=t?void 0:arguments[t]);if(n(e))return e}}(t.validationDictionaryJSON,t.validationFallbackDictionaryJSON,t.validationDefaultDictionaryJSON),r=Object.values(e[i]);return Object.keys(e[i]).map((function(t){return t.split(".").pop()})).reduce((function(t,e,i){return t[e]=r[i],t}),{})}},70444:function(t,e,r){r.r(e),r.d(e,{default:function(){return s}});var i=r(49230),n=r(40097),a=r(66755),c=r(73609),o=r(99706),f=r(67313),u=r(42066),l=r(44505),m=r(55825);function p(t,e){return p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},p(t,e)}var s=function(t){var e,r;function i(e){var r;(r=t.call(this,e)||this).validationDictionary=(0,o.M)(e);var i=m("#gift-certificate-balance"),a=m("#gift-certificate-form"),p=a.find('input[name="certificate_amount"]'),s=(0,n.Z)({submit:'#gift-certificate-form input[type="submit"]',delay:300,tap:f.kk});if(p.length){var d=a.find('input[name="certificate_amount"]'),g=d.data("min"),v=d.data("minFormatted"),h=d.data("max"),y=d.data("maxFormatted");s.add({selector:'#gift-certificate-form input[name="certificate_amount"]',validate:function(t,e){var r=Number(e);r||t(!1),t(r>=g&&r<=h)},errorMessage:function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];var n=t;return["[MIN]","[MAX]"].forEach((function(t,e){n=n.includes(t)?n.replace(t,r[e]):n})),n}(r.validationDictionary.certificate_amount_range,v,y)})}if(s.add([{selector:'#gift-certificate-form input[name="to_name"]',validate:function(t,e){t(function(t){return t.length}(e))},errorMessage:r.context.toName},{selector:'#gift-certificate-form input[name="to_email"]',validate:function(t,e){t(function(){return c.Z.email.apply(c.Z,arguments)}(e))},errorMessage:r.context.toEmail},{selector:'#gift-certificate-form input[name="from_name"]',validate:function(t,e){t(function(t){return t.length}(e))},errorMessage:r.context.fromName},{selector:'#gift-certificate-form input[name="from_email"]',validate:function(t,e){t(function(){return c.Z.email.apply(c.Z,arguments)}(e))},errorMessage:r.context.fromEmail},{selector:'#gift-certificate-form input[name="certificate_theme"]:first-of-type',triggeredBy:'#gift-certificate-form input[name="certificate_theme"]',validate:function(t){t("string"==typeof a.find('input[name="certificate_theme"]:checked').val())},errorMessage:r.context.certTheme},{selector:'#gift-certificate-form input[name="agree"]',validate:function(t){t(a.find('input[name="agree"]').get(0).checked)},errorMessage:r.context.agreeToTerms},{selector:'#gift-certificate-form input[name="agree2"]',validate:function(t){t(a.find('input[name="agree2"]').get(0).checked)},errorMessage:r.context.agreeToTerms}]),i.length){var _=r.checkCertBalanceValidator(i);i.on("submit",(function(){if(_.performCheck(),!_.areAll("valid"))return!1}))}return a.on("submit",(function(t){if(s.performCheck(),!s.areAll("valid"))return t.preventDefault()})),m("#gift-certificate-preview").click((function(t){if(t.preventDefault(),s.performCheck(),s.areAll("valid")){var e=(0,l._Z)(),i=m(t.currentTarget).data("previewUrl")+"&"+a.serialize();e.open(),u.hi.getPage(i,{},(function(t,i){if(t)return e.updateContent(r.context.previewError);e.updateContent(i,{wrap:!0})}))}})),r}return r=t,(e=i).prototype=Object.create(r.prototype),e.prototype.constructor=e,p(e,r),i.prototype.checkCertBalanceValidator=function(t){var e=(0,n.Z)({submit:t.find('input[type="submit"]'),tap:f.kk});return e.add({selector:t.find('input[name="giftcertificatecode"]'),validate:function(t,e){t((0,a.Z)(e))},errorMessage:this.validationDictionary.invalid_gift_certificate}),e},i}(i.Z)}}]);
//# sourceMappingURL=theme-bundle.chunk.444.js.map
