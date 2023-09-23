"use strict";(self.webpackChunkparasola=self.webpackChunkparasola||[]).push([[7896],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},c=Object.keys(e);for(i=0;i<c.length;i++)r=c[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(i=0;i<c.length;i++)r=c[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),f=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=f(e.components);return i.createElement(s.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),l=f(r),d=n,v=l["".concat(s,".").concat(d)]||l[d]||u[d]||c;return r?i.createElement(v,a(a({ref:t},p),{},{components:r})):i.createElement(v,a({ref:t},p))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[l]="string"==typeof e?e:n,a[1]=o;for(var f=2;f<c;f++)a[f]=r[f];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7576:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>f});var i=r(7462),n=(r(7294),r(3905));const c={title:"Device Certificates"},a=void 0,o={unversionedId:"reference/device-certificates",id:"reference/device-certificates",title:"Device Certificates",description:"A device certificate is an X.509 certificate that is signed by a CA certificate. Devices use their certificates to authenticate with the Peridio Device API as well as during just in time provisioning.",source:"@site/docs/reference/device-certificates.md",sourceDirName:"reference",slug:"/reference/device-certificates",permalink:"/reference/device-certificates",draft:!1,tags:[],version:"current",frontMatter:{title:"Device Certificates"},sidebar:"reference",previous:{title:"Cohorts",permalink:"/reference/cohorts"},next:{title:"Devices",permalink:"/reference/devices"}},s={},f=[{value:"Expiration",id:"expiration",level:2}],p={toc:f},l="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(l,(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A ",(0,n.kt)("a",{parentName:"p",href:"devices"},"device")," certificate is an X.509 certificate that is signed by a ",(0,n.kt)("a",{parentName:"p",href:"ca-certificates"},"CA certificate"),". Devices use their certificates to authenticate with the ",(0,n.kt)("a",{parentName:"p",href:"../device-api"},"Peridio Device API")," as well as during ",(0,n.kt)("a",{parentName:"p",href:"just-in-time-provisioning"},"just in time provisioning"),"."),(0,n.kt)("h2",{id:"expiration"},"Expiration"),(0,n.kt)("p",null,"You cannot create a device certificate in Peridio with an expired X.509 certificate."),(0,n.kt)("p",null,"If a device certificate expires after having been configured into Peridio, the associated device will be unaffected in their ability to connect successfully."))}u.isMDXComponent=!0}}]);