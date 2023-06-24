function I(b,k){for(var d=0;d<k.length;d++){const u=k[d];if(typeof u!="string"&&!Array.isArray(u)){for(const x in u)if(x!=="default"&&!(x in b)){const h=Object.getOwnPropertyDescriptor(u,x);h&&Object.defineProperty(b,x,h.get?h:{enumerable:!0,get:()=>u[x]})}}}return Object.freeze(Object.defineProperty(b,Symbol.toStringTag,{value:"Module"}))}var S={},j={get exports(){return S},set exports(b){S=b}};(function(b,k){ace.define("ace/ext/textarea",["require","exports","module","ace/lib/event","ace/lib/useragent","ace/lib/net","ace/ace"],function(d,u,x){var h=d("../lib/event"),P=d("../lib/useragent");d("../lib/net");var O=d("../ace");x.exports=u=O;var C=function(e,c,n){var a=e.style[n];return a||(window.getComputedStyle?a=window.getComputedStyle(e,"").getPropertyValue(n):a=e.currentStyle[n]),(!a||a=="auto"||a=="intrinsic")&&(a=c.style[n]),a};function T(e,c){for(var n in c)e.style[n]=c[n]}function E(e,c){if(e.type!="textarea")throw new Error("Textarea required!");var n=e.parentNode,a=document.createElement("div"),o=function(){var t="position:relative;";["margin-top","margin-left","margin-right","margin-bottom"].forEach(function(l){t+=l+":"+C(e,a,l)+";"});var r=C(e,a,"width")||e.clientWidth+"px",f=C(e,a,"height")||e.clientHeight+"px";t+="height:"+f+";width:"+r+";",t+="display:inline-block;",a.setAttribute("style",t)};for(h.addListener(window,"resize",o),o(),n.insertBefore(a,e.nextSibling);n!==document;){if(n.tagName.toUpperCase()==="FORM"){var p=n.onsubmit;n.onsubmit=function(t){e.value=c(),p&&p.call(this,t)};break}n=n.parentNode}return a}u.transformTextarea=function(e,c){var n=e.autofocus||document.activeElement==e,a,o=E(e,function(){return a.getValue()});e.style.display="none",o.style.background="white";var p=document.createElement("div");T(p,{top:"0px",left:"0px",right:"0px",bottom:"0px",border:"1px solid gray",position:"absolute"}),o.appendChild(p);var t=document.createElement("div");T(t,{position:"absolute",right:"0px",bottom:"0px",cursor:"nw-resize",border:"solid 9px",borderColor:"lightblue gray gray #ceade6",zIndex:101});var r=document.createElement("div"),f={top:"0px",left:"20%",right:"0px",bottom:"0px",position:"absolute",padding:"5px",zIndex:100,color:"white",display:"none",overflow:"auto",fontSize:"14px",boxShadow:"-5px 2px 3px gray"};P.isOldIE?f.backgroundColor="#333":f.backgroundColor="rgba(0, 0, 0, 0.6)",T(r,f),o.appendChild(r),c=c||u.defaultOptions;var l=O.edit(p);a=l.getSession(),a.setValue(e.value||e.innerHTML),n&&l.focus(),o.appendChild(t),L(l,p,r,O,c),$(r,t,l);var w="";return h.addListener(t,"mousemove",function(g){var i=this.getBoundingClientRect(),y=g.clientX-i.left,v=g.clientY-i.top;y+v<(i.width+i.height)/2?(this.style.cursor="pointer",w="toggle"):(w="resize",this.style.cursor="nw-resize")}),h.addListener(t,"mousedown",function(g){if(g.preventDefault(),w=="toggle"){l.setDisplaySettings();return}o.style.zIndex=1e5;var i=o.getBoundingClientRect(),y=i.width+i.left-g.clientX,v=i.height+i.top-g.clientY;h.capture(t,function(s){o.style.width=s.clientX-i.left+y+"px",o.style.height=s.clientY-i.top+v+"px",l.resize()},function(){})}),l};function L(e,c,n,a,o){e.getSession(),e.renderer;function p(t){return t==="true"||t==!0}return e.setDisplaySettings=function(t){t==null&&(t=n.style.display=="none"),t?(n.style.display="block",n.hideButton.focus(),e.on("focus",function r(){e.removeListener("focus",r),n.style.display="none"})):e.focus()},e.$setOption=e.setOption,e.$getOption=e.getOption,e.setOption=function(t,r){switch(t){case"mode":e.$setOption("mode","ace/mode/"+r);break;case"theme":e.$setOption("theme","ace/theme/"+r);break;case"keybindings":switch(r){case"vim":e.setKeyboardHandler("ace/keyboard/vim");break;case"emacs":e.setKeyboardHandler("ace/keyboard/emacs");break;default:e.setKeyboardHandler(null)}break;case"wrap":case"fontSize":e.$setOption(t,r);break;default:e.$setOption(t,p(r))}},e.getOption=function(t){switch(t){case"mode":return e.$getOption("mode").substr(9);case"theme":return e.$getOption("theme").substr(10);case"keybindings":var r=e.getKeyboardHandler();switch(r&&r.$id){case"ace/keyboard/vim":return"vim";case"ace/keyboard/emacs":return"emacs";default:return"ace"}default:return e.$getOption(t)}},e.setOptions(o),e}function $(e,c,n){var a=null,o={mode:"Mode:",wrap:"Soft Wrap:",theme:"Theme:",fontSize:"Font Size:",showGutter:"Display Gutter:",keybindings:"Keyboard",showPrintMargin:"Show Print Margin:",useSoftTabs:"Use Soft Tabs:",showInvisibles:"Show Invisibles"},p={mode:{text:"Plain",javascript:"JavaScript",xml:"XML",html:"HTML",css:"CSS",scss:"SCSS",python:"Python",php:"PHP",java:"Java",ruby:"Ruby",c_cpp:"C/C++",coffee:"CoffeeScript",json:"json",perl:"Perl",clojure:"Clojure",ocaml:"OCaml",csharp:"C#",haxe:"haXe",svg:"SVG",textile:"Textile",groovy:"Groovy",liquid:"Liquid",Scala:"Scala"},theme:{clouds:"Clouds",clouds_midnight:"Clouds Midnight",cobalt:"Cobalt",crimson_editor:"Crimson Editor",dawn:"Dawn",gob:"Green on Black",eclipse:"Eclipse",idle_fingers:"Idle Fingers",kr_theme:"Kr Theme",merbivore:"Merbivore",merbivore_soft:"Merbivore Soft",mono_industrial:"Mono Industrial",monokai:"Monokai",pastel_on_dark:"Pastel On Dark",solarized_dark:"Solarized Dark",solarized_light:"Solarized Light",textmate:"Textmate",twilight:"Twilight",vibrant_ink:"Vibrant Ink"},showGutter:a,fontSize:{"10px":"10px","11px":"11px","12px":"12px","14px":"14px","16px":"16px"},wrap:{off:"Off",40:"40",80:"80",free:"Free"},keybindings:{ace:"ace",vim:"vim",emacs:"emacs"},showPrintMargin:a,useSoftTabs:a,showInvisibles:a},t=[];t.push("<table><tr><th>Setting</th><th>Value</th></tr>");function r(s,m,z,M){if(!z){s.push("<input type='checkbox' title='",m,"' ",M+""=="true"?"checked='true'":"","'></input>");return}s.push("<select title='"+m+"'>");for(var _ in z)s.push("<option value='"+_+"' "),M==_&&s.push(" selected "),s.push(">",z[_],"</option>");s.push("</select>")}for(var f in u.defaultOptions)t.push("<tr><td>",o[f],"</td>"),t.push("<td>"),r(t,f,p[f],n.getOption(f)),t.push("</td></tr>");t.push("</table>"),e.innerHTML=t.join("");for(var l=function(s){var m=s.currentTarget;n.setOption(m.title,m.value)},w=function(s){var m=s.currentTarget;n.setOption(m.title,m.checked)},g=e.getElementsByTagName("select"),i=0;i<g.length;i++)g[i].onchange=l;for(var y=e.getElementsByTagName("input"),i=0;i<y.length;i++)y[i].onclick=w;var v=document.createElement("input");v.type="button",v.value="Hide",h.addListener(v,"click",function(){n.setDisplaySettings(!1)}),e.appendChild(v),e.hideButton=v}u.defaultOptions={mode:"javascript",theme:"textmate",wrap:"off",fontSize:"12px",showGutter:"false",keybindings:"ace",showPrintMargin:"false",useSoftTabs:"true",showInvisibles:"false"}}),function(){ace.require(["ace/ext/textarea"],function(d){b&&(b.exports=d)})}()})(j);const B=S,H=I({__proto__:null,default:B},[S]);export{H as e};