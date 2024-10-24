(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6670],{85843:function(e,r,t){"use strict";var n=t(93967),o=t.n(n);t(67294);var i=t(85893);r.Z=function(e){var r=e.children,t=e.className;return(0,i.jsx)("div",{className:o()("container text-xs-center m-y-4",t),children:r})}},50642:function(e,r,t){"use strict";var n=t(83443);r.Z=(0,n.defineMessages)({goToHomepage:{id:"login.logo.homepage_link_title",defaultMessage:"Go to homepage"}})},97683:function(e,r,t){"use strict";t.d(r,{Z:function(){return v}});var n=t(15977),o=t(12025),i=t(79600),a=t(19845),s=t.n(a);t(67294);var c=t(86896),u=t(84826),l=t(96141),g=t(85843),d=t(50642),f=t(73029),p=t.n(f),m=t(85893),O=s().bind(p()),v=function(e){var r=e.inverted,t=e.logoType,a=e.children,s=e.onClose,f=e.success,p=(0,c.Z)(),v=(0,i.Fg)().screenMode,h=(0,u.X)();return(0,m.jsx)(i.f6,{theme:f?"forest-green":"personal",screenMode:v,children:(0,m.jsxs)("div",{className:O("layout"),children:[(0,m.jsx)(n.Z,{logo:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("a",{href:"/",onClick:function(){return(0,l.c)()},title:p.formatMessage(d.Z.goToHomepage),children:(0,m.jsx)(o.Z,{inverse:r,type:t})}),h&&(0,m.jsx)("div",{className:"badge d-block",children:"TEST ENVIRONMENT"})]}),onClose:s}),(0,m.jsx)(g.Z,{className:"container--narrow",children:a})]})})}},8926:function(e,r,t){"use strict";t.d(r,{Z:function(){return p}});var n=t(59499),o=t(85241),i=t(9008),a=t.n(i),s=t(67294),c=t(86896),u=t(59191),l=function(e,r){(0,u.Z0)(e,r),(0,u.qv)({flow:e,state:"Started",properties:r})},g=t(85893);function d(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function f(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?d(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var p=function(e){var r=e.title,t=e.name,n=e.eventProperties,i=e.children,u=(0,o.Ux)().guestId;(0,s.useEffect)(function(){l(t,f(f({},n),{},{"Guest ID":u}))},[]);var d=(0,c.Z)();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a(),{children:(0,g.jsx)("title",{children:d.formatMessage(r)})}),i]})}},19410:function(e,r){"use strict";r.Z=function(e,r){var t,n=new URLSearchParams(null===(t=r.hash.split("#"))||void 0===t?void 0:t[1]),o=new URLSearchParams(r.search);return n.get(e)||o.get(e)}},64827:function(e,r,t){"use strict";t.d(r,{Z:function(){return u}});var n=t(59499),o=t(81046);t(67294);var i=t(16835),a=function(e){try{var r=Intl.getCanonicalLocales(e.replace("_","-"));return(0,i.Z)(r,1)[0]||"en"}catch(e){return"en"}},s=t(85893);function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}var u=function(e){var r=e.locale,t=e.translations,i=e.children;return(0,s.jsx)(o.Z,{i18n:{locale:a(r),messages:function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}({},t)},children:i})}},63322:function(e,r,t){"use strict";t.d(r,{S6:function(){return f},M7:function(){return g},wi:function(){return l}});var n,o=t(87066),i=t(11752),a=t.n(i),s=t(67294),c=a()().publicRuntimeConfig,u=function(e){var r=(0,s.useRef)(!1);return function(){r.current||(r.current=!0,e())}};function l(e){return u(function(){d(e,"start")})}function g(e){return u(function(r){d(e,"complete",r)})}function d(e,r,t){var n="".concat(c.localApiUrl,"/flow-").concat(r),i={flowName:e,redirectPath:t};if(navigator.sendBeacon){var a=JSON.stringify(i);return navigator.sendBeacon(n,a)}return o.Z.post(n,i)}var f=((n={}).LOGIN="login",n.SOCIAL_CONNECT="social_connect",n.REGISTER="register",n.FETCH_SIGNUP="fetch_signup",n.RESET_PASSWORD="reset_password",n.REVIEW_SUSPICIOUS_LOGIN="review_suspicious_login",n.CHANGE_EMAIL="change_email",n.SET_PASSWORD="set_password",n.MFA_ONBOARDING="mfa_onboarding",n.BACKUP_PHONE_NUMBER_ONBOARDING="backup_phone_number_onboarding",n.REACTIVATE_ACCOUNT="reactivate_account",n.CHANGE_PHONE_NUMBER="change_phone_number",n.EMAIL_CHECKPOINT="email_checkpoint",n.LOGOUT="logout",n);f.LOGIN,f.REGISTER,f.RESET_PASSWORD,f.REVIEW_SUSPICIOUS_LOGIN,f.SOCIAL_CONNECT,f.CHANGE_EMAIL,f.SET_PASSWORD,f.MFA_ONBOARDING,f.FETCH_SIGNUP,f.BACKUP_PHONE_NUMBER_ONBOARDING,f.REACTIVATE_ACCOUNT,f.CHANGE_PHONE_NUMBER,f.EMAIL_CHECKPOINT,f.LOGOUT},91748:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSP:function(){return eo},default:function(){return ei}});var n=t(49306),o=t(9008),i=t.n(o),a=t(67294),s=t(62477),c=t(85893),u=function(e){var r=e.countryCode;return(0,c.jsx)("div",{"data-testid":"footer-container",children:(0,c.jsx)(s.Z,{locale:r||"gb"})})},l=t(8926),g=t(64827),d=t(50029),f=t(64687),p=t.n(f),m=t(85241),O=t(39693),v=t(11752),h=t.n(v),b=t(44934),w=t(97683),y=t(11163),j=t(19410),_=function(e){var r=(0,y.useRouter)(),t=(0,a.useState)(null),n=t[0],o=t[1];return(0,a.useEffect)(function(){o((0,j.Z)(e,window.location))},[e,r]),n},S=t(63322),E=t(97293),P=t(13676),x=t(97006),N=t(75822),M=t(96141),C=t(59499),A=t(78640),L=t(44012),I=t(86896),T=t(82649),U=t(51206),D=t(83443),R=(0,D.defineMessages)({unsupportedBrowserWarningMessage:{id:"unsupported.browser.warning.message",defaultMessage:"It looks like you're using a browser that we don't support, so some things might not work as expected. We recommend switching to a different browser."},unsupportedBrowserWarningAction:{id:"unsupported.browser.warning.action",defaultMessage:"Learn more"}}),Z=function(){var e=(0,I.Z)(),r=(0,a.useState)(!1),t=r[0],n=r[1];return((0,a.useEffect)(function(){n("Internet Explorer"===U.getParser(window.navigator.userAgent).getBrowserName())},[]),t)?(0,c.jsx)("div",{className:"row",children:(0,c.jsx)(T.Z,{className:"text-xs-left m-b-0",type:"warning",message:e.formatMessage(R.unsupportedBrowserWarningMessage),action:{href:"https://wise.com/help/articles/cEzDdKsHkP4FZ0pbJIwat/supported-browsers",text:e.formatMessage(R.unsupportedBrowserWarningAction),target:"_blank"}})}):null},k=t(84826),G=function(){return(0,k.X)()?(0,c.jsx)("div",{className:"row",children:(0,c.jsx)(T.Z,{className:"text-xs-left m-b-0",type:"warning",message:"This is a test environment. Do not use your live credentials. Feel free to sign up and create new accounts."})}):null},F=(0,D.defineMessages)({loginFormTitle:{id:"login_form.title",defaultMessage:"Welcome back."},loginFormSignup:{id:"login_form.signup",defaultMessage:"New to Wise? <a>Sign up</a>"},loginFormNotUserEmail:{id:"login_form.not.user.email",defaultMessage:"Log in with a different account"}}),W=(0,D.defineMessages)({referralRewardTitle:{id:"login_form.referral_reward.title",defaultMessage:"Log in to claim your referral reward"}});function B(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function H(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?B(Object(t),!0).forEach(function(r){(0,C.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):B(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var q={default:{title:F.loginFormTitle,subtitle:F.loginFormSignup},referral:{title:W.referralRewardTitle}},K=function(e){var r=e.variant,t=e.userEmail,n=e.redirectAfterUrl,o=e.accountName;return r===m.Pv.BIZ_TEAM_INVITE_LOGIN?(0,c.jsx)("p",{children:(0,c.jsx)(L.Z,{id:"login_form.business-team-invite.subtitle",defaultMessage:"You’ve been invited to join the <strong>{accountName}</strong> account.",values:{accountName:o,strong:function(e){return(0,c.jsx)("strong",{children:e})}}})}):t?(0,c.jsx)("p",{children:(0,c.jsx)("a",{href:A.stringifyUrl({url:"/login",query:{redirectUrl:n?encodeURIComponent(n):void 0}}),children:(0,c.jsx)(L.Z,H({},F.loginFormNotUserEmail))})}):(0,c.jsx)("p",{children:(0,c.jsx)(L.Z,H(H({},F.loginFormSignup),{},{values:{a:function(e){return(0,c.jsx)("a",{href:A.stringifyUrl({url:"/register/",query:{redirectUrl:n?"/get-started":void 0}}),children:e})}}}))})},V=function(e){var r=e.redirectAfterUrl,t=e.userEmail,n=e.variant,o=e.accountName,i=(0,I.Z)(),a=q[n||"default"]||q.default,s=a.subtitle||t;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h1",{className:"h2 m-b-2",children:i.formatMessage(a.title)}),s&&K({variant:n,userEmail:t,redirectAfterUrl:r,accountName:o}),(0,c.jsx)(Z,{}),(0,c.jsx)(G,{})]})},z=t(16835),X=t(88487),Y=(0,D.defineMessages)({userDisabledMessage:{id:"login.error.user.disabled.message",defaultMessage:"Sorry, we had to deactivate your account."},userDisabledActionText:{id:"login.error.user.disabled.action-text",defaultMessage:"Read more in our Help Centre."},userDisabledAppealDecisionActionText:{id:"login.error.user.disabled.appeal-decision.action-text",defaultMessage:"Appeal our decision."},alreadyRegisteredMessage:{id:"login.error.user.already.registered.message",defaultMessage:"You didn’t register using a social account, so please enter the email address and password for your Wise account to log in."},deactivatedAccount:{id:"login.error.deactivated.message",defaultMessage:"Sorry this account is deactivated. If you want to reactivate it contact us at **reactivate@wise.com**"},genericErrorMessage:{id:"login.error.generic_error_message",defaultMessage:"Something went wrong. Please try again."},autoLogoutMessage:{id:"login.info.logged.out.for.inactivity",defaultMessage:"We logged you out because you were inactive for 5 minutes — it’s to help keep your account secure."}});t(63508);var J=function(e,r){var t=(0,I.Z)();switch(e){case"user-disabled":if(r&&"NONE"!==r)return{message:t.formatMessage(Y.userDisabledMessage),action:{text:t.formatMessage(Y.userDisabledAppealDecisionActionText),href:"SELF_SERVICE"===r?"/appeals":"mailto:appeals@wise.com"}};return{message:t.formatMessage(Y.userDisabledMessage),action:{text:t.formatMessage(Y.userDisabledActionText),href:"/help/12/managing-your-profile/2961844/why-was-my-account-deactivated"}};case"auto-logout":return{message:t.formatMessage(Y.autoLogoutMessage),sentiment:X.P.NEUTRAL};case"default-error":return{message:t.formatMessage(Y.deactivatedAccount)};case"user-already-registered-email":case"duplicate-email":return{message:t.formatMessage(Y.alreadyRegisteredMessage)};default:return{message:t.formatMessage(Y.genericErrorMessage)}}},Q=function(e){var r,t=e.initialError,n=e.appealMethod,o=a.useState(!1),i=(0,z.Z)(o,2),s=i[0],u=i[1],l=J(t,n);return P.S.track("Login Error Shown",{type:t}),s?null:(0,c.jsx)(T.Z,{type:null!==(r=l.sentiment)&&void 0!==r?r:X.P.NEGATIVE,onDismiss:function(){return u(!0)},message:l.message,action:l.action})},$=function(e){var r=e.children;return(0,c.jsx)(w.Z,{onClose:function(){(0,M.c)();var e=document.referrer,r=!e||e.includes("/login")||e.includes("/register")?"/":e;window.location.replace(r)},children:r})},ee=function(e){var r,t=e.oneTimeToken,n=e.handleSocialLoginClick,o=h()(),i=(0,S.M7)(S.S6.LOGIN),a=(r=(0,d.Z)(p().mark(function e(){return p().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return i(),P.S.track("Login_Web - User Logged In"),(0,E.L)("login-success"),(0,M.g)(),e.next=8,(0,x.W)(t);case 8:case"end":return e.stop()}},e)})),function(){return r.apply(this,arguments)});return(0,c.jsx)(O.j3,{options:{config:{CALLSIGN_ORGANISATION_ID:o.publicRuntimeConfig.callsignOrganisationId},value:{upfr:!0,ewps:!1}},children:(0,c.jsx)(m.UA,{oneTimeToken:t,onSuccess:a,onFailure:function(){window.location.assign("/login/logout?redirectUrl=/login")},onRetry:function(){window.location.assign("/login/logout?redirectUrl=/login")},identityServiceHost:"/gateway",intent:"transferwise_login",onSocialConnect:n})})},er=function(e){var r,t=e.userEmail,n=e.enableSocialConnect,o=void 0===n||n,i=e.socialConnectSingleProvider,a=e.redirectUrl,s=e.queryError,u=e.appealMethod,l=e.handleSocialLoginClick,g=e.accountName,f=e.variant,O=h()(),v=(0,b.z)().disableRecaptcha,w=(0,S.M7)(S.S6.LOGIN),y=(0,m.Ux)().guestId,j=v?void 0:O.publicRuntimeConfig.recaptcha.login,_=(r=(0,d.Z)(p().mark(function e(){return p().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:w(),(0,E.L)("login-success"),(0,M.g)();case 3:case"end":return e.stop()}},e)})),function(){return r.apply(this,arguments)}),x=f&&Object.values(m.Pv).includes(f)?f:void 0;return(0,c.jsx)(m.U0,{header:(0,c.jsxs)(c.Fragment,{children:[s&&(0,c.jsx)(Q,{initialError:s,appealMethod:u}),(0,c.jsx)(V,{redirectAfterUrl:a,userEmail:t,accountName:g,variant:f}),o&&i&&(0,c.jsx)(m.Z0,{guestId:y,provider:i||"google",onComplete:l,redirectUrl:a||N.K})]}),onFailure:function(){window.location.assign("/login/logout?redirectUrl=/login")},onSuccess:_,identityServiceHost:"/gateway",recaptchaSiteKey:j,showSocialConnect:o&&!i,onSocialConnect:l,redirectAfterUrl:a||N.K,onForgotPasswordClick:function(){P.S.track("Login_Web - Forgot Password - Forgot Password Clicked",{"Guest ID":y}),window.location.assign("/login/forgot-password")},userEmail:t,callsignId:O.publicRuntimeConfig.callsignOrganisationId,variant:x})},et=function(e){var r=e.userEmail,t=e.enableSocialConnect,n=e.socialConnectSingleProvider,o=e.redirectUrl,i=e.queryError,s=e.appealMethod,u=e.accountName,l=e.variant,g=_("code"),d=(0,S.wi)(S.S6.SOCIAL_CONNECT),f=function(e){d(),P.S.track("Login - Social Login - Started",{provider:e})};return(0,a.useEffect)(function(){"auto-logout"===i&&P.S.track("Auto logout (login-app) - Successful logout")},[i]),(0,c.jsx)($,{children:g?(0,c.jsx)(ee,{oneTimeToken:g,handleSocialLoginClick:f}):(0,c.jsx)(er,{userEmail:r,enableSocialConnect:void 0===t||t,socialConnectSingleProvider:n,redirectUrl:o,queryError:i,appealMethod:s,handleSocialLoginClick:f,accountName:u,variant:l})})};t(19411);var en=(0,D.defineMessages)({pageTitle:{id:"login.page.title",defaultMessage:"Wise - Login"}}),eo=!0,ei=function(e){var r=e.userEmail,t=e.queryError,o=e.redirectUrl,s=e.countryCode,d=e.locale,f=e.translations,p=e.appealMethod,m=e.socialConnectSingleProvider,O=e.autoLoggedOut,v=e.accountName,h=e.variant,b=(0,a.useState)(!1),w=b[0],y=b[1];return(0,a.useEffect)(function(){y(window.self!==window.top)},[]),(0,c.jsx)(g.Z,{locale:d,translations:f,children:(0,c.jsx)(n.Z,{children:(0,c.jsxs)(l.Z,{name:"Login",eventProperties:{variant:h},title:en.pageTitle,children:[(0,c.jsx)(i(),{children:(0,c.jsx)("script",{src:"https://www.google.com/recaptcha/api.js?render=explicit",async:!0,defer:!0})}),(0,c.jsx)(et,{userEmail:r,queryError:t||O,redirectUrl:o,enableSocialConnect:!w&&!r&&!(0,k.X)(),socialConnectSingleProvider:m,appealMethod:p,accountName:v,variant:h}),(0,c.jsx)(u,{countryCode:s})]})})})}},59191:function(e,r,t){"use strict";t.d(r,{qv:function(){return o},LW:function(){return i},Z0:function(){return s}});var n=t(13676),o=function(e){var r=e.flow,t=e.step,o=e.state,i=e.properties,a=[r,t,o].filter(Boolean).join(" - ");n.S.track(a,i),"Started"===o&&n.S.timeEvent(a.replace("Started","Finished"))},i=function(e){var r=e.flow,t=e.step,o=e.action,i=e.properties,a=[r,t,o].filter(Boolean).join(" - ");n.S.track(a,i)},a=function(e,r,t){n.S.track("".concat("Login_Web"," - ").concat(e," - ").concat(r),t)},s=function(e,r){a("Page View",e,r)}},97293:function(e,r,t){"use strict";t.d(r,{L:function(){return a}});var n=t(59499);function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var a=function(e,r){window.dataLayer=window.dataLayer||[],window.dataLayer.push(i(i({},r),{},{event:e}))}},97006:function(e,r,t){"use strict";t.d(r,{W:function(){return u}});var n=t(59499),o=t(87066),i=t(11752),a=t.n(i),s=t(26835);function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}var u=function(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=a()().publicRuntimeConfig;return o.Z.post("".concat(t.localApiUrl,"/v2/auth"),{oneTimeToken:e},{headers:function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}({},r?{"ignore-redirect":!0}:{})}).then(function(e){var t=e.data.location||"/home";return r||window.location.assign(t),{redirectUrl:t}}).catch(function(e){return(0,s.H)(e),r||window.location.assign("/login"),e})}},75822:function(e,r,t){"use strict";t.d(r,{K:function(){return n}}),t(64687),t(10462);var n="/home"},96141:function(e,r,t){"use strict";t.d(r,{c:function(){return g},g:function(){return l}});var n=t(59499),o=t(57519),i=t(76489);function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var c="has-previously-logged-in",u={path:"/",httpOnly:!1,secure:!1,sameSite:"lax"},l=function(){var e=new Date;e.setDate(e.getDate()+90),o.pR.write("hasClickedOnSignUpOrLogin=true; expires=".concat(e.toString(),"; path=/")),o.pR.write((0,i.q)(c,"true",s(s({},u),{},{maxAge:7776e3})))},g=function(){o.pR.write((0,i.q)(c,"false",s(s({},u),{},{maxAge:0})))}},73029:function(e){e.exports={layout:"Layout_layout__fvRCC","login-form-container":"Layout_login-form-container__Wb1bd","login-form-container__child-container":"Layout_login-form-container__child-container__Hv3M5","sidebar-logo":"Layout_sidebar-logo__SPAga","np-theme-personal":"Layout_np-theme-personal__xNN_f",alert:"Layout_alert__Aqq7S",alert__message:"Layout_alert__message__IBeYK"}},63508:function(e){e.exports={"np-theme-personal":"LoginError_np-theme-personal__leUO3",alert:"LoginError_alert__pzMhH",alert__message:"LoginError_alert__message__cnSUr"}},19527:function(){},69331:function(){},24654:function(){}}]);
//# sourceMappingURL=6670-b9fa45309d50e642.js.map