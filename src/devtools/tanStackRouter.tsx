import React from "react";

let embeddedDevtools = false;

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null
    : React.lazy(() =>
        import("@tanstack/router-devtools").then((res) => ({
          default: embeddedDevtools
            ? res.TanStackRouterDevtoolsPanel
            : res.TanStackRouterDevtools,
        }))
      );

export default function DevToolsTanStackRouter() {
  return (
    <React.Suspense>
      <TanStackRouterDevtools />
    </React.Suspense>
  );
}
