//@pilet v:2(webpackChunkpr_store,{})
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),cl=ni(al||(al=ul`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),fl=ni(sl||(sl=ul`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),hl=Xn("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),pl=Xn(nl,{name:"MuiTouchRipple",slot:"Ripple"})(ll||(ll=ul`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),rl.rippleVisible,dl,550,(({theme:e})=>e.transitions.easing.easeInOut),rl.ripplePulsate,(({theme:e})=>e.transitions.duration.shorter),rl.child,rl.childLeaving,cl,550,(({theme:e})=>e.transitions.easing.easeInOut),rl.childPulsate,fl,(({theme:e})=>e.transitions.easing.easeInOut)),bl=e.forwardRef((function(t,i){const a=ir({props:t,name:"MuiTouchRipple"}),{center:s=!1,classes:l={},className:u}=a,d=n(a,il),[c,f]=e.useState([]),h=e.useRef(0),p=e.useRef(null);e.useEffect((()=>{p.current&&(p.current(),p.current=null)}),[c]);const b=e.useRef(!1),y=e.useRef(null),g=e.useRef(null),_=e.useRef(null);e.useEffect((()=>()=>{clearTimeout(y.current)}),[]);const m=e.useCallback((e=>{const{pulsate:t,rippleX:n,rippleY:r,rippleSize:i,cb:a}=e;f((e=>[...e,(0,yr.jsx)(pl,{classes:{ripple:o(l.ripple,rl.ripple),rippleVisible:o(l.rippleVisible,rl.rippleVisible),ripplePulsate:o(l.ripplePulsate,rl.ripplePulsate),child:o(l.child,rl.child),childLeaving:o(l.childLeaving,rl.childLeaving),childPulsate:o(l.childPulsate,rl.childPulsate)},timeout:550,pulsate:t,rippleX:n,rippleY:r,rippleSize:i},h.current)])),h.current+=1,p.current=a}),[l]),w=e.useCallback(((e={},t={},n=(()=>{}))=>{const{pulsate:r=!1,center:i=s||t.pulsate,fakeElement:o=!1}=t;if("mousedown"===(null==e?void 0:e.type)&&b.current)return void(b.current=!1);"touchstart"===(null==e?void 0:e.type)&&(b.current=!0);const a=o?null:_.current,l=a?a.getBoundingClientRect():{width:0,height:0,left:0,top:0};let u,d,c;if(i||e===undefined||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)u=Math.round(l.width/2),d=Math.round(l.height/2);else{const{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;u=Math.round(t-l.left),d=Math.round(n-l.top)}if(i)c=Math.sqrt((2*l.width**2+l.height**2)/3),c%2==0&&(c+=1);else{const e=2*Math.max(Math.abs((a?a.clientWidth:0)-u),u)+2,t=2*Math.max(Math.abs((a?a.clientHeight:0)-d),d)+2;c=Math.sqrt(e**2+t**2)}null!=e&&e.touches?null===g.current&&(g.current=()=>{m({pulsate:r,rippleX:u,rippleY:d,rippleSize:c,cb:n})},y.current=setTimeout((()=>{g.current&&(g.current(),g.current=null)}),80)):m({pulsate:r,rippleX:u,rippleY:d,rippleSize:c,cb:n})}),[s,m]),S=e.useCallback((()=>{w({},{pulsate:!0})}),[w]),E=e.useCallback(((e,t)=>{if(clearTimeout(y.current),"touchend"===(null==e?void 0:e.type)&&g.current)return g.current(),g.current=null,void(y.current=setTimeout((()=>{E(e,t)})));g.current=null,f((e=>e.length>0?e.slice(1):e)),p.current=t}),[]);return e.useImperativeHandle(i,(()=>({pulsate:S,start:w,stop:E})),[S,w,E]),(0,yr.jsx)(hl,r({className:o(rl.root,l.root,u),ref:_},d,{children:(0,yr.jsx)(tl,{component:null,exit:!0,children:c})}))}));function yl(e){return dr("MuiButtonBase",e)}const gl=cr("MuiButtonBase",["root","disabled","focusVisible"]),_l=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],ml=Xn("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${gl.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),wl=e.forwardRef((function(t,i){const a=ir({props:t,name:"MuiButtonBase"}),{action:s,centerRipple:l=!1,children:u,className:d,component:c="button",disabled:f=!1,disableRipple:h=!1,disableTouchRipple:p=!1,focusRipple:b=!1,LinkComponent:y="a",onBlur:g,onClick:_,onContextMenu:m,onDragLeave:w,onFocus:S,onFocusVisible:E,onKeyDown:v,onKeyUp:R,onMouseDown:A,onMouseLeave:T,onMouseUp:O,onTouchEnd:x,onTouchMove:I,onTouchStart:N,tabIndex:P=0,TouchRippleProps:k,touchRippleRef:D,type:j}=a,M=n(a,_l),L=e.useRef(null),C=e.useRef(null),F=Jr(C,D),{isFocusVisibleRef:$,onFocus:U,onBlur:B,ref:W}=Ks(),[V,H]=e.useState(!1);f&&V&&H(!1),e.useImperativeHandle(s,(()=>({focusVisible:()=>{H(!0),L.current.focus()}})),[]);const[G,q]=e.useState(!1);e.useEffect((()=>{q(!0)}),[]);const z=G&&!h&&!f;function Q(e,t,n=p){return Us((r=>{t&&t(r);return!n&&C.current&&C.current[e](r),!0}))}e.useEffect((()=>{V&&b&&!h&&G&&C.current.pulsate()}),[h,b,V,G]);const K=Q("start",A),Y=Q("stop",m),X=Q("stop",w),J=Q("stop",O),Z=Q("stop",(e=>{V&&e.preventDefault(),T&&T(e)})),ee=Q("start",N),te=Q("stop",x),ne=Q("stop",I),re=Q("stop",(e=>{B(e),!1===$.current&&H(!1),g&&g(e)}),!1),ie=Us((e=>{L.current||(L.current=e.currentTarget),U(e),!0===$.current&&(H(!0),E&&E(e)),S&&S(e)})),oe=()=>{const e=L.current;return c&&"button"!==c&&!("A"===e.tagName&&e.href)},ae=e.useRef(!1),se=Us((e=>{b&&!ae.current&&V&&C.current&&" "===e.key&&(ae.current=!0,C.current.stop(e,(()=>{C.current.start(e)}))),e.target===e.currentTarget&&oe()&&" "===e.key&&e.preventDefault(),v&&v(e),e.target===e.currentTarget&&oe()&&"Enter"===e.key&&!f&&(e.preventDefault(),_&&_(e))})),le=Us((e=>{b&&" "===e.key&&C.current&&V&&!e.defaultPrevented&&(ae.current=!1,C.current.stop(e,(()=>{C.current.pulsate(e)}))),R&&R(e),_&&e.target===e.currentTarget&&oe()&&" "===e.key&&!e.defaultPrevented&&_(e)}));let ue=c;"button"===ue&&(M.href||M.to)&&(ue=y);const de={};"button"===ue?(de.type=j===undefined?"button":j,de.disabled=f):(M.href||M.to||(de.role="button"),f&&(de["aria-disabled"]=f));const fe=Jr(i,W,L);const he=r({},a,{centerRipple:l,component:c,disabled:f,disableRipple:h,disableTouchRipple:p,focusRipple:b,tabIndex:P,focusVisible:V}),pe=(e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:i}=e,o=ce({root:["root",t&&"disabled",n&&"focusVisible"]},yl,i);return n&&r&&(o.root+=` ${r}`),o})(he);return(0,yr.jsxs)(ml,r({as:ue,className:o(pe.root,d),ownerState:he,onBlur:re,onClick:_,onContextMenu:Y,onFocus:ie,onKeyDown:se,onKeyUp:le,onMouseDown:K,onMouseLeave:Z,onMouseUp:J,onDragLeave:X,onTouchEnd:te,onTouchMove:ne,onTouchStart:ee,ref:fe,tabIndex:f?-1:P,type:j},de,M,{children:[u,z?(0,yr.jsx)(bl,r({ref:F,center:l},k)):null]}))})),Sl=wl;function El(e){return dr("MuiButton",e)}const vl=cr("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);const Rl=e.createContext({}),Al=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],Tl=e=>r({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),Ol=Xn(Sl,{shouldForwardProp:e=>Qn(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`${n.variant}${Rr(n.color)}`],t[`size${Rr(n.size)}`],t[`${n.variant}Size${Rr(n.size)}`],"inherit"===n.color&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth]}})((({theme:e,ownerState:t})=>{var n,i;return r({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":r({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:bn(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:bn(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:bn(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:(e.vars||e).palette.grey.A100,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":r({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${vl.focusVisible}`]:r({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${vl.disabled}`]:r({color:(e.vars||e).palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"contained"===t.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${bn(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.vars?e.vars.palette.text.primary:null==(n=(i=e.palette).getContrastText)?void 0:n.call(i,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],boxShadow:(e.vars||e).shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})}),(({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${vl.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${vl.disabled}`]:{boxShadow:"none"}})),xl=Xn("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.startIcon,t[`iconSize${Rr(n.size)}`]]}})((({ownerState:e})=>r({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},Tl(e)))),Il=Xn("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.endIcon,t[`iconSize${Rr(n.size)}`]]}})((({ownerState:e})=>r({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},Tl(e)))),Nl=e.forwardRef((function(t,i){const a=e.useContext(Rl),s=ir({props:Jn(a,t),name:"MuiButton"}),{children:l,color:u="primary",component:d="button",className:c,disabled:f=!1,disableElevation:h=!1,disableFocusRipple:p=!1,endIcon:b,focusVisibleClassName:y,fullWidth:g=!1,size:_="medium",startIcon:m,type:w,variant:S="text"}=s,E=n(s,Al),v=r({},s,{color:u,component:d,disabled:f,disableElevation:h,disableFocusRipple:p,fullWidth:g,size:_,type:w,variant:S}),R=(e=>{const{color:t,disableElevation:n,fullWidth:i,size:o,variant:a,classes:s}=e;return r({},s,ce({root:["root",a,`${a}${Rr(t)}`,`size${Rr(o)}`,`${a}Size${Rr(o)}`,"inherit"===t&&"colorInherit",n&&"disableElevation",i&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${Rr(o)}`],endIcon:["endIcon",`iconSize${Rr(o)}`]},El,s))})(v),A=m&&(0,yr.jsx)(xl,{className:R.startIcon,ownerState:v,children:m}),T=b&&(0,yr.jsx)(Il,{className:R.endIcon,ownerState:v,children:b});return(0,yr.jsxs)(Ol,r({ownerState:v,className:o(a.className,R.root,c),component:d,disabled:f,focusRipple:!p,focusVisibleClassName:o(R.focusVisible,y),ref:i,type:w},E,{classes:R,children:[A,l,T]}))})),Pl=Nl,kl=["className","component"];const Dl=function(t={}){const{defaultTheme:i,defaultClassName:a="MuiBox-root",generateClassName:s}=t,l=qt("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(Xt);return e.forwardRef((function(e,t){const u=nr(i),d=de(e),{className:c,component:f="div"}=d,h=n(d,kl);return(0,yr.jsx)(l,r({as:f,ref:t,className:o(c,s?s(a):a),theme:u},h))}))}({defaultTheme:qn(),defaultClassName:"MuiBox-root",generateClassName:lr.generate}),jl=Dl;function Ml(e){return dr("MuiCard",e)}cr("MuiCard",["root"]);const Ll=["className","raised"],Cl=Xn(Po,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),Fl=e.forwardRef((function(e,t){const i=ir({props:e,name:"MuiCard"}),{className:a,raised:s=!1}=i,l=n(i,Ll),u=r({},i,{raised:s}),d=(e=>{const{classes:t}=e;return ce({root:["root"]},Ml,t)})(u);return(0,yr.jsx)(Cl,r({className:o(d.root,a),elevation:s?8:undefined,ref:t,ownerState:u},l))}));function $l(e){return dr("MuiCardContent",e)}cr("MuiCardContent",["root"]);const Ul=["className","component"],Bl=Xn("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),Wl=e.forwardRef((function(e,t){const i=ir({props:e,name:"MuiCardContent"}),{className:a,component:s="div"}=i,l=n(i,Ul),u=r({},i,{component:s}),d=(e=>{const{classes:t}=e;return ce({root:["root"]},$l,t)})(u);return(0,yr.jsx)(Bl,r({as:s,className:o(d.root,a),ownerState:u,ref:t},l))}));var Vl=l(34880);const Hl=function(t){var n=t.activateConfig,r=t.data,i=r.description,o=r.title,a=r.url,s=r.route,l=(0,Vl.useHistory)();return e.createElement("div",null,e.createElement(Fl,{style:{top:30,width:300},variant:"outlined"},e.createElement(Wl,null,e.createElement(Pr,{variant:"h5",component:"h5"},o),e.createElement(Pr,{variant:"body1"},i),e.createElement(Pl,{style:{top:10,position:"relative"},variant:"contained",fullWidth:!0,color:"primary",onClick:function(){l.push(s),n(a)}},"Activate Config"))))};function Gl(e){return Gl="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Gl(e)}function ql(){ql=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(T){s=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var i=t&&t.prototype instanceof c?t:c,o=Object.create(i.prototype),a=new v(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return A()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=w(a,n);if(s){if(s===d)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(e,n,a),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(T){return{type:"throw",arg:T}}}e.wrap=l;var d={};function c(){}function f(){}function h(){}var p={};s(p,i,(function(){return this}));var b=Object.getPrototypeOf,y=b&&b(b(R([])));y&&y!==t&&n.call(y,i)&&(p=y);var g=h.prototype=c.prototype=Object.create(p);function _(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function m(e,t){function r(i,o,a,s){var l=u(e[i],e,o);if("throw"!==l.type){var d=l.arg,c=d.value;return c&&"object"==Gl(c)&&n.call(c,"__await")?t.resolve(c.__await).then((function(e){r("next",e,a,s)}),(function(e){r("throw",e,a,s)})):t.resolve(c).then((function(e){d.value=e,a(d)}),(function(e){return r("throw",e,a,s)}))}s(l.arg)}var i;this._invoke=function(e,n){function o(){return new t((function(t,i){r(e,n,t,i)}))}return i=i?i.then(o,o):o()}}function w(e,t){var n=e.iterator[t.method];if(undefined===n){if(t.delegate=null,"throw"===t.method){if(e.iterator["return"]&&(t.method="return",t.arg=undefined,w(e,t),"throw"===t.method))return d;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,d;var i=r.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=undefined),t.delegate=null,d):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function v(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function R(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=undefined,t.done=!0,t};return o.next=o}}return{next:A}}function A(){return{value:undefined,done:!0}}return f.prototype=h,s(g,"constructor",h),s(h,"constructor",f),f.displayName=s(h,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,s(e,a,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},_(m.prototype),s(m.prototype,o,(function(){return this})),e.AsyncIterator=m,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new m(l(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},_(g),s(g,a,"Generator"),s(g,i,(function(){return this})),s(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=R,v.prototype={constructor:v,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=undefined,this.done=!1,this.delegate=null,this.method="next",this.arg=undefined,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=undefined)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=undefined),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(s&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),E(n),d}},"catch":function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;E(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:R(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=undefined),d}},e}function zl(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(l){s=!0,i=l}finally{try{a||null==n["return"]||n["return"]()}finally{if(s)throw i}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Ql(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ql(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ql(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Kl=l(90482).QueryEngine,Yl="https://pod.werbrouck.me/aecostore/store";const Xl=function(n){var r=n.piral,i=zl(e["default"].useState(Yl),2),o=i[0],a=i[1],s=zl(e["default"].useState([]),2),l=s[0],u=s[1],d=zl(e["default"].useState(),2),c=(d[0],d[1],r.getData("CONSTANTS"));function f(e){r.setData(c.FEEDURL,e)}return e["default"].createElement("div",{style:{textAlign:"justify",padding:30,alignItems:"center",marginTop:"100px"}},e["default"].createElement(vr,{container:!0,spacing:2},e["default"].createElement(vr,{item:!0,xs:2}),e["default"].createElement(vr,{item:!0,xs:8},e["default"].createElement(Pr,{variant:"h4",style:Jl},"Get Started"),e["default"].createElement(Pr,null,"In this demo, a single store instance is created, which gives you the choice to load 2 configurations. Please select one or more Mifesto stores below, or add a new one. The Access Point of this store is: "),e["default"].createElement("br",null),e["default"].createElement($s,{fullWidth:!0,defaultValue:Yl,onChange:function(e){return a(e.target.value)}}),e["default"].createElement(Pl,{fullWidth:!0,style:Zl,variant:"contained",onClick:function(){return(0,t.__awaiter)(this,void 0,void 0,ql().mark((function e(){var t,n,r,i;return ql().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Kl,"\n    prefix dcat: <http://www.w3.org/ns/dcat#>\n    prefix mifesto: <http://w3id.org/mifesto#>\n    prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\n    SELECT DISTINCT ?config ?comment ?title ?route WHERE {\n      ?store dcat:dataset+ ?config .\n      ?config a mifesto:Configuration  ;\n      rdfs:comment ?comment ;\n      rdfs:label ?title ;\n      mifesto:initialRoute ?route.\n    }",e.next=4,t.queryBindings("\n    prefix dcat: <http://www.w3.org/ns/dcat#>\n    prefix mifesto: <http://w3id.org/mifesto#>\n    prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n\n    SELECT DISTINCT ?config ?comment ?title ?route WHERE {\n      ?store dcat:dataset+ ?config .\n      ?config a mifesto:Configuration  ;\n      rdfs:comment ?comment ;\n      rdfs:label ?title ;\n      mifesto:initialRoute ?route.\n    }",{sources:[o]});case 4:return n=e.sent,e.next=7,n.toArray();case 7:r=e.sent,i=[],r.forEach((function(e){return i.push({description:e.get("comment").id.replaceAll('"',""),title:e.get("title").id.replaceAll('"',""),url:e.get("config").id,route:e.get("route").id.replaceAll('"',"")})})),u(i);case 11:case"end":return e.stop()}}),e)})))}},"Find Modules"),e["default"].createElement(jl,null,e["default"].createElement(vr,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3}},l.map((function(t){return e["default"].createElement(vr,{item:!0,key:t},e["default"].createElement(Hl,{data:t,activateConfig:f}))}))))),e["default"].createElement(vr,{item:!0,xs:2})))};var Jl={marginTop:30,marginBottom:20},Zl={marginTop:15,marginBottom:15};function eu(t){var n=t.getData("CONSTANTS"),r=t.makeState(t,n)((function(e){var n=e.state,r=e.actions;return t.withState(Xl,{app:t,state:n,actions:r})}));console.log("app.meta :>> ",t.meta),t.showNotification('Registered "'.concat(t.meta.name,'" module!'),{autoClose:2e3}),t.meta.route&&(t.registerMenu((function(){return e.createElement(Vl.Link,{to:t.meta.route,style:{marginLeft:5,marginRight:5}},t.meta.name)})),t.registerPage(t.meta.route,(function(){return e.createElement(r,null)}))),t.registerExtension(t.meta.link,r)}})(),u})())}}}));
//# sourceMappingURL=index.js.map