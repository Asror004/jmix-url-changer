function x(r,h){for(var e=0;e<h.length;e++){const n=h[e];if(typeof n!="string"&&!Array.isArray(n)){for(const o in n)if(o!=="default"&&!(o in r)){const i=Object.getOwnPropertyDescriptor(n,o);i&&Object.defineProperty(r,o,i.get?i:{enumerable:!0,get:()=>n[o]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var u={},b={get exports(){return u},set exports(r){u=r}};(function(r,h){ace.define("ace/mode/ada_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,n,o){var i=e("../lib/oop"),p=e("./text_highlight_rules").TextHighlightRules,c=function(){var f="abort|else|new|return|abs|elsif|not|reverse|abstract|end|null|accept|entry|select|access|exception|of|separate|aliased|exit|or|some|all|others|subtype|and|for|out|synchronized|array|function|overriding|at|tagged|generic|package|task|begin|goto|pragma|terminate|body|private|then|if|procedure|type|case|in|protected|constant|interface|until||is|raise|use|declare|range|delay|limited|record|when|delta|loop|rem|while|digits|renames|with|do|mod|requeue|xor",g="true|false|null",d="count|min|max|avg|sum|rank|now|coalesce|main",t=this.createKeywordMapper({"support.function":d,keyword:f,"constant.language":g},"identifier",!0);this.$rules={start:[{token:"comment",regex:"--.*$"},{token:"string",regex:'".*?"'},{token:"string",regex:"'.'"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:t,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:"\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|="},{token:"paren.lparen",regex:"[\\(]"},{token:"paren.rparen",regex:"[\\)]"},{token:"text",regex:"\\s+"}]}};i.inherits(c,p),n.AdaHighlightRules=c}),ace.define("ace/mode/ada",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/ada_highlight_rules","ace/range"],function(e,n,o){var i=e("../lib/oop"),p=e("./text").Mode,c=e("./ada_highlight_rules").AdaHighlightRules,f=e("../range").Range,g=function(){this.HighlightRules=c,this.$behaviour=this.$defaultBehaviour};i.inherits(g,p),function(){this.lineCommentStart="--",this.getNextLineIndent=function(d,t,a){var s=this.$getIndent(t),m=this.getTokenizer().getLineTokens(t,d),l=m.tokens;if(l.length&&l[l.length-1].type=="comment")return s;if(d=="start"){var v=t.match(/^.*(begin|loop|then|is|do)\s*$/);v&&(s+=a)}return s},this.checkOutdent=function(d,t,a){var s=t+a;return!!s.match(/^\s*(begin|end)$/)},this.autoOutdent=function(d,t,a){var s=t.getLine(a),m=t.getLine(a-1),l=this.$getIndent(m).length,v=this.$getIndent(s).length;v<=l||t.outdentRows(new f(a,0,a+2,0))},this.$id="ace/mode/ada"}.call(g.prototype),n.Mode=g}),function(){ace.require(["ace/mode/ada"],function(e){r&&(r.exports=e)})}()})(b);const k=u,y=x({__proto__:null,default:k},[u]);export{y as m};