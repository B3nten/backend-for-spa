import { Context, Hono } from "hono";
import { serve } from "server";
import { default as HTML } from "./html.tsx";
import { renderToString } from "react-dom/server";
import React from "react";
import { transform } from "https://deno.land/x/swc@0.2.1/mod.ts";

const app = new Hono();

app.get("__compiler/*", async (ctx: Context) => {
  const requestPathname = new URL(ctx.req.url).pathname;
  const pathname = requestPathname.replace(`/__compiler/`, "");
  const file = await Deno.readTextFile(pathname);
  const transformedFile = transform(file, {
    jsc: {
      target: "es2022",
      parser: {
        syntax: "typescript",
        dynamicImport: true,
        tsx: true,
      },
      externalHelpers: true,
      transform: {
        react: {
          useBuiltins: true,
          importSource: "react",
        },
      },
    },
    sourceMaps: true,
    inlineSourcesContent: true,
  });
  return new Response(transformedFile.code, {
    status: 200,
    headers: {
      "content-type": "text/javascript; charset=utf-8",
    },
  });
});

app.get("/", async (ctx: Context) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();

  const im = await Deno.readTextFile("./importMap.json");

  const shell = renderToString(
    <HTML importMap={im} data={JSON.stringify(data)} />,
  );
  return ctx.html(shell);
});

serve(app.fetch, { port: 6969 });
