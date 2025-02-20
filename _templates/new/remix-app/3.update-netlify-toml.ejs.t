---
to: "apps/<%= shortName %>-app/netlify.toml"
---

[build]
base = "apps/<%= shortName %>-app"
command = "npm run build"
publish = "build/client"
edge_functions = ".netlify/edge-functions"

[dev]
base = "./apps/<%= shortName %>-app"
command = "npm run _dev"
framework = "vite"

# Set immutable caching for static files, because they have fingerprinted filenames

[[headers]]
for = "/build/*"

[headers.values]

"Cache-Control" = "public, max-age=31560000, immutable"

[functions]
directory=".netlify/edge-functions"

