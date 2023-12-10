"use strict";(self.webpackChunkparasola=self.webpackChunkparasola||[]).push([[498],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),s=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(a),c=n,h=u["".concat(d,".").concat(c)]||u[c]||m[c]||i;return a?r.createElement(h,l(l({ref:t},p),{},{components:a})):r.createElement(h,l({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7600:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const i={title:"Deployments"},l=void 0,o={unversionedId:"reference/deployments",id:"reference/deployments",title:"Deployments",description:"This functionality has been superceded by bundles and releases.",source:"@site/docs/reference/deployments.md",sourceDirName:"reference",slug:"/reference/deployments",permalink:"/reference/deployments",draft:!1,tags:[],version:"current",frontMatter:{title:"Deployments"},sidebar:"reference",previous:{title:"Bundles",permalink:"/reference/bundles"},next:{title:"Releases",permalink:"/reference/releases"}},d={},s=[{value:"Deployment eligibility",id:"deployment-eligibility",level:2},{value:"Tags",id:"tags",level:3},{value:"Version",id:"version",level:3},{value:"Quarantine",id:"quarantine",level:2},{value:"Failure rates and thresholds",id:"failure-rates-and-thresholds",level:2},{value:"Automatically quarantine deployments",id:"automatically-quarantine-deployments",level:3},{value:"Automatically quarantine devices",id:"automatically-quarantine-devices",level:3},{value:"Clear failure rates and thresholds",id:"clear-failure-rates-and-thresholds",level:3}],p={toc:s},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{title:"Legacy",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This functionality has been superceded by ",(0,n.kt)("a",{parentName:"p",href:"bundles"},"bundles")," and ",(0,n.kt)("a",{parentName:"p",href:"releases"},"releases"),".")),(0,n.kt)("p",null,"A deployment makes ",(0,n.kt)("a",{parentName:"p",href:"firmware"},"firmware")," conditionally available to ",(0,n.kt)("a",{parentName:"p",href:"devices"},"devices"),"."),(0,n.kt)("h2",{id:"deployment-eligibility"},"Deployment eligibility"),(0,n.kt)("p",null,"When a device checks for an update with ",(0,n.kt)("a",{parentName:"p",href:"/device-api#devices/operation/get-device-update"},"get-device-update"),", Peridio resolves which deployment, if any, is applicable to the requesting device, which dictates which firmware Peridio will respond to the request with."),(0,n.kt)("p",null,"For a device to be eligible for a particular deployment, the following conditions must be met:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The deployment is active."),(0,n.kt)("li",{parentName:"ul"},"The deployment and the device are not quarantined and belong to the same organization and product."),(0,n.kt)("li",{parentName:"ul"},"The device must have at least the tags the deployment's conditions specify."),(0,n.kt)("li",{parentName:"ul"},"If the deployment has a version condition, the device's firmware's version must satisfy it."),(0,n.kt)("li",{parentName:"ul"},"The device's firmware and the deployment's firmware have matching architecture and platforms, but distinct UUIDs.")),(0,n.kt)("p",null,"Peridio tracks metadata about the current firmware of devices. Devices dictate what Peridio considers their current firmware by supplying ",(0,n.kt)("a",{parentName:"p",href:"/device-api#section/Global-Headers"},(0,n.kt)("inlineCode",{parentName:"a"},"x-peridio")," headers")," to the Peridio Device API."),(0,n.kt)("h3",{id:"tags"},"Tags"),(0,n.kt)("p",null,"A deployment must specify at least one tag as a condition. A device must have at least all of the tags specified by the deployment in order to meet the condition."),(0,n.kt)("h3",{id:"version"},"Version"),(0,n.kt)("p",null,"A deployment may optionally specify a SemVer version requirement. When specified, a device's firmware's version must satisfy the requirement. Firmware versions are ",(0,n.kt)("a",{parentName:"p",href:"https://semver.org/spec/v2.0.0.html"},"semantic versions"),", for examples of what a version condition on a deployment may look like, reference ",(0,n.kt)("a",{parentName:"p",href:"https://hexdocs.pm/elixir/Version.html#module-requirements"},"https://hexdocs.pm/elixir/Version.html#module-requirements"),"."),(0,n.kt)("h2",{id:"quarantine"},"Quarantine"),(0,n.kt)("p",null,"Deployment's have a boolean ",(0,n.kt)("inlineCode",{parentName:"p"},"quarantined")," field. When ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),", the deployment will not serve updates. Deployments can be automatically quarantined due to failure rate and failure threshold configurations."),(0,n.kt)("h2",{id:"failure-rates-and-thresholds"},"Failure rates and thresholds"),(0,n.kt)("p",null,"Deployments allow you to configure failure rates and thresholds such that devices and deployments can be quarantined automatically in reaction to devices repeatedly asking for the same update from the same deployment via ",(0,n.kt)("a",{parentName:"p",href:"/device-api#devices/operation/get-device-update"},"get-device-update"),"."),(0,n.kt)("h3",{id:"automatically-quarantine-deployments"},"Automatically quarantine deployments"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Failure rate"),(0,n.kt)("td",{parentName:"tr",align:null},"How many devices can have asked 2 or more times each for the same update from the same deployment within failure rate seconds before the deployment is automatically quarantined.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Failure rate seconds"),(0,n.kt)("td",{parentName:"tr",align:null},"The duration to use with failure rate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Failure threshold"),(0,n.kt)("td",{parentName:"tr",align:null},"How many devices with firmware metadata whose architecture, platform, product, and uuid match that of the deployment's firmware that can be simultaneously quarantined before the deployment is automatically quarantined.")))),(0,n.kt)("h3",{id:"automatically-quarantine-devices"},"Automatically quarantine devices"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Device failure rate"),(0,n.kt)("td",{parentName:"tr",align:null},"How many times a device can have asked for the same update from the same deployment within device failure rate seconds before the device is automatically quarantined.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Device failure rate seconds"),(0,n.kt)("td",{parentName:"tr",align:null},"The duration to use with device failure rate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Device Failure threshold"),(0,n.kt)("td",{parentName:"tr",align:null},"How many times total a device can have asked for the same update from the same deployment before the device is automatically quarantined.")))),(0,n.kt)("h3",{id:"clear-failure-rates-and-thresholds"},"Clear failure rates and thresholds"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Unquarantining a deployment will cause device update attempts prior to that to be ignored in failure rates and thresholds."),(0,n.kt)("li",{parentName:"ul"},"Unquarantining a device will cause its update attempts prior to that to be ignored in failure rates and thresholds."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/admin-api#device-events/operation/device-release-changed"},(0,n.kt)("inlineCode",{parentName:"a"},"device.release_changed"))," and ",(0,n.kt)("a",{parentName:"li",href:"/admin-api#device-events/operation/device-firmware-changed"},(0,n.kt)("inlineCode",{parentName:"a"},"device.firmware_changed"))," events cause update attempts prior to them to be ignored in failure rates and thresholds.")))}m.isMDXComponent=!0}}]);