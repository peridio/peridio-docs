import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import CodeBlock from '@theme/CodeBlock'
import Layout from '@theme/Layout'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'
import styles from './index.module.css'
import CodeBracket from '@site/static/img/homepage/code-bracket.svg'
import CommandLine from '@site/static/img/homepage/command-line.svg'
import ComputerDesktop from '@site/static/img/homepage/computer-desktop.svg'
import CpuChip from '@site/static/img/homepage/cpu-chip.svg'
import Heading from '@theme/Heading'
import Link from '@docusaurus/Link'

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as='h1' className={clsx("hero__title", styles.hero_title)}>Documentation</Heading>
        <p className={clsx("hero__subtitle", styles.hero_subtitle)}>Find user guides, developer guides, API references, and more.</p>
      </div>
    </header>
  )
}

function BashPreview({ command, children }) {
  return (
    <div className={styles.code_block_container}>
      <div className={styles.code_block_command}>
        <CodeBlock language="bash">
          {`$ ${command}`}
        </CodeBlock>
      </div>
      <div>
        <pre className={styles.code_block_content}>
          {children}
        </pre>
      </div>
    </div>
  )
}

BashPreview.propTypes = {
  command: PropTypes.string.isRequired, // `command` should be a required string
  children: PropTypes.node, // `children` can be any valid React node
};

function HomepageCodeBlock() {
  return (
    <div className={clsx('container', styles.homepage_code_block_container)}>
      <div className={styles.homepage_code_block}>
        <Heading as="h2" className={styles.homepage_code_block_title}>Try it Out</Heading>
        <Tabs className={styles.custom_tabs}>
          <TabItem value="binary" label="Create a Binary" attributes={{ className: styles.tab_item_selected }} default>
            <div className={styles.tab_item_container}>
              <BashPreview
                command="peridio binaries create --content-path $CONTENT_PATH --signing-key-pair $SIGNING_KEY_PAIR">
                {`{
  "artifact_version_prn": "string",
  "description": "string",
  "hash": "string",
  "size": 1800000,
  "target": "arm-linux-androideabi"
}`}
              </BashPreview>
            </div>
          </TabItem>
          <TabItem value="release" label="Create a Release" attributes={{ className: styles.tab_item_selected }}>
            <div className={styles.tab_item_container}>
              <BashPreview
                command='peridio releases create --name "prototype" --schedule-date "2024-08-24T14:15:22Z" --phase-value 1000000000'>
                {`{
  "bundle_prn": "string",
  "phase_mode": "tags",
  "phase_tags": [
    "string"
  ],
  "phase_value": 1000000000,
  "cohort_prn": "string",
  "description": null,
  "disabled": true,
  "name": "prototype",
  "next_release_prn": "string",
  "previous_release_prn": "string",
  "organization_prn": "string",
  "required": true,
  "schedule_date": "2024-08-24T14:15:22Z",
  "version": "version",
  "version-requirement": "version-requirement
}`}
              </BashPreview>
            </div>
          </TabItem>
          <TabItem value="device" label="Create a Device" attributes={{ className: styles.tab_item_selected }}>
            <BashPreview
              command='peridio devices create --identifier "skynet" --product-name "AI"'>
              {`{
  "data": [
    {
      "cohort_prn": "string",
      "description": {},
      "firmware_metadata": {},
      "healthy": {},
      "identifier": "skynet",
      "last_communication": "never",
      "prn": "prn:1:be4d30b4-de6b-47cd-85ea-a75e23fd63ef:device:b3f1f699-3bc8-4c77-bda2-b974595d5e3f",
      "status": "offline",
      "tags": {},
      "version": "1.0.0-alpha.3"
    }
  ]
}`}
            </BashPreview>
          </TabItem>
        </Tabs>
      </div>
    </div>
  )
}

function SvgLink({ url, text, icon }) {
  if (icon == "cmd") {
    return (<><Link href={url}><CommandLine className={styles.svg_link} />{text}</Link></>)
  } else if (icon == "code") {
    return (<><Link href={url}><CodeBracket className={styles.svg_link} />{text}</Link></>)
  } else if (icon == "desktop") {
    return (<><Link href={url}><ComputerDesktop className={styles.svg_link} />{text}</Link></>)
  } else if (icon == "cpu") {
    return (<><Link href={url}><CpuChip className={styles.svg_link} />{text}</Link></>)
  }
}

SvgLink.propTypes = {
  url: PropTypes.string.isRequired, // The URL for the link, required
  text: PropTypes.string, // The text to display, optional
  icon: PropTypes.oneOf(['cmd', 'code', 'desktop', 'cpu']).isRequired, // Restrict icon to specific values
};

function Section({ title, subsections }) {
  const subsectionItems = subsections.map((subsection, index) =>
    <li key={index}>
      <SvgLink url={subsection.url} text={subsection.text} icon={subsection.icon} />
    </li>
  );
  return (
    <div>
      <Heading as="h3" className={styles.reference_title}>{title}</Heading>
      <ul className={styles.reference_container}>{subsectionItems}</ul>
    </div>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired, // `title` should be a required string
  subsections: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired, // Each subsection must have a required `url`
      text: PropTypes.string, // Optional text for the subsection
      icon: PropTypes.oneOf(['cmd', 'code', 'desktop', 'cpu']).isRequired, // Icon must be one of the defined values
    })
  ).isRequired, // `subsections` is required and must be an array of objects
};

export default function Home() {
  return (
    <Layout>
      <HomepageHeader />
      <HomepageCodeBlock />
      <main className={clsx('container', styles.container)}>
        <div>
          <Section title={"Getting Started"} subsections={[{ url: "/platform/getting-started", text: "The Peridio Platform", icon: "cmd" }]} />
          <Section title={"System Integrations"} subsections={[{ url: "/integration/linux/overview", text: "Linux", icon: "code" }]} />
          <Section title={"Tools"} subsections={[{ url: "/cli", text: "Peridio CLI", icon: "cmd" }, { url: "https://console.peridio.com/", text: "Web Console", icon: "desktop" }]} />
        </div>
        <div>
          <Section title={"Api Docs"} subsections={[{ url: "/admin-api", text: "Admin API", icon: "code" }, { url: "/device-api", text: "Device API", icon: "code" }]} />
          <Section title={"Reference Designs"} subsections={[
            { url: "/integration/linux/reference-designs/imx6ullevk/overview", text: "i.MX6 ULL EVK", icon: "cpu" },
            { url: "/integration/linux/reference-designs/khadas-vim3/overview", text: "Khadas VIM3", icon: "cpu" },
            { url: "/integration/linux/reference-designs/qemu-arm64/overview", text: "QEmu ARM64 SecureBoot", icon: "cpu" },
            { url: "/integration/linux/reference-designs/raspberrypi0w/overview", text: "Raspberry Pi Zero 2 W", icon: "cpu" },
            { url: "/integration/linux/reference-designs/raspberrypi3/overview", text: "Raspberry Pi 3B", icon: "cpu" },
            { url: "/integration/linux/reference-designs/raspberrypi4/overview", text: "Raspberry Pi 4B", icon: "cpu" },
            { url: "/integration/linux/reference-designs/raspberrypi5/overview", text: "Raspberry Pi 5B", icon: "cpu" },
          ]} />
        </div>
      </main>
    </Layout>
  )
}
