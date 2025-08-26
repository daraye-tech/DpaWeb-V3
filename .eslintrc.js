// .eslintrc.js
module.exports = {
  extends: ["next", "next/core-web-vitals", "eslint:recommended"],
  rules: {
    // keep code readable but don't punish long content strings
    "max-len": ["error", {
      code: 120,
      tabWidth: 2,
      ignoreUrls: true,
      ignoreStrings: true,            // <— allows long `"..."` text
      ignoreTemplateLiterals: true,   // <— allows long `${`...`}`
      ignoreComments: true
    }],

    // these were blocking you — make them warnings (still visible in logs)
    "@next/next/no-img-element": "warn",
    "@next/next/no-html-link-for-pages": "warn",
    "react/no-unescaped-entities": "warn"
  },

  // Per-file overrides for content-heavy JSX
  overrides: [
    {
      files: ["**/*.{jsx,tsx}"],
      rules: {
        // allow longer JSX lines (layout/text walls)
        "max-len": ["warn", {
          code: 300,                   // bump for JSX only
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreComments: true
        }]
      }
    },
    {
      // If a specific page is just static content, relax even more
      files: [
        "components/ContactUs.tsx",
        "components/ClientSlider.tsx",
        "pages/about-us.tsx"
      ],
      rules: {
        "max-len": "off",
        "react/no-unescaped-entities": "off"
      }
    }
  ]
}
