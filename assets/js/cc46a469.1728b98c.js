"use strict";(self.webpackChunkperidio_docs=self.webpackChunkperidio_docs||[]).push([[3911],{22063:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var t=n(74848),a=n(28453);const r={},s="Packaging Updates",o={id:"integration/linux/peridiod/updates",title:"Packaging Updates",description:"Peridiod supports installing updates from both Peridio Distributions and Peridio Releases.",source:"@site/docs/integration/linux/peridiod/updates.md",sourceDirName:"integration/linux/peridiod",slug:"/integration/linux/peridiod/updates",permalink:"/integration/linux/peridiod/updates",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"integration",previous:{title:"Configuring",permalink:"/integration/linux/peridiod/configuration"},next:{title:"Containerizing Peridiod",permalink:"/integration/linux/peridiod/containers"}},d={},l=[{value:"Releases",id:"releases",level:2},{value:"Installers",id:"installers",level:3},{value:"Distributions",id:"distributions",level:2}];function c(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"packaging-updates",children:"Packaging Updates"}),"\n",(0,t.jsx)(i.p,{children:"Peridiod supports installing updates from both Peridio Distributions and Peridio Releases."}),"\n",(0,t.jsx)(i.h2,{id:"releases",children:"Releases"}),"\n",(0,t.jsx)(i.p,{children:"Releases allow greater control and flexibility to managing devices in the field. You can package and bundle many binaries with a release enabling workflows for use in embedded products, empowering app stores, and managing connected peripheral device firmware. It offers advanced deployment options for scheduled and phased rollouts."}),"\n",(0,t.jsx)(i.h3,{id:"installers",children:"Installers"}),"\n",(0,t.jsxs)(i.p,{children:['Peridiod now has a concept of "Installers", initially supported installer types are ',(0,t.jsx)(i.code,{children:"file"})," and ",(0,t.jsx)(i.a,{href:"https://github.com/fwup-home/fwup",children:"fwup"}),". When using releases, you will have to use the custom_metadata of a binary, artifact version, or artifact to instruct peridiod how to install the binary content. The custom metadata will be added to the binaries in a bundle through inheritance by first checking the binary, followed by the artifact version, and finally the artifact. Add custom metadata to the artifact record if the installation instructions are common across all version and binaries. If installation instruction are not all the same, or in certain versions or on certain targets it differs, you can override by adding it to individual artifact versions or binaries."]}),"\n",(0,t.jsx)(i.p,{children:"Here is an example of what custom metadata for installers would look like:"}),"\n",(0,t.jsx)(i.p,{children:"fwup"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-json",children:'{\n  "installer": "fwup",\n  "installer_opts": {\n    "devpath": "/dev/mmcblk0",\n    "extra_args": [],\n    "env": {}\n  },\n  "reboot_required": true\n}\n'})}),"\n",(0,t.jsx)(i.p,{children:"file"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-json",children:'{\n  "installer": "file",\n  "installer_opts": {\n    "name": "my_file.txt",\n    "path": "/opt/my_app",\n  },\n  "reboot_required": false\n}\n'})}),"\n",(0,t.jsxs)(i.p,{children:["You can add this custom metadata to these records using ",(0,t.jsx)(i.a,{href:"/cli",children:"Peridio CLI"})," v0.22.0 or later or directly through the ",(0,t.jsx)(i.a,{href:"/admin-api",children:"Peridio Admin API"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"distributions",children:"Distributions"}),"\n",(0,t.jsxs)(i.p,{children:["Distributions leverage ",(0,t.jsx)(i.a,{href:"https://github.com/fwup-home/fwup",children:"fwup"})," as the packing format and last-mile application mechanism for applying firmware to devices. They are single bundle single device updates which leverage tags based deployment strategies."]}),"\n",(0,t.jsxs)(i.p,{children:["When an update is applied, the fwup upgrade instructions will be executed for the current system. These instructions can perform a variety of functions such as, manage partitions, write raw filesystems, update U-Boot environment variables and files, etc. More information about fwup functionality can be found on the ",(0,t.jsx)(i.a,{href:"https://github.com/fwup-home/fwup",children:"fwup README"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["An example fwup configuration for the QEmu target can be found in the ",(0,t.jsx)(i.code,{children:"meta-avocado-arm"})," ",(0,t.jsx)(i.a,{href:"https://github.com/peridio/meta-avocado/blob/main/meta-avocado-arm/conf/peridio/qemu.fwup.conf",children:"reference layer"}),"."]})]})}function u(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>o});var t=n(96540);const a={},r=t.createContext(a);function s(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);