# Creating signing keys

This guide describes how to create signing keys.

To learn more about Peridio signing keys in general, see the [signing keys](/platform/reference/signing-keys) reference.

## Prerequisites

- [fwup CLI](https://github.com/fwup-home/fwup).
  - Last tested with version 1.9.1.
- [Peridio CLI](https://github.com/peridio/morel/releases).
  - Last tested with version 0.4.0.

## Create key pair

Signing keys can be formatted in the recommended [PEM](/platform/reference/signing-keys#pem) format or the legacy [raw](/platform/reference/signing-keys#raw) format. This guide will create them in the PEM format.

Create a PEM private key:

```bash
openssl genpkey -algorithm Ed25519 -out private.pem
```

Derive a PEM public key from the PEM private key:

```bash
openssl pkey -in private.pem -pubout -out public.pem
```

## Create signing key

You must submit your public key to Peridio so that it can verify binaries as they are uploaded.

### Web Console

See the [Peridio Web Console](https://console.peridio.com).

### CLI

The CLI to create a signing key expects the value to be in raw format, which is not what `openssl`
above would have output. To convert a PEM public key to a raw public key, you may use the following snippet. For more information, see the [convert keys](/platform/reference/signing-keys#convert-keys) section of the signing keys reference.

```bash
openssl pkey -outform DER -pubin -in public.pem -pubout \
  | tail -c +13 \
  | base64 > public.raw
```

Submit the key to Peridio.

```bash
peridio signing-keys create \
  --value $(cat public.raw) \
  --name signing-key-name
```

The submitted key may now be used to sign [binaries](/platform/guides/creating-binary-signatures) and [firmware](/platform/guides/creating-firmware#sign-the-fwup-archive).

### API

Use the Peridio Admin API [create-a-signing-key](/admin-api#signing-keys/operation/create-a-signing-key) endpoint.

The submitted key may now be used to sign [binaries](/platform/guides/creating-binary-signatures) and [firmware](/platform/guides/creating-firmware#sign-the-fwup-archive).
