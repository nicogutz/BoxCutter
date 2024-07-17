"use client";
import { DarkThemeToggle, Navbar } from "flowbite-react";
import Image from "next/image";

export default function DashboardNavbar() {
  return (
    <header>
      <Navbar
        fluid
        className="fixed top-0 z-30 w-full border-b border-gray-200 bg-white p-0 dark:border-gray-700 dark:bg-gray-800 sm:p-0"
      >
        <div className="w-full p-3 pr-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Navbar.Brand href="/">
                <Image
                  alt="Flowbite logo"
                  height="24"
                  src="/favicon.png"
                  width="24"
                />
                <span className="self-center whitespace-nowrap px-3 text-xl font-semibold dark:text-white">
                  BoxCutter
                </span>
              </Navbar.Brand>
            </div>
            <DarkThemeToggle />
          </div>
        </div>
      </Navbar>
    </header>
  );
}
