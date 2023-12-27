export type BuildMode = 'development' | 'production'

export type BuildPaths = {
  entry: string;
  html: string;
  output: string;
}

export type BuildOptions = {
  mode: BuildMode
  port: number;
  paths: BuildPaths;
}