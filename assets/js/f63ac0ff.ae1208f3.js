"use strict";(self.webpackChunkparasola=self.webpackChunkparasola||[]).push([[2161],{8675:e=>{e.exports=JSON.parse('{"url":"redocusaurus/admin.yaml","themeId":"theme-redoc","isSpecFile":true,"spec":{"openapi":"3.1.0","info":{"description":"The Peridio Admin API facilitates management of Peridio v1 (Cremini) resources.","title":"Peridio Admin API","version":"1.0.0"},"servers":[{"url":"https://api.cremini.peridio.com"}],"security":[{"api_key":[]}],"x-tagGroups":[{"name":"Endpoints","tags":["CA Certificates","Deployments","Device Certificates","Devices","Firmwares","Keys","Organization Users","Product Users","Products","Users"]}],"paths":{"/orgs/{organization_name}/ca_certificates":{"get":{"summary":"get ca certificates","tags":["CA Certificates"],"parameters":[{"name":"organization_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/organization-name"}}],"responses":{"200":{"description":"Ok.","content":{"application/json":{"schema":{"properties":{"data":{"$ref":"#/components/schemas/array-of-ca-certificates"}}}}}}}},"post":{"summary":"create ca certificate","tags":["CA Certificates"],"parameters":[{"name":"organization_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/organization-name"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"cert":{"description":"Base64 encoded CA certificate.","type":"string"},"verification_cert":{"description":"Base64 encoded verification certificate.\\nSee: [create verification codes](#tag/CA-Certificates/paths/~1orgs~1{organization_name}~1ca_certificates~1verification_codes/post)\\n","type":"string"},"description":{"type":"string"}},"required":["cert","verification_cert"]}}}},"responses":{"201":{"description":"Ok.","content":{"application/json":{"schema":{"properties":{"data":{"$ref":"#/components/schemas/ca-certificate"}}}}}}}}},"/orgs/{organization_name}/ca_certificates/{ca_certificate_serial}":{"delete":{"summary":"delete ca certificate","tags":["CA Certificates"],"parameters":[{"name":"organization_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/organization-name"}},{"name":"ca_certificate_serial","in":"path","required":true,"schema":{"$ref":"#/components/schemas/ca-certificate-serial"}}],"responses":{"204":{"description":"Ok."}}},"get":{"summary":"get ca certificate","tags":["CA Certificates"],"parameters":[{"name":"organization_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/organization-name"}},{"name":"ca_certificate_serial","in":"path","required":true,"schema":{"$ref":"#/components/schemas/ca-certificate-serial"}}],"responses":{"200":{"description":"Ok.","content":{"application/json":{"schema":{"properties":{"data":{"$ref":"#/components/schemas/ca-certificate"}}}}}}}}},"/orgs/{organization_name}/ca_certificates/verification_codes":{"post":{"summary":"create ca verification code","tags":["CA Certificates"],"parameters":[{"name":"organization_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/organization-name"}}],"responses":{"201":{"description":"Ok.","content":{"application/json":{"schema":{"properties":{"data":{"$ref":"#/components/schemas/ca-verification-code"}}}}}}}}},"/orgs/{organization_name}/keys":{"get":{"summary":"get keys","tags":["Keys"],"parameters":[{"name":"organization_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/organization-name"}}],"responses":{"200":{"description":"Ok.","content":{"application/json":{"schema":{"properties":{"data":{"$ref":"#/components/schemas/array-of-keys"}}}}}}}},"post":{"summary":"create key","tags":["Keys"],"parameters":[{"name":"organization_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/organization-name"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"key":{"$ref":"#/components/schemas/key-key"},"name":{"$ref":"#/components/schemas/key-name"}},"required":["key","name"]}}}},"responses":{"201":{"description":"Ok.","content":{"application/json":{"schema":{"properties":{"data":{"$ref":"#/components/schemas/key"}}}}}}}}},"/orgs/{organization_name}/keys/{key_name}":{"delete":{"summary":"delete key","tags":["Keys"],"parameters":[{"name":"organization_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/organization-name"}},{"name":"key_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/key-name"}}],"responses":{"204":{"description":"Ok."}}},"get":{"summary":"get key","tags":["Keys"],"parameters":[{"name":"organization_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/organization-name"}},{"name":"key_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/key-name"}}],"responses":{"200":{"description":"Ok.","content":{"application/json":{"schema":{"properties":{"data":{"$ref":"#/components/schemas/key"}}}}}}}}},"/orgs/{organization_name}/products":{"get":{"summary":"get products","tags":["Products"],"parameters":[{"name":"organization_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/organization-name"}}],"responses":{"200":{"description":"Ok.","content":{"application/json":{"schema":{"properties":{"data":{"$ref":"#/components/schemas/array-of-products"}}}}}}}},"post":{"summary":"create product","tags":["Products"],"parameters":[{"name":"organization_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/organization-name"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"delta_updatable":{"$ref":"#/components/schemas/delta-updatable","default":false},"name":{"$ref":"#/components/schemas/product-name"}},"required":["name"]}}}},"responses":{"201":{"description":"Ok.","content":{"application/json":{"schema":{"properties":{"data":{"$ref":"#/components/schemas/product"}}}}}}}}},"/orgs/{organization_name}/products/{product_name}":{"delete":{"summary":"delete product","tags":["Products"],"parameters":[{"name":"organization_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/organization-name"}},{"name":"product_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/product-name"}}],"responses":{"204":{"description":"Ok."}}},"get":{"summary":"get product","tags":["Products"],"parameters":[{"name":"organization_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/organization-name"}},{"name":"product_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/product-name"}}],"responses":{"200":{"description":"Ok.","content":{"application/json":{"schema":{"properties":{"data":{"$ref":"#/components/schemas/product"}}}}}}}},"put":{"summary":"update product","tags":["Products"],"parameters":[{"name":"organization_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/organization-name"}},{"name":"product_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/product-name"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"product":{"type":"object","properties":{"delta_updatable":{"$ref":"#/components/schemas/delta-updatable"},"name":{"$ref":"#/components/schemas/product-name"}}}},"required":["product"]}}}},"responses":{"200":{"description":"Ok.","content":{"application/json":{"schema":{"properties":{"data":{"$ref":"#/components/schemas/product"}}}}}}}}},"/orgs/{organization_name}/products/{product_name}/deployments":{"get":{"summary":"get deployments","tags":["Deployments"],"parameters":[{"name":"organization_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/organization-name"}},{"name":"product_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/product-name"}}],"responses":{"200":{"description":"Ok.","content":{"application/json":{"schema":{"properties":{"data":{"$ref":"#/components/schemas/array-of-deployments"}}}}}}}},"post":{"summary":"create deployment","tags":["Deployments"],"parameters":[{"name":"organization_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/organization-name"}},{"name":"product_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/product-name"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"conditions":{"$ref":"#/components/schemas/deployment-conditions"},"firmware":{"$ref":"#/components/schemas/firmware-uuid"},"is_active":{"description":"Must be `false`.","$ref":"#/components/schemas/deployment-is-active"},"name":{"$ref":"#/components/schemas/deployment-name"}},"required":["conditions","firmware","is_active","name"]}}}},"responses":{"201":{"description":"Ok.","content":{"application/json":{"schema":{"properties":{"data":{"$ref":"#/components/schemas/deployment"}}}}}}}}},"/orgs/{organization_name}/products/{product_name}/deployments/{deployment_name}":{"delete":{"summary":"delete deployment","tags":["Deployments"],"parameters":[{"name":"organization_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/organization-name"}},{"name":"product_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/product-name"}},{"name":"deployment_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/deployment-name"}}],"responses":{"204":{"description":"Ok."}}},"get":{"summary":"get deployment","tags":["Deployments"],"parameters":[{"name":"organization_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/organization-name"}},{"name":"product_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/product-name"}},{"name":"deployment_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/deployment-name"}}],"responses":{"200":{"description":"Ok.","content":{"application/json":{"schema":{"properties":{"data":{"$ref":"#/components/schemas/deployment"}}}}}}}},"put":{"summary":"update deployment","tags":["Deployments"],"parameters":[{"name":"organization_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/organization-name"}},{"name":"product_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/product-name"}},{"name":"deployment_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/deployment-name"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"deployment":{"type":"object","properties":{"name":{"$ref":"#/components/schemas/deployment-name"},"conditions":{"$ref":"#/components/schemas/deployment-conditions"},"firmware":{"$ref":"#/components/schemas/firmware-uuid"},"is_active":{"$ref":"#/components/schemas/deployment-is-active"}}}},"required":["deployment"]}}}},"responses":{"200":{"description":"Ok.","content":{"application/json":{"schema":{"properties":{"data":{"$ref":"#/components/schemas/deployment"}}}}}}}}},"/orgs/{organization_name}/products/{product_name}/devices":{"get":{"summary":"get devices","tags":["Devices"],"parameters":[{"name":"organization_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/organization-name"}},{"name":"product_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/product-name"}}],"responses":{"200":{"description":"Ok.","content":{"application/json":{"schema":{"properties":{"data":{"$ref":"#/components/schemas/array-of-devices"}}}}}}}},"post":{"summary":"create device","tags":["Devices"],"parameters":[{"name":"organization_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/organization-name"}},{"name":"product_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/product-name"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"description":{"$ref":"#/components/schemas/device-description"},"healthy":{"$ref":"#/components/schemas/device-healthy"},"identifier":{"$ref":"#/components/schemas/device-identifier"},"last_communication":{"$ref":"#/components/schemas/device-last-communication"},"tags":{"$ref":"#/components/schemas/array-of-device-tags"}},"required":["identifier"]}}}},"responses":{"201":{"description":"Ok.","content":{"application/json":{"schema":{"$ref":"#/components/schemas/device"}}}}}}},"/orgs/{organization_name}/products/{product_name}/devices/{device_identifier}":{"delete":{"summary":"delete device","tags":["Devices"],"parameters":[{"name":"organization_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/organization-name"}},{"name":"product_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/product-name"}},{"name":"device_identifier","in":"path","required":true,"schema":{"$ref":"#/components/schemas/device-identifier"}}],"responses":{"204":{"description":"Ok."}}},"get":{"summary":"get device","tags":["Devices"],"parameters":[{"name":"organization_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/organization-name"}},{"name":"product_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/product-name"}},{"name":"device_identifier","in":"path","required":true,"schema":{"$ref":"#/components/schemas/device-identifier"}}],"responses":{"200":{"description":"Ok.","content":{"application/json":{"schema":{"properties":{"data":{"$ref":"#/components/schemas/device"}}}}}}}},"put":{"summary":"update device","tags":["Devices"],"parameters":[{"name":"organization_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/organization-name"}},{"name":"product_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/product-name"}},{"name":"device_identifier","in":"path","required":true,"schema":{"$ref":"#/components/schemas/device-identifier"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"description":{"$ref":"#/components/schemas/device-description"},"healthy":{"$ref":"#/components/schemas/device-healthy"},"last_communication":{"$ref":"#/components/schemas/device-last-communication"},"tags":{"$ref":"#/components/schemas/array-of-device-tags"}}}}}},"responses":{"200":{"description":"Ok.","content":{"application/json":{"schema":{"properties":{"data":{"$ref":"#/components/schemas/device"}}}}}}}}},"/orgs/{organization_name}/products/{product_name}/devices/{device_identifier}/certificates":{"get":{"summary":"get device certificates","tags":["Device Certificates"],"parameters":[{"name":"organization_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/organization-name"}},{"name":"product_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/product-name"}},{"name":"device_identifier","in":"path","required":true,"schema":{"$ref":"#/components/schemas/device-identifier"}}],"responses":{"200":{"description":"Ok.","content":{"application/json":{"schema":{"properties":{"data":{"$ref":"#/components/schemas/array-of-device-certificates"}}}}}}}},"post":{"summary":"create device certificate","tags":["Device Certificates"],"parameters":[{"name":"organization_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/organization-name"}},{"name":"product_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/product-name"}},{"name":"device_identifier","in":"path","required":true,"schema":{"$ref":"#/components/schemas/device-identifier"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"cert":{"$ref":"#/components/schemas/device-certificate-pem-base64"}},"required":["cert"]}}}},"responses":{"201":{"description":"Ok.","content":{"application/json":{"schema":{"properties":{"data":{"$ref":"#/components/schemas/device-certificate"}}}}}}}}},"/orgs/{organization_name}/products/{product_name}/devices/{device_identifier}/certificates/{certificate_serial}":{"get":{"summary":"get device certificate","tags":["Device Certificates"],"parameters":[{"name":"organization_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/organization-name"}},{"name":"product_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/product-name"}},{"name":"device_identifier","in":"path","required":true,"schema":{"$ref":"#/components/schemas/device-identifier"}},{"name":"certificate_serial","in":"path","required":true,"schema":{"$ref":"#/components/schemas/device-certificate-serial"}}],"responses":{"200":{"description":"Ok.","content":{"application/json":{"schema":{"properties":{"data":{"$ref":"#/components/schemas/device-certificate"}}}}}}}},"delete":{"summary":"delete device certificate","tags":["Device Certificates"],"parameters":[{"name":"organization_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/organization-name"}},{"name":"product_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/product-name"}},{"name":"device_identifier","in":"path","required":true,"schema":{"$ref":"#/components/schemas/device-identifier"}},{"name":"certificate_serial","in":"path","required":true,"schema":{"$ref":"#/components/schemas/device-certificate-serial"}}],"responses":{"204":{"description":"Ok."}}}},"/orgs/{organization_name}/products/{product_name}/devices/auth":{"post":{"summary":"authenticate device","tags":["Devices"],"parameters":[{"name":"organization_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/organization-name"}},{"name":"product_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/product-name"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"certificate":{"$ref":"#/components/schemas/device-certificate-pem-base64"}},"required":["certificate"]}}}},"responses":{"200":{"description":"Ok.","content":{"application/json":{"schema":{"properties":{"data":{"$ref":"#/components/schemas/device"}}}}}}}}},"/orgs/{organization_name}/products/{product_name}/firmwares":{"get":{"summary":"get firmwares","tags":["Firmwares"],"parameters":[{"name":"organization_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/organization-name"}},{"name":"product_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/product-name"}}],"responses":{"200":{"description":"Ok.","content":{"application/json":{"schema":{"properties":{"data":{"$ref":"#/components/schemas/array-of-firmwares"}}}}}}}},"post":{"summary":"create firmware","tags":["Firmwares"],"parameters":[{"name":"organization_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/organization-name"}},{"name":"product_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/product-name"}}],"requestBody":{"content":{"multipart/form-data":{"schema":{"type":"object","properties":{"firmware":{"type":"string","format":"binary"},"ttl":{"type":"integer"}},"required":["firmware"]}}}},"responses":{"201":{"description":"Ok.","content":{"application/json":{"schema":{"properties":{"data":{"$ref":"#/components/schemas/firmware"}}}}}},"500":{"description":"Internal server error.","content":{"application/json":{"schema":{"properties":{"errors":{"oneOf":[{"type":"string","const":"invalid_signature"},{"type":"object","properties":{"detail":{"type":"string","const":"Internal Server Error"}}}]}}}}}}}}},"/orgs/{organization_name}/products/{product_name}/firmwares/{firmware_uuid}":{"delete":{"summary":"delete firmware","tags":["Firmwares"],"parameters":[{"name":"organization_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/organization-name"}},{"name":"product_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/product-name"}},{"name":"firmware_uuid","in":"path","required":true,"schema":{"$ref":"#/components/schemas/firmware-uuid"}}],"responses":{"204":{"description":"Ok.","content":{"application/json":{"schema":{"$ref":"#/components/schemas/firmware"}}}}}},"get":{"summary":"get firmware","tags":["Firmwares"],"parameters":[{"name":"organization_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/organization-name"}},{"name":"product_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/product-name"}},{"name":"firmware_uuid","in":"path","required":true,"schema":{"$ref":"#/components/schemas/firmware-uuid"}}],"responses":{"200":{"description":"Ok.","content":{"application/json":{"schema":{"properties":{"data":{"$ref":"#/components/schemas/firmware"}}}}}}}}},"/orgs/{organization_name}/products/{product_name}/users":{"get":{"summary":"get product users","tags":["Product Users"],"parameters":[{"name":"organization_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/organization-name"}},{"name":"product_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/product-name"}}],"responses":{"200":{"description":"Ok.","content":{"application/json":{"schema":{"properties":{"data":{"$ref":"#/components/schemas/array-of-product-users"}}}}}}}},"post":{"summary":"add product user","tags":["Product Users"],"parameters":[{"name":"organization_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/organization-name"}},{"name":"product_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/product-name"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"role":{"$ref":"#/components/schemas/role-name"},"username":{"$ref":"#/components/schemas/user-username"}},"required":["role","username"]}}}},"responses":{"200":{"description":"Ok.","content":{"application/json":{"schema":{"properties":{"data":{"$ref":"#/components/schemas/product-user"}}}}}}}}},"/orgs/{organization_name}/products/{product_name}/users/{user_username}":{"delete":{"summary":"remove product user","tags":["Product Users"],"parameters":[{"name":"organization_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/organization-name"}},{"name":"product_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/product-name"}},{"name":"user_username","in":"path","required":true,"schema":{"$ref":"#/components/schemas/user-username"}}],"responses":{"204":{"description":"Ok."}}},"get":{"summary":"get product user","tags":["Product Users"],"parameters":[{"name":"organization_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/organization-name"}},{"name":"product_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/product-name"}},{"name":"user_username","in":"path","required":true,"schema":{"$ref":"#/components/schemas/user-username"}}],"responses":{"200":{"description":"Ok.","content":{"application/json":{"schema":{"properties":{"data":{"$ref":"#/components/schemas/product-user"}}}}}}}},"put":{"summary":"update product user","tags":["Product Users"],"parameters":[{"name":"organization_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/organization-name"}},{"name":"product_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/product-name"}},{"name":"user_username","in":"path","required":true,"schema":{"$ref":"#/components/schemas/user-username"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"role":{"$ref":"#/components/schemas/role-name"}},"required":["role"]}}}},"responses":{"200":{"description":"Ok.","content":{"application/json":{"schema":{"properties":{"data":{"$ref":"#/components/schemas/product-user"}}}}}}}}},"/orgs/{organization_name}/users":{"get":{"summary":"get organization users","tags":["Organization Users"],"parameters":[{"name":"organization_name","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"Ok.","content":{"application/json":{"schema":{"properties":{"data":{"$ref":"#/components/schemas/array-of-organization-users"}}}}}}}},"post":{"summary":"add organization user","tags":["Organization Users"],"parameters":[{"name":"organization_name","in":"path","required":true,"schema":{"type":"string"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"role":{"$ref":"#/components/schemas/role-name"},"username":{"$ref":"#/components/schemas/user-username"}},"required":["role","username"]}}}},"responses":{"201":{"description":"Ok.","content":{"application/json":{"schema":{"properties":{"data":{"$ref":"#/components/schemas/organization-user"}}}}}}}}},"/orgs/{organization_name}/users/{user_username}":{"delete":{"summary":"remove organization user","tags":["Organization Users"],"parameters":[{"name":"organization_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/organization-name"}},{"name":"user_username","in":"path","required":true,"schema":{"$ref":"#/components/schemas/user-username"}}],"responses":{"204":{"description":"Ok."}}},"get":{"summary":"get organization user","tags":["Organization Users"],"parameters":[{"name":"organization_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/organization-name"}},{"name":"user_username","in":"path","required":true,"schema":{"$ref":"#/components/schemas/user-username"}}],"responses":{"200":{"description":"Ok.","content":{"application/json":{"schema":{"properties":{"data":{"$ref":"#/components/schemas/organization-user"}}}}}}}},"put":{"summary":"update organization user","tags":["Organization Users"],"parameters":[{"name":"organization_name","in":"path","required":true,"schema":{"$ref":"#/components/schemas/organization-name"}},{"name":"user_username","in":"path","required":true,"schema":{"$ref":"#/components/schemas/user-username"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"role":{"$ref":"#/components/schemas/role-name"}},"required":["role"]}}}},"responses":{"200":{"description":"Ok.","content":{"application/json":{"schema":{"properties":{"data":{"$ref":"#/components/schemas/organization-user"}}}}}}}}},"/users/auth":{"post":{"summary":"authenticate a user","tags":["Users"],"requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"email":{"$ref":"#/components/schemas/email"},"password":{"$ref":"#/components/schemas/user-password"},"username":{"type":"string"}},"anyOf":[{"required":["password","username"]},{"required":["email","password"]}]}}}},"responses":{"200":{"description":"Ok.","content":{"application/json":{"schema":{"properties":{"data":{"$ref":"#/components/schemas/user-me"}}}}}}}}},"/users/login":{"post":{"summary":"login a user","tags":["Users"],"requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"email":{"$ref":"#/components/schemas/email"},"note":{"type":"string"},"password":{"$ref":"#/components/schemas/user-password"},"username":{"type":"string"}},"oneOf":[{"required":["note","password","username"]},{"required":["email","note","password"]}]}}}},"responses":{"200":{"description":"Ok.","content":{"application/json":{"schema":{"properties":{"data":{"type":"object","properties":{"email":{"$ref":"#/components/schemas/email"},"token":{"$ref":"#/components/schemas/access-token"},"username":{"$ref":"#/components/schemas/user-username"}}}}}}}}}}},"/users/me":{"get":{"summary":"get user me","tags":["Users"],"responses":{"200":{"description":"Ok.","content":{"application/json":{"schema":{"properties":{"data":{"$ref":"#/components/schemas/user-me"}}}}}}}}},"/users/register":{"post":{"summary":"register a user","tags":["Users"],"requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"email":{"$ref":"#/components/schemas/email"},"password":{"$ref":"#/components/schemas/user-password"},"username":{"$ref":"#/components/schemas/user-username"}},"required":["email","password","username"]}}}},"responses":{"200":{"description":"Ok.","content":{"application/json":{"schema":{"properties":{"data":{"$ref":"#/components/schemas/user-me"}}}}}},"403":{"description":"Forbidden.","content":{"application/json":{"schema":{"properties":{"status":{"type":"string","const":"Public signups disabled. Invite required to signup."}}}}}}}}}},"components":{"securitySchemes":{"api_key":{"type":"apiKey","name":"Authorization","in":"header","description":"The header value must be `Token ACCESS_TOKEN_VALUE`."}},"schemas":{"access-token":{"type":"string"},"array-of-ca-certificates":{"type":"array","items":{"$ref":"#/components/schemas/ca-certificate"}},"array-of-deployments":{"type":"array","items":{"$ref":"#/components/schemas/deployment"}},"array-of-device-certificates":{"type":"array","items":{"$ref":"#/components/schemas/device-certificate"}},"array-of-device-tags":{"type":"array","items":{"$ref":"#/components/schemas/device-tag"}},"array-of-devices":{"type":"array","items":{"$ref":"#/components/schemas/device"}},"array-of-firmwares":{"type":"array","items":{"$ref":"#/components/schemas/firmware"}},"array-of-keys":{"type":"array","items":{"$ref":"#/components/schemas/key"}},"array-of-organization-users":{"type":"array","items":{"$ref":"#/components/schemas/organization-user"}},"array-of-product-users":{"type":"array","items":{"$ref":"#/components/schemas/product-user"}},"array-of-products":{"type":"array","items":{"$ref":"#/components/schemas/product"}},"ca-certificate":{"type":"object","properties":{"description":{"type":"string"},"not_after":{"type":"string","format":"date-time"},"not_before":{"type":"string","format":"date-time"},"serial":{"$ref":"#/components/schemas/ca-certificate-serial"}}},"ca-certificate-serial":{"$ref":"#/components/schemas/serial"},"ca-verification-code":{"type":"object","properties":{"verification_code":{"description":"Expires in one week","type":"string"}}},"delta-updatable":{"type":"boolean"},"deployment":{"type":"object","properties":{"conditions":{"$ref":"#/components/schemas/deployment-conditions"},"firmware_uuid":{"$ref":"#/components/schemas/firmware-uuid"},"is_active":{"$ref":"#/components/schemas/deployment-is-active"},"name":{"$ref":"#/components/schemas/deployment-name"},"state":{"$ref":"#/components/schemas/deployment-state"}}},"deployment-conditions":{"type":"object","properties":{"tags":{"$ref":"#/components/schemas/array-of-device-tags"},"version":{"description":"Reference https://hexdocs.pm/elixir/Version.html#module-requirements.","example":"== 1.0.0","type":"string"}}},"deployment-is-active":{"type":"boolean"},"deployment-name":{"type":"string"},"deployment-state":{"enum":["on","off"]},"device":{"type":"object","properties":{"description":{"oneOf":[{"type":"null"},{"$ref":"#/components/schemas/device-description"}]},"firmware_metadata":{"oneOf":[{"type":"null"},{"$ref":"#/components/schemas/firmware-metadata"}]},"healthy":{"oneOf":[{"type":"null"},{"$ref":"#/components/schemas/device-healthy"}]},"identifier":{"$ref":"#/components/schemas/device-identifier"},"last_communication":{"oneOf":[{"enum":["never"]},{"$ref":"#/components/schemas/device-last-communication"}]},"status":{"$ref":"#/components/schemas/device-status"},"tags":{"oneOf":[{"type":"null"},{"$ref":"#/components/schemas/array-of-device-tags"}]},"version":{"$ref":"#/components/schemas/device-version"}}},"device-certificate":{"type":"object","properties":{"not_after":{"type":"string","format":"date-time"},"not_before":{"type":"string","format":"date-time"},"serial":{"$ref":"#/components/schemas/device-certificate-serial"}}},"device-certificate-pem-base64":{"description":"Base64 encoded device certificate pem.","type":"string"},"device-certificate-serial":{"$ref":"#/components/schemas/serial"},"device-description":{"type":"string"},"device-healthy":{"type":"boolean"},"device-identifier":{"type":"string"},"device-last-communication":{"type":"string","format":"date-time"},"device-status":{"enum":["offline","online","rebooting","update pending","updating"]},"device-tag":{"type":"string"},"device-version":{"oneOf":[{"$ref":"#/components/schemas/version"},{"type":"string","const":"unknown"}]},"email":{"type":"string","format":"email"},"firmware":{"type":"object","properties":{"architecture":{"$ref":"#/components/schemas/product-architecture"},"author":{"$ref":"#/components/schemas/firmware-author"},"platform":{"$ref":"#/components/schemas/platform"},"product":{"$ref":"#/components/schemas/product-name"},"uuid":{"$ref":"#/components/schemas/firmware-uuid"},"version":{"$ref":"#/components/schemas/version"}}},"firmware-author":{"type":"string"},"firmware-metadata":{"type":"object","properties":{"architecture":{"$ref":"#/components/schemas/product-architecture"},"author":{"oneOf":[{"type":"null"},{"$ref":"#/components/schemas/firmware-author"}]},"description":{"oneOf":[{"type":"null"},{"type":"string"}]},"fwup_version":{"oneOf":[{"type":"null"},{"type":"string"}]},"misc":{"oneOf":[{"type":"null"},{"type":"string"}]},"platform":{"$ref":"#/components/schemas/platform"},"product":{"$ref":"#/components/schemas/product-name"},"uuid":{"$ref":"#/components/schemas/firmware-uuid"},"vcs_identifier":{"oneOf":[{"type":"null"},{"$ref":"#/components/schemas/vcs-identifier"}]},"version":{"$ref":"#/components/schemas/version"}}},"firmware-uuid":{"type":"string","format":"uuid"},"key":{"type":"object","properties":{"key":{"$ref":"#/components/schemas/key-key"},"name":{"$ref":"#/components/schemas/key-name"}}},"key-key":{"type":"string"},"key-name":{"type":"string"},"organization-name":{"type":"string"},"organization-user":{"type":"object","properties":{"email":{"$ref":"#/components/schemas/email"},"role":{"$ref":"#/components/schemas/role-name"},"username":{"$ref":"#/components/schemas/user-username"}}},"platform":{"type":"string"},"product":{"type":"object","properties":{"delta_updatable":{"$ref":"#/components/schemas/delta-updatable"},"name":{"$ref":"#/components/schemas/product-name"}}},"product-architecture":{"type":"string"},"product-name":{"type":"string"},"product-user":{"type":"object","properties":{"email":{"$ref":"#/components/schemas/email"},"role":{"$ref":"#/components/schemas/role-name"},"username":{"$ref":"#/components/schemas/user-username"}}},"role-name":{"enum":["admin","read","read","write"]},"serial":{"type":"string","example":"522154175989108335861639249273408275957749326848"},"user-me":{"allOf":[{"type":"object","properties":{"email":{"$ref":"#/components/schemas/email"},"username":{"type":"string"}}}]},"user-password":{"type":"string"},"user-username":{"type":"string"},"vcs-identifier":{"example":"d670460b4b4aece5915caf5c68d12f560a9fe3e4","type":"string"},"version":{"description":"Reference https://hexdocs.pm/elixir/Version.html#module-versions.","example":"1.0.0-alpha.3","type":"string"}}}}}')}}]);