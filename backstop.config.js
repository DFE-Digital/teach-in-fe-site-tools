const baseUrl = 'https://www.teach-in-further-education.campaign.gov.uk';

const pages = [
  "/",
  "/what-is-fe-teaching/",
  "/whats-it-like-to-teach-in-fe/",
  "/how-do-i-find-a-job-in-fe/",
  "/find-local-colleges/",
  "/find-local-colleges/?postcode=w1w+7rt",
  "/sharing-is-caring/",
  "/privacy-policy/",
  "/cookies-policy/",
  "/accessibility-statement/",
]

const scenarios = pages.map(page => {
  return {
    "label": `Page ${page}`,
    "cookiePath": "backstop_data/engine_scripts/cookies.json",
    "url": `${baseUrl}${page}`,
    "referenceUrl": "",
    "readyEvent": "",
    "readySelector": "",
    "delay": 5000,
    "hideSelectors": [],
    "removeSelectors": [],
    "hoverSelector": "",
    "clickSelector": "",
    "postInteractionWait": 0,
    "selectors": [],
    "selectorExpansion": true,
    "expect": 0,
    "misMatchThreshold" : 0.2,
    "requireSameDimensions": true
  }
})

module.exports = {
  id: "backstop_default",
  viewports: [
    {
      "label": "phone",
      "width": 320,
      "height": 480
    },
    {
      "label": "tablet",
      "width": 1024,
      "height": 768
    },
    {
      "label": "desktop",
      "width": 1920,
      "height": 1080
    }
  ],
  onBeforeScript: "puppet/onBefore.js",
  onReadyScript: "puppet/onReady.js",
  scenarios,
  paths: {
    "bitmaps_reference": "backstop_data/bitmaps_reference",
    "bitmaps_test": "backstop_data/bitmaps_test",
    "engine_scripts": "backstop_data/engine_scripts",
    "html_report": "backstop_data/html_report",
    "ci_report": "backstop_data/ci_report"
  },
  report: ["browser"],
  engine: "puppet",
  engineOptions: {
    "args": ["--no-sandbox"]
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false
}
