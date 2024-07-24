"use strict";(self.webpackChunkperidio_docs=self.webpackChunkperidio_docs||[]).push([[2391],{72620:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var s=n(74848),r=n(28453);const a={},i=void 0,o={id:"cli/releases/create",title:"create",description:"",source:"@site/docs/cli/releases/create.md",sourceDirName:"cli/releases",slug:"/cli/releases/create",permalink:"/cli/releases/create",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"cli",previous:{title:"update",permalink:"/cli/products-v2/update"},next:{title:"get",permalink:"/cli/releases/get"}},l={},h=[];function d(e){const t={code:"code",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"Usage: peridio releases create [OPTIONS] --bundle-prn <BUNDLE_PRN> --cohort-prn <COHORT_PRN> --name <NAME> --organization-prn <ORGANIZATION_PRN> --schedule-date <SCHEDULE_DATE>\n\nOptions:\n      --bundle-prn <BUNDLE_PRN>\n          The PRN of the bundle you wish to release\n\n      --cohort-prn <COHORT_PRN>\n          The PRN of the cohort you wish to create a release within\n\n      --description <DESCRIPTION>\n          An arbitrary string attached to the resource. Often useful for displaying to users\n\n      --disabled <DISABLED>\n          If a release is marked as disabled it cannot be resolved during release resolution\n          \n          [possible values: true, false]\n\n      --name <NAME>\n          The resource's name, meant to be displayable to users\n\n      --next-release-prn <NEXT_RELEASE_PRN>\n          The PRN of the release you wish to create this release before.\n          \n          If omitted, the release will be created as latest within the cohort. If there is already at least one release in the cohort, then the latest release in that cohort would have its next_release_prn updated to this created release.\n          \n          If supplied, the release will be created prior to the release identified by next_release_prn. If you wish to insert this release between two other releases, you may additionally supply previous_release_prn. If you supply neither field, it will create the release as the latest automatically.\n\n      --organization-prn <ORGANIZATION_PRN>\n          The PRN of the organization you wish to create the resource within\n\n      --phase-tags [<PHASE_TAGS>...]\n          Limits by tags the devices that are allowed to update to this release. When phase_mode is tags, this field only allows devices to update to this release if they have at least one of these tags\n\n      --phase-value <PHASE_VALUE>\n          The phase value controls the distribution of the update to your fleet.\n          \n          Decimals in [0.0, 1.0] are treated as percents, e.g., to allow 20% of the cohort to update, you would specify 0.2.\n          \n          Integers >= 2 are treated as absolute device counts, e.g., to allow 40 of the cohort's devices to update, you would specifiy 40.\n          \n          NOTE: 1 is a special value in that it represents 100% and once a release is updated to this value, the phase value can never be changed again.\n          \n          A release with a phase_value not equal to 1 is considered \"phased\".\n\n      --previous-release-prn <PREVIOUS_RELEASE_PRN>\n          The PRN of the release you wish to create this release after.\n          \n          If omitted, next_release_prn will dictate where to create this release within the cohort's release graph.\n          \n          In order to insert a release between two other releases, next_release_prn is required to be supplied as well. If you supply neither field, it will create the release as the latest automatically.\n\n      --required\n          Whether the release is required.\n          \n          If true, this release must be passed through if encountered by a device.\n          \n          If false, this release will be skipped over when possible (if there are releases configured after it).\n\n      --schedule-date <SCHEDULE_DATE>\n          The date at which the release becomes available to devices.\n          \n          Before this date-time, the release will not be resolvable when checking for updates. You may use this to schedule a future release.\n\n      --version <VERSION>\n          The release version.\n          \n          If provided, it has to be a valid version. Used in dynamic release resolution.\n\n      --version-requirement <VERSION_REQUIREMENT>\n          The release version requirement.\n          \n          If provided, it has to be a valid requirement. Used in dynamic release resolution.\n\n  -h, --help\n          Print help (see a summary with '-h')\n\n"})})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var s=n(96540);const r={},a=s.createContext(r);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);