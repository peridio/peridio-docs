"use strict";(self.webpackChunkparasola=self.webpackChunkparasola||[]).push([[5030],{17954:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var r=i(74848),a=i(28453);const t={title:"Signing Keys"},s=void 0,l={id:"platform/reference/signing-keys",title:"Signing Keys",description:"Signing keys are ED25519 keys which consist of a public/private key pair.",source:"@site/docs/platform/reference/signing-keys.md",sourceDirName:"platform/reference",slug:"/platform/reference/signing-keys",permalink:"/platform/reference/signing-keys",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Signing Keys"},sidebar:"platform",previous:{title:"Binary Signatures",permalink:"/platform/reference/binary-signatures"},next:{title:"Firmware",permalink:"/platform/reference/firmware"}},c={},o=[{value:"Format",id:"format",level:2},{value:"PEM",id:"pem",level:3},{value:"Raw",id:"raw",level:3},{value:"Useful Commands",id:"useful-commands",level:2},{value:"Create Keys",id:"create-keys",level:3},{value:"Create a PEM Private Key",id:"create-a-pem-private-key",level:4},{value:"Derive a PEM Public key From a PEM Private Key",id:"derive-a-pem-public-key-from-a-pem-private-key",level:4},{value:"Create Hashes and Signatures",id:"create-hashes-and-signatures",level:3},{value:"Create a Hash",id:"create-a-hash",level:4},{value:"Create a Signature",id:"create-a-signature",level:4},{value:"Verify a Signature",id:"verify-a-signature",level:4},{value:"Convert Keys",id:"convert-keys",level:3},{value:"Convert a Raw Private Key Into a PEM Private Key",id:"convert-a-raw-private-key-into-a-pem-private-key",level:4},{value:"Convert a Raw Public Key Into a PEM Public Key",id:"convert-a-raw-public-key-into-a-pem-public-key",level:4},{value:"Convert a PEM Private Key Into a Raw Private Key",id:"convert-a-pem-private-key-into-a-raw-private-key",level:4},{value:"Convert a PEM Public Key Into a Raw Public Key",id:"convert-a-pem-public-key-into-a-raw-public-key",level:4}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Signing keys are ED25519 keys which consist of a public/private key pair."}),"\n",(0,r.jsx)(n.p,{children:"The private key is used by users to sign firmware and binaries."}),"\n",(0,r.jsx)(n.p,{children:"The public key is provided to Peridio as well as devices to enable attestation of firmware and binary signatures."}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["For field-level information and requirements, see the Admin API's ",(0,r.jsx)(n.a,{href:"/admin-api#signing-keys/operation/create-a-signing-key",children:"create-a-signing-key"})," endpoint."]})}),"\n",(0,r.jsx)(n.h2,{id:"format",children:"Format"}),"\n",(0,r.jsx)(n.p,{children:"Ed25519 keys can be represented in a variety of ways in the wild."}),"\n",(0,r.jsx)(n.h3,{id:"pem",children:"PEM"}),"\n",(0,r.jsx)(n.p,{children:"PEM is the recommended format for signing keys."}),"\n",(0,r.jsxs)(n.p,{children:["Example ",(0,r.jsx)(n.code,{children:"private.pem"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"-----BEGIN PRIVATE KEY-----\nMC4CAQAwBQYDK2VwBCIEIP3kk9k67kg6NJmqhA3pcEhS+yHSE/iX2PUBRU4NIv8O\n-----END PRIVATE KEY-----\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Example ",(0,r.jsx)(n.code,{children:"public.pem"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"-----BEGIN PUBLIC KEY-----\nMCowBQYDK2VwAyEAusHn/U1x9H6SUo3fM1Uf9bsEuKcHXWD2mj6a1GRa8z0=\n-----END PUBLIC KEY-----\n"})}),"\n",(0,r.jsx)(n.h3,{id:"raw",children:"Raw"}),"\n",(0,r.jsx)(n.p,{children:"The public key is the base64 encoding of the raw 32 byte public key. The private key is the base64 encoding of 64 bytes where the first 32 bytes are the raw private key and the last 32 bytes are the raw public key."}),"\n",(0,r.jsxs)(n.p,{children:["Example ",(0,r.jsx)(n.code,{children:"private.raw"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Vz/xXB/pdbOphbyjLKj5MBpH/TKXjWEYZdRWzhkKM5fIOXkBQLksx+B5UXUcxIQD8xfg4AioLFeZDrZ8VQIfZQ==\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Example ",(0,r.jsx)(n.code,{children:"public.raw"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"yDl5AUC5LMfgeVF1HMSEA/MX4OAIqCxXmQ62fFUCH2U=\n"})}),"\n",(0,r.jsx)(n.h2,{id:"useful-commands",children:"Useful Commands"}),"\n",(0,r.jsx)(n.h3,{id:"create-keys",children:"Create Keys"}),"\n",(0,r.jsx)(n.h4,{id:"create-a-pem-private-key",children:"Create a PEM Private Key"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"openssl genpkey -algorithm Ed25519 -out private.pem\n"})}),"\n",(0,r.jsx)(n.h4,{id:"derive-a-pem-public-key-from-a-pem-private-key",children:"Derive a PEM Public key From a PEM Private Key"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"openssl pkey -in private.pem -pubout -out public.pem\n"})}),"\n",(0,r.jsx)(n.h3,{id:"create-hashes-and-signatures",children:"Create Hashes and Signatures"}),"\n",(0,r.jsx)(n.p,{children:"These commands are unnecessary if you use the Peridio CLI as it will handle hashing and signatures for you."}),"\n",(0,r.jsx)(n.h4,{id:"create-a-hash",children:"Create a Hash"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cat to-be-hashed | sha256sum | grep -o '^\\w\\+' | tr -d \"\\n\" > hash\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The hash is in the format you'd, for example, supply to the Peridio Admin API ",(0,r.jsx)(n.a,{href:"/admin-api#binaries/operation/create-a-binary",children:"create-a-binary"})," endpoint."]}),"\n",(0,r.jsx)(n.h4,{id:"create-a-signature",children:"Create a Signature"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"openssl pkeyutl -sign -inkey private.pem -rawin -in hash > raw-signature\ncat raw-signature | xxd -ps -c 0 | tr a-z A-Z > encoded-signature\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The encoded signature is in the format you'd, for example, supply to the Peridio Admin API ",(0,r.jsx)(n.a,{href:"/admin-api#binary-signatures/operation/create-a-binary-signature",children:"create-a-binary-signature"})," endpoint."]}),"\n",(0,r.jsx)(n.h4,{id:"verify-a-signature",children:"Verify a Signature"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"openssl pkeyutl -verify -pubin -inkey public.pem -rawin -in hash -sigfile raw-signature\n"})}),"\n",(0,r.jsx)(n.h3,{id:"convert-keys",children:"Convert Keys"}),"\n",(0,r.jsx)(n.h4,{id:"convert-a-raw-private-key-into-a-pem-private-key",children:"Convert a Raw Private Key Into a PEM Private Key"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'echo -n "\\x30\\x2e\\x02\\x01\\x00\\x30\\x05\\x06\\x03\\x2b\\x65\\x70\\x04\\x22\\x04\\x20$(cat private.raw | base64 -d)" \\\n  | openssl pkey -inform der -outform pem > private.pem\n'})}),"\n",(0,r.jsx)(n.p,{children:"The raw byte sequence is a static DER prefix for private Ed25519 keys. You can verify this by hexdumping any private ed25519 key as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cat private.pem | openssl pkey -outform DER -in private.pem | hexdump -C\n"})}),"\n",(0,r.jsx)(n.p,{children:"You will see the same sequence of bytes at the beginning of the output."}),"\n",(0,r.jsx)(n.h4,{id:"convert-a-raw-public-key-into-a-pem-public-key",children:"Convert a Raw Public Key Into a PEM Public Key"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'echo -n "\\x30\\x2a\\x30\\x05\\x06\\x03\\x2b\\x65\\x70\\x03\\x21\\x00$(cat public.raw | base64 -d)" \\\n  | openssl pkey -inform der -outform pem -pubin -pubout > public.pem\n'})}),"\n",(0,r.jsx)(n.p,{children:"The raw byte sequence is a static DER prefix for public Ed25519 keys. You can verify this by hexdumping any public ed25519 key as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cat public.pem | openssl pkey -outform DER -pubin -in public.pem -pubout | hexdump -C\n"})}),"\n",(0,r.jsx)(n.p,{children:"You will see the same sequence of bytes at the beginning of the output."}),"\n",(0,r.jsx)(n.h4,{id:"convert-a-pem-private-key-into-a-raw-private-key",children:"Convert a PEM Private Key Into a Raw Private Key"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"openssl pkey -outform DER -in private.pem | tail -c +17 | base64 > private.raw\n"})}),"\n",(0,r.jsx)(n.h4,{id:"convert-a-pem-public-key-into-a-raw-public-key",children:"Convert a PEM Public Key Into a Raw Public Key"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"openssl pkey -outform DER -pubin -in public.pem -pubout | tail -c +13 | base64 > public.raw\n"})})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var r=i(96540);const a={},t=r.createContext(a);function s(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);