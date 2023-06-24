function d(a,t){for(var n=0;n<t.length;n++){const e=t[n];if(typeof e!="string"&&!Array.isArray(e)){for(const c in e)if(c!=="default"&&!(c in a)){const r=Object.getOwnPropertyDescriptor(e,c);r&&Object.defineProperty(a,c,r.get?r:{enumerable:!0,get:()=>e[c]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var o={},_={get exports(){return o},set exports(a){o=a}};(function(a,t){ace.define("ace/theme/one_dark.css",["require","exports","module"],function(n,e,c){c.exports=`.ace-one-dark .ace_gutter {
    background: #282c34;
    color: #6a6f7a
}

.ace-one-dark .ace_print-margin {
    width: 1px;
    background: #e8e8e8
}

.ace-one-dark {
    background-color: #282c34;
    color: #abb2bf
}

.ace-one-dark .ace_cursor {
    color: #528bff
}

.ace-one-dark .ace_marker-layer .ace_selection {
    background: #3d4350
}

.ace-one-dark.ace_multiselect .ace_selection.ace_start {
    box-shadow: 0 0 3px 0 #282c34;
    border-radius: 2px
}

.ace-one-dark .ace_marker-layer .ace_step {
    background: #c6dbae
}

.ace-one-dark .ace_marker-layer .ace_bracket {
    margin: -1px 0 0 -1px;
    border: 1px solid #747369
}

.ace-one-dark .ace_marker-layer .ace_active-line {
    background: rgba(76, 87, 103, .19)
}

.ace-one-dark .ace_gutter-active-line {
    background-color: rgba(76, 87, 103, .19)
}

.ace-one-dark .ace_marker-layer .ace_selected-word {
    border: 1px solid #3d4350
}

.ace-one-dark .ace_fold {
    background-color: #61afef;
    border-color: #abb2bf
}

.ace-one-dark .ace_keyword {
    color: #c678dd
}

.ace-one-dark .ace_keyword.ace_operator {
    color: #c678dd
}

.ace-one-dark .ace_keyword.ace_other.ace_unit {
    color: #d19a66
}

.ace-one-dark .ace_constant.ace_language {
    color: #d19a66
}

.ace-one-dark .ace_constant.ace_numeric {
    color: #d19a66
}

.ace-one-dark .ace_constant.ace_character {
    color: #56b6c2
}

.ace-one-dark .ace_constant.ace_other {
    color: #56b6c2
}

.ace-one-dark .ace_support.ace_function {
    color: #61afef
}

.ace-one-dark .ace_support.ace_constant {
    color: #d19a66
}

.ace-one-dark .ace_support.ace_class {
    color: #e5c07b
}

.ace-one-dark .ace_support.ace_type {
    color: #e5c07b
}

.ace-one-dark .ace_storage {
    color: #c678dd
}

.ace-one-dark .ace_storage.ace_type {
    color: #c678dd
}

.ace-one-dark .ace_invalid {
    color: #fff;
    background-color: #f2777a
}

.ace-one-dark .ace_invalid.ace_deprecated {
    color: #272b33;
    background-color: #d27b53
}

.ace-one-dark .ace_string {
    color: #98c379
}

.ace-one-dark .ace_string.ace_regexp {
    color: #e06c75
}

.ace-one-dark .ace_comment {
    font-style: italic;
    color: #5c6370
}

.ace-one-dark .ace_variable {
    color: #e06c75
}

.ace-one-dark .ace_variable.ace_parameter {
    color: #d19a66
}

.ace-one-dark .ace_meta.ace_tag {
    color: #e06c75
}

.ace-one-dark .ace_entity.ace_other.ace_attribute-name {
    color: #e06c75
}

.ace-one-dark .ace_entity.ace_name.ace_function {
    color: #61afef
}

.ace-one-dark .ace_entity.ace_name.ace_tag {
    color: #e06c75
}

.ace-one-dark .ace_markup.ace_heading {
    color: #98c379
}

.ace-one-dark .ace_indent-guide {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ09NrYAgMjP4PAAtGAwchHMyAAAAAAElFTkSuQmCC) right repeat-y
}

.ace-one-dark .ace_indent-guide-active {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;
}
`}),ace.define("ace/theme/one_dark",["require","exports","module","ace/theme/one_dark.css","ace/lib/dom"],function(n,e,c){e.isDark=!0,e.cssClass="ace-one-dark",e.cssText=n("./one_dark.css");var r=n("../lib/dom");r.importCssString(e.cssText,e.cssClass,!1)}),function(){ace.require(["ace/theme/one_dark"],function(n){a&&(a.exports=n)})}()})(_);const l=o,k=d({__proto__:null,default:l},[o]);export{k as t};
