function k(o,g){for(var t=0;t<g.length;t++){const n=g[t];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in o)){const r=Object.getOwnPropertyDescriptor(n,i);r&&Object.defineProperty(o,i,r.get?r:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}var s={},d={get exports(){return s},set exports(o){s=o}};(function(o,g){ace.define("ace/mode/rst_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text_highlight_rules"],function(t,n,i){var r=t("../lib/oop");t("../lib/lang");var c=t("./text_highlight_rules").TextHighlightRules,x=function(){var e={title:"markup.heading",list:"markup.heading",table:"constant",directive:"keyword.operator",entity:"string",link:"markup.underline.list",bold:"markup.bold",italic:"markup.italic",literal:"support.function",comment:"comment"},l=`(^|\\s|["'(<\\[{\\-/:])`,a=`(?:$|(?=\\s|[\\\\.,;!?\\-/:"')>\\]}]))`;this.$rules={start:[{token:e.title,regex:"(^)([\\=\\-`:\\.'\"~\\^_\\*\\+#])(\\2{2,}\\s*$)"},{token:["text",e.directive,e.literal],regex:"(^\\s*\\.\\. )([^: ]+::)(.*$)",next:"codeblock"},{token:e.directive,regex:"::$",next:"codeblock"},{token:[e.entity,e.link],regex:"(^\\.\\. _[^:]+:)(.*$)"},{token:[e.entity,e.link],regex:"(^__ )(https?://.*$)"},{token:e.entity,regex:"^\\.\\. \\[[^\\]]+\\] "},{token:e.comment,regex:"^\\.\\. .*$",next:"comment"},{token:e.list,regex:"^\\s*[\\*\\+-] "},{token:e.list,regex:"^\\s*(?:[A-Za-z]|[0-9]+|[ivxlcdmIVXLCDM]+)\\. "},{token:e.list,regex:"^\\s*\\(?(?:[A-Za-z]|[0-9]+|[ivxlcdmIVXLCDM]+)\\) "},{token:e.table,regex:"^={2,}(?: +={2,})+$"},{token:e.table,regex:"^\\+-{2,}(?:\\+-{2,})+\\+$"},{token:e.table,regex:"^\\+={2,}(?:\\+={2,})+\\+$"},{token:["text",e.literal],regex:l+"(``)(?=\\S)",next:"code"},{token:["text",e.bold],regex:l+"(\\*\\*)(?=\\S)",next:"bold"},{token:["text",e.italic],regex:l+"(\\*)(?=\\S)",next:"italic"},{token:e.entity,regex:"\\|[\\w\\-]+?\\|"},{token:e.entity,regex:":[\\w-:]+:`\\S",next:"entity"},{token:["text",e.entity],regex:l+"(_`)(?=\\S)",next:"entity"},{token:e.entity,regex:"_[A-Za-z0-9\\-]+?"},{token:["text",e.link],regex:l+"(`)(?=\\S)",next:"link"},{token:e.link,regex:"[A-Za-z0-9\\-]+?__?"},{token:e.link,regex:"\\[[^\\]]+?\\]_"},{token:e.link,regex:"https?://\\S+"},{token:e.table,regex:"\\|"}],codeblock:[{token:e.literal,regex:"^ +.+$",next:"codeblock"},{token:e.literal,regex:"^$",next:"codeblock"},{token:"empty",regex:"",next:"start"}],code:[{token:e.literal,regex:"\\S``"+a,next:"start"},{defaultToken:e.literal}],bold:[{token:e.bold,regex:"\\S\\*\\*"+a,next:"start"},{defaultToken:e.bold}],italic:[{token:e.italic,regex:"\\S\\*"+a,next:"start"},{defaultToken:e.italic}],entity:[{token:e.entity,regex:"\\S`"+a,next:"start"},{defaultToken:e.entity}],link:[{token:e.link,regex:"\\S`__?"+a,next:"start"},{defaultToken:e.link}],comment:[{token:e.comment,regex:"^ +.+$",next:"comment"},{token:e.comment,regex:"^$",next:"comment"},{token:"empty",regex:"",next:"start"}]}};r.inherits(x,c),n.RSTHighlightRules=x}),ace.define("ace/mode/rst",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/rst_highlight_rules"],function(t,n,i){var r=t("../lib/oop"),c=t("./text").Mode,x=t("./rst_highlight_rules").RSTHighlightRules,e=function(){this.HighlightRules=x};r.inherits(e,c),function(){this.type="text",this.$id="ace/mode/rst",this.snippetFileId="ace/snippets/rst"}.call(e.prototype),n.Mode=e}),function(){ace.require(["ace/mode/rst"],function(t){o&&(o.exports=t)})}()})(d);const u=s,m=k({__proto__:null,default:u},[s]);export{m};
