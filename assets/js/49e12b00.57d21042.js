"use strict";(self.webpackChunkparasola=self.webpackChunkparasola||[]).push([[1490],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>b});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),f=a,b=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return t?n.createElement(b,s(s({ref:r},u),{},{components:t})):n.createElement(b,s({ref:r},u))}));function b(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=f;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8029:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(7462),a=(t(7294),t(3905));const o={},s="Bundles",i={unversionedId:"reference/bundles",id:"reference/bundles",title:"Bundles",description:"Bundles are an immutable ordered set of artifact versions. You associate a bundle with a release to specify what the release should distribute to devices. Every release is associated with a single bundle, but a bundle can be associated with any number of releases.",source:"@site/docs/reference/bundles.md",sourceDirName:"reference",slug:"/reference/bundles",permalink:"/reference/bundles",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"reference",previous:{title:"Verification Codes",permalink:"/reference/verification-codes"},next:{title:"Deployments",permalink:"/reference/deployments"}},l={},c=[],u={toc:c},p="wrapper";function d(e){let{components:r,...t}=e;return(0,a.kt)(p,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bundles"},"Bundles"),(0,a.kt)("p",null,"Bundles are an immutable ordered set of artifact versions. You associate a bundle with a release to specify what the release should distribute to devices. Every release is associated with a single bundle, but a bundle can be associated with any number of releases."),(0,a.kt)("p",null,"Bundles make it possible to reliably and easily release the same set of artifact versions across multiple cohorts, empowering common use cases like testing changes against a low risk cohort like engineers' devices, and then later promoting those exact changes to other higher risk cohorts like production devices."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/reference/releases#binary-resolution"},"binary resolution")," for more information regarding how bundles are leveraged."))}d.isMDXComponent=!0}}]);