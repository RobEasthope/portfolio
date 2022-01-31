# Portfolio

## Getting started

### Build dev

- Spin up all apps: `yarn dev`
- Next (portfolio-next): `npx turbo run dev --scope=portfolio-next --include-dependencies --no-deps`
- Sanity (portfolio-sanity): `npx turbo run dev --scope=portfolio-sanity --include-dependencies --no-deps`

### Build commands

- Build all apps: `yarn build`
- Next (portfolio-next): `npx turbo run build --scope=portfolio-next --include-dependencies --no-deps`
- Sanity (portfolio-sanity): `npx turbo run build --scope=portfolio-sanity --include-dependencies --no-deps`

## Ignore build deployment rules

Next: `git diff --quiet HEAD^ HEAD ./ ../../packages/ui/* ../../packages/utils`
Sanity: `git diff --quiet HEAD^ HEAD ./ ../../packages/ui/*.schema.js ../../packages/ui/utils/sanity ../../packages/utils`
