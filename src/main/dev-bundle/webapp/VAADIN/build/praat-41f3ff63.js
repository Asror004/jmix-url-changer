function s(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const p=Object.getOwnPropertyDescriptor(r,o);p&&Object.defineProperty(e,o,p.get?p:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var a={},c={get exports(){return a},set exports(e){a=e}};(function(e,n){(function(){ace.require(["ace/snippets/praat"],function(t){e&&(e.exports=t)})})()})(c);const f=a,i=s({__proto__:null,default:f},[a]);export{i as p};
