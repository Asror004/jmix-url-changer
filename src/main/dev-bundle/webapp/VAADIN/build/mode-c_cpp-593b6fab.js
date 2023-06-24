function b(x,_){for(var r=0;r<_.length;r++){const g=_[r];if(typeof g!="string"&&!Array.isArray(g)){for(const m in g)if(m!=="default"&&!(m in x)){const d=Object.getOwnPropertyDescriptor(g,m);d&&Object.defineProperty(x,m,d.get?d:{enumerable:!0,get:()=>g[m]})}}}return Object.freeze(Object.defineProperty(x,Symbol.toStringTag,{value:"Module"}))}var k={},R={get exports(){return k},set exports(x){k=x}};(function(x,_){ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(r,g,m){var d=r("../lib/oop"),u=r("./text_highlight_rules").TextHighlightRules,l=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@[\\w\\d_]+"},l.getTagRule(),{defaultToken:"comment.doc",caseInsensitive:!0}]}};d.inherits(l,u),l.getTagRule=function(c){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},l.getStartRule=function(c){return{token:"comment.doc",regex:"\\/\\*(?=\\*)",next:c}},l.getEndRule=function(c){return{token:"comment.doc",regex:"\\*\\/",next:c}},g.DocCommentHighlightRules=l}),ace.define("ace/mode/c_cpp_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(r,g,m){var d=r("../lib/oop"),u=r("./doc_comment_highlight_rules").DocCommentHighlightRules,l=r("./text_highlight_rules").TextHighlightRules,c=g.cFunctions="\\b(?:hypot(?:f|l)?|s(?:scanf|ystem|nprintf|ca(?:nf|lb(?:n(?:f|l)?|ln(?:f|l)?))|i(?:n(?:h(?:f|l)?|f|l)?|gn(?:al|bit))|tr(?:s(?:tr|pn)|nc(?:py|at|mp)|c(?:spn|hr|oll|py|at|mp)|to(?:imax|d|u(?:l(?:l)?|max)|k|f|l(?:d|l)?)|error|pbrk|ftime|len|rchr|xfrm)|printf|et(?:jmp|vbuf|locale|buf)|qrt(?:f|l)?|w(?:scanf|printf)|rand)|n(?:e(?:arbyint(?:f|l)?|xt(?:toward(?:f|l)?|after(?:f|l)?))|an(?:f|l)?)|c(?:s(?:in(?:h(?:f|l)?|f|l)?|qrt(?:f|l)?)|cos(?:h(?:f)?|f|l)?|imag(?:f|l)?|t(?:ime|an(?:h(?:f|l)?|f|l)?)|o(?:s(?:h(?:f|l)?|f|l)?|nj(?:f|l)?|pysign(?:f|l)?)|p(?:ow(?:f|l)?|roj(?:f|l)?)|e(?:il(?:f|l)?|xp(?:f|l)?)|l(?:o(?:ck|g(?:f|l)?)|earerr)|a(?:sin(?:h(?:f|l)?|f|l)?|cos(?:h(?:f|l)?|f|l)?|tan(?:h(?:f|l)?|f|l)?|lloc|rg(?:f|l)?|bs(?:f|l)?)|real(?:f|l)?|brt(?:f|l)?)|t(?:ime|o(?:upper|lower)|an(?:h(?:f|l)?|f|l)?|runc(?:f|l)?|gamma(?:f|l)?|mp(?:nam|file))|i(?:s(?:space|n(?:ormal|an)|cntrl|inf|digit|u(?:nordered|pper)|p(?:unct|rint)|finite|w(?:space|c(?:ntrl|type)|digit|upper|p(?:unct|rint)|lower|al(?:num|pha)|graph|xdigit|blank)|l(?:ower|ess(?:equal|greater)?)|al(?:num|pha)|gr(?:eater(?:equal)?|aph)|xdigit|blank)|logb(?:f|l)?|max(?:div|abs))|di(?:v|fftime)|_Exit|unget(?:c|wc)|p(?:ow(?:f|l)?|ut(?:s|c(?:har)?|wc(?:har)?)|error|rintf)|e(?:rf(?:c(?:f|l)?|f|l)?|x(?:it|p(?:2(?:f|l)?|f|l|m1(?:f|l)?)?))|v(?:s(?:scanf|nprintf|canf|printf|w(?:scanf|printf))|printf|f(?:scanf|printf|w(?:scanf|printf))|w(?:scanf|printf)|a_(?:start|copy|end|arg))|qsort|f(?:s(?:canf|e(?:tpos|ek))|close|tell|open|dim(?:f|l)?|p(?:classify|ut(?:s|c|w(?:s|c))|rintf)|e(?:holdexcept|set(?:e(?:nv|xceptflag)|round)|clearexcept|testexcept|of|updateenv|r(?:aiseexcept|ror)|get(?:e(?:nv|xceptflag)|round))|flush|w(?:scanf|ide|printf|rite)|loor(?:f|l)?|abs(?:f|l)?|get(?:s|c|pos|w(?:s|c))|re(?:open|e|ad|xp(?:f|l)?)|m(?:in(?:f|l)?|od(?:f|l)?|a(?:f|l|x(?:f|l)?)?))|l(?:d(?:iv|exp(?:f|l)?)|o(?:ngjmp|cal(?:time|econv)|g(?:1(?:p(?:f|l)?|0(?:f|l)?)|2(?:f|l)?|f|l|b(?:f|l)?)?)|abs|l(?:div|abs|r(?:int(?:f|l)?|ound(?:f|l)?))|r(?:int(?:f|l)?|ound(?:f|l)?)|gamma(?:f|l)?)|w(?:scanf|c(?:s(?:s(?:tr|pn)|nc(?:py|at|mp)|c(?:spn|hr|oll|py|at|mp)|to(?:imax|d|u(?:l(?:l)?|max)|k|f|l(?:d|l)?|mbs)|pbrk|ftime|len|r(?:chr|tombs)|xfrm)|to(?:b|mb)|rtomb)|printf|mem(?:set|c(?:hr|py|mp)|move))|a(?:s(?:sert|ctime|in(?:h(?:f|l)?|f|l)?)|cos(?:h(?:f|l)?|f|l)?|t(?:o(?:i|f|l(?:l)?)|exit|an(?:h(?:f|l)?|2(?:f|l)?|f|l)?)|b(?:s|ort))|g(?:et(?:s|c(?:har)?|env|wc(?:har)?)|mtime)|r(?:int(?:f|l)?|ound(?:f|l)?|e(?:name|alloc|wind|m(?:ove|quo(?:f|l)?|ainder(?:f|l)?))|a(?:nd|ise))|b(?:search|towc)|m(?:odf(?:f|l)?|em(?:set|c(?:hr|py|mp)|move)|ktime|alloc|b(?:s(?:init|towcs|rtowcs)|towc|len|r(?:towc|len))))\\b",e=function(){var n="break|case|continue|default|do|else|for|goto|if|_Pragma|return|switch|while|catch|operator|try|throw|using",t="asm|__asm__|auto|bool|_Bool|char|_Complex|double|enum|float|_Imaginary|int|int8_t|int16_t|int32_t|int64_t|long|short|signed|size_t|struct|typedef|uint8_t|uint16_t|uint32_t|uint64_t|union|unsigned|void|class|wchar_t|template|char16_t|char32_t",i="const|extern|register|restrict|static|volatile|inline|private|protected|public|friend|explicit|virtual|export|mutable|typename|constexpr|new|delete|alignas|alignof|decltype|noexcept|thread_local",o="and|and_eq|bitand|bitor|compl|not|not_eq|or|or_eq|typeid|xor|xor_eq|const_cast|dynamic_cast|reinterpret_cast|static_cast|sizeof|namespace",f="NULL|true|false|TRUE|FALSE|nullptr",s=this.$keywords=this.createKeywordMapper({"keyword.control":n,"storage.type":t,"storage.modifier":i,"keyword.operator":o,"variable.language":"this","constant.language":f},"identifier"),a=/\\(?:['"?\\abfnrtv]|[0-7]{1,3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}U[a-fA-F\d]{8}|.)/.source,h="%"+/(\d+\$)?/.source+/[#0\- +']*/.source+/[,;:_]?/.source+/((-?\d+)|\*(-?\d+\$)?)?/.source+/(\.((-?\d+)|\*(-?\d+\$)?)?)?/.source+/(hh|h|ll|l|j|t|z|q|L|vh|vl|v|hv|hl)?/.source+/(\[[^"\]]+\]|[diouxXDOUeEfFgGaACcSspn%])/.source;this.$rules={start:[{token:"comment",regex:"//$",next:"start"},{token:"comment",regex:"//",next:"singleLineComment"},u.getStartRule("doc-start"),{token:"comment",regex:"\\/\\*",next:"comment"},{token:"string",regex:"'(?:"+a+"|.)?'"},{token:"string.start",regex:'"',stateName:"qqstring",next:[{token:"string",regex:/\\\s*$/,next:"qqstring"},{token:"constant.language.escape",regex:a},{token:"constant.language.escape",regex:h},{token:"string.end",regex:'"|$',next:"start"},{defaultToken:"string"}]},{token:"string.start",regex:'R"\\(',stateName:"rawString",next:[{token:"string.end",regex:'\\)"',next:"start"},{defaultToken:"string"}]},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"},{token:"keyword",regex:"#\\s*(?:include|import|pragma|line|define|undef)\\b",next:"directive"},{token:"keyword",regex:"#\\s*(?:endif|if|ifdef|else|elif|ifndef)\\b"},{token:"support.function.C99.c",regex:c},{token:s,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*"},{token:"keyword.operator",regex:/--|\+\+|<<=|>>=|>>>=|<>|&&|\|\||\?:|[*%\/+\-&\^|~!<>=]=?/},{token:"punctuation.operator",regex:"\\?|\\:|\\,|\\;|\\."},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],comment:[{token:"comment",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}],singleLineComment:[{token:"comment",regex:/\\$/,next:"singleLineComment"},{token:"comment",regex:/$/,next:"start"},{defaultToken:"comment"}],directive:[{token:"constant.other.multiline",regex:/\\/},{token:"constant.other.multiline",regex:/.*\\/},{token:"constant.other",regex:"\\s*<.+?>",next:"start"},{token:"constant.other",regex:'\\s*["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]',next:"start"},{token:"constant.other",regex:"\\s*['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']",next:"start"},{token:"constant.other",regex:/[^\\\/]+/,next:"start"}]},this.embedRules(u,"doc-",[u.getEndRule("start")]),this.normalizeRules()};d.inherits(e,l),g.c_cppHighlightRules=e}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(r,g,m){var d=r("../range").Range,u=function(){};(function(){this.checkOutdent=function(l,c){return/^\s+$/.test(l)?/^\s*\}/.test(c):!1},this.autoOutdent=function(l,c){var e=l.getLine(c),n=e.match(/^(\s*\})/);if(!n)return 0;var t=n[1].length,i=l.findMatchingBracket({row:c,column:t});if(!i||i.row==c)return 0;var o=this.$getIndent(l.getLine(i.row));l.replace(new d(c,0,c,t-1),o)},this.$getIndent=function(l){return l.match(/^\s*/)[0]}}).call(u.prototype),g.MatchingBraceOutdent=u}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(r,g,m){var d=r("../../lib/oop"),u=r("../../range").Range,l=r("./fold_mode").FoldMode,c=g.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};d.inherits(c,l),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,n,t){var i=e.getLine(t);if(this.singleLineBlockCommentRe.test(i)&&!this.startRegionRe.test(i)&&!this.tripleStarBlockCommentRe.test(i))return"";var o=this._getFoldWidgetBase(e,n,t);return!o&&this.startRegionRe.test(i)?"start":o},this.getFoldWidgetRange=function(e,n,t,i){var o=e.getLine(t);if(this.startRegionRe.test(o))return this.getCommentRegionBlock(e,o,t);var a=o.match(this.foldingStartMarker);if(a){var f=a.index;if(a[1])return this.openingBracketBlock(e,a[1],t,f);var s=e.getCommentFoldRange(t,f+a[0].length,1);return s&&!s.isMultiLine()&&(i?s=this.getSectionRange(e,t):n!="all"&&(s=null)),s}if(n!=="markbegin"){var a=o.match(this.foldingStopMarker);if(a){var f=a.index+a[0].length;return a[1]?this.closingBracketBlock(e,a[1],t,f):e.getCommentFoldRange(t,f,-1)}}},this.getSectionRange=function(e,n){var t=e.getLine(n),i=t.search(/\S/),o=n,f=t.length;n=n+1;for(var s=n,a=e.getLength();++n<a;){t=e.getLine(n);var h=t.search(/\S/);if(h!==-1){if(i>h)break;var p=this.getFoldWidgetRange(e,"all",n);if(p){if(p.start.row<=o)break;if(p.isMultiLine())n=p.end.row;else if(i==h)break}s=n}}return new u(o,f,s,e.getLine(s).length)},this.getCommentRegionBlock=function(e,n,t){for(var i=n.search(/\s*$/),o=e.getLength(),f=t,s=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,a=1;++t<o;){n=e.getLine(t);var h=s.exec(n);if(h&&(h[1]?a--:a++,!a))break}var p=t;if(p>f)return new u(f,i,p,n.length)}}.call(c.prototype)}),ace.define("ace/mode/c_cpp",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/c_cpp_highlight_rules","ace/mode/matching_brace_outdent","ace/range","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle"],function(r,g,m){var d=r("../lib/oop"),u=r("./text").Mode,l=r("./c_cpp_highlight_rules").c_cppHighlightRules,c=r("./matching_brace_outdent").MatchingBraceOutdent;r("../range").Range;var e=r("./behaviour/cstyle").CstyleBehaviour,n=r("./folding/cstyle").FoldMode,t=function(){this.HighlightRules=l,this.$outdent=new c,this.$behaviour=new e,this.foldingRules=new n};d.inherits(t,u),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(i,o,f){var s=this.$getIndent(o),a=this.getTokenizer().getLineTokens(o,i),h=a.tokens,p=a.state;if(h.length&&h[h.length-1].type=="comment")return s;if(i=="start"){var v=o.match(/^.*[\{\(\[]\s*$/);v&&(s+=f)}else if(i=="doc-start"){if(p=="start")return"";var v=o.match(/^\s*(\/?)\*/);v&&(v[1]&&(s+=" "),s+="* ")}return s},this.checkOutdent=function(i,o,f){return this.$outdent.checkOutdent(o,f)},this.autoOutdent=function(i,o,f){this.$outdent.autoOutdent(o,f)},this.$id="ace/mode/c_cpp",this.snippetFileId="ace/snippets/c_cpp"}.call(t.prototype),g.Mode=t}),function(){ace.require(["ace/mode/c_cpp"],function(r){x&&(x.exports=r)})}()})(R);const y=k,w=b({__proto__:null,default:y},[k]);export{w as m};
