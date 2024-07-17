import { DarkThemeToggle, Navbar, NavbarBrand } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export default function HomeNavbar() {
  return (
    <header>
      <Navbar fluid className="px-4 lg:px-6 ">
        <NavbarBrand as={Link} href="/">
          <Image
            alt="BoxCutter Logo"
            height="24"
            src="/favicon.png"
            width="24"
          />
          <span className="self-center whitespace-nowrap px-1 text-xl font-semibold dark:text-white">
            BoxCutter
          </span>
        </NavbarBrand>
        <DarkThemeToggle />
      </Navbar>
    </header>
  );
}
