# Portfolio

## Getting started

### Build dev

- Spin up all apps: `yarn dev`
- Build all apps: `yarn build`
- Next (trq-next): `yarn next`
- Sanity (trq-sanity): `yarn sanity`

### Build commands for Vercel

- Next (trq-next): `cd ../.. && npx turbo run build --scope=portfolio-next --include-dependencies --no-deps`
- Sanity (trq-sanity): `cd ../.. && npx turbo run build --scope=portfolio-sanity --include-dependencies --no-deps`

## Ignore build deployment rules

Next: `git diff --quiet HEAD^ HEAD ./ ../../packages/ui/* ../../packages/utils`
Sanity: `git diff --quiet HEAD^ HEAD ./ ../../packages/ui/*.schema.js ../../packages/ui/utils/sanity ../../packages/utils`
