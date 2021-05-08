import React from "react";
import Sidebar from "./Sidebar";

function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="root">
      <nav className="sidebar">
        <Sidebar />
      </nav>
      <div className="main">{children}</div>
      <style jsx>{`
        .root {
          display: flex;
          height: 100vh;
          overflow-y:hidden;
        }
        .nav {
          width: 200px;
          height: 100vh;
          overflow: auto;
        }

        .main {
          background-color:#FFF;
          padding: 16px;
          height: 100vh;
          overflow: auto;
          width: calc(100vw - 200px);
        }
      `}</style>
    </div>
  );
}

export default BaseLayout;
