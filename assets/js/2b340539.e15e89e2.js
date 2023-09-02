"use strict";(self.webpackChunkparasola=self.webpackChunkparasola||[]).push([[3290],{6620:e=>{e.exports=JSON.parse('{"url":"redocusaurus/device.yaml","themeId":"theme-redoc","isSpecFile":true,"spec":{"openapi":"3.1.0","info":{"license":{"name":"Peridio","url":"https://github.com/peridio/parasola/blob/main/LICENSE"},"description":"The Peridio Device API facilitates device-based operations within Peridio v1 (Cremini).","title":"Peridio Device API","version":"1.0.0"},"servers":[{"url":"https://device.cremini.peridio.com"}],"security":[{"MutualTLS":[]}],"tags":[{"name":"Devices","id":"devices"}],"x-tagGroups":[{"name":"Endpoints","tags":["Devices"]}],"paths":{"/device/me":{"get":{"operationId":"get-device-me","summary":"get device me","description":"Returns information about the device identified by the request\'s authentication.","tags":["Devices"],"parameters":[{"name":"expand","description":"See [expanding responses](https://docs.peridio.com/admin-api#section/Expanding-Responses).\\n\\n|Field|Description|\\n|-|-|\\n|`cohort`|Includes the cohort information associated to the device.|\\n","in":"query","required":false,"schema":{"type":"array","items":{"type":"string"}}}],"responses":{"200":{"description":"Ok.","content":{"application/json":{"schema":{"properties":{"data":{"type":"object","properties":{"identifier":{"$ref":"#/components/schemas/device-identifier"},"quarantined":{"type":"boolean"}}}}}}}}}}},"/device/update":{"get":{"operationId":"get-device-update","summary":"get device update","description":"This functionality has been superceded by [get update](#devices/operation/get-update).\\n\\nReturns information regarding whether an update is available via a [deployment](/admin-api#deployments).\\n\\nIf an update is available, additional information describing the update is returned including a presigned URL to acquire the update.\\n","tags":["Devices"],"parameters":[{"in":"header","name":"x-peridio-uuid","schema":{"description":"The UUID of the currently active firmware on the device.","$ref":"#/components/schemas/firmware-uuid"},"required":true},{"name":"preflight","in":"query","required":false,"schema":{"type":"boolean","default":false,"description":"**When `false`**\\n\\nThe request will count towards update attempts. `firmware_url` in the response will be set to a presigned URL.\\n\\n**When `true`**\\n\\nThe request will not count towards update attempts. `firmware_url` in the response will be `null`.\\n\\nFor example, one may use `true` to check if an update is available when you don\'t yet intend to consume the update so that a device does not rack up a number of incomplete updates and eventually get quarantined (pending the failure configuration set on the relevant deployment).\\n"}}],"responses":{"200":{"description":"Ok.","content":{"application/json":{"schema":{"properties":{"data":{"type":"object","properties":{"update_available":{"description":"An update may not be available if:\\n\\n  1. There is no applicable deployment, i.e., the device is up to date.\\n  2. The device or an applicable deployment is quarantined.\\n","type":"boolean"},"firmware_url":{"description":"A presigned HTTPS URL. Expires in 24 hours.","oneOf":[{"type":"null"},{"type":"string"}]},"firmware_meta":{"oneOf":[{"type":"null"},{"$ref":"#/components/schemas/firmware-metadata"}]},"deployment_id":{"description":"Uniquely identifies a deployment.","oneOf":[{"type":"null"},{"type":"integer"}]}}}}}}}}}}},"/update":{"get":{"operationId":"get-update","summary":"get update","description":"Returns information regarding whether an update is available via a [release](/admin-api#releases).\\n\\nBy default, only the `status` field is returned, but you can use the `expand` query parameter to obtain the other fields.\\n","tags":["Devices"],"parameters":[{"in":"header","name":"peridio-release-prn","schema":{"description":"The PRN of the currently active release on the device.","$ref":"#/components/schemas/prn"},"required":true},{"name":"expand","description":"See [expanding responses](https://docs.peridio.com/admin-api#section/Expanding-Responses).\\n\\n|Field|Description|\\n|-|-|\\n|`release`|Includes the target release.|\\n|`bundle`|Includes the target bundle, the bundle associated with the target release.|\\n|`manifest`|Includes the manifest including artifact, versions and the presigned url.|\\n|`manifest.artifact`|Includes the artifact for the binary.|\\n|`manifest.artifact_version`|Includes the artifact version for the binary.|\\n\\nIn addition to expanding records, you can expand individual fields; querying `manifest.url` will return only the `url` field inside the manifest array\'s items.\\n","in":"query","required":false,"schema":{"type":"array","items":{"type":"string"}}}],"responses":{"200":{"description":"Ok.","content":{"application/json":{"schema":{"properties":{"status":{"enum":["update","no_update","device_quarantine"]},"release":{"$ref":"#/components/schemas/release"},"bundle":{"$ref":"#/components/schemas/bundle"},"manifest":{"type":"array","items":{"type":"object","properties":{"artifact":{"$ref":"#/components/schemas/artifact"},"artifact_version":{"$ref":"#/components/schemas/artifact-version"},"binary_prn":{"$ref":"#/components/schemas/prn"},"hash":{"type":"string"},"url":{"type":"string"},"signatures":{"$ref":"#/components/schemas/array-of-signatures"}}}}}}}}}}}}},"components":{"securitySchemes":{"MutualTLS":{"type":"mutualTLS","description":"The provided client certificate must be signed by a [CA certificate](https://docs.peridio.com/reference/ca-certificates) registered with Peridio."}},"schemas":{"device-identifier":{"description":"Uniquely identifies a device within an organization.","type":"string"},"firmware-uuid":{"type":"string","format":"uuid","description":"Uniquely identifies a firmware."},"product-architecture":{"type":"string"},"firmware-author":{"type":"string"},"platform":{"type":"string"},"product-name":{"type":"string","description":"Uniquely identifies a product within an organization."},"vcs-identifier":{"example":"d670460b4b4aece5915caf5c68d12f560a9fe3e4","type":"string"},"version":{"description":"Reference https://hexdocs.pm/elixir/Version.html#module-versions.","example":"1.0.0-alpha.3","type":"string"},"firmware-metadata":{"type":"object","properties":{"architecture":{"$ref":"#/components/schemas/product-architecture"},"author":{"oneOf":[{"type":"null"},{"$ref":"#/components/schemas/firmware-author"}]},"description":{"oneOf":[{"type":"null"},{"type":"string"}]},"fwup_version":{"oneOf":[{"type":"null"},{"type":"string"}],"description":"The version of FWUP bundled within the firmware."},"misc":{"oneOf":[{"type":"null"},{"type":"string"}]},"platform":{"$ref":"#/components/schemas/platform"},"product":{"$ref":"#/components/schemas/product-name"},"uuid":{"$ref":"#/components/schemas/firmware-uuid"},"vcs_identifier":{"oneOf":[{"type":"null"},{"$ref":"#/components/schemas/vcs-identifier"}]},"version":{"$ref":"#/components/schemas/version"}}},"prn":{"description":"[Peridio Resource Names](/reference/peridio-resource-names) (PRNs) uniquely identify Peridio resources.\\n","type":"string"},"release-description":{"default":null,"oneOf":[{"type":"string"},{"type":"null"}]},"release-name":{"type":"string"},"release-phase-type":{"type":"string","enum":["static","percent"]},"release-phase-value":{"description":"The phase value controls the distribution of the update to your fleet.\\n\\nDecimals in `[0.0, 1.0]` are treated as percents, e.g., to allow 20% of the cohort to update, you would specifiy `0.2`.\\n\\nIntegers >= 2 are treated as absolute device counts, e.g., to allow 40 of the cohort\'s devices to update, you would specifiy `40`.\\n\\n**NOTE:** `1` is a special value in that it represents `100%` and  once a release is updated to this value, the phase value can never be changed again.\\n\\nA release with a `phase_value` not equal to `1` is considered \\"phased\\".\\n\\n**NOTE:** There can only ever be a single release that is phased at a time within a cohort. Because of this, if there is already a phased release, it must be \\"completed\\" by setting the phase to `1`.\\n","type":"number","minimum":0,"maximum":100},"release-required":{"type":"boolean","description":"If `true`, this release must be passed through if encountered by a device.\\n\\nIf `false`, this release will be skipped over when possible (if there are releases configured after it).\\n"},"release-schedule-availability":{"type":"string","format":"date-time","description":"Before this date-time, the release will not be resolvable when checking for updates. You may use this to schedule a future release."},"release-schedule-complete":{"type":"boolean"},"release":{"type":"object","properties":{"bundle_prn":{"$ref":"#/components/schemas/prn"},"cohort_prn":{"$ref":"#/components/schemas/prn"},"description":{"$ref":"#/components/schemas/release-description"},"name":{"$ref":"#/components/schemas/release-name"},"next_release_prn":{"oneOf":[{"type":"null"},{"$ref":"#/components/schemas/prn"}]},"organization_prn":{"$ref":"#/components/schemas/prn"},"phase_type":{"$ref":"#/components/schemas/release-phase-type"},"phase_value":{"$ref":"#/components/schemas/release-phase-value"},"required":{"$ref":"#/components/schemas/release-required"},"schedule_date":{"$ref":"#/components/schemas/release-schedule-availability"},"schedule_complete":{"$ref":"#/components/schemas/release-schedule-complete"},"prn":{"$ref":"#/components/schemas/prn"},"inserted_at":{"type":"string","format":"date-time"},"updated_at":{"type":"string","format":"date-time"}}},"artifact-version-item":{"type":"object","properties":{"prn":{"$ref":"#/components/schemas/prn"},"index":{"type":"integer"}}},"array-of-ordered-artifact-versions":{"type":"array","items":{"$ref":"#/components/schemas/artifact-version-item"}},"bundle":{"type":"object","properties":{"artifact_versions":{"$ref":"#/components/schemas/array-of-ordered-artifact-versions"},"organization_prn":{"$ref":"#/components/schemas/prn"},"prn":{"$ref":"#/components/schemas/prn"},"inserted_at":{"type":"string","format":"date-time"},"updated_at":{"type":"string","format":"date-time"}}},"artifact-description":{"type":"string","minLength":1,"maxLength":256},"artifact-name":{"type":"string","minLength":1,"maxLength":128},"artifact":{"type":"object","properties":{"description":{"oneOf":[{"$ref":"#/components/schemas/artifact-description"},{"type":"null"}]},"inserted_at":{"type":"string","format":"date-time"},"name":{"$ref":"#/components/schemas/artifact-name"},"organization_prn":{"$ref":"#/components/schemas/prn"},"prn":{"$ref":"#/components/schemas/prn"},"updated_at":{"type":"string","format":"date-time"}}},"artifact-version-description":{"type":"string","minLength":1,"maxLength":256},"artifact-version-version":{"type":"string","minLength":5,"maxLength":16},"artifact-version":{"type":"object","properties":{"artifact_prn":{"$ref":"#/components/schemas/prn"},"description":{"oneOf":[{"$ref":"#/components/schemas/artifact-version-description"},{"type":"null"}]},"inserted_at":{"type":"string","format":"date-time"},"organization_prn":{"$ref":"#/components/schemas/prn"},"prn":{"$ref":"#/components/schemas/prn"},"version":{"$ref":"#/components/schemas/artifact-version-version"},"updated_at":{"type":"string","format":"date-time"}}},"signing-signature":{"type":"object","properties":{"signature":{"type":"string","description":"An ed25519 signature  of the SHA256 hash of the binary represented as a 64-byte hex\\nencoded string.\\n"},"signing_key_prn":{"$ref":"#/components/schemas/prn"}}},"array-of-signatures":{"default":null,"oneOf":[{"type":"null"},{"type":"array","items":{"$ref":"#/components/schemas/signing-signature"}}]}}}}}')}}]);