"use strict";(self.webpackChunkparasola=self.webpackChunkparasola||[]).push([[4385],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=i,b=u["".concat(l,".").concat(f)]||u[f]||p[f]||a;return r?n.createElement(b,o(o({ref:t},d),{},{components:r})):n.createElement(b,o({ref:t},d))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},565:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));r(8209);const a={},o="Binaries",s={unversionedId:"reference/binaries",id:"reference/binaries",title:"Binaries",description:"A binary is an actual piece of data you wish to distribute to devices.",source:"@site/docs/reference/binaries.md",sourceDirName:"reference",slug:"/reference/binaries",permalink:"/reference/binaries",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"reference",previous:{title:"Artifact Versions",permalink:"/reference/artifact-versions"},next:{title:"Bundles",permalink:"/reference/bundles"}},l={},c=[{value:"Content Versus Record",id:"content-versus-record",level:2},{value:"Targets and Compatibility",id:"targets-and-compatibility",level:2},{value:"Purged Binaries",id:"purged-binaries",level:2},{value:"Impact on Releases",id:"impact-on-releases",level:3}],d={toc:c};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"binaries"},"Binaries"),(0,i.kt)("p",null,"A binary is an actual piece of data you wish to distribute to devices."),(0,i.kt)("h2",{id:"content-versus-record"},"Content Versus Record"),(0,i.kt)("p",null,"When referring to binaries there are two distinct concepts: a binary's content and a binary's\nrecord."),(0,i.kt)("p",null,"A binary's record is the meta information Peridio stores regarding a binary, e.g., its\ndescription, what artifact version it is associated with, its hash, etc. A binary's content is the\nliteral data, e.g., a firmware image, a machine learning model, etc."),(0,i.kt)("p",null,"This distinction is important because a binary's content and record are stored independently from\neach other for a variety of reasons including the efficient distribution of content to devices and\nthe efficient queryability of records. It is especially relevant to\n",(0,i.kt)("a",{parentName:"p",href:"#purged-binaries"},"purged binaries"),"."),(0,i.kt)("h2",{id:"targets-and-compatibility"},"Targets and Compatibility"),(0,i.kt)("p",null,"Binaries indicate their compatibility via their ",(0,i.kt)("inlineCode",{parentName:"p"},"target")," field. The value of this field is\nexpected to be either:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A target triplet like ",(0,i.kt)("inlineCode",{parentName:"li"},"arm-linux-androidabi"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The binary in this case is said to be target-specific."))),(0,i.kt)("li",{parentName:"ol"},"The reserved value ",(0,i.kt)("inlineCode",{parentName:"li"},"portable"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The binary in this case is said to be portable.")))),(0,i.kt)("p",null,"Target-specific binaries are compatible with a device if their ",(0,i.kt)("inlineCode",{parentName:"p"},"target")," field matches the device's\nproduct's ",(0,i.kt)("inlineCode",{parentName:"p"},"target")," field."),(0,i.kt)("p",null,"Portable binaries are universally compatible with all devices."),(0,i.kt)("p",null,"Note in the case of ",(0,i.kt)("a",{parentName:"p",href:"/reference/cohorts#bianry-resolution"},"binary resolution"),", if both a\ncompatible target-specific binary and a portable binary exist for an artifact version, the\ntarget-specific binary will be preferred."),(0,i.kt)("h2",{id:"purged-binaries"},"Purged Binaries"),(0,i.kt)("p",null,"Purging a binary deletes its content from Peridio while leaving its record intact."),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"This is a one-way, disruptive, and destructive action.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Purged binaries' content cannot be recovered from Peridio."),(0,i.kt)("li",{parentName:"ul"},"Purged binaries are not valid candidates for\n",(0,i.kt)("a",{parentName:"li",href:"/reference/cohorts#bianry-resolution"},"binary resolution"),". This means purging a binary may\ncause binary resolution to fail where it previously succeeded.  See\n",(0,i.kt)("a",{parentName:"li",href:"#impact-on-releases"},"impact on releases"),"."),(0,i.kt)("li",{parentName:"ul"},"The binary will be updated such that ",(0,i.kt)("inlineCode",{parentName:"li"},"purged: true, bytes_uploaded: 0"),".")),(0,i.kt)("h3",{id:"impact-on-releases"},"Impact on Releases"),(0,i.kt)("p",null,'A release is affected by a purged binary if the release is associated with a bundle\nthat is associated with an artifact version that is associated with a purged binary. In this case,\nit is said that the release "references a purged binary."'),(0,i.kt)("p",null,"For affected releases, the liklihood of a device checking for an update and encountering an error\nbecause an applicable binary cannot be resolved is dependent on how the affected release has\n",(0,i.kt)("inlineCode",{parentName:"p"},"must_pass_through")," configured, whether their are additional releases configured downstream in the\naffected release's cohort, and whether the affected artifact version has a (non-purged) portable\nbinary associated with it. See ",(0,i.kt)("a",{parentName:"p",href:"#portable-binaries"},"portable binaries"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"It is recommended to expeditiously archive affected releases.")))}p.isMDXComponent=!0},8209:(e,t,r)=>{r(7294)}}]);