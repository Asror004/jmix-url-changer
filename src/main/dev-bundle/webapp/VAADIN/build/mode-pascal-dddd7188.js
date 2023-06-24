function L(l,v){for(var n=0;n<v.length;n++){const i=v[n];if(typeof i!="string"&&!Array.isArray(i)){for(const c in i)if(c!=="default"&&!(c in l)){const r=Object.getOwnPropertyDescriptor(i,c);r&&Object.defineProperty(l,c,r.get?r:{enumerable:!0,get:()=>i[c]})}}}return Object.freeze(Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}))}var x={},R={get exports(){return x},set exports(l){x=l}};(function(l,v){ace.define("ace/mode/pascal_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(n,i,c){var r=n("../lib/oop"),f=n("./text_highlight_rules").TextHighlightRules,u=function(){var s=this.createKeywordMapper({"keyword.control":"absolute|abstract|all|and|and_then|array|as|asm|attribute|begin|bindable|case|class|const|constructor|destructor|div|do|do|else|end|except|export|exports|external|far|file|finalization|finally|for|forward|goto|if|implementation|import|in|inherited|initialization|interface|interrupt|is|label|library|mod|module|name|near|nil|not|object|of|only|operator|or|or_else|otherwise|packed|pow|private|program|property|protected|public|published|qualified|record|repeat|resident|restricted|segment|set|shl|shr|then|to|try|type|unit|until|uses|value|var|view|virtual|while|with|xor"},"identifier",!0);this.$rules={start:[{caseInsensitive:!0,token:["variable","text","storage.type.prototype","entity.name.function.prototype"],regex:"\\b(function|procedure)(\\s+)(\\w+)(\\.\\w+)?(?=(?:\\(.*?\\))?;\\s*(?:attribute|forward|external))"},{caseInsensitive:!0,token:["variable","text","storage.type.function","entity.name.function"],regex:"\\b(function|procedure)(\\s+)(\\w+)(\\.\\w+)?"},{caseInsensitive:!0,token:s,regex:/\b[a-z_]+\b/},{token:"constant.numeric",regex:"\\b((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"},{token:"punctuation.definition.comment",regex:"--.*$"},{token:"punctuation.definition.comment",regex:"//.*$"},{token:"punctuation.definition.comment",regex:"\\(\\*",push:[{token:"punctuation.definition.comment",regex:"\\*\\)",next:"pop"},{defaultToken:"comment.block.one"}]},{token:"punctuation.definition.comment",regex:"\\{",push:[{token:"punctuation.definition.comment",regex:"\\}",next:"pop"},{defaultToken:"comment.block.two"}]},{token:"punctuation.definition.string.begin",regex:'"',push:[{token:"constant.character.escape",regex:"\\\\."},{token:"punctuation.definition.string.end",regex:'"',next:"pop"},{defaultToken:"string.quoted.double"}]},{token:"punctuation.definition.string.begin",regex:"'",push:[{token:"constant.character.escape.apostrophe",regex:"''"},{token:"punctuation.definition.string.end",regex:"'",next:"pop"},{defaultToken:"string.quoted.single"}]},{token:"keyword.operator",regex:"[+\\-;,/*%]|:=|="}]},this.normalizeRules()};r.inherits(u,f),i.PascalHighlightRules=u}),ace.define("ace/mode/folding/coffee",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range"],function(n,i,c){var r=n("../../lib/oop"),f=n("./fold_mode").FoldMode,u=n("../../range").Range,s=i.FoldMode=function(){};r.inherits(s,f),function(){this.getFoldWidgetRange=function(e,y,t){var g=this.indentationBlock(e,t);if(g)return g;var o=/\S/,a=e.getLine(t),p=a.search(o);if(!(p==-1||a[p]!="#")){for(var d=a.length,h=e.getLength(),b=t,m=t;++t<h;){a=e.getLine(t);var k=a.search(o);if(k!=-1){if(a[k]!="#")break;m=t}}if(m>b){var _=e.getLine(m).length;return new u(b,d,m,_)}}},this.getFoldWidget=function(e,y,t){var g=e.getLine(t),o=g.search(/\S/),a=e.getLine(t+1),p=e.getLine(t-1),d=p.search(/\S/),h=a.search(/\S/);if(o==-1)return e.foldWidgets[t-1]=d!=-1&&d<h?"start":"","";if(d==-1){if(o==h&&g[o]=="#"&&a[o]=="#")return e.foldWidgets[t-1]="",e.foldWidgets[t+1]="","start"}else if(d==o&&g[o]=="#"&&p[o]=="#"&&e.getLine(t-2).search(/\S/)==-1)return e.foldWidgets[t-1]="start",e.foldWidgets[t+1]="","";return d!=-1&&d<o?e.foldWidgets[t-1]="start":e.foldWidgets[t-1]="",o<h?"start":""}}.call(s.prototype)}),ace.define("ace/mode/pascal",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/pascal_highlight_rules","ace/mode/folding/coffee"],function(n,i,c){var r=n("../lib/oop"),f=n("./text").Mode,u=n("./pascal_highlight_rules").PascalHighlightRules,s=n("./folding/coffee").FoldMode,e=function(){this.HighlightRules=u,this.foldingRules=new s,this.$behaviour=this.$defaultBehaviour};r.inherits(e,f),function(){this.lineCommentStart=["--","//"],this.blockComment=[{start:"(*",end:"*)"},{start:"{",end:"}"}],this.$id="ace/mode/pascal"}.call(e.prototype),i.Mode=e}),function(){ace.require(["ace/mode/pascal"],function(n){l&&(l.exports=n)})}()})(R);const M=x,P=L({__proto__:null,default:M},[x]);export{P as m};
