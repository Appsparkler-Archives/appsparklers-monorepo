---
to: "apps/<%= shortName %>-app/public/manifest.json"
---

{
  "name": "<%= appName %>",
  "short_name": "<%= shortName %>",
  "description": "Description for <%= appName %>",
  "id": "/",
  "display_override": ["window-controls-overlay", "standalone", "browser"],
  "start_url": ".",
  "display": "standalone"
}
