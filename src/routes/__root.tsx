import React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import Sidebar from "../views/Sidebar";

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

export const Route = createRootRoute({
  component: PageRoot,
});

function PageRoot() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <Sidebar />
      {/* <Outlet /> */}
      <React.Suspense>
        <TanStackRouterDevtools />
      </React.Suspense>
    </div>
  );
}
