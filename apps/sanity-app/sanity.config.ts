import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { muxInput } from "sanity-plugin-mux-input";
import { schemaTypes } from "./schemas";
import { DESK_STRUCTURE } from "./DESK_STRUCTURE";

// ICONS

export default defineConfig({
  name: "default",
  title: "Portfolio",

  projectId: "117tt97y",
  dataset: "production",

  plugins: [
    deskTool({
      structure: DESK_STRUCTURE,
    }),
    visionTool(),
    muxInput(),
  ],

  schema: {
    types: schemaTypes,
  },
});
