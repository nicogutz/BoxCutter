import { DarkThemeToggle, Navbar, NavbarBrand } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export default function HomeNavbar() {
  return (
    <header>
      <Navbar fluid>
        <NavbarBrand as={Link} href="/">
          <Image
            alt="BOXCUTTER Logo"
            height="24"
            src="/favicon.ico"
            width="24"
            className="ml-2 mr-1"
          />
          <span className="mt-1 self-center whitespace-nowrap px-1 text-xl font-semibold uppercase dark:text-white">
            BOXCUTTER
          </span>
        </NavbarBrand>
        <DarkThemeToggle />
      </Navbar>
    </header>
  );
}
