"use strict";(self.webpackChunkperidio_docs=self.webpackChunkperidio_docs||[]).push([[81],{73307:e=>{e.exports=JSON.parse('{"url":"redocusaurus/peridio-device-api.yaml","themeId":"theme-redoc","isSpecFile":true,"spec":{"openapi":"3.1.0","info":{"license":{"name":"Peridio","url":"https://github.com/peridio/parasola/blob/main/LICENSE"},"description":"The Peridio Device API is the primary way for devices to interact with Peridio.\\n\\n# Global Headers\\n\\nThe following headers may be supplied when requesting any endpoint.\\n\\n|key|value|description|\\n|-|-|-|\\n|peridio-release-prn|A release PRN.|See [release resolution](/platform/reference/releases#release-resolution). Informs Peridio of what release is currently active on the device. The preference should always be to supply this header with a valid value. If you supply this header, you should not supply the `peridio-release-version` header.|\\n|peridio-release-version|A release version.|See [release resolution](/platform/reference/releases#release-resolution). This header is only used in exceptional cases when you don\'t have a PRN to supply via `peridio-release-prn`. In that case, you may supply this header and you should not supply the `peridio-release-prn` header.|\\n|x-peridio-architecture|A firmware architecture.|Legacy. See [deployment eligibility](/platform/reference/deployments#deployment-eligibility). The architecture of the device\'s currently active firmware. When supplying any `x-peridio` header, you should supply all `x-peridio` headers.|\\n|x-peridio-platform|A firmware platform.|Legacy. See [deployment eligibility](/platform/reference/deployments#deployment-eligibility). The platform of the device\'s currently active firmware. When supplying any `x-peridio` header, you should supply all `x-peridio` headers.|\\n|x-peridio-product|A firmware product.|Legacy. See [deployment eligibility](/platform/reference/deployments#deployment-eligibility). The product of the device\'s currently active firmware. When supplying any `x-peridio` header, you should supply all `x-peridio` headers.|\\n|x-peridio-uuid|A firmware UUID.|Legacy. See [deployment eligibility](/platform/reference/deployments#deployment-eligibility). The UUID of the device\'s currently active firmware. When supplying any `x-peridio` header, you should supply all `x-peridio` headers.|\\n|x-peridio-version|A firmware version.|Legacy. See [deployment eligibility](/platform/reference/deployments#deployment-eligibility). The version of the device\'s currently active firmware. When supplying any `x-peridio` header, you should supply all `x-peridio` headers.|\\n","title":"Peridio Device API","version":"1.0.0"},"servers":[{"url":"https://device.cremini.peridio.com"}],"security":[{"MutualTLS":[]}],"tags":[{"name":"Devices","id":"devices"},{"name":"Tunnels","id":"tunnels","description":"<div style=\\"16px; border-left: 5px solid purple; background: lavender; border-radius: 5px; width: fit-content; padding: 16px;\\">\\n  <h5 style=\\"color: black !important; text-transform: uppercase; display: flex; align-items: center;\\"><svg style=\\"margin-right: 0.4em;\\" width=\\"19.6px\\" xmlns=\\"http://www.w3.org/2000/svg\\" fill=\\"none\\" viewBox=\\"0 0 24 24\\" stroke-width=\\"1.5\\" stroke=\\"currentColor\\"><path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" d=\\"M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5\\" /></svg>Labs</h5>\\n  <p>This functionality is only available to select organizations participating in the Peridio closed beta program.</p>\\n  <p>Subject to breaking changes prior to general availability.</p>\\n  <p>For more information, see <a style=\\"color: #1C1E21; text-decoration: underline;\\" href=\\"/platform/introduction#labs\\">content labels</a>.</p>\\n</div>\\n"}],"x-tagGroups":[{"name":"Endpoints","tags":["Devices","Tunnels"]}],"paths":{"/device/me":{"get":{"operationId":"get-device-me","summary":"get device me","description":"Returns information about the device identified by the request\'s authentication.\\n\\n### Expandable\\n\\nThis endpoint has an expandable response. See [expanding responses](/admin-api#section/Expanding-Responses).\\n","tags":["Devices"],"parameters":[{"in":"header","name":"peridio-release-prn","schema":{"description":"See [global headers](#global-headers).","examples":["prn:1:a1ed0c4e-f222-4bb3-89dc-48320018875d:release:e4bf3021-b8d7-42d5-a1bd-52121427ebd0"],"$ref":"#/components/schemas/prn"},"required":false},{"in":"header","name":"peridio-release-version","schema":{"description":"See [global headers](#global-headers).","$ref":"#/components/schemas/release-version"},"required":false},{"name":"expand","description":"See [expanding responses](https://docs.peridio.com/admin-api#section/Expanding-Responses).\\n\\n**Expandable Fields**\\n\\nFor more information on each field, reference the response.\\n\\n- `cohort`\\n","in":"query","required":false,"schema":{"type":"array","items":{"type":"string"}}}],"responses":{"200":{"description":"Ok.","content":{"application/json":{"schema":{"properties":{"data":{"type":"object","properties":{"cohort":{"$ref":"#/components/schemas/cohort","description":"Expand required. See [expanding responses](#section/Expanding-Responses).\\n\\nThe cohort the device belongs to.\\n"},"identifier":{"$ref":"#/components/schemas/device-identifier"},"quarantined":{"type":"boolean"}}}}}}}}}}},"/device/update":{"get":{"operationId":"get-device-update","summary":"get device update","description":"This functionality has been superceded by [get update](#devices/operation/get-update).\\n\\nReturns information regarding whether an update is available via a [deployment](/admin-api#deployments).\\n\\nIf an update is available, additional information describing the update is returned including a presigned URL to acquire the update.\\n","tags":["Devices"],"parameters":[{"in":"header","name":"x-peridio-uuid","schema":{"description":"See [global headers](#global-headers).","$ref":"#/components/schemas/firmware-uuid"},"required":true},{"in":"header","name":"peridio-release-prn","schema":{"description":"See [global headers](#global-headers).","examples":["prn:1:a1ed0c4e-f222-4bb3-89dc-48320018875d:release:e4bf3021-b8d7-42d5-a1bd-52121427ebd0"],"$ref":"#/components/schemas/prn"},"required":false},{"in":"header","name":"peridio-release-version","schema":{"description":"See [global headers](#global-headers).","$ref":"#/components/schemas/release-version"},"required":false},{"name":"preflight","in":"query","required":false,"schema":{"type":"boolean","default":false,"description":"**When `false`**\\n\\nThe request will count towards update attempts. `firmware_url` in the response will be set to a presigned URL.\\n\\n**When `true`**\\n\\nThe request will not count towards update attempts. `firmware_url` in the response will be `null`.\\n\\nFor example, one may use `true` to check if an update is available when you don\'t yet intend to consume the update so that a device does not rack up a number of incomplete updates and eventually get quarantined (pending the failure configuration set on the relevant deployment).\\n"}}],"responses":{"200":{"description":"Ok.","content":{"application/json":{"schema":{"properties":{"data":{"type":"object","properties":{"update_available":{"description":"An update may not be available if:\\n\\n  1. There is no applicable deployment, i.e., the device is up to date.\\n  2. The device or an applicable deployment is quarantined.\\n","type":"boolean"},"firmware_url":{"description":"A presigned HTTPS URL. Expires in 24 hours.","oneOf":[{"type":"null"},{"type":"string"}]},"firmware_meta":{"oneOf":[{"type":"null"},{"$ref":"#/components/schemas/firmware-metadata"}]},"deployment_id":{"description":"This is a vestigial field whose value is always `null`.","type":"null"}}}}}}}}}}},"/update":{"get":{"operationId":"get-update","summary":"get update","description":"Returns information regarding whether an update is available via a [release](/admin-api#releases).\\n\\n### Expandable\\n\\nThis endpoint has an expandable response. By default, only the `status` field is returned. See [expanding responses](/admin-api#section/Expanding-Responses).\\n","tags":["Devices"],"parameters":[{"in":"header","name":"peridio-release-prn","schema":{"description":"See [global headers](#global-headers).","examples":["prn:1:a1ed0c4e-f222-4bb3-89dc-48320018875d:release:e4bf3021-b8d7-42d5-a1bd-52121427ebd0"],"$ref":"#/components/schemas/prn"},"required":false},{"in":"header","name":"peridio-release-version","schema":{"description":"See [global headers](#global-headers).","$ref":"#/components/schemas/release-version"},"required":false},{"name":"expand","description":"See [expanding responses](https://docs.peridio.com/admin-api#section/Expanding-Responses).\\n\\n**Expandable Fields**\\n\\nFor more information on each field, reference the response.\\n\\n- `bundle`\\n- `release`\\n- `manifest`\\n  - `artifact`\\n  - `artifact_version`\\n  - `binary_prn`\\n  - `custom_metadata`\\n  - `hash`\\n  - `signatures`\\n  - `size`\\n  - `target`\\n  - `url`\\n","in":"query","required":false,"schema":{"type":"array","items":{"type":"string"}}}],"responses":{"200":{"description":"Ok.","content":{"application/json":{"schema":{"properties":{"status":{"enum":["update","no_update","device_quarantine"]},"release":{"$ref":"#/components/schemas/release","description":"Expand required. See [expanding responses](#section/Expanding-Responses).\\n\\nThe target release with respect to [release resolution](/platform/reference/releases#release-resolution).\\n"},"bundle":{"$ref":"#/components/schemas/bundle","description":"Expand required. See [expanding responses](#section/Expanding-Responses).\\n\\nThe bundle associated with `release`.\\n"},"custom_metadata":{"$ref":"#/components/schemas/custom-metadata","description":"Expand required. See [expanding responses](#section/Expanding-Responses).\\n\\nA JSON object that device\'s may use to inform decisions regarding last mile application of the binary including: downloading, persisting, installing, and custom use cases.\\n\\nMax size is 1,000,000 bytes (1 MB).\\n"},"manifest":{"description":"Expand required. See [expanding responses](#section/Expanding-Responses).\\n\\nThe manifest associated with `bundle`. Includes metadata about the binaries available to download, including a presigned download url.\\n","type":"array","items":{"type":"object","properties":{"artifact":{"$ref":"#/components/schemas/artifact","description":"Expand required. See [expanding responses](#section/Expanding-Responses).\\n\\nThe artifact associated with `artifact_version`.\\n"},"artifact_version":{"$ref":"#/components/schemas/artifact-version","description":"Expand required. See [expanding responses](#section/Expanding-Responses).\\n\\nThe artifact version associated with `binary_prn`.\\n"},"binary_prn":{"$ref":"#/components/schemas/prn"},"hash":{"type":"string"},"signatures":{"$ref":"#/components/schemas/array-of-signatures"},"size":{"$ref":"#/components/schemas/binary-size"},"target":{"$ref":"#/components/schemas/target-triplet"},"url":{"type":"string"}}}}}}}}}}}},"/tunnels":{"get":{"operationId":"list-tunnels","summary":"List tunnels","description":"This only returns `:requested` and `:open` tunnels.\\n\\n<a style=\\"display: flex; margin-bottom: 16px; background: purple; color: white; border-radius: 5px; padding: 2px 4px; width: fit-content;\\" href=\\"/device-api#tunnels\\">\\n  <svg style=\\"margin-right: 0.4em;\\" width=\\"19.6px\\" xmlns=\\"http://www.w3.org/2000/svg\\" fill=\\"none\\" viewBox=\\"0 0 24 24\\" stroke-width=\\"1.5\\" stroke=\\"currentColor\\" class=\\"w-6 h-6\\"> <path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" d=\\"M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5\\" /></svg>Labs\\n</a>\\n\\nFor list options, we only support pagination params.\\n","tags":["Tunnels"],"parameters":[{"$ref":"#/components/parameters/page"}],"responses":{"200":{"description":"Ok.","content":{"application/json":{"schema":{"properties":{"tunnels":{"$ref":"#/components/schemas/array-of-tunnels"},"next_page":{"$ref":"#/components/schemas/next-page"}}}}}}}}},"/tunnels/configure":{"post":{"operationId":"configure-a-tunnel","summary":"Configure a tunnel","description":"Configures a tunnel with device networking data.\\n\\n<a style=\\"display: flex; margin-bottom: 16px; background: purple; color: white; border-radius: 5px; padding: 2px 4px; width: fit-content;\\" href=\\"/device-api#tunnels\\">\\n  <svg style=\\"margin-right: 0.4em;\\" width=\\"19.6px\\" xmlns=\\"http://www.w3.org/2000/svg\\" fill=\\"none\\" viewBox=\\"0 0 24 24\\" stroke-width=\\"1.5\\" stroke=\\"currentColor\\" class=\\"w-6 h-6\\"> <path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" d=\\"M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5\\" /></svg>Labs\\n</a>\\n\\nIf successful, the tunnel\'s state will be `open`. Only tunnels with a state of `requested` can be configured.\\n","tags":["Tunnels"],"requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"tunnel_prn":{"$ref":"#/components/schemas/tunnel-prn"},"cidr_blocks":{"$ref":"#/components/schemas/cidrs","description":"A set of CIDR blocks that the device has available for use with remote access. The device\'s wireguard peer IP as well as wireguard interface IP will be choosen from this set so it must contain at least two distinct IPs.\\n"},"port_ranges":{"$ref":"#/components/schemas/port-ranges","examples":[["45000-46000","47000-48000"]],"description":"A set of port ranges that the device has available for use with remote access. The device can use this to constrain the pool of ports from which Peridio will choose the wireguard server listen port, that is, the port on which the server is listening for wireguard UDP traffic.\\n"},"device_proxy_port":{"type":"number","description":"The port on which the device is listening for wireguard UDP traffic.","examples":[53000]},"device_public_key":{"type":"string","examples":["Y4nCIXdpb+f3WgPi0377FDPCAfP+st82s98lTRepHEk="],"description":"The device\'s public key for wireguard."}},"required":["cidr_blocks","device_proxy_port","device_public_key","port_ranges","tunnel_prn"]}}}},"responses":{"200":{"description":"Ok.","content":{"application/json":{"schema":{"properties":{"data":{"allOf":[{"$ref":"#/components/schemas/tunnel"},{"type":"object","properties":{"state":{"examples":["open"]}}}]}}}}}}}}},"/tunnels/{tunnel_prn}":{"patch":{"operationId":"update-a-tunnel","summary":"Update a tunnel","description":"Update a tunnel currently only allows changing a tunnel to a closed state.\\n\\n<a style=\\"display: flex; margin-bottom: 16px; background: purple; color: white; border-radius: 5px; padding: 2px 4px; width: fit-content;\\" href=\\"/device-api#tunnels\\">\\n  <svg style=\\"margin-right: 0.4em;\\" width=\\"19.6px\\" xmlns=\\"http://www.w3.org/2000/svg\\" fill=\\"none\\" viewBox=\\"0 0 24 24\\" stroke-width=\\"1.5\\" stroke=\\"currentColor\\" class=\\"w-6 h-6\\"> <path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" d=\\"M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5\\" /></svg>Labs\\n</a>\\n","tags":["Tunnels"],"parameters":[{"name":"tunnel_prn","in":"path","required":true,"schema":{"$ref":"#/components/schemas/tunnel-prn"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"state":{"type":"string","examples":["closed"],"description":"The state we want the tunnel to be in. Only accepts \\"closed\\"."}}}}}},"responses":{"200":{"description":"Ok.","content":{"application/json":{"schema":{"properties":{"data":{"allOf":[{"$ref":"#/components/schemas/tunnel"},{"type":"object","properties":{"state":{"examples":["closed"]}}}]}}}}}}}}}},"components":{"securitySchemes":{"MutualTLS":{"type":"mutualTLS","description":"The provided client certificate must be signed by a [CA certificate](https://docs.peridio.com/reference/ca-certificates) registered with Peridio."}},"schemas":{"port-ranges":{"type":"array","items":{"type":"string"}},"prn":{"description":"[Peridio Resource Names](/platform/reference/peridio-resource-names) (PRNs) uniquely identify Peridio resources.\\n","type":"string"},"release-version":{"description":"The release version. If provided, it has to be a valid [version](https://hexdocs.pm/elixir/Version.html#content). Used in [dynamic release resolution](/platform/reference/releases#dynamic-resolution).","example":"1.0.0","type":"string"},"cohort-description":{"type":"string","minLength":1,"maxLength":256},"cohort-name":{"type":"string","minLength":1,"maxLength":128},"cohort":{"type":"object","properties":{"description":{"oneOf":[{"$ref":"#/components/schemas/cohort-description"},{"type":"null"}]},"name":{"$ref":"#/components/schemas/cohort-name"},"organization_prn":{"$ref":"#/components/schemas/prn"},"prn":{"$ref":"#/components/schemas/prn"},"inserted_at":{"type":"string","format":"date-time"},"product_prn":{"$ref":"#/components/schemas/prn"},"updated_at":{"type":"string","format":"date-time"}}},"device-identifier":{"description":"Uniquely identifies a device within an organization.","type":"string","example":"sn1234"},"firmware-uuid":{"type":"string","format":"uuid","description":"Uniquely identifies a firmware."},"product-architecture":{"type":"string"},"firmware-author":{"type":"string"},"platform":{"type":"string"},"product-name":{"type":"string","description":"Uniquely identifies a product within an organization."},"vcs-identifier":{"example":"d670460b4b4aece5915caf5c68d12f560a9fe3e4","type":"string"},"version":{"description":"Reference https://hexdocs.pm/elixir/Version.html#module-versions.","example":"1.0.0-alpha.3","type":"string"},"firmware-metadata":{"type":"object","properties":{"architecture":{"$ref":"#/components/schemas/product-architecture"},"author":{"oneOf":[{"type":"null"},{"$ref":"#/components/schemas/firmware-author"}]},"description":{"oneOf":[{"type":"null"},{"type":"string"}]},"fwup_version":{"oneOf":[{"type":"null"},{"type":"string"}],"description":"The version of FWUP bundled within the firmware."},"misc":{"oneOf":[{"type":"null"},{"type":"string"}]},"platform":{"$ref":"#/components/schemas/platform"},"product":{"$ref":"#/components/schemas/product-name"},"uuid":{"$ref":"#/components/schemas/firmware-uuid"},"vcs_identifier":{"oneOf":[{"type":"null"},{"$ref":"#/components/schemas/vcs-identifier"}]},"version":{"$ref":"#/components/schemas/version"}}},"release-description":{"default":null,"oneOf":[{"type":"string"},{"type":"null"}]},"release-disabled":{"description":"If a release is marked as disabled it cannot be resolved during release resolution.\\n","type":"boolean"},"release-name":{"type":"string"},"release-phase-mode":{"description":"Describes if this release is using tag or numeric based phasing. tags or phase value for resolution\\n\\n- `tags` - Phases rollout of the release according to the `phase_tags` field.\\n- `numeric` - Phases rollout of the release according to the `phase_value` field.\\n","type":"string","enum":["tags","numeric"]},"device-tag":{"type":"string"},"array-of-device-tags":{"type":"array","items":{"$ref":"#/components/schemas/device-tag"}},"release-phase-type":{"type":"string","enum":["static","percent"]},"release-phase-value":{"description":"Limits by percent or static count the number of devices that are allowed to update to this release.\\n\\n**Required if:** `phase_mode` is `numeric`.\\n\\nWhen `phase_mode` is `numeric`, this field only allows devices to update to this release if fewer than a certain number have already updated.\\n\\n- Decimals and integers in the range [0, 1] are treated as percents, e.g., to allow 20% of the cohort to update, you would specifiy a `phase_value` of `0.2`.\\n- Integers in the range [2, 1,000,000,000] are treated as absolute device counts, e.g., to allow 40 of the cohort\'s devices to update, you would specifiy a `phase_value` of `40`.\\n\\n**NOTE:** `1` is a special value in that it represents `100%` and  once a release is updated to this value, the phase value can never be changed again.\\n\\nA release with a `phase_value` not equal to `1` is considered \\"phased\\".\\n\\n**NOTE:** There can only ever be a single release that is phased at a time within a cohort. Because of this, if there is already a phased release, it must be \\"completed\\" by setting the phase to `1`.\\n","type":"number","minimum":0,"maximum":1000000000},"release-required":{"type":"boolean","description":"If `true`, this release must be passed through if encountered by a device.\\n\\nIf `false`, this release will be skipped over when possible (if there are releases configured after it).\\n"},"release-schedule-availability":{"type":"string","format":"date-time","description":"Before this date-time, the release will not be resolvable when checking for updates. You may use this to schedule a future release."},"release-schedule-complete":{"type":"boolean"},"release-version-requirement":{"description":"The release version requirement. If provided, it has to be a valid [requirement](https://hexdocs.pm/elixir/Version.html#module-requirements). Used in [dynamic release resolution](/platform/reference/releases#dynamic-resolution).","example":"== 1.0.0","type":"string"},"release":{"type":"object","properties":{"bundle_prn":{"$ref":"#/components/schemas/prn"},"cohort_prn":{"$ref":"#/components/schemas/prn"},"description":{"$ref":"#/components/schemas/release-description"},"disabled":{"$ref":"#/components/schemas/release-disabled"},"name":{"$ref":"#/components/schemas/release-name"},"next_release_prn":{"oneOf":[{"type":"null"},{"$ref":"#/components/schemas/prn"}]},"organization_prn":{"$ref":"#/components/schemas/prn"},"phase_mode":{"$ref":"#/components/schemas/release-phase-mode"},"phase_tags":{"$ref":"#/components/schemas/array-of-device-tags"},"phase_type":{"$ref":"#/components/schemas/release-phase-type"},"phase_value":{"$ref":"#/components/schemas/release-phase-value"},"required":{"$ref":"#/components/schemas/release-required"},"schedule_date":{"$ref":"#/components/schemas/release-schedule-availability"},"schedule_complete":{"$ref":"#/components/schemas/release-schedule-complete"},"prn":{"$ref":"#/components/schemas/prn"},"inserted_at":{"type":"string","format":"date-time"},"updated_at":{"type":"string","format":"date-time"},"version":{"$ref":"#/components/schemas/release-version"},"version_requirement":{"$ref":"#/components/schemas/release-version-requirement"}}},"artifact-version-item":{"type":"object","properties":{"prn":{"$ref":"#/components/schemas/prn"},"index":{"type":"integer"}}},"array-of-ordered-artifact-versions":{"type":"array","items":{"$ref":"#/components/schemas/artifact-version-item"}},"bundle-name":{"oneOf":[{"type":"null"},{"type":"string","minLength":1,"maxLength":128}]},"bundle":{"type":"object","properties":{"artifact_versions":{"$ref":"#/components/schemas/array-of-ordered-artifact-versions"},"name":{"$ref":"#/components/schemas/bundle-name"},"organization_prn":{"$ref":"#/components/schemas/prn"},"prn":{"$ref":"#/components/schemas/prn"},"inserted_at":{"type":"string","format":"date-time"},"updated_at":{"type":"string","format":"date-time"}}},"custom-metadata":{"type":"object","maxLength":1000000},"artifact-description":{"type":"string","minLength":1,"maxLength":256},"artifact-name":{"type":"string","minLength":1,"maxLength":128},"artifact":{"type":"object","properties":{"custom_metadata":{"oneOf":[{"$ref":"#/components/schemas/custom-metadata"},{"type":"null"}]},"description":{"oneOf":[{"$ref":"#/components/schemas/artifact-description"},{"type":"null"}]},"inserted_at":{"type":"string","format":"date-time"},"name":{"$ref":"#/components/schemas/artifact-name"},"organization_prn":{"$ref":"#/components/schemas/prn"},"prn":{"$ref":"#/components/schemas/prn"},"updated_at":{"type":"string","format":"date-time"}}},"artifact-version-description":{"type":"string","minLength":1,"maxLength":256},"artifact-version-version":{"type":"string","minLength":1,"maxLength":128},"artifact-version":{"type":"object","properties":{"artifact_prn":{"$ref":"#/components/schemas/prn"},"custom_metadata":{"oneOf":[{"$ref":"#/components/schemas/custom-metadata"},{"type":"null"}]},"description":{"oneOf":[{"$ref":"#/components/schemas/artifact-version-description"},{"type":"null"}]},"inserted_at":{"type":"string","format":"date-time"},"organization_prn":{"$ref":"#/components/schemas/prn"},"prn":{"$ref":"#/components/schemas/prn"},"version":{"$ref":"#/components/schemas/artifact-version-version"},"updated_at":{"type":"string","format":"date-time"}}},"binary-signature-signature":{"type":"string","description":"The uppercase hex encoding of the ed25519 signature of the base64 encoding of the SHA256 hash of the binary.\\n"},"signing-key-value-pem":{"description":"PEM encoded version of the signing key value","type":"string"},"signing-signature":{"type":"object","properties":{"signature":{"$ref":"#/components/schemas/binary-signature-signature"},"signing_key_prn":{"$ref":"#/components/schemas/prn"},"public_value":{"$ref":"#/components/schemas/signing-key-value-pem"}}},"array-of-signatures":{"default":null,"oneOf":[{"type":"null"},{"type":"array","items":{"$ref":"#/components/schemas/signing-signature"}}]},"binary-size":{"description":"The expected size in bytes of the binary.","example":1800000,"maximum":53687091200000,"minimum":0,"type":"integer"},"target-triplet":{"type":"string","minLength":1,"maxLength":128,"description":"A target triplet string that specifies compaitibility between binaries and devices.\\n","example":"arm-linux-androideabi"},"cidrs":{"type":"array","examples":[["10.0.0.1/16","172.154.0.1/16"]],"items":{"type":"string"}},"device-tunnel-port":{"type":"number","examples":[22],"description":"The port on which the device is listening for service traffic (e.g. ssh)."},"device-prn":{"allOf":[{"$ref":"#/components/schemas/prn"},{"example":"prn:1:be4d30b4-de6b-47cd-85ea-a75e23fd63ef:device:b3f1f699-3bc8-4c77-bda2-b974595d5e3f"}]},"tunnel-prn":{"allOf":[{"$ref":"#/components/schemas/prn"},{"example":"prn:1:be4d30b4-de6b-47cd-85ea-a75e23fd63ef:tunnel:b3f1f699-3bc8-4c77-bda2-b974595d5e3f"}]},"tunnel":{"type":"object","properties":{"cidr_block_allowlist":{"$ref":"#/components/schemas/cidrs"},"device_proxy_ip_address":{"type":"string","examples":["10.0.1.1"],"description":"The wireguard interface IP address for the device."},"device_proxy_port":{"type":"number","examples":[47539],"description":"The port on which the device is listening for wireguard UDP traffic."},"device_public_key":{"type":"string","description":"The device\'s public key for wireguard.","examples":["Y4nCIXdpb+f3WgPi0377FDPCAfP+st82s98lTRepHEk="]},"device_tunnel_port":{"$ref":"#/components/schemas/device-tunnel-port"},"server_proxy_ip_address":{"type":"string","examples":["10.0.0.1"],"description":"The wireguard peer IP address for the Peridio proxy server."},"server_proxy_port":{"type":"number","examples":[49293],"description":"The port on which the server is listening for wireguard UDP traffic."},"server_public_key":{"type":"string","description":"The Peridio proxy server public key for wireguard.","examples":["2+h9vwIwg/1zTW9XLFzUmiTwCRRq7mzLgDnZfWEislY="]},"server_tunnel_ip_address":{"type":"string","examples":["3.82.23.99"],"description":"The IP address of the Peridio proxy server through which traffic will be routed. Both the device and the accessor will use this IP address."},"server_tunnel_port":{"type":"number","examples":[47532],"description":"The port of the Peridio proxy server through which traffic will be routed."},"expires_at":{"type":"string","format":"date-time","description":"The point in time at which the tunnel\'s TTL will expire and the tunnel will automatically move to the `closed` state."},"state":{"enum":["requested","open","closed"]},"device_prn":{"$ref":"#/components/schemas/device-prn"},"organization_prn":{"$ref":"#/components/schemas/prn"},"prn":{"$ref":"#/components/schemas/tunnel-prn"},"inserted_at":{"type":"string","format":"date-time"},"updated_at":{"type":"string","format":"date-time"}}},"array-of-tunnels":{"type":"array","items":{"$ref":"#/components/schemas/tunnel"}},"next-page":{"type":"string"}},"parameters":{"page":{"in":"query","name":"page","description":"A cursor for pagination across multiple pages of results. Don\'t include this parameter on\\nthe first call. Use the `next_page` value returned in a previous response to request\\nsubsequent results.\\n","schema":{"type":"string"}}}}}}')}}]);