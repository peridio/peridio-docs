"use strict";(self.webpackChunkparasola=self.webpackChunkparasola||[]).push([[2398],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),l=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(a),f=i,m=u["".concat(o,".").concat(f)]||u[f]||d[f]||r;return a?n.createElement(m,s(s({ref:t},p),{},{components:a})):n.createElement(m,s({ref:t},p))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:i,s[1]=c;for(var l=2;l<r;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9374:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var n=a(7462),i=(a(7294),a(3905));a(8209);const r={},s="Creating X.509 Certificates with OpenSSL",c={unversionedId:"guides/creating-x509-certificates-with-openssl",id:"guides/creating-x509-certificates-with-openssl",title:"Creating X.509 Certificates with OpenSSL",description:"This guide describes how to create X.509 certificates with the OpenSSL CLI.",source:"@site/docs/guides/creating-x509-certificates-with-openssl.md",sourceDirName:"guides",slug:"/guides/creating-x509-certificates-with-openssl",permalink:"/guides/creating-x509-certificates-with-openssl",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"guides",previous:{title:"Security",permalink:"/guides"}},o={},l=[{value:"Hardware Constraints",id:"hardware-constraints",level:2},{value:"Private and Public Keys",id:"private-and-public-keys",level:2},{value:"Inspect a Private Key",id:"inspect-a-private-key",level:3},{value:"Create Certificates",id:"create-certificates",level:2},{value:"Inspect a Certificate Signing Request",id:"inspect-a-certificate-signing-request",level:3},{value:"Inspect a Certificate",id:"inspect-a-certificate",level:3},{value:"Root",id:"root",level:3},{value:"Create a Private Key",id:"create-a-private-key",level:4},{value:"Create a Certificate Signing Request",id:"create-a-certificate-signing-request",level:4},{value:"Create a Certificate",id:"create-a-certificate",level:4},{value:"Intermediate",id:"intermediate",level:3},{value:"Create a Private Key",id:"create-a-private-key-1",level:4},{value:"Create a Certificate Signing Request",id:"create-a-certificate-signing-request-1",level:4},{value:"Create a Certificate",id:"create-a-certificate-1",level:4},{value:"End-entity Certificate",id:"end-entity-certificate",level:3},{value:"Create a Private Key",id:"create-a-private-key-2",level:4},{value:"Create a Certificate Signing Request",id:"create-a-certificate-signing-request-2",level:4},{value:"Create a Certificate",id:"create-a-certificate-2",level:4},{value:"Appendix",id:"appendix",level:2},{value:"A - openssl.cnf",id:"a---opensslcnf",level:3},{value:"References",id:"references",level:2},{value:"config",id:"config",level:3},{value:"openssl-ca",id:"openssl-ca",level:3},{value:"openssl-ecparam",id:"openssl-ecparam",level:3},{value:"openssl-req",id:"openssl-req",level:3},{value:"openssl-x509",id:"openssl-x509",level:3},{value:"RFC 4158",id:"rfc-4158",level:3},{value:"RFC 5280",id:"rfc-5280",level:3},{value:"x509v3_config",id:"x509v3_config",level:3}],p={toc:l};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"creating-x509-certificates-with-openssl"},"Creating X.509 Certificates with OpenSSL"),(0,i.kt)("p",null,"This guide describes how to create X.509 certificates with the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openssl/openssl"},"OpenSSL CLI"),"."),(0,i.kt)("p",null,"Last tested with OpenSSL 3.0.4 21 Jun 2022."),(0,i.kt)("h2",{id:"hardware-constraints"},"Hardware Constraints"),(0,i.kt)("p",null,"For nearly every production scenario, Peridio recommends storing your sensitive credentials in a hardware security module. It is common for hardware security modules to impose constraints on the credentials they store. For example, Microchip's ",(0,i.kt)("a",{parentName:"p",href:"https://www.microchip.com/en-us/product/ATECC608B"},"ATECC608B")," stores certificates ",(0,i.kt)("a",{parentName:"p",href:"https://ww1.microchip.com/downloads/en/Appnotes/20006367A.pdf"},"in a novel fashion"),". One can use this guide to create certificates that are compatible with the ATECC608B so long as the start dates have a resolution of hours (minute and second must be 0) and end dates are a set number of years from the issue date (must have identical month, day, hour, minute and second as corresponding issue date)."),(0,i.kt)("p",null,"While this guide is useful for quickly creating certificates for non-production runs, one should be mindful that the choices you make with respect to production hardware, firmware, and software can impose constraints upon your public key infrastructure. To avoid unexpected delays in development and manufacturing and ensure you have the time and resources available to operate securely, it is best to make the decisions that dictate these constraints as soon as possible."),(0,i.kt)("h2",{id:"private-and-public-keys"},"Private and Public Keys"),(0,i.kt)("p",null,"Every X.509 certificate has a public key within it. The public key is derived from a private key. When considered together they are referred to as an asymetric key pair. Generally, this field is refered to as ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Public-key_cryptography"},"public-key cryptography")," or asymmetric cryptography."),(0,i.kt)("p",null,"To create an asymmetric key pair, one must first decide on a public key algorithm to use, this choice dictates:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The cryptographic properties of the keys and in turn their capabilities and security guarantees."),(0,i.kt)("li",{parentName:"ul"},"The processes required to create and interact with the keys.")),(0,i.kt)("p",null,"This guide will use the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm"},"ECDSA")," public key algorithm, but RSA and DSA are other common choices."),(0,i.kt)("p",null,"Effective security requires keeping the private key private; the public key can be openly distributed without compromising security."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"WARNING:"))," Private keys are sensitive components of a public key infrastructure. If they are leaked the entire downstream chain of trust is fundamentally compromised."),(0,i.kt)("h3",{id:"inspect-a-private-key"},"Inspect a Private Key"),(0,i.kt)("p",null,"To inspect any private key created later in this guide:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"openssl ecparam \\\n  -in key.pem \\\n  -text \\\n  -noout\n")),(0,i.kt)("h2",{id:"create-certificates"},"Create Certificates"),(0,i.kt)("p",null,"Some of the commands below will reference an ",(0,i.kt)("inlineCode",{parentName:"p"},"openssl.cnf")," file, you must create this with the contents described at ",(0,i.kt)("a",{parentName:"p",href:"#a---opensslcnf"},"Appendix A"),"."),(0,i.kt)("p",null,"The aforementioned config requires one additional file to track created certificates and one additional directory to store certificates historically. You must create them:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"touch database.txt\nmkdir certificates\n")),(0,i.kt)("p",null,"Note that when creating certificates with the ",(0,i.kt)("inlineCode",{parentName:"p"},"openssl ca")," command that it will write the same created certificate file twice, once to the ",(0,i.kt)("inlineCode",{parentName:"p"},"certificates")," directory where the name will be the serial number in hex with ",(0,i.kt)("em",{parentName:"p"},".pem")," appended, and once to the calling directory with the name specified by the ",(0,i.kt)("inlineCode",{parentName:"p"},"-out")," option of the command."),(0,i.kt)("h3",{id:"inspect-a-certificate-signing-request"},"Inspect a Certificate Signing Request"),(0,i.kt)("p",null,"To inspect any certificate signing request created later in this guide:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"openssl req \\\n  -in certificate-signing-request.pem \\\n  -text \\\n  -noout\n")),(0,i.kt)("h3",{id:"inspect-a-certificate"},"Inspect a Certificate"),(0,i.kt)("p",null,"To inspect any certificate created later in this guide:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"openssl x509 \\\n  -in certificate.pem \\\n  -text \\\n  -noout\n")),(0,i.kt)("h3",{id:"root"},"Root"),(0,i.kt)("p",null,"Generally speaking, a root certificate authority is a certificate that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"is self-signed"),(0,i.kt)("li",{parentName:"ul"},"is capable of signing certificates")),(0,i.kt)("h4",{id:"create-a-private-key"},"Create a Private Key"),(0,i.kt)("p",null,"Reference ",(0,i.kt)("a",{parentName:"p",href:"#openssl-ecparam"},"openssl-ecparam"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"openssl ecparam \\\n  -genkey \\\n  -name prime256v1 \\\n  -out root-private-key.pem\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"WARNING:"))," Private keys are sensitive components of a public key infrastructure. If they are leaked the entire downstream chain of trust is fundamentally compromised."),(0,i.kt)("h4",{id:"create-a-certificate-signing-request"},"Create a Certificate Signing Request"),(0,i.kt)("p",null,"Reference ",(0,i.kt)("a",{parentName:"p",href:"#openssl-req"},"openssl-req"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'openssl req \\\n  -config openssl.cnf \\\n  -key root-private-key.pem \\\n  -new \\\n  -out root-certificate-signing-request.pem \\\n  -section root_certificate_authority_req \\\n  -subj "/CN=unique-root-name"\n')),(0,i.kt)("h4",{id:"create-a-certificate"},"Create a Certificate"),(0,i.kt)("p",null,"Reference ",(0,i.kt)("a",{parentName:"p",href:"#openssl-ca"},"openssl-ca"),"."),(0,i.kt)("p",null,"You must fill in the ",(0,i.kt)("inlineCode",{parentName:"p"},"-startdate")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"-enddate")," values."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"openssl ca \\\n  -batch \\\n  -config openssl.cnf \\\n  -enddate YYYYMMDDHHMMSSZ \\\n  -extensions root_certificate_authority_extensions \\\n  -in root-certificate-signing-request.pem \\\n  -keyfile root-private-key.pem \\\n  -out root-certificate.pem \\\n  -selfsign \\\n  -startdate YYYYMMDDHHMMSSZ\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"WARNING:"))," The ",(0,i.kt)("inlineCode",{parentName:"p"},"-startdate")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"-enddate")," options should be specified cautiously as they dictate when the certificate will be valid for. The impact of a certificate not being valid yet or having already expired is dependent on the parties interacting with it. For information regarding how Peridio interacts with certificates reference ",(0,i.kt)("a",{parentName:"p",href:"/reference/ca-certificates"},"CA Certificates")," and ",(0,i.kt)("a",{parentName:"p",href:"/reference/device-certificates"},"Device Certificates"),". It is also common for hardware security modules to require these dates to be specified in a very particular manner, see ",(0,i.kt)("a",{parentName:"p",href:"#hardware-constraints"},"Hardware Constraints"),"."),(0,i.kt)("p",null,"You may retain or delete the certificate signing request depending on your use case."),(0,i.kt)("p",null,"The certificate can be openly distributed without compromising security."),(0,i.kt)("h3",{id:"intermediate"},"Intermediate"),(0,i.kt)("p",null,"Generally speaking, an intermediate certificate authority is a certificate that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"is not self signed"),(0,i.kt)("li",{parentName:"ul"},"is signed either by an intermediate certificate authority or a root certificate authority"),(0,i.kt)("li",{parentName:"ul"},"is capable of signing certificates")),(0,i.kt)("h4",{id:"create-a-private-key-1"},"Create a Private Key"),(0,i.kt)("p",null,"Reference ",(0,i.kt)("a",{parentName:"p",href:"#openssl-ecparam"},"openssl-ecparam"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"openssl ecparam \\\n  -genkey \\\n  -name prime256v1 \\\n  -out intermediate-private-key.pem\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"WARNING:"))," Private keys are sensitive components of a public key infrastructure. If they are leaked the entire downstream chain of trust is fundamentally compromised."),(0,i.kt)("h4",{id:"create-a-certificate-signing-request-1"},"Create a Certificate Signing Request"),(0,i.kt)("p",null,"Reference ",(0,i.kt)("a",{parentName:"p",href:"#openssl-req"},"openssl-req"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'openssl req \\\n  -key intermediate-private-key.pem \\\n  -new \\\n  -out intermediate-certificate-signing-request.pem \\\n  -subj "/CN=unique-intermediate-name"\n')),(0,i.kt)("h4",{id:"create-a-certificate-1"},"Create a Certificate"),(0,i.kt)("p",null,"Reference ",(0,i.kt)("a",{parentName:"p",href:"#openssl-ca"},"openssl-ca"),"."),(0,i.kt)("p",null,"You must fill in the ",(0,i.kt)("inlineCode",{parentName:"p"},"-startdate")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"-enddate")," values."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"openssl ca \\\n  -batch \\\n  -cert root-certificate.pem \\\n  -config openssl.cnf \\\n  -enddate YYYYMMDDHHMMSSZ \\\n  -extensions intermediate_certificate_authority_extensions \\\n  -in intermediate-certificate-signing-request.pem \\\n  -keyfile root-private-key.pem \\\n  -out intermediate-certificate.pem \\\n  -startdate YYYYMMDDHHMMSSZ\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"WARNING:"))," The ",(0,i.kt)("inlineCode",{parentName:"p"},"-startdate")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"-enddate")," options should be specified cautiously as they dictate when the certificate will be valid for. The impact of a certificate not being valid yet or having already expired is dependent on the parties interacting with it. For information regarding how Peridio interacts with certificates reference ",(0,i.kt)("a",{parentName:"p",href:"/reference/ca-certificates"},"CA Certificates")," and ",(0,i.kt)("a",{parentName:"p",href:"/reference/device-certificates"},"Device Certificates"),". It is also common for hardware security modules to require these dates to be specified in a very particular manner, see ",(0,i.kt)("a",{parentName:"p",href:"#hardware-constraints"},"Hardware Constraints"),"."),(0,i.kt)("p",null,"You may retain or delete the certificate signing request depending on your use case."),(0,i.kt)("p",null,"The certificate can be openly distributed without compromising security."),(0,i.kt)("h3",{id:"end-entity-certificate"},"End-entity Certificate"),(0,i.kt)("p",null,"Generally speaking, an end-entity certificate is a certificate that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"is not self signed"),(0,i.kt)("li",{parentName:"ul"},"is signed by either an intermediate certificate authority or a root certificate authority"),(0,i.kt)("li",{parentName:"ul"},"is not capable of signing certificates")),(0,i.kt)("h4",{id:"create-a-private-key-2"},"Create a Private Key"),(0,i.kt)("p",null,"Reference ",(0,i.kt)("a",{parentName:"p",href:"#openssl-ecparam"},"openssl-ecparam"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"openssl ecparam \\\n  -genkey \\\n  -name prime256v1 \\\n  -out end-entity-private-key.pem\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"WARNING:"))," Private keys are sensitive components of a public key infrastructure. If they are leaked the entire downstream chain of trust is fundamentally compromised."),(0,i.kt)("h4",{id:"create-a-certificate-signing-request-2"},"Create a Certificate Signing Request"),(0,i.kt)("p",null,"Reference ",(0,i.kt)("a",{parentName:"p",href:"#openssl-req"},"openssl-req"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'openssl req \\\n  -key end-entity-private-key.pem \\\n  -new \\\n  -out end-entity-certificate-signing-request.pem \\\n  -subj "/CN=unique-end-entity-name"\n')),(0,i.kt)("h4",{id:"create-a-certificate-2"},"Create a Certificate"),(0,i.kt)("p",null,"Reference ",(0,i.kt)("a",{parentName:"p",href:"#openssl-ca"},"openssl-ca"),"."),(0,i.kt)("p",null,"You must fill in the ",(0,i.kt)("inlineCode",{parentName:"p"},"-startdate")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"-enddate")," values."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"openssl ca \\\n  -batch \\\n  -cert intermediate-certificate.pem \\\n  -config openssl.cnf \\\n  -enddate YYYYMMDDHHMMSSZ \\\n  -extensions end_entity_certificate_extensions \\\n  -in end-entity-certificate-signing-request.pem \\\n  -keyfile intermediate-private-key.pem \\\n  -out end-entity-certificate.pem \\\n  -startdate YYYYMMDDHHMMSSZ\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"WARNING:"))," The ",(0,i.kt)("inlineCode",{parentName:"p"},"-startdate")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"-enddate")," options should be specified cautiously as they dictate when the certificate will be valid for. The impact of a certificate not being valid yet or having already expired is dependent on the parties interacting with it. For information regarding how Peridio interacts with certificates reference ",(0,i.kt)("a",{parentName:"p",href:"/reference/ca-certificates"},"CA Certificates")," and ",(0,i.kt)("a",{parentName:"p",href:"/reference/device-certificates"},"Device Certificates"),". It is also common for hardware security modules to require these dates to be specified in a very particular manner, see ",(0,i.kt)("a",{parentName:"p",href:"#hardware-constraints"},"Hardware Constraints"),"."),(0,i.kt)("p",null,"You may retain or delete the certificate signing request depending on your use case."),(0,i.kt)("p",null,"The certificate can be openly distributed without compromising security."),(0,i.kt)("h2",{id:"appendix"},"Appendix"),(0,i.kt)("h3",{id:"a---opensslcnf"},"A - openssl.cnf"),(0,i.kt)("p",null,"When creating certificates and certificate signing requests there is often a set of common extensions you wish to include. It is convenient to enumerate these extensions in a config file for ease of maintenance and referenceability."),(0,i.kt)("p",null,"In this guide, we use the following config referenced as ",(0,i.kt)("inlineCode",{parentName:"p"},"openssl.cnf"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cnf"},"#\n# ca\n#\n\n[ ca ]\ndefault_ca=default_ca\n\n[ default_ca ]\ndatabase=database.txt\ndefault_days=0\ndefault_md=SHA256\nemail_in_dn=no\nnew_certs_dir=certificates\npolicy=default_policy\nrand_serial=yes\nunique_subject=no\nx509_extensions=root_certificate_authority_extensions\n\n[ default_policy ]\ncountryName            = optional\nstateOrProvinceName    = optional\norganizationName       = optional\norganizationalUnitName = optional\ncommonName             = supplied\n\n#\n# extensions\n#\n\n[ root_certificate_authority_extensions ]\nbasicConstraints=critical,CA:TRUE,pathlen:1\nextendedKeyUsage=serverAuth,clientAuth\nkeyUsage=critical,digitalSignature,keyCertSign,cRLSign\nsubjectKeyIdentifier=hash\n\n[ intermediate_certificate_authority_extensions ]\nauthorityKeyIdentifier=keyid:always\nbasicConstraints=critical,CA:TRUE,pathlen:0\nextendedKeyUsage=serverAuth,clientAuth\nkeyUsage=critical,digitalSignature,keyCertSign,cRLSign\nsubjectKeyIdentifier=hash\n\n[ end_entity_certificate_extensions ]\nauthorityKeyIdentifier=keyid:always\nextendedKeyUsage=clientAuth\nkeyUsage=critical,digitalSignature\nsubjectKeyIdentifier=hash\n")),(0,i.kt)("p",null,"For a comprehensive understanding of what the above configuration is doing, one should exhaustively read all of this guide's ",(0,i.kt)("a",{parentName:"p",href:"#references"},"References"),"."),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("h3",{id:"config"},"config"),(0,i.kt)("p",null,"OpenSSL's CONF library configuration files, reference ",(0,i.kt)("a",{parentName:"p",href:"https://www.openssl.org/docs/man3.0/man5/config.html"},"https://www.openssl.org/docs/man3.0/man5/config.html"),"."),(0,i.kt)("h3",{id:"openssl-ca"},"openssl-ca"),(0,i.kt)("p",null,"OpenSSL's sample minimal CA application, reference ",(0,i.kt)("a",{parentName:"p",href:"https://www.openssl.org/docs/man3.0/man1/openssl-ca.html"},"https://www.openssl.org/docs/man3.0/man1/openssl-ca.html"),"."),(0,i.kt)("h3",{id:"openssl-ecparam"},"openssl-ecparam"),(0,i.kt)("p",null,"OpenSSL's EC parameter manipulation and generation command, reference ",(0,i.kt)("a",{parentName:"p",href:"https://www.openssl.org/docs/man3.0/man1/openssl-ecparam.html"},"https://www.openssl.org/docs/man3.0/man1/openssl-ecparam.html"),"."),(0,i.kt)("h3",{id:"openssl-req"},"openssl-req"),(0,i.kt)("p",null,"OpenSSL's PKCS#10 certificate request and certificate generating command, reference ",(0,i.kt)("a",{parentName:"p",href:"https://www.openssl.org/docs/man3.0/man1/openssl-req.html"},"https://www.openssl.org/docs/man3.0/man1/openssl-req.html"),"."),(0,i.kt)("h3",{id:"openssl-x509"},"openssl-x509"),(0,i.kt)("p",null,"OpenSSL's certificate display and signing command, reference ",(0,i.kt)("a",{parentName:"p",href:"https://www.openssl.org/docs/man3.0/man1/openssl-x509.html"},"https://www.openssl.org/docs/man3.0/man1/openssl-x509.html"),"."),(0,i.kt)("h3",{id:"rfc-4158"},"RFC 4158"),(0,i.kt)("p",null,"Internet X.509 Public Key Infrastructure: Certification Path Building, reference ",(0,i.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc4158"},"https://datatracker.ietf.org/doc/html/rfc4158"),"."),(0,i.kt)("h3",{id:"rfc-5280"},"RFC 5280"),(0,i.kt)("p",null,"Internet X.509 Public Key Infrastructure Certificate and Certificate Revocation List (CRL) Profile, reference ",(0,i.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc5280"},"https://datatracker.ietf.org/doc/html/rfc5280"),"."),(0,i.kt)("h3",{id:"x509v3_config"},"x509v3_config"),(0,i.kt)("p",null,"OpenSSL's X509 V3 certificate extension configuration format, reference ",(0,i.kt)("a",{parentName:"p",href:"https://www.openssl.org/docs/man3.0/man5/x509v3_config.html"},"https://www.openssl.org/docs/man3.0/man5/x509v3_config.html"),"."))}d.isMDXComponent=!0},8209:(e,t,a)=>{a(7294)}}]);