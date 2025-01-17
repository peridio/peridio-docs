"use strict";(self.webpackChunkperidio_docs=self.webpackChunkperidio_docs||[]).push([[3535],{76403:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var s=n(74848),r=n(28453);const o={},t="Configuring",d={id:"integration/linux/peridiod/configuration",title:"Configuring",description:"Peridiod is configured via a json formatted file on the filesystem. The location of the file defaults to $XDGCONFIGHOME/peridio/peridio-config.json. if $XDGCONFIGHOME is not set the default path is $HOME/.config/peridio/peridio-config.json. This file location can be overwritten by setting PERIDIOCONFIGFILE=/path/to/peridio.json.",source:"@site/docs/integration/linux/peridiod/configuration.md",sourceDirName:"integration/linux/peridiod",slug:"/integration/linux/peridiod/configuration",permalink:"/integration/linux/peridiod/configuration",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"integration",previous:{title:"Getting Started",permalink:"/integration/linux/peridiod/getting-started"},next:{title:"Packaging updates",permalink:"/integration/linux/peridiod/updates"}},c={},l=[{value:"<code>node</code> options",id:"node-options",level:2},{value:"<code>device_api</code> options",id:"device_api-options",level:2},{value:"<code>fwup</code> options",id:"fwup-options",level:2},{value:"<code>remote_access_tunnels</code> options",id:"remote_access_tunnels-options",level:2},{value:"Node configurations",id:"node-configurations",level:2},{value:"Examples",id:"examples",level:2},{value:"Minimal keys required for cohort workflows",id:"minimal-keys-required-for-cohort-workflows",level:3},{value:"Minimal with remote access for SSH",id:"minimal-with-remote-access-for-ssh",level:3},{value:"Elixir and Nerves",id:"elixir-and-nerves",level:3},{value:"U-Boot environment additions",id:"u-boot-environment-additions",level:3}];function a(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"configuring",children:"Configuring"}),"\n",(0,s.jsxs)(i.p,{children:["Peridiod is configured via a json formatted file on the filesystem. The location of the file defaults to ",(0,s.jsx)(i.code,{children:"$XDG_CONFIG_HOME/peridio/peridio-config.json"}),". if ",(0,s.jsx)(i.code,{children:"$XDG_CONFIG_HOME"})," is not set the default path is ",(0,s.jsx)(i.code,{children:"$HOME/.config/peridio/peridio-config.json"}),". This file location can be overwritten by setting ",(0,s.jsx)(i.code,{children:"PERIDIO_CONFIG_FILE=/path/to/peridio.json"}),"."]}),"\n",(0,s.jsx)(i.p,{children:"The peridiod configuration has the following top level keys:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"version"}),": The configuration version number. Currently this is 1."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"cache_dir"}),": A location on disk where peridiod can store intermediate files. This directory needs to be writable. Defaults to ",(0,s.jsx)(i.code,{children:"/var/peridiod"})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"device_api"}),": Configuration for the device api endpoint"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"fwup"}),": Global keys related to the use of fwup."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"remote_shell"}),": Enable or disable the remote getty feature."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"remote_iex"}),": Enable or disable the remote IEx feature. Useful if you are deploying a Nerves distribution. Enabling this takes precedence over ",(0,s.jsx)(i.code,{children:"remote_shell"})]}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"remote_access_tunnels"})}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"update_poll_enabled"}),": (true | false) Enable or Disable update server polling"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"update_poll_interval"}),": (non negative integer) The interval in which the update server should poll for updates. Defaults to every 30 min."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"trusted_signing_keys"}),": (list of strings) A list of raw ed25519 public signing keys. Binaries in peridio are signed by private keys that you own, this list should contain the public parts of the signing keys this device should trust installing."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"targets"}),": (list of strings) A list of binary target strings. When peridiod received a bundle, it will install only binaries with target strings in this list. Defaults to ",(0,s.jsx)(i.code,{children:'["portable"]'})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"node"}),": Node configuration settings"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["For more information about X509 certificates, see ",(0,s.jsx)(i.a,{href:"/platform/guides/creating-x509-certificates-with-openssl",children:"creating CA certificates"}),"."]}),"\n",(0,s.jsxs)(i.h2,{id:"node-options",children:[(0,s.jsx)(i.code,{children:"node"})," options"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"key_pair_source"}),": Options are ",(0,s.jsx)(i.code,{children:"file"}),", ",(0,s.jsx)(i.code,{children:"uboot-env"}),", ",(0,s.jsx)(i.code,{children:"pkcs11"}),". This determines the source of the identity key information."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"key_pair_config"}),": Different depending on the ",(0,s.jsx)(i.code,{children:"key_pair_source"})]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"key_pair_source: file"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"private_key_path"}),": Path on the filesystem to a PEM encoded private key file."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"certificate_path"}),": Path on the filesystem to a PEM encoded x509 certificate file."]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"key_pair_source: uboot-env"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"private_key"}),": The key in the uboot environment which contains a PEM encoded private key."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"certificate"}),": The key in the uboot environment which contains a PEM encoded x509 certificate."]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"key_pair_source: pkcs11"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"key_id"}),": The ",(0,s.jsx)(i.code,{children:"PKCS11"})," URI used to for private key operations.\nExamples:\nATECCx08 TNG using CryptoAuthLib: ",(0,s.jsx)(i.code,{children:"pkcs11:token=MCHP;object=device;type=private"})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"cert_id"}),": The ",(0,s.jsx)(i.code,{children:"PKCS11"})," URI used for certificate operations.\nExamples:\nATECCx08 TNG using CryptoAuthLib: ",(0,s.jsx)(i.code,{children:"pkcs11:token=MCHP;object=device;type=cert"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Filesystem"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-json",children:'"key_pair_source": "file",\n"key_pair_config": {\n  "private_key_path": "/etc/peridiod/device-key.pem",\n  "certificate_path": "/etc/peridiod/device.pem"\n}\n'})}),"\n",(0,s.jsx)(i.p,{children:"Environment"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-json",children:'"key_pair_source": "env",\n"key_pair_config": {\n  "private_key": "PERIDIO_PRIVATE_KEY",\n  "certificate": "PERIDIO_CERTIFICATE"\n}\n'})}),"\n",(0,s.jsx)(i.p,{children:"U-Boot Environment"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-json",children:'"key_pair_source": "uboot-env",\n"key_pair_config": {\n  "private_key": "peridio_identity_private_key",\n  "certificate": "peridio_identity_certificate"\n}\n'})}),"\n",(0,s.jsx)(i.p,{children:"PKCS11 Identity using ATECC608B TrustAndGo"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-json",children:'"key_pair_source": "pkcs11",\n"key_pair_config": {\n  "key_id": "pkcs11:token=MCHP;object=device;type=private",\n  "cert_id": "pkcs11:token=MCHP;object=device;type=cert"\n}\n'})}),"\n",(0,s.jsxs)(i.h2,{id:"device_api-options",children:[(0,s.jsx)(i.code,{children:"device_api"})," options"]}),"\n",(0,s.jsx)(i.p,{children:"The device api options will default to enable connecting peridiod to the Peridio Cloud instance at peridio.com. You will need to modify these settings if you are using a Peridio OnPrem offering."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"certificate_path"}),": Filesystem path to the device api ca certificate PEM file."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"url"}),": The peridio server device api URL."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"verify"}),": Enable client side ssl verification for device api connections."]}),"\n"]}),"\n",(0,s.jsxs)(i.h2,{id:"fwup-options",children:[(0,s.jsx)(i.code,{children:"fwup"})," options"]}),"\n",(0,s.jsxs)(i.p,{children:["The following keys inform how the use of distributions will be applied in the system. They will also act as a global default when using fwup installer. You can override these settings on a per binary basis by passing them in ",(0,s.jsx)(i.code,{children:"installer_opts"})," for the ",(0,s.jsx)(i.a,{href:"updates#installers",children:"fwup installer"})]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"devpath"}),": The block storage device path to use for applying firmware updates."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"public_keys"}),": A list of authorized public keys used when verifying update archives."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"extra_args"}),": A list of extra arguments to pass to the fwup command used for applying fwup archives. Helpful when needing to use the --unsafe flag in fwup."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"env"}),": A json object of ",(0,s.jsx)(i.code,{children:'"ENV_VAR": "value"'})," pairs to decorate the environment which fwup is executed from."]}),"\n"]}),"\n",(0,s.jsxs)(i.h2,{id:"remote_access_tunnels-options",children:[(0,s.jsx)(i.code,{children:"remote_access_tunnels"})," options"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"enabled"})," (true | false): Enable or disable remote access tunnels for the device."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"service_ports"})," ([integer]): A list of device side service ports that remote access tunnels can be opened for."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"persistent_keepalive"})," (integer): number in seconds keep alives should be sent for tunnels. Defaults to ",(0,s.jsx)(i.code,{children:"25"}),"."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"hooks"}),":","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"pre_up"})," (path): A path to an executable script to be executed before bringing up the tunnel network interface."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"post_up"})," (path): A path to an executable script to be executed after bringing up the tunnel network interface."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"pre_down"})," (path): A path to an executable script to be executed before tearing down the tunnel network interface."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"post_down"})," (path): A path to an executable script to be executed after tearing down the tunnel network interface."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["See the ",(0,s.jsx)(i.a,{href:"/platform/guides/introduction-to-remote-access",children:"introduction to remote access"})," for more information on configuring and using remote access tunnels."]}),"\n",(0,s.jsx)(i.h2,{id:"node-configurations",children:"Node configurations"}),"\n",(0,s.jsx)(i.p,{children:"Filesystem"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-json",children:'"key_pair_source": "file",\n"key_pair_config": {\n  "private_key_path": "/etc/peridiod/device-key.pem",\n  "certificate_path": "/etc/peridiod/device.pem"\n}\n'})}),"\n",(0,s.jsx)(i.p,{children:"U-Boot Environment"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-json",children:'"key_pair_source": "uboot-env",\n"key_pair_config": {\n  "private_key": "peridio_identity_private_key",\n  "certificate": "peridio_identity_certificate"\n}\n'})}),"\n",(0,s.jsx)(i.p,{children:"System Environment"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-json",children:'"key_pair_source": "env",\n"key_pair_config": {\n  "private_key": "PERIDIO_PRIVATE_KEY",\n  "certificate": "PERIDIO_CERTIFICATE"\n}\n'})}),"\n",(0,s.jsx)(i.p,{children:"PKCS11 Identity using ATECC608B TrustAndGo"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-json",children:'"key_pair_source": "pkcs11",\n"key_pair_config": {\n  "key_id": "pkcs11:token=MCHP;object=device;type=private",\n  "cert_id": "pkcs11:token=MCHP;object=device;type=cert"\n}\n'})}),"\n",(0,s.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(i.h3,{id:"minimal-keys-required-for-cohort-workflows",children:"Minimal keys required for cohort workflows"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-json",children:'{\n  "version": 1,\n  "update_poll_enabled": true,\n  "update_poll_interval": 1800000,\n  "trusted_signing_keys": ["I93H7n/jHkfNqWik9uZf82Vi/HJuZ24EQBJnAtj9svU="],\n  "node": {\n    // ... see Node Configuration\n  }\n}\n'})}),"\n",(0,s.jsx)(i.h3,{id:"minimal-with-remote-access-for-ssh",children:"Minimal with remote access for SSH"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-json",children:'{\n  "version": 1,\n  "update_poll_enabled": true,\n  "update_poll_interval": 1800000,\n  "trusted_signing_keys": ["I93H7n/jHkfNqWik9uZf82Vi/HJuZ24EQBJnAtj9svU="],\n  "remote_shell": true,\n  "remote_access_tunnels": {\n    "enabled": true,\n    "service_ports": [22]\n  },\n  "node": {\n    // ... see Node Configuration\n  }\n}\n'})}),"\n",(0,s.jsx)(i.h3,{id:"elixir-and-nerves",children:"Elixir and Nerves"}),"\n",(0,s.jsx)(i.p,{children:"The peridiod application can be set using config.exs in a Nerves based application. The following is an example of the keys that can be set:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-elixir",children:'config :peridiod,\n  device_api_host: "device.cremini.peridio.com",\n  device_api_port: 443,\n  device_api_sni: "device.cremini.peridio.com",\n  device_api_verify: :verify_peer,\n  device_api_ca_certificate_path: nil,\n  key_pair_source: "env",\n  key_pair_config: %{"private_key" => "PERIDIO_PRIVATE_KEY", "certificate" => "PERIDIO_CERTIFICATE"},\n  fwup_public_keys: [],\n  fwup_devpath: "/dev/mmcblk0",\n  fwup_env: [],\n  fwup_extra_args: [],\n  remote_shell: false,\n  remote_iex: true,\n'})}),"\n",(0,s.jsx)(i.h3,{id:"u-boot-environment-additions",children:"U-Boot environment additions"}),"\n",(0,s.jsx)(i.p,{children:"peridiod will track and expose update metadata in the uboot environment under the following new keys"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"peridiod_via_current"}),": the PRN of the current installed release or bundle override"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"peridiod_via_previous"}),": the PRN of the previous installed release or bundle override"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"peridiod_via_progress"}),": the PRN of the release or bundle override in progress"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"peridiod_vsn_current"}),": the semantic version of the current installed release"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"peridiod_vsn_previous"}),": the semantic version of the previous installed release"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"peridiod_vsn_progress"}),": the semantic version of the release in progress"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"peridiod_bin_current"}),": an concatenated key / value paired encoded string of ",(0,s.jsx)(i.code,{children:"<binary_id><custom_metadata_sha256_hash>"})," internally used to diff installed binaries from bundle to bundle"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"peridiod_bin_previous"}),": an concatenated key / value paired encoded string of ",(0,s.jsx)(i.code,{children:"<binary_id><custom_metadata_sha256_hash>"})," internally used to diff installed binaries from bundle to bundle"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"peridiod_bin_progress"}),": an concatenated key / value paired encoded string of ",(0,s.jsx)(i.code,{children:"<binary_id><custom_metadata_sha256_hash>"})," internally used to diff installed binaries from bundle to bundle"]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>t,x:()=>d});var s=n(96540);const r={},o=s.createContext(r);function t(e){const i=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(o.Provider,{value:i},e.children)}}}]);