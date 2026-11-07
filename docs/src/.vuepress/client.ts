import ChatExample from "./components/ChatExample.vue";
import GroupLink from "./components/group_link.js"
import { defineClientConfig } from "vuepress/client";
import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("GroupLink", GroupLink);
    app.component("ChatExample", ChatExample);
  },
  // setup: () => {
  //   setupTransparentNavbar({ type: "all", light: "#333", dark: "#bbb" });
  // },
});