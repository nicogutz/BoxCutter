"use client";
import Error from "@/app/error";
import { usePython } from "@/utils/python";
import { Progress } from "flowbite-react";
import BoxConfigurator from "./BoxConfigurator";
import BoxSelector from "./BoxSelector";
import BoxSubSelector from "./BoxSubSelector";

enum Stage {
  Selection = 0,
  SubSelection,
  Configuration,
}

interface AppComponentProps extends React.HTMLProps<HTMLDivElement> {
  slug: string[];
}

export default function AppComponent({ slug }: AppComponentProps) {
  const { runPython, readFile, isReady, stdout } = usePython();

  if (slug && slug.length > 2) {
    return <Error />;
  }
  const status: Stage = slug ? slug.length : 0;

  function renderSwitch() {
    switch (status) {
      case Stage.Selection:
        return <BoxSelector />;
      case Stage.SubSelection:
        return <BoxSubSelector />;
      case Stage.Configuration:
        return (
          <div>
            <h4>{stdout}</h4>
            <BoxConfigurator
              isReady={isReady}
              runPython={runPython}
              readFile={readFile}
            />
          </div>
        );
        return;

      default:
        break;
    }
  }
  return (
    <>
      <Progress
        progress={slug ? slug.length * 10 : 10}
        className="fixed top-16 z-50 ml-[2.5vw] w-[95vw]"
      />
      {renderSwitch()}
    </>
  );
}
