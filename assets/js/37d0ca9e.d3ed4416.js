"use strict";(self.webpackChunkparasola=self.webpackChunkparasola||[]).push([[5133],{2002:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var t=r(7462),n=(r(7294),r(3905));r(1839);const a={title:"Firmware Signing Keys"},s=void 0,o={unversionedId:"reference/firmware-signing-keys",id:"reference/firmware-signing-keys",title:"Firmware Signing Keys",description:"Ref | Firmware Signing Keys",source:"@site/cremini/docs/reference/firmware-signing-keys.md",sourceDirName:"reference",slug:"/reference/firmware-signing-keys",permalink:"/cremini/reference/firmware-signing-keys",draft:!1,tags:[],version:"current",frontMatter:{title:"Firmware Signing Keys"},sidebar:"reference",previous:{title:"Devices",permalink:"/cremini/reference/devices"},next:{title:"Firmwares",permalink:"/cremini/reference/firmwares"}},l={},c=[{value:"Format",id:"format",level:2},{value:"Creation",id:"creation",level:2}],f={toc:c};function p(e){let{components:i,...r}=e;return(0,n.kt)("wrapper",(0,t.Z)({},f,r,{components:i,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("title",null,"Ref | Firmware Signing Keys")),(0,n.kt)("p",null,"Firmware signing keys are ED25519 keys which consist of a public/private key pair."),(0,n.kt)("p",null,"The private portion of firmware signing keys are used by users to sign firmwares."),(0,n.kt)("p",null,"The public portion of firmware signing keys are provided to Peridio as well as devices to facilitate the attestation of firmwares' signatures."),(0,n.kt)("h2",{id:"format"},"Format"),(0,n.kt)("p",null,"The public key is the base64 encoding of the raw 32 byte public key. The private key is the base64 encoding of 64 bytes where the first 32 bytes are the raw private key and the last 32 bytes are the raw public key."),(0,n.kt)("h2",{id:"creation"},"Creation"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/fwup-home/fwup"},"fwup CLI")," can be used to generate a valid pair of key files."))}p.isMDXComponent=!0}}]);