"use client";
import Error from "@/app/error";
import { Progress } from "flowbite-react";
import BoxSelector from "./BoxSelector";
import BoxSubSelector from "./BoxSubSelector";

enum Stage {
  Selection = 0,
  SubSelection,
  Generation,
}

interface AppComponentProps extends React.HTMLProps<HTMLDivElement> {
  slug: string[];
}

export default function AppComponent({ slug }: AppComponentProps) {
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
      case Stage.Generation:
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
