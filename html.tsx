import React from "react";

export default function HTML(
  { importMap, data }: { importMap?: string; data?: string },
) {
  return (
    <html>
      <head>
        <title>My App</title>
        <script
          async
          src="https://ga.jspm.io/npm:es-module-shims@1.6.2/dist/es-module-shims.js"
          crossorigin="anonymous"
        >
        </script>
        <script
          id="importmap"
          type="importmap"
          dangerouslySetInnerHTML={{ __html: importMap ?? "" }}
        />
      </head>
      <body>
        <div id="app"></div>
        <script
          src="/__compiler/client.tsx"
          type="module"
        />
        <script
          id="data"
          type="application/json"
          dangerouslySetInnerHTML={{ __html: data ?? "" }}
        />
      </body>
    </html>
  );
}
