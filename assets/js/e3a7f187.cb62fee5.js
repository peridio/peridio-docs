"use strict";(self.webpackChunkparasola=self.webpackChunkparasola||[]).push([[498],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),u=i,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||a;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7600:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const a={title:"Deployments"},o=void 0,l={unversionedId:"reference/deployments",id:"reference/deployments",title:"Deployments",description:"This functionality has been superceded by bundles and releases.",source:"@site/docs/reference/deployments.md",sourceDirName:"reference",slug:"/reference/deployments",permalink:"/reference/deployments",draft:!1,tags:[],version:"current",frontMatter:{title:"Deployments"},sidebar:"reference",previous:{title:"Bundles",permalink:"/reference/bundles"},next:{title:"Releases",permalink:"/reference/releases"}},s={},p=[{value:"Deployment Eligibility",id:"deployment-eligibility",level:2},{value:"Tags",id:"tags",level:3},{value:"Version",id:"version",level:3}],c={toc:p},d="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Legacy",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This functionality has been superceded by ",(0,i.kt)("a",{parentName:"p",href:"bundles"},"bundles")," and ",(0,i.kt)("a",{parentName:"p",href:"releases"},"releases"),".")),(0,i.kt)("p",null,"A deployment makes ",(0,i.kt)("a",{parentName:"p",href:"firmware"},"firmware")," available to ",(0,i.kt)("a",{parentName:"p",href:"devices"},"devices")," associated with the same ",(0,i.kt)("a",{parentName:"p",href:"products"},"product")," as the deployment and that satisfy the deployment's conditions. Deployments may be configured as active or not. Only active deployments may be considered when Peridio evaluates if an update is available for a device."),(0,i.kt)("h2",{id:"deployment-eligibility"},"Deployment Eligibility"),(0,i.kt)("p",null,"When a device checks for an update, Peridio identifies which deployment is applicable to the requesting device, which dictates which firmware Peridio will respond to the request with. This determination is impacted by the device tags the deployment requires and by the version condition specified by the deployment, if any."),(0,i.kt)("p",null,"For a device to be eligible for any deployment, the device must not be quarantined."),(0,i.kt)("p",null,"For a device to be eligible for a particular deployment, the following conditions must be met:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The deployment and the device are of the same organization."),(0,i.kt)("li",{parentName:"ul"},"The deployment and the device are of the same product."),(0,i.kt)("li",{parentName:"ul"},"The deployment is active."),(0,i.kt)("li",{parentName:"ul"},"The deployment is not quarantined."),(0,i.kt)("li",{parentName:"ul"},"The device's current firmware's architecture matches the architecture of the deployment's firmware."),(0,i.kt)("li",{parentName:"ul"},"The device's current firmware's platform matches the platform of the deployment's firmware."),(0,i.kt)("li",{parentName:"ul"},"The device's current firmware's UUID is not the same as the UUID of the deployment's firmware.")),(0,i.kt)("p",null,"Peridio tracks metadata about the current firmware of devices. Devices themselves dictate what Peridio considers their current firmware by supplying the ",(0,i.kt)("inlineCode",{parentName:"p"},"x-peridio-uuid")," header to the Peridio Device API ",(0,i.kt)("a",{parentName:"p",href:"/device-api#tag/Devices/paths/~1device~1update/get"},"get device update")," endpoint."),(0,i.kt)("h3",{id:"tags"},"Tags"),(0,i.kt)("p",null,"A deployment must specify at least one tag as a condition. A device must have at least all of the tags specified by the deployment in order to meet the condition."),(0,i.kt)("h3",{id:"version"},"Version"),(0,i.kt)("p",null,"A deployment may optionally specify a version requirement. When a version is specified as a condition for a deployment, a device must meet meet this version requirement. Firmware versions are ",(0,i.kt)("a",{parentName:"p",href:"https://semver.org/spec/v2.0.0.html"},"semantic versions"),", for examples of what a version condition on a deployment may look like, reference ",(0,i.kt)("a",{parentName:"p",href:"https://hexdocs.pm/elixir/Version.html#module-requirements"},"https://hexdocs.pm/elixir/Version.html#module-requirements"),"."))}m.isMDXComponent=!0}}]);