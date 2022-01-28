# Free Flight Academy

## Getting started

### Build dev

- Spin up all apps: `yarn dev`
- Next (trq-next): `npx turbo run dev --scope=trq-next --include-dependencies --no-deps`
- Sanity (trq-sanity): `npx turbo run dev --scope=trq-sanity --include-dependencies --no-deps`

### Build commands

- Build all apps: `yarn build`
- Next (trq-next): `npx turbo run build --scope=trq-next --include-dependencies --no-deps`
- Sanity (trq-sanity): `npx turbo run build --scope=trq-sanity --include-dependencies --no-deps`

## Ignore build deployment rules

Next: `git diff --quiet HEAD^ HEAD ./ ../../packages/ui/* ../../packages/utils`
Sanity: `git diff --quiet HEAD^ HEAD ./ ../../packages/ui/*.schema.js ../../packages/ui/utils/sanity ../../packages/utils`
