"use strict";(self.webpackChunkparasola=self.webpackChunkparasola||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"cli":[{"type":"link","label":"Getting Started","href":"/cli","docId":"cli"},{"type":"category","label":"Commands","items":[{"collapsible":false,"type":"category","label":"signing-keys","items":[{"type":"link","label":"create","href":"/cli/signing-keys/create","docId":"cli/signing-keys/create"},{"type":"link","label":"delete","href":"/cli/signing-keys/delete","docId":"cli/signing-keys/delete"},{"type":"link","label":"get","href":"/cli/signing-keys/get","docId":"cli/signing-keys/get"},{"type":"link","label":"list","href":"/cli/signing-keys/list","docId":"cli/signing-keys/list"}],"collapsed":false},{"collapsible":false,"type":"category","label":"users","items":[{"type":"link","label":"me","href":"/cli/users/me","docId":"cli/users/me"}],"collapsed":false}],"collapsed":true,"collapsible":true}],"reference":[{"collapsible":false,"type":"category","label":"Reference","items":[{"type":"link","label":"CA Certificates","href":"/reference/ca-certificates","docId":"reference/ca-certificates"},{"type":"link","label":"Deployments","href":"/reference/deployments","docId":"reference/deployments"},{"type":"link","label":"Device Certificates","href":"/reference/device-certificates","docId":"reference/device-certificates"},{"type":"link","label":"Devices","href":"/reference/devices","docId":"reference/devices"},{"type":"link","label":"Firmware Signing Keys","href":"/reference/firmware-signing-keys","docId":"reference/firmware-signing-keys"},{"type":"link","label":"Firmwares","href":"/reference/firmwares","docId":"reference/firmwares"},{"type":"link","label":"Just in Time Provisioning","href":"/reference/just-in-time-provisioning","docId":"reference/just-in-time-provisioning"},{"type":"link","label":"Organizations","href":"/reference/organizations","docId":"reference/organizations"},{"type":"link","label":"Products","href":"/reference/products","docId":"reference/products"},{"type":"link","label":"Users","href":"/reference/users","docId":"reference/users"}],"collapsed":false,"href":"/reference"}],"guides":[{"collapsible":false,"type":"category","label":"Security","items":[{"type":"link","label":"Creating X.509 Certificates with OpenSSL","href":"/guides/creating-x509-certificates-with-openssl","docId":"guides/creating-x509-certificates-with-openssl"}],"collapsed":false,"href":"/guides"}]},"docs":{"cli":{"id":"cli","title":"Getting Started","description":"Peridio CLI, or peridio, is a command-line interface to Peridio for use in your terminal or your scripts.","sidebar":"cli"},"cli/signing-keys/create":{"id":"cli/signing-keys/create","title":"create","description":"Create a signing key.","sidebar":"cli"},"cli/signing-keys/delete":{"id":"cli/signing-keys/delete","title":"delete","description":"Delete a signing key.","sidebar":"cli"},"cli/signing-keys/get":{"id":"cli/signing-keys/get","title":"get","description":"Get a signing key.","sidebar":"cli"},"cli/signing-keys/list":{"id":"cli/signing-keys/list","title":"list","description":"List signing keys.","sidebar":"cli"},"cli/users/me":{"id":"cli/users/me","title":"me","description":"Get the authorized user\'s email and username.","sidebar":"cli"},"guides/creating-x509-certificates-with-openssl":{"id":"guides/creating-x509-certificates-with-openssl","title":"Creating X.509 Certificates with OpenSSL","description":"This guide describes how to create X.509 certificates with the OpenSSL CLI.","sidebar":"guides"},"reference/ca-certificates":{"id":"reference/ca-certificates","title":"CA Certificates","description":"A CA certificate is an X.509 certificate that signs device certificates. The validity of said signature on the device\'s certificate is verified when a user creates a device certificate and as part of just in time provisioning.","sidebar":"reference"},"reference/deployments":{"id":"reference/deployments","title":"Deployments","description":"A deployment makes firmware available to devices associated with the same product as the deployment and that satisfy the deployment\'s conditions. Deployments may be configured as active or not. Only active deployments may be considered when Peridio evaluates if an update is available for a device.","sidebar":"reference"},"reference/device-certificates":{"id":"reference/device-certificates","title":"Device Certificates","description":"A device certificate is an X.509 certificate that is signed by a CA certificate. Devices use their certificates to authenticate with the Peridio Device API as well as during just in time provisioning.","sidebar":"reference"},"reference/devices":{"id":"reference/devices","title":"Devices","description":"A device is the logical representation of a physical or virtual thing you wish to manage firmware for with Peridio.","sidebar":"reference"},"reference/firmware-signing-keys":{"id":"reference/firmware-signing-keys","title":"Firmware Signing Keys","description":"Firmware signing keys are ED25519 keys which consist of a public/private key pair.","sidebar":"reference"},"reference/firmwares":{"id":"reference/firmwares","title":"Firmwares","description":"Firmwares are the data you wish to distribute to devices.","sidebar":"reference"},"reference/just-in-time-provisioning":{"id":"reference/just-in-time-provisioning","title":"Just in Time Provisioning","description":"Configuring just in time provisioning for a CA Certificate enables a device whose certificate is signed by that CA certificate to reactively provision itself at the moment of its first connection to the Peridio Device API. This alleviates the burden of having to take any per device onboarding action.","sidebar":"reference"},"reference/organizations":{"id":"reference/organizations","title":"Organizations","description":"An Organization is a container for your resources. You create and manage your resources in an Organization, and the Organization provides administrative capabilities for access and billing.","sidebar":"reference"},"reference/products":{"id":"reference/products","title":"Products","description":"Products provide a means of logically grouping devices at the highest level within an organization. More granular grouping can be achieved via device tags.","sidebar":"reference"},"reference/users":{"id":"reference/users","title":"Users","description":"A user is the logical representation of a person within Peridio.","sidebar":"reference"}}}')}}]);