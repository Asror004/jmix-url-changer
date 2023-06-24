function S(d,$){for(var o=0;o<$.length;o++){const l=$[o];if(typeof l!="string"&&!Array.isArray(l)){for(const k in l)if(k!=="default"&&!(k in d)){const c=Object.getOwnPropertyDescriptor(l,k);c&&Object.defineProperty(d,k,c.get?c:{enumerable:!0,get:()=>l[k]})}}}return Object.freeze(Object.defineProperty(d,Symbol.toStringTag,{value:"Module"}))}var v={},D={get exports(){return v},set exports(d){v=d}};(function(d,$){ace.define("ace/mode/asciidoc_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(o,l,k){var c=o("../lib/oop"),h=o("./text_highlight_rules").TextHighlightRules,x=function(){var u="[a-zA-Z¡-￿]+\\b";this.$rules={start:[{token:"empty",regex:/$/},{token:"literal",regex:/^\.{4,}\s*$/,next:"listingBlock"},{token:"literal",regex:/^-{4,}\s*$/,next:"literalBlock"},{token:"string",regex:/^\+{4,}\s*$/,next:"passthroughBlock"},{token:"keyword",regex:/^={4,}\s*$/},{token:"text",regex:/^\s*$/},{token:"empty",regex:"",next:"dissallowDelimitedBlock"}],dissallowDelimitedBlock:[{include:"paragraphEnd"},{token:"comment",regex:"^//.+$"},{token:"keyword",regex:"^(?:NOTE|TIP|IMPORTANT|WARNING|CAUTION):"},{include:"listStart"},{token:"literal",regex:/^\s+.+$/,next:"indentedBlock"},{token:"empty",regex:"",next:"text"}],paragraphEnd:[{token:"doc.comment",regex:/^\/{4,}\s*$/,next:"commentBlock"},{token:"tableBlock",regex:/^\s*[|!]=+\s*$/,next:"tableBlock"},{token:"keyword",regex:/^(?:--|''')\s*$/,next:"start"},{token:"option",regex:/^\[.*\]\s*$/,next:"start"},{token:"pageBreak",regex:/^>{3,}$/,next:"start"},{token:"literal",regex:/^\.{4,}\s*$/,next:"listingBlock"},{token:"titleUnderline",regex:/^(?:={2,}|-{2,}|~{2,}|\^{2,}|\+{2,})\s*$/,next:"start"},{token:"singleLineTitle",regex:/^={1,5}\s+\S.*$/,next:"start"},{token:"otherBlock",regex:/^(?:\*{2,}|_{2,})\s*$/,next:"start"},{token:"optionalTitle",regex:/^\.[^.\s].+$/,next:"start"}],listStart:[{token:"keyword",regex:/^\s*(?:\d+\.|[a-zA-Z]\.|[ixvmIXVM]+\)|\*{1,5}|-|\.{1,5})\s/,next:"listText"},{token:"meta.tag",regex:/^.+(?::{2,4}|;;)(?: |$)/,next:"listText"},{token:"support.function.list.callout",regex:/^(?:<\d+>|\d+>|>) /,next:"text"},{token:"keyword",regex:/^\+\s*$/,next:"start"}],text:[{token:["link","variable.language"],regex:/((?:https?:\/\/|ftp:\/\/|file:\/\/|mailto:|callto:)[^\s\[]+)(\[.*?\])/},{token:"link",regex:/(?:https?:\/\/|ftp:\/\/|file:\/\/|mailto:|callto:)[^\s\[]+/},{token:"link",regex:/\b[\w\.\/\-]+@[\w\.\/\-]+\b/},{include:"macros"},{include:"paragraphEnd"},{token:"literal",regex:/\+{3,}/,next:"smallPassthrough"},{token:"escape",regex:/\((?:C|TM|R)\)|\.{3}|->|<-|=>|<=|&#(?:\d+|x[a-fA-F\d]+);|(?: |^)--(?=\s+\S)/},{token:"escape",regex:/\\[_*'`+#]|\\{2}[_*'`+#]{2}/},{token:"keyword",regex:/\s\+$/},{token:"text",regex:u},{token:["keyword","string","keyword"],regex:/(<<[\w\d\-$]+,)(.*?)(>>|$)/},{token:"keyword",regex:/<<[\w\d\-$]+,?|>>/},{token:"constant.character",regex:/\({2,3}.*?\){2,3}/},{token:"keyword",regex:/\[\[.+?\]\]/},{token:"support",regex:/^\[{3}[\w\d =\-]+\]{3}/},{include:"quotes"},{token:"empty",regex:/^\s*$/,next:"start"}],listText:[{include:"listStart"},{include:"text"}],indentedBlock:[{token:"literal",regex:/^[\s\w].+$/,next:"indentedBlock"},{token:"literal",regex:"",next:"start"}],listingBlock:[{token:"literal",regex:/^\.{4,}\s*$/,next:"dissallowDelimitedBlock"},{token:"constant.numeric",regex:"<\\d+>"},{token:"literal",regex:"[^<]+"},{token:"literal",regex:"<"}],literalBlock:[{token:"literal",regex:/^-{4,}\s*$/,next:"dissallowDelimitedBlock"},{token:"constant.numeric",regex:"<\\d+>"},{token:"literal",regex:"[^<]+"},{token:"literal",regex:"<"}],passthroughBlock:[{token:"literal",regex:/^\+{4,}\s*$/,next:"dissallowDelimitedBlock"},{token:"literal",regex:u+"|\\d+"},{include:"macros"},{token:"literal",regex:"."}],smallPassthrough:[{token:"literal",regex:/[+]{3,}/,next:"dissallowDelimitedBlock"},{token:"literal",regex:/^\s*$/,next:"dissallowDelimitedBlock"},{token:"literal",regex:u+"|\\d+"},{include:"macros"}],commentBlock:[{token:"doc.comment",regex:/^\/{4,}\s*$/,next:"dissallowDelimitedBlock"},{token:"doc.comment",regex:"^.*$"}],tableBlock:[{token:"tableBlock",regex:/^\s*\|={3,}\s*$/,next:"dissallowDelimitedBlock"},{token:"tableBlock",regex:/^\s*!={3,}\s*$/,next:"innerTableBlock"},{token:"tableBlock",regex:/\|/},{include:"text",noEscape:!0}],innerTableBlock:[{token:"tableBlock",regex:/^\s*!={3,}\s*$/,next:"tableBlock"},{token:"tableBlock",regex:/^\s*|={3,}\s*$/,next:"dissallowDelimitedBlock"},{token:"tableBlock",regex:/!/}],macros:[{token:"macro",regex:/{[\w\-$]+}/},{token:["text","string","text","constant.character","text"],regex:/({)([\w\-$]+)(:)?(.+)?(})/},{token:["text","markup.list.macro","keyword","string"],regex:/(\w+)(footnote(?:ref)?::?)([^\s\[]+)?(\[.*?\])?/},{token:["markup.list.macro","keyword","string"],regex:/([a-zA-Z\-][\w\.\/\-]*::?)([^\s\[]+)(\[.*?\])?/},{token:["markup.list.macro","keyword"],regex:/([a-zA-Z\-][\w\.\/\-]+::?)(\[.*?\])/},{token:"keyword",regex:/^:.+?:(?= |$)/}],quotes:[{token:"string.italic",regex:/__[^_\s].*?__/},{token:"string.italic",regex:t("_")},{token:"keyword.bold",regex:/\*\*[^*\s].*?\*\*/},{token:"keyword.bold",regex:t("\\*")},{token:"literal",regex:t("\\+")},{token:"literal",regex:/\+\+[^+\s].*?\+\+/},{token:"literal",regex:/\$\$.+?\$\$/},{token:"literal",regex:t("`")},{token:"keyword",regex:t("^")},{token:"keyword",regex:t("~")},{token:"keyword",regex:/##?/},{token:"keyword",regex:/(?:\B|^)``|\b''/}]};function t(n){var s=/\w/.test(n)?"\\b":"(?:\\B|^)";return s+n+"[^"+n+"].*?"+n+"(?![\\w*])"}var f={macro:"constant.character",tableBlock:"doc.comment",titleUnderline:"markup.heading",singleLineTitle:"markup.heading",pageBreak:"string",option:"string.regexp",otherBlock:"markup.list",literal:"support.function",optionalTitle:"constant.numeric",escape:"constant.language.escape",link:"markup.underline.list"};for(var e in this.$rules)for(var i=this.$rules[e],g=i.length;g--;){var a=i[g];if(a.include||typeof a=="string"){var r=[g,1].concat(this.$rules[a.include||a]);a.noEscape&&(r=r.filter(function(n){return!n.next})),i.splice.apply(i,r)}else a.token in f&&(a.token=f[a.token])}};c.inherits(x,h),l.AsciidocHighlightRules=x}),ace.define("ace/mode/folding/asciidoc",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range"],function(o,l,k){var c=o("../../lib/oop"),h=o("./fold_mode").FoldMode,x=o("../../range").Range,u=l.FoldMode=function(){};c.inherits(u,h),function(){this.foldingStartMarker=/^(?:\|={10,}|[\.\/=\-~^+]{4,}\s*$|={1,5} )/,this.singleLineHeadingRe=/^={1,5}(?=\s+\S)/,this.getFoldWidget=function(t,f,e){var i=t.getLine(e);return this.foldingStartMarker.test(i)?i[0]=="="?this.singleLineHeadingRe.test(i)?"start":t.getLine(e-1).length!=t.getLine(e).length?"":"start":t.bgTokenizer.getState(e)=="dissallowDelimitedBlock"?"end":"start":""},this.getFoldWidgetRange=function(t,f,e){var i=t.getLine(e),g=i.length,a=t.getLength(),r=e,n=e;if(!i.match(this.foldingStartMarker))return;var s;function B(p){return s=t.getTokens(p)[0],s&&s.type}var T=["=","-","~","^","+"],b="markup.heading",_=this.singleLineHeadingRe;function y(){var p=s.value.match(_);if(p)return p[0].length;var w=T.indexOf(s.value[0])+1;return w==1&&t.getLine(e-1).length!=t.getLine(e).length?1/0:w}if(B(e)==b){for(var R=y();++e<a;)if(B(e)==b){var A=y();if(A<=R)break}var L=s&&s.value.match(this.singleLineHeadingRe);if(n=L?e-1:e-2,n>r)for(;n>r&&(!B(n)||s.value[0]=="[");)n--;if(n>r){var m=t.getLine(n).length;return new x(r,g,n,m)}}else{var M=t.bgTokenizer.getState(e);if(M=="dissallowDelimitedBlock"){for(;e-- >0&&t.bgTokenizer.getState(e).lastIndexOf("Block")!=-1;);if(n=e+1,n<r){var m=t.getLine(e).length;return new x(n,5,r,g-5)}}else{for(;++e<a&&t.bgTokenizer.getState(e)!="dissallowDelimitedBlock";);if(n=e,n>r){var m=t.getLine(e).length;return new x(r,5,n,m-5)}}}}}.call(u.prototype)}),ace.define("ace/mode/asciidoc",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/asciidoc_highlight_rules","ace/mode/folding/asciidoc"],function(o,l,k){var c=o("../lib/oop"),h=o("./text").Mode,x=o("./asciidoc_highlight_rules").AsciidocHighlightRules,u=o("./folding/asciidoc").FoldMode,t=function(){this.HighlightRules=x,this.foldingRules=new u};c.inherits(t,h),function(){this.type="text",this.getNextLineIndent=function(f,e,i){if(f=="listblock"){var g=/^((?:.+)?)([-+*][ ]+)/.exec(e);return g?new Array(g[1].length+1).join(" ")+g[2]:""}else return this.$getIndent(e)},this.$id="ace/mode/asciidoc"}.call(t.prototype),l.Mode=t}),function(){ace.require(["ace/mode/asciidoc"],function(o){d&&(d.exports=o)})}()})(D);const H=v,O=S({__proto__:null,default:H},[v]);export{O as m};