"use strict";(self.webpackChunkparasola=self.webpackChunkparasola||[]).push([[7840],{3905:(e,t,i)=>{i.d(t,{Zo:()=>s,kt:()=>d});var a=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=a.createContext({}),f=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},s=function(e){var t=f(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=f(i),d=r,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||n;return i?a.createElement(m,o(o({ref:t},s),{},{components:i})):a.createElement(m,o({ref:t},s))}));function d(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,o=new Array(n);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var f=2;f<n;f++)o[f]=i[f];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},9973:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>c,toc:()=>f});var a=i(7462),r=(i(7294),i(3905));i(8209);const n={},o="Creating CA Certificates",c={unversionedId:"guides/creating-ca-certificates",id:"guides/creating-ca-certificates",title:"Creating CA Certificates",description:"This guide describes how to create CA certificates.",source:"@site/docs/guides/creating-ca-certificates.md",sourceDirName:"guides",slug:"/guides/creating-ca-certificates",permalink:"/guides/creating-ca-certificates",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"guides",previous:{title:"General Availability",permalink:"/guides"},next:{title:"Creating Deployments",permalink:"/guides/creating-deployments"}},l={},f=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Obtain a CA Certificate File",id:"obtain-a-ca-certificate-file",level:2},{value:"Obtain a Verification Certificate File",id:"obtain-a-verification-certificate-file",level:2},{value:"Obtain a Verification Code",id:"obtain-a-verification-code",level:3},{value:"Create a Verification Certificate File",id:"create-a-verification-certificate-file",level:3},{value:"Submit the CA Certificate and Verification Certificate to Peridio",id:"submit-the-ca-certificate-and-verification-certificate-to-peridio",level:2}],s={toc:f};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-ca-certificates"},"Creating CA Certificates"),(0,r.kt)("p",null,"This guide describes how to create CA certificates."),(0,r.kt)("p",null,"To learn more about Peridio CA certificates in general, see the ",(0,r.kt)("a",{parentName:"p",href:"/reference/ca-certificates"},"CA certificates")," reference."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/peridio/morel/releases"},"Peridio CLI"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Last tested with version 0.3.0.")))),(0,r.kt)("h2",{id:"obtain-a-ca-certificate-file"},"Obtain a CA Certificate File"),(0,r.kt)("p",null,"There are many ways to obtain a CA certificate file including but not limited to generating your own or purchasing one from a company that specializes in certificate management. For the sake of example you may see the ",(0,r.kt)("a",{parentName:"p",href:"creating-x509-certificates-with-openssl"},"creating X.509 certificates with OpenSSL")," guide. If you follow that guide, use an intermediate certificate as your CA certificate for the purpose of this guide."),(0,r.kt)("h2",{id:"obtain-a-verification-certificate-file"},"Obtain a Verification Certificate File"),(0,r.kt)("p",null,"In order to verify that you control the private key associated with the CA certificate you wish to upload, Peridio requires you upload a verification certificate. This is an end entity certificate signed by the private key associated with the CA certificate you wish to upload and whose common name is a verification code provided by Peridio."),(0,r.kt)("h3",{id:"obtain-a-verification-code"},"Obtain a Verification Code"),(0,r.kt)("p",null,"You will use the obtained verification code as the common name of the verification certificate."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Peridio CLI")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"peridio ca-certificates create-verification-code\n")),(0,r.kt)("p",null,"\u26a0\ufe0f This code is consumed upon creating a CA certificate and expires after one week."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Peridio Web Console")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to your organization in the ",(0,r.kt)("a",{parentName:"li",href:"https://console.cremini.peridio.com"},"Peridio Web Console"),"."),(0,r.kt)("li",{parentName:"ol"},'Navigate to the "Certificates" page.'),(0,r.kt)("li",{parentName:"ol"},'Navigate to the "New Certificate Authority" page by clicking "Add Certificate Authority".'),(0,r.kt)("li",{parentName:"ol"},"The verification code will be displayed on the page.")),(0,r.kt)("p",null,"\u26a0\ufe0f This code is different everytime you open or refresh the page to upload a CA certificate. The common name of the verification certificate you upload must match the code displayed on the page."),(0,r.kt)("h3",{id:"create-a-verification-certificate-file"},"Create a Verification Certificate File"),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"creating-x509-certificates-with-openssl"},"creating X.509 certificates with OpenSSL")," guide and create an end entity certificate whose common name is the verification code you obtained earlier."),(0,r.kt)("h2",{id:"submit-the-ca-certificate-and-verification-certificate-to-peridio"},"Submit the CA Certificate and Verification Certificate to Peridio"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Peridio CLI")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"peridio ca-certificates create \\\n  --certificate-path ca-certificate.pem \\\n  --verification-certificate-path verification-certificate.pem\n")),(0,r.kt)("p",null,"\u26a0\ufe0f The common name of the verification certificate you upload must match a verification code created via the Peridio CLI or the Peridio Admin API."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Peridio Web Console")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'You should still be on the "New Certificate Authority" page from when you obtained a verification code.'),(0,r.kt)("li",{parentName:"ol"},"Input the CA certificate and verification certificate into the respective file inputs and submit the form.")),(0,r.kt)("p",null,"\u26a0\ufe0f The common name of the verification certificate you upload must match the code displayed on the page."))}p.isMDXComponent=!0},8209:(e,t,i)=>{i(7294)}}]);