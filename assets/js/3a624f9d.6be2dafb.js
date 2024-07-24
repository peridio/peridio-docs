"use strict";(self.webpackChunkperidio_docs=self.webpackChunkperidio_docs||[]).push([[8430],{67854:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=i(74848),r=i(28453);const s={},o="Peridio EVK",a={id:"evk",title:"Peridio EVK",description:"The Peridio EVK (Evaluation Kit) offers a streamlined approach to configuring and deploying a demonstration product that you can use to familiarize yourself with how Peridio Cloud can be configured and used. The EVK is designed to be run from your workstation and only requires access to a Peridio Cloud organization where it can deploy a sample product.",source:"@site/docs/evk.md",sourceDirName:".",slug:"/evk",permalink:"/evk",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},d={},l=[{value:"Dependencies",id:"dependencies",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Initializing the EVK Demo Product",id:"initializing-the-evk-demo-product",level:3},{value:"Tasks",id:"tasks",level:4},{value:"Sub Tasks",id:"sub-tasks",level:4},{value:"File modifications",id:"file-modifications",level:4},{value:"CLI Commands",id:"cli-commands",level:4},{value:"EVK Demo Product Overview",id:"evk-demo-product-overview",level:3},{value:"Running Virtual Devices",id:"running-virtual-devices",level:3},{value:"Starting Virtual Devices",id:"starting-virtual-devices",level:4},{value:"Stopping Virtual Devices",id:"stopping-virtual-devices",level:4},{value:"Attaching to a Virtual Device Container",id:"attaching-to-a-virtual-device-container",level:4},{value:"Next steps",id:"next-steps",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"peridio-evk",children:"Peridio EVK"}),"\n",(0,t.jsx)(n.p,{children:"The Peridio EVK (Evaluation Kit) offers a streamlined approach to configuring and deploying a demonstration product that you can use to familiarize yourself with how Peridio Cloud can be configured and used. The EVK is designed to be run from your workstation and only requires access to a Peridio Cloud organization where it can deploy a sample product."}),"\n",(0,t.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,t.jsx)(n.p,{children:"To get started with the Peridio EVK you will need access to a workstation with the following requirements:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Python 3.6+"}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/cli",children:"Peridio CLI"})}),"\n",(0,t.jsx)(n.li,{children:"podman or docker"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,t.jsxs)(n.p,{children:["You can install the ",(0,t.jsx)(n.code,{children:"peridio-evk"})," from PyPI"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pip install peridio-evk\n"})}),"\n",(0,t.jsx)(n.p,{children:"Once the Peridio EVK is installed, you will need the following to initialize an environment"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A Peridio Cloud organization"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This should be an organization that you have administrative rights to create new products and operate within. If you are just getting started with Peridio, you can deploy the EVK into your desired corporate org. If you are new to Peridio, but operating from within an existing corporate organization and you wish to leverage the Peridio EVK to help familiarize yourself with Peridio, it is advised that you create a new organization."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"An API Key"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["You can generate a new API key in Peridio from the ",(0,t.jsx)(n.a,{href:"https://console.peridio.com/settings/api-authentication",children:"API Authentication"})," page. The generated token will only be displayed to you once, be sure to copy it down for the next steps."]}),"\n",(0,t.jsx)(n.h3,{id:"initializing-the-evk-demo-product",children:"Initializing the EVK Demo Product"}),"\n",(0,t.jsx)(n.p,{children:"Initializing the Peridio EVK demo product is easy and can be done in a single step. From your command line execute the following"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"peridio-evk initialize --organization-name <ORGANIZATION_NAME> --organization-prn <ORGANIZARION_PRN> --api-key <API_KEY>\n"})}),"\n",(0,t.jsx)(n.p,{children:"Replace the following tokens in the command with your values"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"<ORGANIZATION_NAME>"}),": This is the string value of the name of the organization Peridio EVK will deploy the demo product into. If this value contains spaces or special characters, you should wrap it in double quotes."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"<ORGANIZARION_PRN>"}),": The PRN (Peridio Resource Name) of the organization. You can find the organization PRN from the ",(0,t.jsx)(n.a,{href:"https://console.peridio.com/organizations",children:"Organization List"}),". Click the copy link next to the PRN column."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"<API_KEY>"}),": The API key that you generated in the ",(0,t.jsx)(n.a,{href:"https://console.peridio.com/settings/api-authentication",children:"API Authentication"})," page"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"You should see output like the following:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\ud83d\udccb Initializing EVK\n  \u2139 Organization Name: evk-demo\n  \u2139 Organization PRN: prn:1:70c48079-0c40-4668-a7c2-3a15e003bc6b\n  \u2139 Product Name: edge-inference\n  \u2139 API key: <API_KEY>\nRunning this task may take several minutes to complete.\nYou may run this task over again in the case of errors as it will not duplicate data\n\nProceed? [y/N]:\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can run the above command against the same organization over again and it will not duplicate data. It will take some time to complete depending on your network connectivity."}),"\n",(0,t.jsx)(n.p,{children:"As the Peridio EVK program executes, you'll notice a lot of output being presented in the console. Useful information will be presented with the following key"}),"\n",(0,t.jsx)(n.h4,{id:"tasks",children:"Tasks"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\ud83d\udccb Creating Artifact\n"})}),"\n",(0,t.jsx)(n.p,{children:"Tasks are top level items, They illustrate what part of the system is currently being configured"}),"\n",(0,t.jsx)(n.h4,{id:"sub-tasks",children:"Sub Tasks"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"  \u2139 edge-inference-os: v1.12.1\n  \u2139 edge-inference-service: v1.5.3\n  \u2139 edge-inference-peripheral: v1.9.10\n  \u2139 edge-inference-model: v1.4.0\n"})}),"\n",(0,t.jsx)(n.p,{children:"Subtasks provide more information about the data that is being used during the current task operation"}),"\n",(0,t.jsx)(n.h4,{id:"file-modifications",children:"File modifications"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"  \ud83d\udcc1 Modifying File: /home/username/.config/peridio/config.json\n"})}),"\n",(0,t.jsx)(n.p,{children:"Rendered any time the Peridio EVK modifies a local file. Useful for tracking where Peridio EVK is storing data."}),"\n",(0,t.jsx)(n.h4,{id:"cli-commands",children:"CLI Commands"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\u2b06\ufe0f  CLI command: peridio --profile peridio-evk devices create --identifier EI-ML-0001 --product-name edge-inference --cohort-prn prn:1:70c48079-0c40-4668-a7c2-3a15e003bc6b:cohort:96686516-e2c0-4690-8405-343429cd9714 --tags canary --target arm64-v8\n"})}),"\n",(0,t.jsx)(n.p,{children:"When Peridio EVK executes a Peridio CLI command, the command will be rendered to the console. This is helpful for understanding how you can use the Peridio CLI later to execute and configure your own commands in your CI / CD pipelines and development / production workflows."}),"\n",(0,t.jsx)(n.p,{children:"CLI responses will be rendered just below the CLI command. For streaming operations, such as uploading binaries to Peridio Cloud, The test will be output in realtime as the CLI executes."}),"\n",(0,t.jsx)(n.h3,{id:"evk-demo-product-overview",children:"EVK Demo Product Overview"}),"\n",(0,t.jsxs)(n.p,{children:["The Peridio EVK deploys a demo product called ",(0,t.jsx)(n.code,{children:"edge-inference"})," into your organization which illustrates a common way to configure Peridio Cloud for use with an embedded device. The following resources are deployed into the organization:"]}),"\n",(0,t.jsx)(n.p,{children:"Product:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"edge-inference"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Cohorts:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"release"}),"\n",(0,t.jsx)(n.li,{children:"release-debug"}),"\n",(0,t.jsx)(n.li,{children:"daily-release"}),"\n",(0,t.jsx)(n.li,{children:"daily-debug"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Signing-Keys:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"release-signing-key"}),"\n",(0,t.jsx)(n.li,{children:"release-debug-signing-key"}),"\n",(0,t.jsx)(n.li,{children:"daily-release-signing-key"}),"\n",(0,t.jsx)(n.li,{children:"daily-debug-signing-key"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"CA Certificates:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Intermediate CA: edge-inference",":release"]}),"\n",(0,t.jsxs)(n.li,{children:["Intermediate CA: edge-inference",":release-debug"]}),"\n",(0,t.jsxs)(n.li,{children:["Intermediate CA: edge-inference",":daily-release"]}),"\n",(0,t.jsxs)(n.li,{children:["Intermediate CA: edge-inference",":daily-debug"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Artifacts, Versions, Binaries:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["edge-inference-os","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["v1.12.1","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"target: x86_64"}),"\n",(0,t.jsx)(n.li,{children:"target: arm64-v8"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["edge-inference-service","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["v1.5.3","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"target: x86_64"}),"\n",(0,t.jsx)(n.li,{children:"target: arm64-v8"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["v2.0.0","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"target: x86_64"}),"\n",(0,t.jsx)(n.li,{children:"target: arm64-v8"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["edge-inference-peripheral","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["v1.9.10","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"target: arm-cortex-m33"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["edge-inference-model","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["v1.4.0","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"target: x86_64"}),"\n",(0,t.jsx)(n.li,{children:"target: arm64-v8"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["v2.1.0","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"target: x86_64"}),"\n",(0,t.jsx)(n.li,{children:"target: arm64-v8"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Devices:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["EI-ML-0001","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"tags: canary"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["EI-ML-0002","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"tags: canary"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["EI-ML-0003","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"tags: JITP"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["EI-ML-0004","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"tags: JITP"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["EI-ML-0005","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"tags: JITP"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["EI-ML-0006","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"tags: JITP"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Releases:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"release-r1001"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"edge-inference-os v1.12.1"}),"\n",(0,t.jsx)(n.li,{children:"edge-inference-service v1.5.3"}),"\n",(0,t.jsx)(n.li,{children:"edge-inference-peripheral v1.9.10"}),"\n",(0,t.jsx)(n.li,{children:"edge-inference-model v1.4.0"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"release-r1002"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"edge-inference-os v1.12.1"}),"\n",(0,t.jsx)(n.li,{children:"edge-inference-service v2.0.0"}),"\n",(0,t.jsx)(n.li,{children:"edge-inference-peripheral v1.9.10"}),"\n",(0,t.jsx)(n.li,{children:"edge-inference-model v2.1.0"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The Peridio EVK simulates an environment where you have six devices, where four of the devices are Just-In-Time-Provisioned. These devices are in the release cohort and start on release-r1001. There is a release that has been staged for the release cohort titled release-r1002. This release will update the edge-inference-service and edge-inference-model to the latest version. The release is initially staged in a disabled state, and it is configured to deploy to only devices tagged with ",(0,t.jsx)(n.code,{children:"canary"}),". Once you enable the release, and start virtual devices, the ",(0,t.jsx)(n.code,{children:"canary"})," devices will begin to take an update."]}),"\n",(0,t.jsx)(n.h3,{id:"running-virtual-devices",children:"Running Virtual Devices"}),"\n",(0,t.jsx)(n.p,{children:"Peridio EVK can create, launch, and attach containerized devices using podman or docker to demonstrate device updates and test remote capabilities."}),"\n",(0,t.jsx)(n.admonition,{title:"Remote Access Tunnels",type:"info",children:(0,t.jsx)(n.p,{children:"Testing remote access tunnels using the Peridio EVK containerized devices will require running podman or docker on a linux host with the wireguard kernel module enabled. Using remote access tunnels with Podman Desktop or Docker Desktop from a Mac, Windows, or Linux desktop will executed the containers inside a VM where the wireguard kernel extensions will not be enabled and will not function properly. You can still connect to these devices using the web based remote shell functionality."})}),"\n",(0,t.jsxs)(n.p,{children:["Peridio EVK will generate Identities for six devices. Two of the six devices are already known to Peridio Cloud as they are registered during the initialization process. These devices are tagged with the ",(0,t.jsx)(n.code,{children:"canary"}),' tag. Once the next release is "enabled" these two devices will receive the update first. The remaining four device identities were signed with an intermediate certificate that Peridio Cloud is configured with Just-In-Time-Provisioning to register these devices as they come online. This resembles a common production strategy where the certificates of devices may not be known to peridio at the time of manufacture and will instead be registered when they connect for the first time. You can observe this behavior by opening a web browser and navigating to the device list by clicking devices in the Peridio Cloud navigation.']}),"\n",(0,t.jsx)(n.h4,{id:"starting-virtual-devices",children:"Starting Virtual Devices"}),"\n",(0,t.jsx)(n.p,{children:"To start the virtual devices execute the following:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"peridio-evk devices-start\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Peridio EVK will first pull the latest container image from docker-hub for ",(0,t.jsx)(n.code,{children:"peridio/peridiod:latest"}),' and launch six containers with unique identities. These devices will appear in Peridio Cloud device list once running. If you have already "enabled" the staged ',(0,t.jsx)(n.code,{children:"release-r1002"}),", the canary devices will immediately start updating."]}),"\n",(0,t.jsx)(n.h4,{id:"stopping-virtual-devices",children:"Stopping Virtual Devices"}),"\n",(0,t.jsx)(n.p,{children:"To stop virtual devices execute the following command"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"peridio-evk devices-stop\n"})}),"\n",(0,t.jsx)(n.p,{children:"Peridio EVK will stop all running container images."}),"\n",(0,t.jsx)(n.h4,{id:"attaching-to-a-virtual-device-container",children:"Attaching to a Virtual Device Container"}),"\n",(0,t.jsx)(n.p,{children:"You can attach to a virtual device container to inspect the process of placing release files by executing the following:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"peridio-evk device-attach <DEVICE_IDENTIFIER>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Replace the token ",(0,t.jsx)(n.code,{children:"<DEVICE_IDENTIFIER>"})," with the Peridio device identifier of the device that you want to attach your terminal to. For example ",(0,t.jsx)(n.code,{children:"EI-ML-0001"}),". Once connected, you will receive a bash prompt where you can navigate and interact with the running container. Type ",(0,t.jsx)(n.code,{children:"exit"})," to detach from the running container."]}),"\n",(0,t.jsxs)(n.admonition,{title:"Trouble Attaching?",type:"tip",children:[(0,t.jsx)(n.p,{children:"If you are having trouble attaching to a container using this command you can attach using podman or docker directly with the following command:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"{podman | docker} exec -it peridio-<DEVICE_IDENTIFIER> /bin/bash\n"})})]}),"\n",(0,t.jsx)(n.h3,{id:"next-steps",children:"Next steps"}),"\n",(0,t.jsx)(n.p,{children:'Now that you have deployed the release-r1002 to the canary devices, its time to start deploying it to the rest of the fleet. Navigate to the release page in Peridio Cloud and edit the release. Change the "Cohort Availability" from Tags: Canary, to Percentage: %80. Once the release is saved two more of your devices should begin to take the update the next time they check for an update. Change this to 100% to deploy to the entire fleet. If you do not want to wait for the devices to poll for an update, you can stop / start the devices to force them to check for an update on boot.'}),"\n",(0,t.jsxs)(n.p,{children:["Try out remote access with one of your running devices. Navigate to the Device detail page of a connected device and click the shell button. The username / password combo to log in to the virtual device is ",(0,t.jsx)(n.code,{children:"peridio/peridio"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"To use remote access tunnels, Navigate to the device detail page of a device you would like to connect to and copy the PRN. Execute the following from the Peridio CLI:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"peridio --profile <ORGANIZATION_NAME> tunnels create --device-prn <DEVICE_PRN> --device-tunnel-port 22 --wait 10\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In the response, you will use the ",(0,t.jsx)(n.code,{children:"tunnel.server_tunnel_port"})," as the ssh port for connecting to the machine and ",(0,t.jsx)(n.code,{children:"tunnel.server_tunnel_ip_address"}),". Execute the following ssh command to connect through remote access tunnels to your virtual device:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"ssh peridio@<server_tunnel_ip> -p <server_tunnel_ip_address>\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.mdxAdmonitionTitle,{children:["Use ",(0,t.jsx)(n.code,{children:"jq"})," to format output"]}),(0,t.jsxs)(n.p,{children:["Pipe Peridio CLI commands to ",(0,t.jsx)(n.code,{children:"jq"})," for better formatting"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'peridio --profile evk users me | jq\n{\n  "data": {\n    "email": "me@test.com",\n    "username": "my_username"\n  }\n}\n'})})]}),"\n",(0,t.jsxs)(n.p,{children:["After you are finished, you'll have configured a workstation with a functional Peridio CLI that can be used to create new products and begin working with real devices. Check out the ",(0,t.jsx)(n.a,{href:"/integration/linux/overview#reference-designs",children:"peridio reference designs"})," for a good starting point to deploying peridiod onto real devices."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var t=i(96540);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);