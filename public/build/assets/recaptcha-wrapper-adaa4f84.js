import{r as v,P as d}from"./app-e057de79.js";import{y as F}from"./hoist-non-react-statics.cjs-8f2ef505.js";var H=["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl","isolated"];function E(){return E=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(r[t]=i[t])}return r},E.apply(this,arguments)}function z(r,n){if(r==null)return{};var i={},t=Object.keys(r),e,c;for(c=0;c<t.length;c++)e=t[c],!(n.indexOf(e)>=0)&&(i[e]=r[e]);return i}function x(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function W(r,n){r.prototype=Object.create(n.prototype),r.prototype.constructor=r,S(r,n)}function S(r,n){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},S(r,n)}var L=function(r){W(n,r);function n(){var t;return t=r.call(this)||this,t.handleExpired=t.handleExpired.bind(x(t)),t.handleErrored=t.handleErrored.bind(x(t)),t.handleChange=t.handleChange.bind(x(t)),t.handleRecaptchaRef=t.handleRecaptchaRef.bind(x(t)),t}var i=n.prototype;return i.getCaptchaFunction=function(e){return this.props.grecaptcha?this.props.grecaptcha.enterprise?this.props.grecaptcha.enterprise[e]:this.props.grecaptcha[e]:null},i.getValue=function(){var e=this.getCaptchaFunction("getResponse");return e&&this._widgetId!==void 0?e(this._widgetId):null},i.getWidgetId=function(){return this.props.grecaptcha&&this._widgetId!==void 0?this._widgetId:null},i.execute=function(){var e=this.getCaptchaFunction("execute");if(e&&this._widgetId!==void 0)return e(this._widgetId);this._executeRequested=!0},i.executeAsync=function(){var e=this;return new Promise(function(c,m){e.executionResolve=c,e.executionReject=m,e.execute()})},i.reset=function(){var e=this.getCaptchaFunction("reset");e&&this._widgetId!==void 0&&e(this._widgetId)},i.forceReset=function(){var e=this.getCaptchaFunction("reset");e&&e()},i.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},i.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},i.handleChange=function(e){this.props.onChange&&this.props.onChange(e),this.executionResolve&&(this.executionResolve(e),delete this.executionReject,delete this.executionResolve)},i.explicitRender=function(){var e=this.getCaptchaFunction("render");if(e&&this._widgetId===void 0){var c=document.createElement("div");this._widgetId=e(c,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge,isolated:this.props.isolated}),this.captcha.appendChild(c)}this._executeRequested&&this.props.grecaptcha&&this._widgetId!==void 0&&(this._executeRequested=!1,this.execute())},i.componentDidMount=function(){this.explicitRender()},i.componentDidUpdate=function(){this.explicitRender()},i.handleRecaptchaRef=function(e){this.captcha=e},i.render=function(){var e=this.props;e.sitekey,e.onChange,e.theme,e.type,e.tabindex,e.onExpired,e.onErrored,e.size,e.stoken,e.grecaptcha,e.badge,e.hl,e.isolated;var c=z(e,H);return v.createElement("div",E({},c,{ref:this.handleRecaptchaRef}))},n}(v.Component);L.displayName="ReCAPTCHA";L.propTypes={sitekey:d.string.isRequired,onChange:d.func,grecaptcha:d.object,theme:d.oneOf(["dark","light"]),type:d.oneOf(["image","audio"]),tabindex:d.number,onExpired:d.func,onErrored:d.func,size:d.oneOf(["compact","normal","invisible"]),stoken:d.string,hl:d.string,badge:d.oneOf(["bottomright","bottomleft","inline"]),isolated:d.bool};L.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};function I(){return I=Object.assign||function(r){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(r[t]=i[t])}return r},I.apply(this,arguments)}function q(r,n){if(r==null)return{};var i={},t=Object.keys(r),e,c;for(c=0;c<t.length;c++)e=t[c],!(n.indexOf(e)>=0)&&(i[e]=r[e]);return i}function G(r,n){r.prototype=Object.create(n.prototype),r.prototype.constructor=r,r.__proto__=n}var h={},$=0;function M(r,n){return n=n||{},function(t){var e=t.displayName||t.name||"Component",c=function(R){G(y,R);function y(f,a){var o;return o=R.call(this,f,a)||this,o.state={},o.__scriptURL="",o}var l=y.prototype;return l.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+$++),this.__scriptLoaderID},l.setupScriptURL=function(){return this.__scriptURL=typeof r=="function"?r():r,this.__scriptURL},l.asyncScriptLoaderHandleLoad=function(a){var o=this;this.setState(a,function(){return o.props.asyncScriptOnLoad&&o.props.asyncScriptOnLoad(o.state)})},l.asyncScriptLoaderTriggerOnScriptLoaded=function(){var a=h[this.__scriptURL];if(!a||!a.loaded)throw new Error("Script is not loaded.");for(var o in a.observers)a.observers[o](a);delete window[n.callbackName]},l.componentDidMount=function(){var a=this,o=this.setupScriptURL(),p=this.asyncScriptLoaderGetScriptLoaderID(),u=n,k=u.globalName,w=u.callbackName,P=u.scriptId;if(k&&typeof window[k]<"u"&&(h[o]={loaded:!0,observers:{}}),h[o]){var b=h[o];if(b&&(b.loaded||b.errored)){this.asyncScriptLoaderHandleLoad(b);return}b.observers[p]=function(s){return a.asyncScriptLoaderHandleLoad(s)};return}var N={};N[p]=function(s){return a.asyncScriptLoaderHandleLoad(s)},h[o]={loaded:!1,observers:N};var g=document.createElement("script");g.src=o,g.async=!0;for(var A in n.attributes)g.setAttribute(A,n.attributes[A]);P&&(g.id=P);var U=function(_){if(h[o]){var T=h[o],O=T.observers;for(var D in O)_(O[D])&&delete O[D]}};w&&typeof window<"u"&&(window[w]=function(){return a.asyncScriptLoaderTriggerOnScriptLoaded()}),g.onload=function(){var s=h[o];s&&(s.loaded=!0,U(function(_){return w?!1:(_(s),!0)}))},g.onerror=function(){var s=h[o];s&&(s.errored=!0,U(function(_){return _(s),!0}))},document.body.appendChild(g)},l.componentWillUnmount=function(){var a=this.__scriptURL;if(n.removeOnUnmount===!0)for(var o=document.getElementsByTagName("script"),p=0;p<o.length;p+=1)o[p].src.indexOf(a)>-1&&o[p].parentNode&&o[p].parentNode.removeChild(o[p]);var u=h[a];u&&(delete u.observers[this.asyncScriptLoaderGetScriptLoaderID()],n.removeOnUnmount===!0&&delete h[a])},l.render=function(){var a=n.globalName,o=this.props;o.asyncScriptOnLoad;var p=o.forwardedRef,u=q(o,["asyncScriptOnLoad","forwardedRef"]);return a&&typeof window<"u"&&(u[a]=typeof window[a]<"u"?window[a]:void 0),u.ref=p,v.createElement(t,u)},y}(v.Component),m=v.forwardRef(function(R,y){return v.createElement(c,I({},R,{forwardedRef:y}))});return m.displayName="AsyncScriptLoader("+e+")",m.propTypes={asyncScriptOnLoad:d.func},F(m,t)}}var C="onloadcallback",V="grecaptcha";function j(){return typeof window<"u"&&window.recaptchaOptions||{}}function B(){var r=j(),n=r.useRecaptchaNet?"recaptcha.net":"www.google.com";return r.enterprise?"https://"+n+"/recaptcha/enterprise.js?onload="+C+"&render=explicit":"https://"+n+"/recaptcha/api.js?onload="+C+"&render=explicit"}const Q=M(B,{callbackName:C,globalName:V,attributes:j().nonce?{nonce:j().nonce}:{}})(L);export{Q as R};
