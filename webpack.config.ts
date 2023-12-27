import {buildWebpack} from "./config/build/build.webpack";
import path from "path";
import {BuildMode} from "./config/build/types/types";

type EnvVariables = {
  mode: BuildMode
  port: number
}

export default (env: EnvVariables) => {
  return buildWebpack({
    port: env?.port ?? 3000,
    mode: env.mode ?? 'development',
    paths: {
      entry: path.resolve(__dirname, "src", "index.tsx"),
      html: path.resolve(__dirname, "public", "index.html"),
      output: path.resolve(__dirname, "build")
    }
  });
};
