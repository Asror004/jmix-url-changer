function c(e,s){for(var t=0;t<s.length;t++){const r=s[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const u=Object.getOwnPropertyDescriptor(r,o);u&&Object.defineProperty(e,o,u.get?u:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var n={},f={get exports(){return n},set exports(e){n=e}};(function(e,s){(function(){ace.require(["ace/snippets/rust"],function(t){e&&(e.exports=t)})})()})(f);const i=n,a=c({__proto__:null,default:i},[n]);export{a as r};
