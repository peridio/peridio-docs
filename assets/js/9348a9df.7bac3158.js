"use strict";(self.webpackChunkparasola=self.webpackChunkparasola||[]).push([[694],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(n),k=i,g=d["".concat(p,".").concat(k)]||d[k]||u[k]||a;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7102:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));n(8209);const a={title:"create"},l="peridio signing-keys create",o={unversionedId:"cli/signing-keys/create",id:"cli/signing-keys/create",title:"create",description:"Create a signing key.",source:"@site/docs/cli/signing-keys/create.md",sourceDirName:"cli/signing-keys",slug:"/cli/signing-keys/create",permalink:"/cli/signing-keys/create",draft:!1,tags:[],version:"current",frontMatter:{title:"create"},sidebar:"cli",previous:{title:"Getting Started",permalink:"/cli"},next:{title:"delete",permalink:"/cli/signing-keys/delete"}},p={},c=[{value:"Usage",id:"usage",level:2},{value:"Flags",id:"flags",level:2},{value:"Options",id:"options",level:2},{value:"Required",id:"required",level:3},{value:"Defaulted",id:"defaulted",level:3}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"peridio-signing-keys-create"},"peridio signing-keys create"),(0,i.kt)("p",null,"Create a signing key."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"peridio \\\n  signing-keys \\\n  create \\\n  [OPTIONS] \\\n  --api-key <api-key> \\\n  --key <key> \\\n  --name <name> \\\n  --organization-name <organization-name>\n")),(0,i.kt)("h2",{id:"flags"},"Flags"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-h"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"--help")),(0,i.kt)("p",null,"Prints help information"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-V"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"--version")),(0,i.kt)("p",null,"Prints version information"),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"required"},"Required"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--api-key <api-key>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"$PERIDIO_API_KEY")),(0,i.kt)("p",null,"The API key used to authenticate and authorize the request."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--key <key>")),(0,i.kt)("p",null,"The base64 encoding of the raw 32 byte public key."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--name <name>")),(0,i.kt)("p",null,"The name of the key."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--organization-name <organization-name>")),(0,i.kt)("p",null,"The organization to interact with."),(0,i.kt)("h3",{id:"defaulted"},"Defaulted"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--base-url <base-url>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"$PERIDIO_BASE_URL")),(0,i.kt)("p",null,"The base URL of the API to interact with."))}u.isMDXComponent=!0},8209:(e,t,n)=>{n(7294)}}]);