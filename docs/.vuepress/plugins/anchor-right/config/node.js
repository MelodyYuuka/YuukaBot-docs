import { path } from "@vuepress/utils";

const __dirname = path.resolve('docs/.vuepress/plugins/anchor-right');
export default (options) => {
  return (app) => {
    return {
      name: "anchor-right",
      clientConfigFile: path.resolve(__dirname, "./config/client.js")
    }
  };
};
