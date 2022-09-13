---
title: get
---

# peridio signing-keys get

Get a signing key.

## Usage

```
peridio \
  signing-keys \
  get \
  [OPTIONS] \
  --api-key <api-key> \
  --name <name> \
  --organization-name <organization-name>
```

## Flags

`-h`, `--help`

Prints help information

`-V`, `--version`

Prints version information

## Options

### Required

`--api-key <api-key>`, `$PERIDIO_API_KEY`

The API key used to authenticate and authorize the request.

`--name <name>`

The name of the key.

`--organization-name <organization-name>`

The organization to interact with.

### Defaulted

`--base-url <base-url>`, `$PERIDIO_BASE_URL`

The base URL of the API to interact with.