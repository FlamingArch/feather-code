import React from "react";
import { createRootRoute } from "@tanstack/react-router";
import Sidebar from "../views/Sidebar";
import { IoClose } from "react-icons/io5";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

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
      <div className="p-2">
        <div className="flex p-1.5">
          <button className="m-1 p-1 hover:m-0 hover:p-2 rounded-full transition-all hover:bg-red-500 hover:shadow-xl hover:shadow-red-500">
            <IoClose className="w-4 h-4" />
          </button>
          <button className="m-2 hover:m-0 hover:p-2 rounded-full transition-all hover:bg-slate-100 hover:shadow-xl hover:shadow-slate-300">
            <MdKeyboardArrowUp className="w-4 h-4" />
          </button>
          <button className="m-2 hover:m-0 hover:p-2 rounded-full transition-all hover:bg-slate-100 hover:shadow-xl hover:shadow-slate-300">
            <MdKeyboardArrowDown className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="flex flex-grow">
        <Sidebar />
      </div>
      {/* <Outlet /> */}
      <React.Suspense>
        <TanStackRouterDevtools />
      </React.Suspense>
    </div>
  );
}
