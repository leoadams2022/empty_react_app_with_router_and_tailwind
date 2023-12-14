import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        <h1 className="text-5xl text-center text-sky-500 font-bold">
          My Super Cool App
        </h1>
      </header>
      <main>
        {/* 2️⃣ Render the app routes via the Layout Outlet */}
        <Outlet />
      </main>
      <footer className="text-5xl text-center text-sky-500 font-bold">
        ©️ me 2023
      </footer>
    </>
  );
}
