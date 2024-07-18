"use client";
import { Progress } from "flowbite-react";
import BoxSelector from "./BoxSelector";

interface AppComponentProps extends React.HTMLProps<HTMLDivElement> {
  slug: string[];
}

export default function AppComponent(props: AppComponentProps) {
  return (
    <>
      <Progress progress={props.slug ? props.slug.length * 10 : 10} />
      <div>
        <div className="mx-5 flex items-start">
          <div id="main-content" className={"relative h-[84vh] w-full"}>
            <div className="flex h-full w-full">
              <div className="mx-auto w-full self-center text-center">
                <div className="w-full space-y-4 self-center p-6 sm:p-8 md:space-y-6">
                  <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                    Select your box.
                  </h1>
                  <BoxSelector />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
