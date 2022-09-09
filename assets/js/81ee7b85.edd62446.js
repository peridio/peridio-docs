"use strict";(self.webpackChunkparasola=self.webpackChunkparasola||[]).push([[6142],{3923:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var a=i(7462),r=(i(7294),i(3905));i(1839);const l={title:"Firmwares"},n=void 0,o={unversionedId:"reference/firmwares",id:"reference/firmwares",title:"Firmwares",description:"Ref | Firmwares",source:"@site/cremini/docs/reference/firmwares.md",sourceDirName:"reference",slug:"/reference/firmwares",permalink:"/cremini/reference/firmwares",draft:!1,tags:[],version:"current",frontMatter:{title:"Firmwares"},sidebar:"reference",previous:{title:"Firmware Signing Keys",permalink:"/cremini/reference/firmware-signing-keys"},next:{title:"Just in Time Provisioning",permalink:"/cremini/reference/just-in-time-provisioning"}},s={},m=[{value:"Time to Live (TTL)",id:"time-to-live-ttl",level:2},{value:"Example",id:"example",level:3}],d={toc:m};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null,"Ref | Firmwares")),(0,r.kt)("p",null,"Firmwares are the data you wish to distribute to devices."),(0,r.kt)("p",null,"Peridio leverages ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fwup-home/fwup"},"fwup")," to package, sign, verify, and apply firmwares. fwup uses cryptographically signed ZIP archives to package firmwares."),(0,r.kt)("h2",{id:"time-to-live-ttl"},"Time to Live (TTL)"),(0,r.kt)("p",null,"Firmwares can be configured on a per-firmware basis to be deleted automatically after a set amount of seconds by configuring their ",(0,r.kt)("inlineCode",{parentName:"p"},"ttl")," field. Firmware associated with a deployment will never be automatically deleted. Dissassociating a firmware with a configured TTL from all deployments will cause the TTL to begin counting down again from its maximum value."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Firmware (A) is created with ",(0,r.kt)("inlineCode",{parentName:"li"},"ttl: 60")," and is associated with zero deployments.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Firmware (A)'s TTL begins counting down and it will be automatically deleted once it runs out."))),(0,r.kt)("li",{parentName:"ol"},"Firmware (A) is associated with deployment (B).",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Firmware (A)'s TTL is ignored and it will not be automatically deleted."))),(0,r.kt)("li",{parentName:"ol"},"Firmware (A) is associated with deployment (C).",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Firmware (A) is now associated with two deployments, its TTL continues to be ignored and it still will not be automatically deleted."))),(0,r.kt)("li",{parentName:"ol"},"Deployment (B) is deleted.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Firmware (A) is still associated with at least one deployment, its TTL continues to be ignored and it still will not be automatically deleted."))),(0,r.kt)("li",{parentName:"ol"},"Deployment (C) is deleted.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Firmware (A) is associated with zero deployments, its TTL begins counting down from its maximum value of ",(0,r.kt)("inlineCode",{parentName:"li"},"60")," and it will be automatically deleted once it runs out.")))))}p.isMDXComponent=!0}}]);