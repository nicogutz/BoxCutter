"use client";
import { PythonProvider } from "@/utils/python";
import { useEffect } from "react";
import AppComponent from "./AppComponent";

interface ClientWrapperProps extends React.HTMLProps<HTMLDivElement> {
  slug: string[];
}

export default function ClientWrapper(props: ClientWrapperProps) {
  useEffect(() => {
    navigator.serviceWorker
      .register("./react-py-sw.js")
      .then((registration) =>
        console.log(
          "Service Worker registration successful with scope: ",
          registration.scope,
        ),
      )
      .catch((err) => console.log("Service Worker registration failed: ", err));
  }, []);

  const packages = {
    official: ["pyodide-http"],
    micropip: ["/wheels/boxes-0.9-py3-none-any.whl"],
  };

  return (
    <PythonProvider packages={packages}>
      <AppComponent slug={props.slug} />
    </PythonProvider>
  );
}
