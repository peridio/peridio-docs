"use strict";(self.webpackChunkparasola=self.webpackChunkparasola||[]).push([[2573],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=u(r),f=i,m=l["".concat(p,".").concat(f)]||l[f]||d[f]||o;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[l]="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4060:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(7462),i=(r(7294),r(3905));const o={},a="Creating Products",c={unversionedId:"guides/creating-products",id:"guides/creating-products",title:"Creating Products",description:"This guide describes how to create produts.",source:"@site/docs/guides/creating-products.md",sourceDirName:"guides",slug:"/guides/creating-products",permalink:"/guides/creating-products",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"guides",previous:{title:"Creating Devices",permalink:"/guides/creating-devices"},next:{title:"Creating X.509 Certificates with OpenSSL",permalink:"/guides/creating-x509-certificates-with-openssl"}},p={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create Product",id:"create-product",level:2},{value:"Web Console",id:"web-console",level:3},{value:"CLI",id:"cli",level:3},{value:"API",id:"api",level:3}],s={toc:u},l="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(l,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"creating-products"},"Creating Products"),(0,i.kt)("p",null,"This guide describes how to create produts."),(0,i.kt)("p",null,"To learn more about Peridio products in general, see the ",(0,i.kt)("a",{parentName:"p",href:"/reference/products"},"products")," reference."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/peridio/morel/releases"},"Peridio CLI")," >= 0.11.0.")),(0,i.kt)("h2",{id:"create-product"},"Create Product"),(0,i.kt)("h3",{id:"web-console"},"Web Console"),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"https://console.cremini.peridio.com"},"Peridio Web Console"),"."),(0,i.kt)("h3",{id:"cli"},"CLI"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"peridio products-v2 create \\\n  --name name \\\n  --organization-prn prn\n")),(0,i.kt)("h3",{id:"api"},"API"),(0,i.kt)("p",null,"Use the Peridio Admin API ",(0,i.kt)("a",{parentName:"p",href:"/admin-api#products/operation/create-a-product-v2"},"create-a-product-v2")," endpoint."))}d.isMDXComponent=!0}}]);