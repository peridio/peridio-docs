// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
export default {
  platform: [
    {
      type: 'doc',
      label: 'Introduction',
      id: 'platform/introduction',
    },
    {
      collapsible: true,
      type: 'category',
      label: 'Reference',
      items: [
        'platform/reference/overview',
        {
          type: 'category',
          label: 'Account Management',
          items: [
            'platform/reference/organizations',
            'platform/reference/peridio-resource-names',
            'platform/reference/users',
          ],
        },
        {
          type: 'category',
          label: 'Binary Management',
          items: [
            {
              type: 'doc',
              label: 'Artifacts',
              id: 'platform/reference/artifacts',
            },
            {
              type: 'doc',
              label: 'Artifact Versions',
              id: 'platform/reference/artifact-versions',
            },
            {
              type: 'doc',
              label: 'Binaries',
              id: 'platform/reference/binaries',
            },
            {
              type: 'doc',
              label: 'Binary Parts',
              id: 'platform/reference/binary-parts',
            },
            {
              type: 'doc',
              label: 'Binary Signatures',
              id: 'platform/reference/binary-signatures',
            },
            'platform/reference/signing-keys',
            {
              type: 'doc',
              label: 'Firmware',
              id: 'platform/reference/firmware',
              customProps: { legacy: true },
            },
          ],
        },
        {
          type: 'category',
          label: 'Device Management',
          items: [
            {
              type: 'doc',
              label: 'Agent',
              id: 'platform/reference/agent',
            },
            'platform/reference/ca-certificates',
            {
              type: 'doc',
              label: 'Cohorts',
              id: 'platform/reference/cohorts',
            },
            'platform/reference/device-certificates',
            'platform/reference/devices',
            'platform/reference/just-in-time-provisioning',
            'platform/reference/products',
            'platform/reference/verification-certificates',
            'platform/reference/verification-codes',
          ],
        },
        {
          type: 'category',
          label: 'Integration Management',
          items: [
            'platform/reference/webhooks',
          ],
        },
        {
          type: 'category',
          label: 'Release Mangement',
          items: [
            {
              type: 'doc',
              label: 'Bundles',
              id: 'platform/reference/bundles',
            },
            {
              type: 'doc',
              label: 'Deployments',
              id: 'platform/reference/deployments',
              customProps: { legacy: true },
            },
            {
              type: 'doc',
              label: 'Releases',
              id: 'platform/reference/releases',
            },
          ],
        },
        {
          type: 'category',
          label: 'Remote Access',
          items: [
            'platform/reference/tunnels',
          ],
          customProps: { labs: true },
        },
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        {
          type: 'category',
          label: 'Binary Management',
          items: [
            'platform/guides/introduction-to-binary-management',
            'platform/guides/multipart-uploads-with-binary-parts',
            'platform/guides/creating-artifact-versions',
            'platform/guides/creating-artifacts',
            'platform/guides/creating-binaries',
            'platform/guides/creating-binary-parts',
            'platform/guides/creating-binary-signatures',
            'platform/guides/creating-firmware',
            'platform/guides/creating-signing-keys',
          ],
        },
        {
          type: 'category',
          label: 'Device Management',
          items: [
            'platform/guides/creating-ca-certificates',
            'platform/guides/creating-devices',
            'platform/guides/creating-products',
            'platform/guides/creating-x509-certificates-with-openssl',
          ],
        },
        {
          type: 'category',
          label: 'Release Management',
          items: [
            'platform/guides/introduction-to-release-management',
            'platform/guides/creating-bundles',
            'platform/guides/creating-deployments',
            'platform/guides/creating-releases',
          ],
        },
        {
          type: 'category',
          label: 'Remote Access',
          items: [
            'platform/guides/creating-tunnels',
          ],
          customProps: { labs: true },
        },
      ],
    },
  ],
  integration: [
    {
      type: 'doc',
      label: 'Introduction',
      id: 'integration/introduction',
    },
    {
      collapsible: true,
      type: 'category',
      label: 'Linux',
      items: [
        'integration/linux/overview',
        'integration/linux/peridiod',
        {
          collapsible: true,
          type: 'category',
          label: 'Build Tools',
          items: [
            'integration/linux/build-tools/yocto',
            'integration/linux/build-tools/buildroot',
          ],
        },
        {
          collapsible: true,
          type: 'category',
          label: 'Reference Designs',
          items: [
            {
              type: 'autogenerated',
              dirName: 'integration/linux/reference-designs',
            },
          ],
        },
      ],
    },
  ],
  cli: [
    'cli',
    {
      type: 'autogenerated',
      dirName: 'cli',
    },
  ],
}
