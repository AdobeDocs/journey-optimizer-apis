"use strict";(self.webpackChunkjourney_optimizer_apis=self.webpackChunkjourney_optimizer_apis||[]).push([[231],{2199:function(e,i,n){n.d(i,{BA:function(){return h},NN:function(){return M},Rp:function(){return b},__:function(){return _},ck:function(){return T},mQ:function(){return Z},ms:function(){return j}});var t=n(7462),a=n(3366),r=n(5007),o=n(5900),s=n.n(o),l=n(6029),c=n(7158),m=n(158),d=["orientation","isQuiet","children","className","onFontsReady"],u=["elementType","isSelected","className","children","icon","orientation","label"],p=["elementType","icon","isSelected","className","children","iconSize"],v=["className"],f=["elementType","isHidden","className","children"],g=["theme","orientation","className"];var h=function(e,i){e.current.style.transform="translate("+i.current.offsetLeft+"px, 0px)",e.current.style.width=i.current.offsetWidth+"px"},b=function(e,i){e.current.style.transition=i?"":"none"},y="480px",w=function(e){var i;return"img"===(null==e||null===(i=e.props)||void 0===i?void 0:i.mdxType)?(0,r.cloneElement)(e,{loading:"eager"}):e},z=function(e){var i=e.image,n=void 0===i?"":i,t=e.styles,a=void 0===t?"":t;return n?(0,r.cloneElement)(n,{children:(0,m.ve)(n.props.children,w),css:(0,l.iv)("display:flex;align-items:center;justify-content:center;height:100%;width:100%;margin-top:var(--spectrum-global-dimension-size-0);img{display:block;object-fit:contain;}",a,";","")}):null},x=function(e){var i=e.icon,n=e.styles;return i?(0,r.cloneElement)(i,{alt:"",css:(0,l.iv)("height:var(--spectrum-global-dimension-size-600);width:var(--spectrum-global-dimension-size-600);margin-top:var(--spectrum-global-dimension-size-0);img{display:block;object-fit:contain;}",n,";","")}):null},Z=(0,r.forwardRef)((function(e,i){var n=e.orientation,o=void 0===n?"horizontal":n,c=e.isQuiet,m=void 0===c||c,u=e.children,p=e.className,v=e.onFontsReady,f=(0,a.Z)(e,d);return(0,r.useEffect)((function(){document.fonts.ready.then((function(){v&&v()}))}),[v]),(0,l.tZ)("div",(0,t.Z)({ref:i},f,{role:"tablist","aria-orientation":o,className:s()(p,"spectrum-Tabs","spectrum-Tabs--sizeM","spectrum-Tabs--"+o,{"spectrum-Tabs--quiet":m})}),u)})),N={name:"xyzkeb",styles:"align-self:flex-start"},k={name:"1cw4ukq",styles:"width:inherit!important;align-self:flex-start"},T=(0,r.forwardRef)((function(e,i){var n=e.elementType,r=void 0===n?"div":n,o=e.isSelected,m=void 0!==o&&o,d=e.className,p=e.children,v=e.icon,f=e.orientation,g=e.label,h=(0,a.Z)(e,u),b=r,y=(0,c.ZP)();return(0,l.tZ)(b,(0,t.Z)({},h,{ref:i,role:"tab","aria-selected":m,"aria-controls":y,className:s()(d,"spectrum-Tabs-item",{"is-selected":m})}),v?(0,l.tZ)(R,{icon:v,isSelected:m,css:"horizontal"===f?k:N}):null,g?(0,l.tZ)(_,null," ",g," "):null,p)})),S={name:"16l42sl",styles:"height:var(--spectrum-global-dimension-size-600);width:var(--spectrum-global-dimension-size-550);z-index:1"},R=(0,r.forwardRef)((function(e,i){var n=e.elementType,r=void 0===n?"div":n,o=e.icon,c=e.isSelected,m=e.className,d=(e.children,e.iconSize),u=void 0===d?"M":d,v=(0,a.Z)(e,p),f=r;return(0,l.tZ)(f,(0,t.Z)({},v,{ref:i,className:s()(m,"spectrum-Icon",{"is-selected":c}),css:S}),o?function(e,i,n){var t,a,r;return"img"===(null==e||null===(t=e.props)||void 0===t||null===(a=t.children)||void 0===a||null===(r=a.props)||void 0===r?void 0:r.mdxType)?(0,l.tZ)(z,{image:e,className:s()(i,"spectrum-Icon spectrum-Icon-size"+n)}):(0,l.tZ)(x,{icon:e,className:s()(i,"spectrum-Icon spectrum-Icon-size"+n)})}(o,m,u):null)})),I={name:"pwo431",styles:"transition-property:transform,width"},M=(0,r.forwardRef)((function(e,i){var n=e.className,r=(0,a.Z)(e,v);return(0,l.tZ)("div",(0,t.Z)({},r,{ref:i,className:s()(n,"spectrum-Tabs-selectionIndicator"),css:I}))})),_=function(e){var i=e.children;return(0,l.tZ)("span",{className:"spectrum-Tabs-itemLabel"},i)},L=(0,r.forwardRef)((function(e,i){var n=e.elementType,r=void 0===n?"div":n,o=e.isHidden,c=e.className,m=e.children,d=(0,a.Z)(e,f),u=r;return(0,l.tZ)(u,(0,t.Z)({},d,{ref:i,hidden:o,className:s()(c)}),m)})),Y={name:"ilo42r",styles:"background:var(--spectrum-global-color-gray-100);width:100%;overflow:hidden!important;margin:0;padding-bottom:calc(var(--spectrum-global-dimension-size-1250) + var(--spectrum-global-dimension-size-250))"},j=function(e){var i=e.theme,n=void 0===i?"light":i,t=e.orientation,o=void 0===t?"horizontal":t,c=e.className,d=(0,a.Z)(e,g),u=(0,r.useState)([])[0],p=(0,r.useRef)(null),v=(0,r.useState)({tab:0}),f=v[0],b=v[1],w=Object.keys(d).filter((function(e){return e.startsWith("heading")})).map((function(e){return e})).map((function(e,i){var n,t;return{heading:(null==d||null===(n=d["heading"+i])||void 0===n||null===(t=n.props)||void 0===t?void 0:t.children)||(null==d?void 0:d.heading),content:(null==d?void 0:d["content"+i])||(null==d?void 0:d.content),image:(null==d?void 0:d["image"+i])||(null==d?void 0:d.image)}})),z=function(e){void 0===e&&(e=f.tab);var i=u.filter((function(e){return null==e?void 0:e.current}))[e];h(p,i)},x=function(e){b({tab:e}),z(e)};return(0,l.tZ)("section",{className:s()(c,"tabsBlock spectrum--"+n),css:Y},(0,l.tZ)("div",{css:(0,l.iv)("display:","vertical"===o?"inline-flex":"",";@media only screen and (min-width: ",m.LU,"){margin:0 auto!important;}@media only screen and (max-width: ",y,"){flex-direction:column;}","")},(0,l.tZ)("div",{css:(0,l.iv)("display:","vertical"===o?"grid":"block",";position:relative;grid-template-columns:300px calc(100vw - 300px);margin-top:","vertical"===o?"var(--spectrum-global-dimension-size-300)":"",";width:inherit;@media only screen and (max-width: ",y,"){display:block!important;width:",(0,m.MY)(2.5),"!important;}@media only screen and (device-width: ",m.q9,"){width:",(0,m.MY)(6.4),"!important;}@media only screen and (device-width: ",m.LU,"){width:",(0,m.MY)(8),"!important;}","")},(null==w?void 0:w.length)>0?(0,l.tZ)(Z,{orientation:o,isQuiet:!0,onFontsReady:z},w.map((function(e,i){var n=(0,r.createRef)();u.push(n);var t=f.tab===i;return(0,l.tZ)(T,{className:"tabItem",key:"tabItem_"+i,id:"tabItem_"+i,ref:n,isSelected:t,"aria-controls":"tabView"+i,tabIndex:i===f.tab?0:-1,"aria-label":e.heading,"aria-selected":i===f.tab,label:(0,l.tZ)("b",null,e.heading),icon:e.image,orientation:o,onKeyDown:function(e){"ArrowDown"!==e.key&&"ArrowRight"!==e.key&&"Enter"!==e.key||e.currentTarget.nextSibling&&e.currentTarget.nextSibling.focus(),"ArrowUp"!==e.key&&"ArrowLeft"!==e.key||e.currentTarget.previousSibling&&e.currentTarget.previousSibling.focus()},onFocus:function(){x(i)},onClick:function(){x(i)},css:(0,l.iv)("text-align:left;white-space:normal;width:","vertical"===o?"calc(var(--spectrum-global-dimension-size-2000) + var(--spectrum-global-dimension-size-600))":"calc(var(--spectrum-global-dimension-static-grid-fixed-max-width) / var(--spectrum-global-dimension-static-grid-columns))","!important;font-size:var(--spectrum-global-dimension-size-200);margin-bottom:","vertical"===o?"2.4rem !important":"0rem",";display:flex!important;height:auto!important;line-height:","vertical"===o?"initial !important":"initial",";.spectrum-Tabs-itemLabel{margin-top:5px;margin-bottom:5px;}.spectrum-Icon{background-size:var(--spectrum-global-dimension-size-225) var(--spectrum-global-dimension-size-275);width:var(--spectrum-global-dimension-size-500);height:var(--spectrum-global-dimension-size-400);}&.is-disabled{pointer-events:none;}&::before{left:var(--spectrum-global-dimension-size-0)!important;right:var(--spectrum-global-dimension-size-0)!important;}@media only screen and (max-width: ",y,"){margin-top:var(--spectrum-global-dimension-size-25)!important;margin-bottom:var(--spectrum-global-dimension-size-25)!important;}@media only screen and (min-width: ",m.LU,"){left:var(--spectrum-global-dimension-size-250)!important;}","")})})),(0,l.tZ)(M,{ref:p})):null,(null==w?void 0:w.length)>0?w.map((function(e,i){var n=f.tab===i;return(0,l.tZ)(L,{key:"tabView_"+i,className:"tabView",isHidden:!n,css:(0,l.iv)("text-align:left;max-width:100%!important;padding:","vertical"===o?"":(0,m.MY)(.125)+" "+(0,m.MY)(.25),";@media only screen and (max-width: ",y,"){padding-left:inherit!important;max-width:",(0,m.MY)(3),"!important;}@media only screen and (device-width: ",m.q9,"){max-width:",(0,m.MY)(3.5),"!important;}@media only screen and (device-width: ",m.LU,"){max-width:",(0,m.MY)(6.5),"!important;padding-left:var(--spectrum-global-dimension-size-500);}","")},e.content?e.content:null)})):null)))}}}]);
//# sourceMappingURL=3f943334-f4b2465b5e7a68c07a54.js.map