"use strict";(self.webpackChunkparasola=self.webpackChunkparasola||[]).push([[2925],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,b=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(b,l(l({ref:t},c),{},{components:r})):n.createElement(b,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9692:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));r(8209);const i={},l="Creating Bundles",o={unversionedId:"guides/creating-bundles",id:"guides/creating-bundles",title:"Creating Bundles",description:"This guide describes how to create bundles.",source:"@site/docs/guides/creating-bundles.md",sourceDirName:"guides",slug:"/guides/creating-bundles",permalink:"/guides/creating-bundles",draft:!1,tags:[],version:"current",frontMatter:{}},u={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create Bundle",id:"create-bundle",level:2},{value:"CLI",id:"cli",level:3},{value:"API",id:"api",level:3},{value:"Web Console",id:"web-console",level:3}],c={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"creating-bundles"},"Creating Bundles"),(0,a.kt)("p",null,"This guide describes how to create bundles."),(0,a.kt)("p",null,"To learn more about Peridio bundles in general, see the ",(0,a.kt)("a",{parentName:"p",href:"/reference/bundles"},"bundles"),"\nreference."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/peridio/morel/releases"},"Peridio CLI"),".",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Last tested with version 0.4.0.")))),(0,a.kt)("h2",{id:"create-bundle"},"Create Bundle"),(0,a.kt)("h3",{id:"cli"},"CLI"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"peridio bundles create \\\n  --artifact-version-ids uuid1,uuid2\n")),(0,a.kt)("h3",{id:"api"},"API"),(0,a.kt)("p",null,"Use the Peridio Admin API\n",(0,a.kt)("a",{parentName:"p",href:"/admin-api#tag/artifacts/operations/create-a-bundle"},"Create a bundle")," endpoint."),(0,a.kt)("h3",{id:"web-console"},"Web Console"),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"https://console.cremini.peridio.com"},"Peridio Web Console"),"."))}p.isMDXComponent=!0},8209:(e,t,r)=>{r(7294)}}]);