function _(p,v){for(var r=0;r<v.length;r++){const s=v[r];if(typeof s!="string"&&!Array.isArray(s)){for(const m in s)if(m!=="default"&&!(m in p)){const d=Object.getOwnPropertyDescriptor(s,m);d&&Object.defineProperty(p,m,d.get?d:{enumerable:!0,get:()=>s[m]})}}}return Object.freeze(Object.defineProperty(p,Symbol.toStringTag,{value:"Module"}))}var k={},R={get exports(){return k},set exports(p){k=p}};(function(p,v){ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(r,s,m){var d=r("../lib/oop"),h=r("./text_highlight_rules").TextHighlightRules,i=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@[\\w\\d_]+"},i.getTagRule(),{defaultToken:"comment.doc",caseInsensitive:!0}]}};d.inherits(i,h),i.getTagRule=function(c){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},i.getStartRule=function(c){return{token:"comment.doc",regex:"\\/\\*(?=\\*)",next:c}},i.getEndRule=function(c){return{token:"comment.doc",regex:"\\*\\/",next:c}},s.DocCommentHighlightRules=i}),ace.define("ace/mode/apex_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules","ace/mode/doc_comment_highlight_rules"],function(r,s,m){var d=r("../lib/oop"),h=r("../mode/text_highlight_rules").TextHighlightRules,i=r("../mode/doc_comment_highlight_rules").DocCommentHighlightRules,c=function(){var e=this.createKeywordMapper({"variable.language":"activate|any|autonomous|begin|bigdecimal|byte|cast|char|collect|const|end|exit|export|float|goto|group|having|hint|import|inner|into|join|loop|number|object|of|outer|parallel|pragma|retrieve|returning|search|short|stat|synchronized|then|this_month|transaction|type|when",keyword:"private|protected|public|native|synchronized|abstract|threadsafe|transient|static|final|and|array|as|asc|break|bulk|by|catch|class|commit|continue|convertcurrency|delete|desc|do|else|enum|extends|false|final|finally|for|from|future|global|if|implements|in|insert|instanceof|interface|last_90_days|last_month|last_n_days|last_week|like|limit|list|map|merge|new|next_90_days|next_month|next_n_days|next_week|not|null|nulls|on|or|override|package|return|rollback|savepoint|select|set|sort|super|testmethod|this|this_week|throw|today|tolabel|tomorrow|trigger|true|try|undelete|update|upsert|using|virtual|webservice|where|while|yesterday|switch|case|default","storage.type":"def|boolean|byte|char|short|int|float|pblob|date|datetime|decimal|double|id|integer|long|string|time|void|blob|Object","constant.language":"true|false|null|after|before|count|excludes|first|includes|last|order|sharing|with","support.function":"system|apex|label|apexpages|userinfo|schema"},"identifier",!0);function t(o){return o.slice(-3)=="__c"?"support.function":e(o)}function n(o,l){return{regex:o+(l.multiline?"":"(?=.)"),token:"string.start",next:[{regex:l.escape,token:"character.escape"},{regex:l.error,token:"error.invalid"},{regex:o+(l.multiline?"":"|$"),token:"string.end",next:l.next||"start"},{defaultToken:"string"}]}}function g(){return[{token:"comment",regex:"\\/\\/(?=.)",next:[i.getTagRule(),{token:"comment",regex:"$|^",next:"start"},{defaultToken:"comment",caseInsensitive:!0}]},i.getStartRule("doc-start"),{token:"comment",regex:/\/\*/,next:[i.getTagRule(),{token:"comment",regex:"\\*\\/",next:"start"},{defaultToken:"comment",caseInsensitive:!0}]}]}this.$rules={start:[n("'",{escape:/\\[nb'"\\]/,error:/\\./,multiline:!1}),g(),{type:"decoration",token:["meta.package.apex","keyword.other.package.apex","meta.package.apex","storage.modifier.package.apex","meta.package.apex","punctuation.terminator.apex"],regex:/^(\s*)(package)\b(?:(\s*)([^ ;$]+)(\s*)((?:;)?))?/},{regex:/@[a-zA-Z_$][a-zA-Z_$\d\u0080-\ufffe]*/,token:"constant.language"},{regex:/[a-zA-Z_$][a-zA-Z_$\d\u0080-\ufffe]*/,token:t},{regex:"`#%",token:"error.invalid"},{token:"constant.numeric",regex:/[+-]?\d+(?:(?:\.\d*)?(?:[LlDdEe][+-]?\d+)?)\b|\.\d+[LlDdEe]/},{token:"keyword.operator",regex:/--|\+\+|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\|\||\?\:|[!$%&*+\-~\/^]=?/,next:"start"},{token:"punctuation.operator",regex:/[?:,;.]/,next:"start"},{token:"paren.lparen",regex:/[\[]/,next:"maybe_soql",merge:!1},{token:"paren.lparen",regex:/[\[({]/,next:"start",merge:!1},{token:"paren.rparen",regex:/[\])}]/,merge:!1}],maybe_soql:[{regex:/\s+/,token:"text"},{regex:/(SELECT|FIND)\b/,token:"keyword",caseInsensitive:!0,next:"soql"},{regex:"",token:"none",next:"start"}],soql:[{regex:"(:?ASC|BY|CATEGORY|CUBE|DATA|DESC|END|FIND|FIRST|FOR|FROM|GROUP|HAVING|IN|LAST|LIMIT|NETWORK|NULLS|OFFSET|ORDER|REFERENCE|RETURNING|ROLLUP|SCOPE|SELECT|SNIPPET|TRACKING|TYPEOF|UPDATE|USING|VIEW|VIEWSTAT|WHERE|WITH|AND|OR)\\b",token:"keyword",caseInsensitive:!0},{regex:"(:?target_length|toLabel|convertCurrency|count|Contact|Account|User|FIELDS)\\b",token:"support.function",caseInsensitive:!0},{token:"paren.rparen",regex:/[\]]/,next:"start",merge:!1},n("'",{escape:/\\[nb'"\\]/,error:/\\./,multiline:!1,next:"soql"}),n('"',{escape:/\\[nb'"\\]/,error:/\\./,multiline:!1,next:"soql"}),{regex:/\\./,token:"character.escape"},{regex:/[\?\&\|\!\{\}\[\]\(\)\^\~\*\:\"\'\+\-\,\.=\\\/]/,token:"keyword.operator"}],"log-start":[{token:"timestamp.invisible",regex:/^[\d:.() ]+\|/,next:"log-header"},{token:"timestamp.invisible",regex:/^  (Number of|Maximum)[^:]*:/,next:"log-comment"},{token:"invisible",regex:/^Execute Anonymous:/,next:"log-comment"},{defaultToken:"text"}],"log-comment":[{token:"log-comment",regex:/.*$/,next:"log-start"}],"log-header":[{token:"timestamp.invisible",regex:/((USER_DEBUG|\[\d+\]|DEBUG)\|)+/},{token:"keyword",regex:"(?:EXECUTION_FINISHED|EXECUTION_STARTED|CODE_UNIT_STARTED|CUMULATIVE_LIMIT_USAGE|LIMIT_USAGE_FOR_NS|CUMULATIVE_LIMIT_USAGE_END|CODE_UNIT_FINISHED)"},{regex:"",next:"log-start"}]},this.embedRules(i,"doc-",[i.getEndRule("start")]),this.normalizeRules()};d.inherits(c,h),s.ApexHighlightRules=c}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(r,s,m){var d=r("../../lib/oop"),h=r("../../range").Range,i=r("./fold_mode").FoldMode,c=s.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};d.inherits(c,i),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var g=e.getLine(n);if(this.singleLineBlockCommentRe.test(g)&&!this.startRegionRe.test(g)&&!this.tripleStarBlockCommentRe.test(g))return"";var o=this._getFoldWidgetBase(e,t,n);return!o&&this.startRegionRe.test(g)?"start":o},this.getFoldWidgetRange=function(e,t,n,g){var o=e.getLine(n);if(this.startRegionRe.test(o))return this.getCommentRegionBlock(e,o,n);var a=o.match(this.foldingStartMarker);if(a){var l=a.index;if(a[1])return this.openingBracketBlock(e,a[1],n,l);var u=e.getCommentFoldRange(n,l+a[0].length,1);return u&&!u.isMultiLine()&&(g?u=this.getSectionRange(e,n):t!="all"&&(u=null)),u}if(t!=="markbegin"){var a=o.match(this.foldingStopMarker);if(a){var l=a.index+a[0].length;return a[1]?this.closingBracketBlock(e,a[1],n,l):e.getCommentFoldRange(n,l,-1)}}},this.getSectionRange=function(e,t){var n=e.getLine(t),g=n.search(/\S/),o=t,l=n.length;t=t+1;for(var u=t,a=e.getLength();++t<a;){n=e.getLine(t);var x=n.search(/\S/);if(x!==-1){if(g>x)break;var f=this.getFoldWidgetRange(e,"all",t);if(f){if(f.start.row<=o)break;if(f.isMultiLine())t=f.end.row;else if(g==x)break}u=t}}return new h(o,l,u,e.getLine(u).length)},this.getCommentRegionBlock=function(e,t,n){for(var g=t.search(/\s*$/),o=e.getLength(),l=n,u=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,a=1;++n<o;){t=e.getLine(n);var x=u.exec(t);if(x&&(x[1]?a--:a++,!a))break}var f=n;if(f>l)return new h(l,g,f,t.length)}}.call(c.prototype)}),ace.define("ace/mode/apex",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/apex_highlight_rules","ace/mode/folding/cstyle","ace/mode/behaviour/cstyle"],function(r,s,m){var d=r("../lib/oop"),h=r("../mode/text").Mode,i=r("./apex_highlight_rules").ApexHighlightRules,c=r("../mode/folding/cstyle").FoldMode,e=r("../mode/behaviour/cstyle").CstyleBehaviour;function t(){h.call(this),this.HighlightRules=i,this.foldingRules=new c,this.$behaviour=new e}d.inherits(t,h),t.prototype.lineCommentStart="//",t.prototype.blockComment={start:"/*",end:"*/"},s.Mode=t}),function(){ace.require(["ace/mode/apex"],function(r){p&&(p.exports=r)})}()})(R);const b=k,E=_({__proto__:null,default:b},[k]);export{E as m};