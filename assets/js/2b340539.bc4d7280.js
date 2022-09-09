"use strict";(self.webpackChunkparasola=self.webpackChunkparasola||[]).push([[290],{6620:e=>{e.exports=JSON.parse('{"url":"redocusaurus/device.yaml","themeId":"theme-redoc","isSpecFile":true,"spec":{"openapi":"3.1.0","info":{"description":"The Peridio Device API facilitates device-based operations within Peridio v1 (Cremini).","title":"Peridio Device API","version":"1.0.0"},"servers":[{"url":"https://device.cremini.peridio.com"}],"security":[{"Mutual TLS":[]}],"x-tagGroups":[{"name":"Endpoints","tags":["Devices"]}],"paths":{"/device/me":{"get":{"summary":"get device me","tags":["Devices"],"responses":{"200":{"description":"Ok.","content":{"application/json":{"schema":{"properties":{"data":{"type":"object","properties":{"identifier":{"$ref":"#/components/schemas/device-identifier"}}}}}}}}}}},"/device/update":{"get":{"summary":"get device update","tags":["Devices"],"responses":{"200":{"description":"Ok.","content":{"application/json":{"schema":{"properties":{"data":{"type":"object","properties":{"update_available":{"type":"boolean"},"firmware_url":{"oneOf":[{"type":"null"},{"type":"string"}]},"firmware_meta":{"oneOf":[{"type":"null"},{"$ref":"#/components/schemas/firmware-metadata"}]},"deployment_id":{"oneOf":[{"type":"null"},{"type":"integer"}]}}}}}}}}}}}},"components":{"securitySchemes":{"Mutual TLS":{"type":"mutualTLS","description":"The provided client certificate must be signed by a CA certificate registered with the [Peridio Admin API](https://docs.peridio.com/cremini/admin-api#tag/CA-Certificates)."}},"schemas":{"device-identifier":{"type":"string"},"product-architecture":{"type":"string"},"firmware-author":{"type":"string"},"platform":{"type":"string"},"product-name":{"type":"string"},"firmware-uuid":{"type":"string","format":"uuid"},"vcs-identifier":{"example":"d670460b4b4aece5915caf5c68d12f560a9fe3e4","type":"string"},"version":{"description":"Reference https://hexdocs.pm/elixir/Version.html#module-versions.","example":"1.0.0-alpha.3","type":"string"},"firmware-metadata":{"type":"object","properties":{"architecture":{"$ref":"#/components/schemas/product-architecture"},"author":{"oneOf":[{"type":"null"},{"$ref":"#/components/schemas/firmware-author"}]},"description":{"oneOf":[{"type":"null"},{"type":"string"}]},"fwup_version":{"oneOf":[{"type":"null"},{"type":"string"}]},"misc":{"oneOf":[{"type":"null"},{"type":"string"}]},"platform":{"$ref":"#/components/schemas/platform"},"product":{"$ref":"#/components/schemas/product-name"},"uuid":{"$ref":"#/components/schemas/firmware-uuid"},"vcs_identifier":{"oneOf":[{"type":"null"},{"$ref":"#/components/schemas/vcs-identifier"}]},"version":{"$ref":"#/components/schemas/version"}}}}}}}')}}]);