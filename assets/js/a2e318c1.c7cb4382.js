"use strict";(self.webpackChunkparasola=self.webpackChunkparasola||[]).push([[35],{3905:function(e,r,n){n.d(r,{Zo:function(){return s},kt:function(){return f}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=t.createContext({}),l=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},s=function(e){var r=l(e.components);return t.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return n?t.createElement(m,a(a({ref:r},s),{},{components:n})):t.createElement(m,a({ref:r},s))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64041:function(e,r,n){n.r(r),n.d(r,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var t=n(83117),o=n(80102),i=(n(67294),n(3905)),a=["components"],c={title:"Nerves"},u=void 0,l={unversionedId:"reference/nerves",id:"reference/nerves",title:"Nerves",description:"Ref | Peridio for Nerves",source:"@site/docs/reference/nerves.md",sourceDirName:"reference",slug:"/reference/nerves",permalink:"/reference/nerves",tags:[],version:"current",frontMatter:{title:"Nerves"},sidebar:"reference",previous:{title:"Members",permalink:"/reference/members"},next:{title:"Node Groups",permalink:"/reference/node-groups"}},s={},p=[{value:"Migrating from nerves-hub.org",id:"migrating-from-nerves-huborg",level:2},{value:"User authentication",id:"user-authentication",level:3},{value:"Device connectivity",id:"device-connectivity",level:3},{value:"Pushing a new release",id:"pushing-a-new-release",level:3}],d={toc:p};function f(e){var r=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("title",null,"Ref | Peridio for Nerves")),(0,i.kt)("h2",{id:"migrating-from-nerves-huborg"},"Migrating from nerves-hub.org"),(0,i.kt)("p",null,"Following the automatic migration of users and organizations from nerves-hub.org to Peridio, you will be able to log in and manage your devices at console.cremini.peridio.com. Your devices will automatically be connected to the new service by the DNS redirect from device.nerves-hub.org to device.cremini.peridio.com. It is highly recommended that you update your device firmware to connect directly to Peridio by following the next steps:"),(0,i.kt)("h3",{id:"user-authentication"},"User authentication"),(0,i.kt)("p",null,"Start by ensuring that the nerves_hub_cli tools can communicate with Peridio for Nerves by updating your project to use the new server location:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-elixir"},'config :nerves_hub_user_api,\n  host: "api.cremini.peridio.com"\n')),(0,i.kt)("p",null,"Once your configuration is updated, you can re-authenticate with the server by running"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-elixir"},"mix nerves_hub.user auth\n")),(0,i.kt)("h3",{id:"device-connectivity"},"Device connectivity"),(0,i.kt)("p",null,"You will need to update your mix project configuration to instruct the nerves_hub_link dependency to connect directly to Peridio instead of going through the nerves-hub.org redirects. Editing your mix config.exs to change the server location:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-elixir"},'config :nerves_hub_link,\n  device_api_host: "device.cremini.peridio.com"\n')),(0,i.kt)("h3",{id:"pushing-a-new-release"},"Pushing a new release"),(0,i.kt)("p",null,"Thats it, once your project has been updated you will be able to ",(0,i.kt)("inlineCode",{parentName:"p"},"mix firmware")," and push a new release to Peridio for Nerves just as you would when using nerves-hub.org. All existing nerves-hub documentation can be used as a reference. If you run into any issues, you can reach out to us at ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@peridio.com"},"support@peridio.com"),"."))}f.isMDXComponent=!0}}]);