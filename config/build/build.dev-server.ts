import type {Configuration as DevServerConfiguration} from "webpack-dev-server";
import {BuildOptions} from "./types/types";

export function buildDevServer({port}: BuildOptions): DevServerConfiguration {
  return {
    port: port ?? 3000,
    open: true,
    historyApiFallback: true, // works only for dev server. for nginx you need to proxy all request to index.html
    hot: true,
  }
}