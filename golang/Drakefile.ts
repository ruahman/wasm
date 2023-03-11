import { desc, run, sh, task, execute } from "https://deno.land/x/drake@v1.6.0/mod.ts";

import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import { serveFile } from "https://deno.land/std@0.140.0/http/file_server.ts";

const target = "main.wasm";

task("deploy", ["build","copy"])

desc("build go wasm");
task("build", [], async function () {
  await sh(
    `cd wasm; $Env:GOARCH='wasm'; $Env:GOOS='js'; go build -o ${target}`,
  );
  // execute("copy")
});

desc("copy to server");
task("copy", [], async function () {
  await sh(`cp wasm/${target} assets/`);
});

desc("clean the directory");
task("clean", [], async function () {
  await sh(`cd wasm; rm ${target}`);
  await sh(`cd assets; rm ${target}`);
});

desc("http static server");
task("server", ["deploy"], () => {
  serve(async (req) => {
    const filePath = new URL(req.url).pathname;
    if (filePath == "/") {
      return await serveFile(req, `${Deno.cwd()}/assets/index.html`);
    } else {
      return await serveFile(req, `${Deno.cwd()}/assets` + filePath);
    }
  }, { port: 9000 });
});

run();
