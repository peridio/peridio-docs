"use strict";(self.webpackChunkparasola=self.webpackChunkparasola||[]).push([[904],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>v});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),l=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(r),v=n,d=f["".concat(s,".").concat(v)]||f[v]||p[v]||o;return r?i.createElement(d,a(a({ref:t},u),{},{components:r})):i.createElement(d,a({ref:t},u))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7753:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=r(7462),n=(r(7294),r(3905));r(8209);const o={title:"Devices"},a=void 0,c={unversionedId:"reference/devices",id:"reference/devices",title:"Devices",description:"A device is the logical representation of a physical or virtual thing you wish to manage firmware for with Peridio.",source:"@site/docs/reference/devices.md",sourceDirName:"reference",slug:"/reference/devices",permalink:"/reference/devices",draft:!1,tags:[],version:"current",frontMatter:{title:"Devices"},sidebar:"reference",previous:{title:"Device Certificates",permalink:"/reference/device-certificates"},next:{title:"Firmware Signing Keys",permalink:"/reference/firmware-signing-keys"}},s={},l=[{value:"Creation",id:"creation",level:2},{value:"Proactive",id:"proactive",level:3},{value:"Reactive",id:"reactive",level:3},{value:"Tags",id:"tags",level:2}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A device is the logical representation of a physical or virtual thing you wish to manage firmware for with Peridio."),(0,n.kt)("h2",{id:"creation"},"Creation"),(0,n.kt)("p",null,"Devices can be created proactively or reactively. The former is sometimes convenient when just starting out or taking a one off action, but quickly becomes untenable. When you wish to optimize the process of onboarding devices it is typically best to take a reactive approach."),(0,n.kt)("h3",{id:"proactive"},"Proactive"),(0,n.kt)("p",null,"Proactive creation of devices means that you create a device before it ever attempts to connect to the Peridio Device API. You may do this via the Console or the Peridio Device API. When taking this approach you must subsequently create a certificate for it as well in order to facilitate its authentication with the Peridio Device API."),(0,n.kt)("h3",{id:"reactive"},"Reactive"),(0,n.kt)("p",null,'Reactive creation of devices means that you configure Peridio in such a way that groups of devices are able to connect to the Peridio Device API without you having taken any per device action, and in that moment they are reactively created by Peridio for you "just in time".'),(0,n.kt)("p",null,"For documentation regarding configuring Peridio in this fashion, reference ",(0,n.kt)("a",{parentName:"p",href:"just-in-time-provisioning"},"just in time provisioning"),"."),(0,n.kt)("h2",{id:"tags"},"Tags"),(0,n.kt)("p",null,"Devices can be associated with tags to achieve logical groupings. These grouping may have external\nmeaning to you, but they may also be used within Peridio to adjust the scope of devices to which a\ndeployment is applicable as part of its configured ",(0,n.kt)("a",{parentName:"p",href:"deployments#tags"},"conditions"),"."))}p.isMDXComponent=!0},8209:(e,t,r)=>{r(7294)}}]);