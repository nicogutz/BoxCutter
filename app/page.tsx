import DashboardNavbar from "@/components/navbar";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function HomePage() {
  return (
    <>
      <DashboardNavbar />
      <div className="flex items-start">
        <div
          id="main-content"
          className={twMerge(
            "relative h-full w-full overflow-y-auto bg-gray-50 dark:bg-gray-900",
          )}
        >
          <header className="flex h-screen">
            <div className="mx-auto max-w-screen-xl self-center text-center">
              <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                Create your own box for laser cutting.
              </h1>
              <p className="mb-8 text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48">
                Customize a design that will fit your needs, this tool will
                generate the appropriate SVG file that a laser cutter can use.
                Click below to start, no login required.
              </p>
              <div className="mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0 lg:mb-16">
                <Link
                  href="/app"
                  className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                >
                  Create a Box!
                </Link>
                <Link
                  href="/help"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </header>
        </div>
      </div>
    </>
  );
}
