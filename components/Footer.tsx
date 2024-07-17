import { Footer, FooterBrand } from "flowbite-react";
import Link from "next/link";

export default function DefaultFooter() {
  return (
    <Footer
      container
      theme={{
        root: {
          base: "w-full bg-white shadow dark:bg-gray-800 flex items-center justify-between",
          container: "w-full h-fit",
          bgDark: "bg-gray-800",
        },
      }}
    >
      <div className="w-full text-center">
        <div className="flex w-full items-center justify-between">
          <FooterBrand
            href="/"
            src="https://flowbite.com/docs/images/logo.svg"
            alt="BoxCutter Logo"
            theme={{ img: "mr-2 h-5" }}
          />
          <span className="px-4 text-sm text-gray-500 dark:text-gray-400 sm:text-center">
            Built using {"\u00A0"}
            <Link
              href="https://github.com/florianfesti/boxes"
              className="text-gray-600 hover:underline dark:text-gray-100"
              target="_blank"
            >
              Boxes.py
            </Link>
            {"\u00A0"} and {"\u00A0"}
            <Link
              href="https://flowbite.com/"
              className="text-gray-600 hover:underline dark:text-gray-100"
              target="_blank"
            >
              Flowbite
            </Link>
          </span>
        </div>
      </div>
    </Footer>
  );
}
