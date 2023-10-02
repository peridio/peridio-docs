"use strict";(self.webpackChunkparasola=self.webpackChunkparasola||[]).push([[5550],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),h=n,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return a?r.createElement(m,l(l({ref:t},c),{},{components:a})):r.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1827:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const i={},l="Releases",o={unversionedId:"reference/releases",id:"reference/releases",title:"Releases",description:"Releases allow you to distribute bundles to cohorts.",source:"@site/docs/reference/releases.md",sourceDirName:"reference",slug:"/reference/releases",permalink:"/reference/releases",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"reference",previous:{title:"Deployments",permalink:"/reference/deployments"}},s={},p=[{value:"Latest Release",id:"latest-release",level:2},{value:"Availability",id:"availability",level:2},{value:"Graph Traversal",id:"graph-traversal",level:3},{value:"Scheduling",id:"scheduling",level:3},{value:"Phasing",id:"phasing",level:3},{value:"Required Release",id:"required-release",level:2},{value:"Release Resolution",id:"release-resolution",level:2},{value:"Resolution",id:"resolution",level:3},{value:"Static Resolution",id:"static-resolution",level:3},{value:"Dynamic Resolution",id:"dynamic-resolution",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"releases"},"Releases"),(0,n.kt)("p",null,"Releases allow you to distribute ",(0,n.kt)("a",{parentName:"p",href:"/reference/bundles"},"bundles")," to ",(0,n.kt)("a",{parentName:"p",href:"/reference/cohorts"},"cohorts"),"."),(0,n.kt)("p",null,"Each release belongs to an individual cohort."),(0,n.kt)("h2",{id:"latest-release"},"Latest Release"),(0,n.kt)("p",null,'When creating a release you may create it as the "latest release" or not. The latest release refers to the release within the cohort whose ',(0,n.kt)("inlineCode",{parentName:"p"},"next_release_prn")," is ",(0,n.kt)("inlineCode",{parentName:"p"},"null"),". It does not refer to the most recently inserted release. Only one release within a cohort at any given time may be the latest release."),(0,n.kt)("p",null,"The latest release of a cohort is special in that it is the only release within a cohort that is allowed to limit its availability via scheduling and phasing."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"You cannot create a new latest release while the current latest release is scheduled or phased.")),(0,n.kt)("h2",{id:"availability"},"Availability"),(0,n.kt)("p",null,"The availability of a release, the ability for devices to resolve it when checking for updates, is dictated by three concepts: graph traversal, scheduling, and phasing."),(0,n.kt)("h3",{id:"graph-traversal"},"Graph Traversal"),(0,n.kt)("p",null,"When creating releases within a cohort, they will form a release graph."),(0,n.kt)("p",null,"For example."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"R4--------\x3eR5---\\\n                 \\\nR1---\\            |---\x3eR6\n      |---\x3eR2----/\nR3---/\n")),(0,n.kt)("p",null,"In order for a release on the graph to be relevant to you, it must be between your current release, and the latest release."),(0,n.kt)("p",null,"For example, if your current release was R4, then R5 is available with respect to graph traversal, but R2 is not. Keep in mind this is an instantaneous evaluation at it would be possible for example for the device to be factory reset to R1, at which point R2 would be traversible."),(0,n.kt)("h3",{id:"scheduling"},"Scheduling"),(0,n.kt)("p",null,"The latest release in a cohort can be scheduled to become available immediately, or a date in the future can be choosen. This allows you to stage a release ahead of time and have it become available automatically at a specific time."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},'When a release has been created, but its schedule date has not occurred yet, the release is said to be "scheduled". Keep in mind you cannot create a new latest release if the current latest release is scheduled.')),(0,n.kt)("p",null,"A release ceases to be scheduled once its schedule date has passed."),(0,n.kt)("h3",{id:"phasing"},"Phasing"),(0,n.kt)("p",null,"The latest release in a cohort can be made available gradually by configuring its phase value. This can be used to limit how many devices are allowed to take the release to either a percent of the cohort, or an absolute threshold of devices. Once the limit is met, the release is unavailable until the phase value is increased."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},'When a release\'s phase value is not 100%, the release is said to be "phased". Keep in mind you cannot create a new latest release if the current latest release is phased.')),(0,n.kt)("p",null,"A release ceases to be phased once its phase value is 100%."),(0,n.kt)("h2",{id:"required-release"},"Required Release"),(0,n.kt)("p",null,"A release can be configured with its ",(0,n.kt)("inlineCode",{parentName:"p"},"required")," field set to ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),", and this field can be changed at any time."),(0,n.kt)("p",null,"When ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),", devices that encounter this release are required to pass through it."),(0,n.kt)("p",null,"When ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),", device can potentially skip the release if there is a newer subsequent release available."),(0,n.kt)("p",null,"For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"R4--------\x3eR5---\\\n                 \\\nR1---\\            |---\x3eR6\n      |---\x3eR2----/\nR3---/\n")),(0,n.kt)("p",null,"Lets say that ",(0,n.kt)("inlineCode",{parentName:"p"},"R2")," above is the only required release. If a device was on ",(0,n.kt)("inlineCode",{parentName:"p"},"R1"),", it would have to update to ",(0,n.kt)("inlineCode",{parentName:"p"},"R2")," first, even though ",(0,n.kt)("inlineCode",{parentName:"p"},"R6")," is already available. Whereas if a device was on ",(0,n.kt)("inlineCode",{parentName:"p"},"R4"),", it could update directly to ",(0,n.kt)("inlineCode",{parentName:"p"},"R6"),", because ",(0,n.kt)("inlineCode",{parentName:"p"},"R5")," is not required."),(0,n.kt)("h2",{id:"release-resolution"},"Release Resolution"),(0,n.kt)("p",null,"When a device executes a Device API ",(0,n.kt)("a",{parentName:"p",href:"/device-api#devices/operation/get-update"},"get-update")," request, Peridio performs release resolution. Release resolution is the process of determing if there is another release, referred to as the target release, the device can update to. To make this determination, Peridio must have some idea of determining where your device currently fits into it's cohort's release graph, since where a device currently is will determine where it needs to go. A cohort's release graph forms an ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Arborescence_(graph_theory)"},"anti-arborescence"),". In other words, releases may point to exactly one next release, a release may be pointed to by zero to many releases, all releases eventually converge to a single ",(0,n.kt)("a",{parentName:"p",href:"#latest-release"},"latest release"),"."),(0,n.kt)("p",null,"For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"R4--------\x3eR5---\\\n                 \\\nR1---\\            |---\x3eR6\n      |---\x3eR2----/\nR3---/\n")),(0,n.kt)("h3",{id:"resolution"},"Resolution"),(0,n.kt)("p",null,"Peridio will first attempt to determine your devices current release via ",(0,n.kt)("a",{parentName:"p",href:"#static-resolution"},"static resolution")," if possible, and ",(0,n.kt)("a",{parentName:"p",href:"#dynamic-resolution"},"dynamic")," resolution if that fails."),(0,n.kt)("admonition",{title:"prefer static resolution",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Whenever possible it is recommended to use static resolution over dynamic resolution as the former is easier to reason about and more efficent to perform. However, when required, dynamic resolution can be used in situations where your device does not or can not know the PRN of its current release, yet it still wishes to deterministically update according to its cohort's release graph.")),(0,n.kt)("h3",{id:"static-resolution"},"Static Resolution"),(0,n.kt)("p",null,"Static resolution uses the ",(0,n.kt)("inlineCode",{parentName:"p"},"peridio-release-prn")," header to define a prn that is representative of the device's current release. If it successfully identifies a release in the device's cohort, release resolution will consider it the device's current release and continue with resolution:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"checks if there is a next release.",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"If yes, go to #2."),(0,n.kt)("li",{parentName:"ol"},"If no, release resolution completes with no target release with a reason of ",(0,n.kt)("inlineCode",{parentName:"li"},"no_update"),"."))),(0,n.kt)("li",{parentName:"ol"},"checks if the release is required.",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"If yes, release resolution completes with a target release with a reason of ",(0,n.kt)("inlineCode",{parentName:"li"},"update"),"."),(0,n.kt)("li",{parentName:"ol"},"If no, go to #3."))),(0,n.kt)("li",{parentName:"ol"},"checks if there is a next release.",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"If yes, go to #2."),(0,n.kt)("li",{parentName:"ol"},"If no, release resolution completes with a target release with a reason of ",(0,n.kt)("inlineCode",{parentName:"li"},"update"),".")))),(0,n.kt)("p",null,"Peridio will recurse between #3.1 and #2 to skip as many not-required releases as possible."),(0,n.kt)("h3",{id:"dynamic-resolution"},"Dynamic Resolution"),(0,n.kt)("p",null,"Dynamic resolution uses the ",(0,n.kt)("inlineCode",{parentName:"p"},"peridio-release-version")," header to define a semantic version that is representative of the device's current release."),(0,n.kt)("p",null,"Peridio then finds all releases in the device's cohort that have specified both a ",(0,n.kt)("inlineCode",{parentName:"p"},"version")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"version_requirement"),". The found releases are filtered for those whose ",(0,n.kt)("inlineCode",{parentName:"p"},"version_requirement")," is satisfied by the header-supplied version. From the filtered results, the release with the lowest semantic ",(0,n.kt)("inlineCode",{parentName:"p"},"version"),' is selected as the "dynamic entry point". Peridio will then consider your devices current release to be an imaginary release whose next release is the dynamic entry point and continue with resolution:'),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"checks if there is a next release.",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"There always will be because it will be the dynamic entry point, go to #2."))),(0,n.kt)("li",{parentName:"ol"},"checks if the release is required.",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"If yes, release resolution completes with a target release with a reason of ",(0,n.kt)("inlineCode",{parentName:"li"},"update"),"."),(0,n.kt)("li",{parentName:"ol"},"If no, go to #3."))),(0,n.kt)("li",{parentName:"ol"},"checks if there is a next release.",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"If yes, go to #2."),(0,n.kt)("li",{parentName:"ol"},"If no, release resolution completes with a target release with a reason of ",(0,n.kt)("inlineCode",{parentName:"li"},"update"),".")))))}u.isMDXComponent=!0}}]);